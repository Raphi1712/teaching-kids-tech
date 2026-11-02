let currentLevel = null;
let nachricht = "";
let defaultCode = `function setup() {
  createCanvas(800, 800);
  }
  function draw() {
  background(220);
}`;
// Arbeitsauftrag im Fenster neben der Werkzeugleiste zeigen
function printCurrentLevel() {
  openToolPanel("task");
}

const DEFAULT_LEVEL_CODE = `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(220);
}`;

function toggleMiniTheme(themeId) {
  updateCurrentLevel(themeId);

  for (let i = 1; i <= 3; i++) {
    const id = `${themeId}_${i}`;
    const group = document.getElementById(id);
    const codeUi = document.getElementById(`code`);
    if (group) {
      const isHidden = window.getComputedStyle(group).display === 'none';
      group.style.display = isHidden ? 'inline' : 'none';
    }
  }

  loadEditorForCurrentLevel();

  // Beim Oeffnen eines Mini-Levels (z. B. m1t2_3) den Arbeitsauftrag automatisch zeigen
  if (/_\d+$/.test(themeId)) {
    printCurrentLevel();
  }
}

// Zurueck von der CodeUI zur Modul-Seite des aktuellen Levels (mit offenem Thema)
function backToModule() {
  const match = (currentLevel || "").match(/^(m(\d+)t\d+)_\d+$/i);
  if (!match) {
    window.location.hash = "overview";
    return;
  }

  for (let i = 1; i <= 3; i++) {
    const group = document.getElementById(`${match[1]}_${i}`);
    if (group) {
      group.style.display = 'inline';
    }
  }
  window.location.hash = `modul${match[2]}`;
}

function getLevelFromUrl() {
  const fromSearch = new URLSearchParams(window.location.search).get("level");
  if (fromSearch) {
    return fromSearch;
  }
  return null;
}

function resolveLevelId(levelId) {
  if (!levelId) {
    return null;
  }

  if (levelCodeCache[levelId]) {
    return levelId;
  }

  const fallback = Object.keys(levelCodeCache).find((key) => key.startsWith(`${levelId}_`));
  return fallback || levelId;
}

function updateCurrentLevel(nextLevel = null) {
  const resolvedLevel = resolveLevelId(nextLevel || getLevelFromUrl());
  currentLevel = resolvedLevel;
  window.currentLevel = currentLevel;
  console.log("currentLevel:", currentLevel);
}

function getOrderedLevelIds() {
  return Object.keys(levelCodeCache)
    .map((id) => {
      const match = id.match(/^m(\d+)t(\d+)_(\d+)$/i);
      if (!match) {
        return null;
      }
      return {
        id,
        m: Number(match[1]),
        t: Number(match[2]),
        mt: Number(match[3])
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.m - b.m || a.t - b.t || a.mt - b.mt)
    .map((entry) => entry.id);
}

function getLevelByOffset(offset) {
  if (!currentLevel) {
    return null;
  }

  const orderedLevels = getOrderedLevelIds();
  const currentIndex = orderedLevels.indexOf(resolveLevelId(currentLevel));
  if (currentIndex === -1) {
    return null;
  }

  const nextIndex = currentIndex + offset;
  if (nextIndex < 0 || nextIndex >= orderedLevels.length) {
    return null;
  }

  return orderedLevels[nextIndex];
}

function stepLevel(offset) {
  const nextLevelId = getLevelByOffset(offset);
  if (!nextLevelId) {
    return;
  }

  currentLevel = nextLevelId;
  window.currentLevel = currentLevel;

  loadEditorForCurrentLevel();
  printCurrentLevel();
  loadSolutionForCurrentLevel();
  preview();
}

function nextLevel() {
  stepLevel(1);
}

function prevLevel() {
  stepLevel(-1);
}

function getStorageKey(levelId) {
  return `code_${levelId || "default"}`;
}


function getDefaultCodeForLevel(levelId) {
  if (!levelId) {
    return defaultCode;
  }

  if (levelCodeCache[levelId]) {
    const stripped = levelCodeCache[levelId]
      .replace(/^\/\*[\s\S]*?\*\/\s*/m, '')
      .replace(/\{\$defaultCode\}/g, defaultCode)
      .trim();

    // Prevent assignment/meta text from replacing the editable starter code.
    if (/Arbeitsauftrag:|Benoetiges Vorwissen:/i.test(stripped)) {
      return defaultCode;
    }

    return stripped || defaultCode;
  }
  return defaultCode;
}

function loadEditorForCurrentLevel() {
  const editor = document.getElementById("code");
  loadCodeTaskForCurrentLevel();
  loadItHelpForCurrentLevel();
  if (!editor) {
    return;
  }

  const saved = localStorage.getItem(getStorageKey(currentLevel));
  editor.value = saved || getDefaultCodeForLevel(currentLevel);

  // Loesung beim Level-Wechsel wieder verstecken
  const solutionContent = document.getElementById("solutionContent");
  if (solutionContent) {
    solutionContent.setAttribute("hidden", "");
  }
}

// IT-Hilfe (technicalexplanation.js) fuer das aktuelle Level ins IT-Fenster schreiben.
function loadItHelpForCurrentLevel() {
  const match = (currentLevel || "").match(/^m(\d+)t(\d+)_(\d+)$/i);
  const key = match ? `${match[1]}.${match[2]}.${match[3]}` : null;
  const explanations = getLanguage() === "en" ? technicalExplanationEn : technicalExplanation;
  const text = key ? explanations[key] : null;

  document.querySelectorAll(".it-help-content").forEach((box) => {
    renderHelpText(box, text || t("Für dieses Level gibt es noch keine IT-Hilfe."));
  });
}

// Text in ein Fenster schreiben (IT-Hilfe, Arbeitsauftrag).
// Jede Zeile "Ueberschrift: Text" wird zu Ueberschrift + Absatz, Code wird hervorgehoben.
function renderHelpText(box, text) {
  box.textContent = "";
  text.trim().split("\n").forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) {
      return;
    }
    const parts = line.match(/^([^:]+):\s*(.*)$/);
    if (parts) {
      const heading = document.createElement("h4");
      heading.textContent = parts[1];
      box.appendChild(heading);
    }
    const paragraph = document.createElement("p");
    const body = parts ? parts[2] : line;
    body.split(/([A-Za-z]+\([^()]*\);?|let \w+ = [^;]+;)/).forEach((piece, i) => {
      if (!piece) {
        return;
      }
      const node = document.createElement(i % 2 === 1 ? "code" : "span");
      node.textContent = piece;
      paragraph.appendChild(node);
    });
    box.appendChild(paragraph);
  });
}

function saveEditorForCurrentLevel() {
  const editor = document.getElementById("code");
  if (!editor) {
    return;
  }

  localStorage.setItem(getStorageKey(currentLevel), editor.value);
}

function getCurrentCodeState() {
  const editor = document.getElementById("code");
  return editor ? editor.value : "";
}

function getCodeTaskForLevel(levelId) {
  const resolvedLevelId = resolveLevelId(levelId);
  if (!resolvedLevelId) return null;
  return levelCodeCache[resolvedLevelId] || null;
}

function extractTaskText(taskSource) {
  if (!taskSource) {
    return "";
  }

  // Ganzen Level-Eintrag zeigen (Thema, Lernziel, Arbeitsauftrag, ...), ohne =====-Linien.
  // Umgebrochene Zeilen werden an die Zeile mit ihrer Ueberschrift angehaengt.
  const lines = [];
  taskSource.split("\n").forEach((rawLine) => {
    const line = rawLine.trim().replace(/\s+/g, " ");
    if (!line || /^=+$/.test(line)) {
      return;
    }
    if (/^(Modul|Thema|Level|Boss-Level|Lernziel|Arbeitsauftrag|Benoetiges Vorwissen):/.test(line) || lines.length === 0) {
      lines.push(line);
    } else {
      lines[lines.length - 1] += " " + line;
    }
  });
  return lines.join("\n");
}

// Arbeitsauftrag ins Aufgaben-Fenster schreiben: Modul/Thema/Level als eine Kopfzeile, der Rest wie die IT-Hilfe
function loadCodeTaskForCurrentLevel() {
  const codeTask = levelCodeCache[currentLevel];
  const taskText = (getLanguage() === "en" && levelTaskEn[currentLevel]) || extractTaskText(codeTask);
  const metaParts = [];
  const bodyLines = [];
  taskText.split("\n").forEach((line) => {
    const parts = line.match(/^(Modul|Module|Thema|Topic|Level|Boss-Level|Boss level):\s*(.*)$/);
    // Boss-Zeile weglassen: die Level-Zeile sagt schon "3 - BOSS-LEVEL"
    if (!parts) {
      bodyLines.push(line);
    } else if (!/^Boss/.test(parts[1])) {
      metaParts.push(`${parts[1]} ${parts[2]}`);
    }
  });

  document.querySelectorAll(".task-content").forEach((box) => {
    renderHelpText(box, bodyLines.join("\n") || t("Für dieses Level gibt es noch keinen Arbeitsauftrag."));
    if (metaParts.length) {
      const meta = document.createElement("p");
      meta.className = "task-meta";
      meta.textContent = metaParts.join(" · ");
      box.prepend(meta);
    }
  });

  return codeTask;
}
function loadCodeExplaniatonForCurrentLevel() {
  const codeExplaniation = levelCodeExplaniation[currentLevel];
  //return codeExplaniation;
  return "<!-- Noch keine Erklaerung fuer dieses Level verfuegbar. -->";
}
// komment und code existieren für m3 t3mt2 m3 t4 mt2 und m3t5mt1 fixxen!!
function getSolutionForLevel(levelId) {
  if (!levelId) return null;
  return levelSolutionCache[levelId] || null;
}

// Loesung in das solution-Textarea schreiben
function loadSolutionForCurrentLevel() {
  const solutionTextarea = document.getElementById("solutionCode");
  if (!solutionTextarea) return;
  const solution = getSolutionForLevel(currentLevel);
  solutionTextarea.value = solution || t("// Noch keine Loesung fuer dieses Level verfuegbar.");
  return solution
}

// Code, der eingegeben werden muss, um die Loesung zu sehen
//i swear man dont abuse this i am still developing and fixing this dont be weird...
const LOESUNG_CODE = "1234";

// Loesung anzeigen / verstecken (wird vom HTML-Button aufgerufen)
function toggleSolution() {
  const content = document.getElementById("solutionContent");
  if (!content) return;
  const isHidden = content.hasAttribute("hidden");
  if (isHidden) {
    const eingabe = prompt(t("Code eingeben, um die Lösung zu sehen:"));
    if (eingabe === null) return;
    if (eingabe.trim() !== LOESUNG_CODE) {
      alert(t("Falscher Code lol."));
      return;
    }
    loadSolutionForCurrentLevel();
    content.removeAttribute("hidden");
  } else {
    content.setAttribute("hidden", "");
  }
}

// bei codeui sowas  wie ? get parameter level
function buildCodePrefix(consoleId) {
  return `(function () {
  let oldLog = console.log;
  console.log = function (message) {
    const out = window.parent.document.getElementById("${consoleId}");
    out.innerHTML += '<div>> ' + message + '</div>';
    oldLog.apply(console, arguments);
  };

  // Fehler im Code rot in der Konsole anzeigen (jeden Fehler nur einmal, auch wenn draw() ihn wiederholt)
  const shownErrors = new Set();
  const errorNames = {
    SyntaxError: ${JSON.stringify(t("Tippfehler im Code (z. B. Klammer, Komma oder Semikolon)"))},
    ReferenceError: ${JSON.stringify(t("Unbekannter Name (Tippfehler oder Variable nicht erstellt?)"))},
    TypeError: ${JSON.stringify(t("Falsche Verwendung (z. B. etwas aufgerufen, das keine Funktion ist)"))},
  };
  function showError(error, message, filename, lineno) {
    const stackLine = error && error.stack && error.stack.match(/about:srcdoc:(\\d+)/);
    let line = stackLine ? Number(stackLine[1]) : lineno;
    const fromUserCode = stackLine || !filename || filename === "about:srcdoc";
    line = fromUserCode && line ? line - window.__lineOffset : 0;
    const name = (error && error.name) || (String(message).match(/(\\w+Error)/) || [])[1];
    const text = (line > 0 ? ${JSON.stringify(t("Fehler in Zeile"))} + " " + line : ${JSON.stringify(t("Fehler"))}) + ": " +
      (errorNames[name] ? errorNames[name] + " - " : "") +
      String(message).replace(/^Uncaught /, "");
    if (shownErrors.has(text)) return;
    shownErrors.add(text);
    const out = window.parent.document.getElementById("${consoleId}");
    const entry = window.parent.document.createElement("div");
    entry.className = "console-entry-error";
    entry.textContent = "❌ " + text;
    out.appendChild(entry);
  }
  window.addEventListener("error", function (event) {
    showError(event.error, event.message, event.filename, event.lineno);
  });
  // p5 startet setup() asynchron: Fehler dort kommen als "unhandledrejection"
  window.addEventListener("unhandledrejection", function (event) {
    const error = event.reason;
    showError(error, error && error.name ? error.name + ": " + error.message : error, "", 0);
  });
})();`;
}
window.addEventListener("DOMContentLoaded", function () {
  updateCurrentLevel();
  loadEditorForCurrentLevel();
  loadCodeTaskForCurrentLevel();
  if (currentLevel && window.location.hash === "#codeui") {
    printCurrentLevel();
  }

  const editor = document.getElementById("code");
  if (editor) {
    editor.addEventListener("input", saveEditorForCurrentLevel);
  }
});

function run() {
  runCommon("code", "preview", "consoleOutput");
}
function preview() {
  runCommon("code", "preview", "consoleOutput", levelSolutionCache[currentLevel]);
}

// ===== Einstellungen: Sprache (Deutsch/English) und Design (dunkel/hell), beides wird gespeichert =====

// Englische Texte fuer die Oberflaeche. Schluessel = deutscher Text, wie er im HTML oder Code steht.


function getLanguage() {
  return localStorage.getItem("lang") === "en" ? "en" : "de";
}

// Deutschen Text in die gewaehlte Sprache uebersetzen (ohne Eintrag bleibt er deutsch)
function t(text) {
  return getLanguage() === "en" ? TRANSLATIONS_EN[text] || text : text;
}

// Alle festen Texte der Seite umschalten. Der deutsche Originaltext wird beim ersten Mal gemerkt.
const originalTexts = new Map();
function applyLanguage() {
  const english = getLanguage() === "en";
  document.documentElement.lang = english ? "en" : "de";
  document.title = english ? TRANSLATIONS_EN["App für Informatik"] : "App für Informatik";

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) =>
      node.parentElement.closest("script, style, textarea, .it-help-content, .task-content, #consoleOutput, #status")
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT,
  });
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!originalTexts.has(node)) originalTexts.set(node, node.nodeValue);
    const original = originalTexts.get(node);
    const key = original.replace(/\s+/g, " ").trim();
    const translated = english && TRANSLATIONS_EN[key];
    node.nodeValue = translated ? original.match(/^\s*/)[0] + translated + original.match(/\s*$/)[0] : original;
  }

  document.querySelectorAll("[title], [placeholder], [aria-label]").forEach((element) => {
    ["title", "placeholder", "aria-label"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const store = `de${attribute}`;
      if (!originalTexts.has(element)) originalTexts.set(element, {});
      const originals = originalTexts.get(element);
      if (!(store in originals)) originals[store] = element.getAttribute(attribute);
      const original = originals[store];
      element.setAttribute(attribute, (english && TRANSLATIONS_EN[original]) || original);
    });
  });

  // Fenster mit Texten aus den Level-Dateien neu fuellen
  loadCodeTaskForCurrentLevel();
  loadItHelpForCurrentLevel();
}

function setLanguage(language) {
  localStorage.setItem("lang", language);
  applyLanguage();
  updateSettingsMenu();
}

function setTheme(theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  localStorage.setItem("theme", theme);
  updateSettingsMenu();
}

// Aktive Auswahl im Einstellungs-Menue markieren
function updateSettingsMenu() {
  const theme = document.documentElement.classList.contains("light") ? "light" : "dark";
  document.querySelectorAll(".settings-option").forEach((option) => {
    const active = option.dataset.lang ? option.dataset.lang === getLanguage() : option.dataset.theme === theme;
    option.classList.toggle("is-active", active);
  });
}

function toggleSettings() {
  const menu = document.querySelector(".settings-menu");
  menu.hidden = !menu.hidden;
}

window.addEventListener("DOMContentLoaded", function () {
  applyLanguage();
  updateSettingsMenu();
});

// ===== Fenster neben der Werkzeugleiste (Arbeitsauftrag, KI, P5, IT): immer nur eines offen =====
let toolPanelJustOpened = false;

function openToolPanel(name) {
  closeToolPanels();
  if (name === "task") loadCodeTaskForCurrentLevel();
  document.querySelectorAll(`.tool-panel[data-panel="${name}"], .tool-icon[data-panel="${name}"]`).forEach((element) => {
    element.classList.add("is-open");
  });
  if (name === "ki") {
    const input = document.querySelector('#codeui .tool-panel[data-panel="ki"] input');
    if (input) input.focus();
  }
  // Der Klick, der das Fenster geoeffnet hat, soll es nicht gleich wieder schliessen (siehe unten)
  toolPanelJustOpened = true;
  setTimeout(() => {
    toolPanelJustOpened = false;
  });
}

function closeToolPanels() {
  document.querySelectorAll(".tool-panel.is-open, .tool-icon.is-open").forEach((element) => {
    element.classList.remove("is-open");
  });
}

function toggleToolPanel(name) {
  if (document.querySelector(`.tool-panel[data-panel="${name}"].is-open`)) {
    closeToolPanels();
  } else {
    openToolPanel(name);
  }
}

// Fenster und Einstellungen schliessen, wenn man ausserhalb klickt (z. B. auf Run oder in den Code)
document.addEventListener("click", function (event) {
  if (!toolPanelJustOpened && !event.target.closest(".tool-panel")) {
    closeToolPanels();
  }
  const menu = document.querySelector(".settings-menu");
  if (menu && !event.target.closest(".settings")) {
    menu.hidden = true;
  }
});

function runCommon(codeId, previewId, consoleId, codeOverride = null) {
  const codeElement = document.getElementById(codeId);
  const frame = document.getElementById(previewId);
  const consoleElement = document.getElementById(consoleId);

  if (!codeElement || !frame || !consoleElement) {
    return;
  }
  const code = codeOverride !== null ? codeOverride : getCurrentCodeState();
  consoleElement.innerHTML = "";
  const codePrefix = buildCodePrefix(consoleId);

  // Eigener <script> fuer den Schueler-Code, damit ein Tippfehler darin die Fehleranzeige nicht verhindert.
  // __lineOffset = Zeilen vor dem Code, damit die Fehler-Zeile zur Zeile im Editor passt.
  const beforeCode = `
    <html>
    <head>
      <script src="min.js"><\/script>
      <script>
   ${codePrefix}
      <\/script>
    </head>
    <body>
      <script>window.__lineOffset = LINE_OFFSET;<\/script><script>
`;
  const lineOffset = beforeCode.split("\n").length - 1;
  frame.srcdoc = beforeCode.replace("LINE_OFFSET", lineOffset) + `${code}
      <\/script>
    </body>
    </html>
  `;


}
async function testBackend(textValue) {
  const solutionEL = loadSolutionForCurrentLevel();
  const codeTaskEL = loadCodeTaskForCurrentLevel();
  const currentCode = getCurrentCodeState();
  //const codeExplaniationEL = loadCodeExplaniatonForCurrentLevel();
  console.log("Solution for current level:", solutionEL);
  console.log("Task for current level:", codeTaskEL);
  const outputEl = document.getElementById("outputKI");
  const outputText = outputEl ? outputEl.value : "";
  // i swear to god if you want to change this i am ... lets dont get any further just dont do it okay...?
  const noteText = "This is a system note. Help the learner with patience, respect, and clear explanations.  answer in the language the user uses, default is english. Keep the tone informal but supportive and beginner-friendly. The students are 6-10 grade students and learn JavaScript with p5.js. Focus on topics such as parameters, variables, functions, loops, arrays, and dictionaries. If the user does not know a concept yet, explain it simply and clearly. Do not give away the full solution immediately I repeat NEVER NEVER NEVER give off the code you can say u need a if statemnt here or a loop here like that but dont never give the exact code to copy out rather show examples or modify the code to be unusable for the task. Instead, guide the learner with hints and small examples, and explain the code step by step. If the user is wrong, correct gently, for example: 'Hey, that is not quite right. Think about how a loop is written in this case.' Keep responses short unless the user asks for more detail.";
  // maybe /api&chat aber why -note
  const response = await fetch("https://teaching-kids-tech.onrender.com/api/chat", {
//const response = await fetch("http://localhost:3000/api/chat", {

    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: textValue, output: outputText, note: noteText, solution: solutionEL, task: codeTaskEL, code: currentCode })
  });
//

  const data = await response.json();
//

  console.log(data);
  console.log("Antwort vom Server:", data.reply);
  if (outputEl) {
    outputEl.value += "\nBot: " + data.reply;
    outputEl.scrollTop = outputEl.scrollHeight;
  }
}
function senden() {
  const feld = document.getElementById("eingabe");
  const statusEl = document.getElementById("status");

  const nachricht = feld.value.trim();

  if (nachricht === "") {
    return;
  }

  const ausgabe = document.getElementById("outputKI");

  ausgabe.value += (ausgabe.value ? "\n" : "") + t("Du: ") + nachricht;
console.log("Nachricht an Backend gesendet:", nachricht);
  if (statusEl) {
    statusEl.textContent = t("Nachricht gesendet. KI antwortet...");
  }

  testBackend(nachricht)
    .then(() => {
      if (statusEl) {
        statusEl.textContent = t("Antwort erhalten.");
      }
    })
    .catch((error) => {
      console.error("Fehler beim Backend-Aufruf:", error);
      if (statusEl) {
        statusEl.textContent = t("Fehler beim Senden an die KI.");
      }
    });

  feld.value = "";
  feld.focus();

  console.log("Variable nachricht:", nachricht);
}