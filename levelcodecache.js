let levelCodeCache = {
  "m1t1_1": ` 
  =============================================
  Modul:          1
  Thema:          1 - Erste Schritte
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Du lernst, wie man eine Zeichenflaeche anlegt
                  und einen Hintergrund setzt.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Keines - das ist der Start!
  =============================================
 
`,
  "m1t1_2": ` 
  =============================================
  Modul:          1
  Thema:          1 - Erste Schritte
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Du lernst, die Helligkeit des Hintergrunds zu veraendern.
                  Zahlen von 0 bis 255 steuern die Helligkeit.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t1_1 (createCanvas, background)
  =============================================
 
`,
  "m1t1_3": ` 
  =============================================
  Modul:          1
  Thema:          1 - Erste Schritte
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Du lernst fill() kennen - damit gibst du Formen eine Farbe.
                  Danach zeichnest du mit ellipse() deine erste Ellipse!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t1_1, m1t1_2 (createCanvas, background)
  =============================================
 
`,
  "m1t2_1": ` 
  =============================================
  Modul:          1
  Thema:          2 - Farben: RGB-Grundfarben
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Du lernst das RGB-Farbsystem kennen.
                  R = Rot, G = Gruen, B = Blau
                  Jeder Wert geht von 0 (aus) bis 255 (voll an).
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t1 (createCanvas, background, fill, rect)
  =============================================
 
`,
  "m1t2_2": ` 
  =============================================
  Modul:          1
  Thema:          2 - Farben: Mischfarben
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Du lernst Farben zu mischen!
                  Rot + Gruen = Gelb, Rot + Blau = Lila, Gruen + Blau = Tuerkis.
                  Alle drei voll an = Weiss.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t2_1 (RGB-Grundfarben, ellipse)
  =============================================
 
`,
  "m1t2_3": ` 
  =============================================
  Modul:          1
  Thema:          2 - Farben: RGB-Werte pruefen
  Level:          3
  Boss-Level:     Nein
  Lernziel:       RGB-Werte muessen IMMER zwischen 0 und 255 liegen!
                  fill(300, 500, 100) ist falsch - 300 und 500 sind zu gross.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t2_1, m1t2_2 (RGB, Mischfarben)
  =============================================
 
`,
  "m1t3_1": ` 
  =============================================
  Modul:          1
  Thema:          3 - Haeuser: das erste Haus
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Du baust ein Haus aus einfachen Formen:
                  rect() fuer die Wand, triangle() fuer das Dach.
                  triangle(x1, y1, x2, y2, x3, y3) braucht drei Eckpunkte.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t2 (RGB-Farben, rect, ellipse)
  =============================================
 
`,
  "m1t3_2": ` 
  =============================================
  Modul:          1
  Thema:          3 - Haeuser: Tuer und Fenster
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Die Reihenfolge zaehlt: Was spaeter gezeichnet wird, liegt oben.
                  Tuer und Fenster kommen deshalb NACH der Wand.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t3_1 (rect, triangle)
  =============================================
 
`,
  "m1t3_3": ` 
  =============================================
  Modul:          1
  Thema:          3 - Haeuser: zwei Haeuser
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Eine ganze Szene bauen: zwei Haeuser, Sonne und Wolke.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t3_1, m1t3_2 (Haus, Tuer, Fenster)
  =============================================
 
`,
  "m1t4_1": ` 
  =============================================
  Modul:          1
  Thema:          4 - Variablen: erste Variable
  Level:          1
  Boss-Level:     Nein
  Lernziel:       let x = 400; bedeutet: "Nenne die Zahl 400 ab jetzt x."
                  Dann kannst du x ueberall verwenden.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Thema 1-3 (fill mit RGB, ellipse, rect)
  =============================================
 
`,
  "m1t4_2": ` 
  =============================================
  Modul:          1
  Thema:          4 - Variablen: x und y
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Du lernst zwei Variablen gleichzeitig zu benutzen.
                  Aendere x oder y - der ganze Schneemann wandert mit!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t4_1 (erste Variable)
  =============================================
 
`,
  "m1t4_3": ` 
  =============================================
  Modul:          1
  Thema:          4 - Variablen: Position und Groesse
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Variablen auch fuer die Groesse benutzen: groesse * 0.5 ist halb so gross.
                  Aendere groesse - der ganze Schneemann waechst oder schrumpft!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t4_1, m1t4_2 (Variablen)
  =============================================
 
`,
  "m1t5_1": ` 
  =============================================
  Modul:          1
  Thema:          5 - Gesicht (Boss-Vorstufe 1)
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Mehrere Formen kombinieren: Kopf, Augen, Pupillen.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Alle Level aus Thema 1-4
  =============================================
 
`,
  "m1t5_2": ` 
  =============================================
  Modul:          1
  Thema:          5 - Gesicht (Boss-Vorstufe 2)
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Gesicht erweitern: Ohren, Nase, Mund und Wangen hinzufuegen.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t5_1 (Kopf + Augen)
  =============================================
 
`,
  "m1t5_3": ` 
  =============================================
  Modul:          1
  Thema:          5 - Gesicht
  Level:          3 - BOSS-LEVEL
  Boss-Level:     JA
  Lernziel:       Alles aus Modul 1 kombinieren: fill(), RGB, ellipse(),
                  triangle(), Variablen. Das ganze Gesicht haengt an x und y!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Alles aus Modul 1
  =============================================
 
`,
  "m2t1_1": ` 
  =============================================
  Modul:          2
  Thema:          1 - Bewegung: x = x + 2
  Level:          1
  Boss-Level:     Nein
  Lernziel:       x = x + 2 bedeutet: "Addiere 2 zu x dazu."
                  draw() laeuft immer wieder - deshalb bewegt sich die Sonne!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Alles aus Modul 1
  =============================================
 
`,
  "m2t1_2": ` 
  =============================================
  Modul:          2
  Thema:          1 - Bewegung: Geschwindigkeit als Variable
  Level:          2
  Boss-Level:     Nein
  Lernziel:       speed speichert, wie schnell sich etwas bewegt.
                  cloudX = cloudX + speed; - aendere speed und schau was passiert!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t1_1 (Bewegung)
  =============================================
 
`,
  "m2t1_3": ` 
  =============================================
  Modul:          2
  Thema:          1 - Bewegung: nach oben
  Level:          3
  Boss-Level:     Nein
  Lernziel:       y wird nach unten groesser. Mit y = y - speed bewegt sich
                  der Ballon nach OBEN.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t1_1, m2t1_2 (Bewegung, speed)
  =============================================
 
`,
  "m2t2_1": ` 
  =============================================
  Modul:          2
  Thema:          2 - Zufall: random()
  Level:          1
  Boss-Level:     Nein
  Lernziel:       random(800) gibt jedes Mal eine andere Zahl zwischen 0 und 800.
                  rot = random(0, 255) - so bekommt jedes Konfetti eine neue Farbe!
                  background() steht in setup(), damit die Punkte liegen bleiben.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Thema 1 (Bewegung)
  =============================================
 
`,
  "m2t2_2": ` 
  =============================================
  Modul:          2
  Thema:          2 - Zufall: diagonale Bewegung
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Jeder Punkt startet an einer zufaelligen Stelle (in setup()).
                  x und y gleichzeitig aendern = diagonale Bewegung.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t2_1 (random)
  =============================================
 
`,
  "m2t2_3": ` 
  =============================================
  Modul:          2
  Thema:          2 - Zufall: malen mit mouseX und mouseY
  Level:          3
  Boss-Level:     Nein
  Lernziel:       mouseX und mouseY sind die Position der Maus.
                  Mit random() dazu wird daraus eine bunte Spruehdose!
  Arbeitsauftrag:  Bewege die Maus ueber die Zeichenflaeche. Rekreire, was du in der Vorschau siehst, und probiere danach eigene Farben und Groessen aus.
  Benoetiges Vorwissen: Level m2t2_1, m2t2_2 (random)
  =============================================
 
`,
  "m2t3_1": ` 
  =============================================
  Modul:          2
  Thema:          3 - Fische: ein Fisch schwimmt
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Alle Teile des Fisches haengen an x.
                  x = x + 3 - und der ganze Fisch schwimmt los!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Thema 1 und 2 (Bewegung, random)
  =============================================
 
`,
  "m2t3_2": ` 
  =============================================
  Modul:          2
  Thema:          3 - Fische: hin und her
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Plus = nach rechts, Minus = nach links.
                  Zwei Fische schwimmen aneinander vorbei, dazu zufaellige Blasen.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t3_1 (Fisch)
  =============================================
 
`,
  "m2t3_3": ` 
  =============================================
  Modul:          2
  Thema:          3 - Fische: Zufalls-Schwarm
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Hoehe, Geschwindigkeit und Farbe jedes Fisches sind zufaellig.
                  rot1, gruen1, blau1 speichern die Farbe vom ersten Fisch.
                  Jedes Mal Run druecken = ein neuer Schwarm!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t3_1, m2t3_2 (Fische)
  =============================================
 
`,
  "m2t4_1": ` 
  =============================================
  Modul:          2
  Thema:          4 - Zufalls-Groessen: pulsierende Blumen
  Level:          1
  Boss-Level:     Nein
  Lernziel:       random(10, 70) gibt eine Zahl zwischen 10 und 70.
                  Als Groesse benutzt, wackeln die Blumen wild hin und her.
                  frameRate(10) macht draw() langsamer: 10 Bilder pro Sekunde.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Thema 2 (random)
  =============================================
 
`,
  "m2t4_2": ` 
  =============================================
  Modul:          2
  Thema:          4 - Zufalls-Groessen: Musik-Balken
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Jeder Balken bekommt eine zufaellige Hoehe (10 bis 70, mal 8).
                  So huepfen die Balken wie bei einer Musik-Anzeige!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t4_1 (random(10, 70), frameRate)
  =============================================
 
`,
  "m2t4_3": ` 
  =============================================
  Modul:          2
  Thema:          4 - Zufalls-Groessen: Regenwolke
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Die Wolke springt zu zufaelligen x-Stellen und bleibt oben.
                  Die Regentropfen darunter sind zufaellig
                  verteilt und zufaellig lang (10 bis 70).
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t4_1, m2t4_2 (random, frameRate)
  =============================================
 
`,
  "m2t5_1": ` 
  =============================================
  Modul:          2
  Thema:          5 - Kreis-Chaos (Boss-Vorstufe 1)
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Ein Kreis bekommt in setup() eine zufaellige Richtung
                  (speedX, speedY) und eine zufaellige Farbe - und fliegt los.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Thema 1-4
  =============================================
 
`,
  "m2t5_2": ` 
  =============================================
  Modul:          2
  Thema:          5 - Kreis-Chaos (Boss-Vorstufe 2)
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Drei Kreise fliegen in zufaellige Richtungen.
                  Ohne background() in draw() malen sie bunte Spuren.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t5_1 (ein Kreis-Chaos)
  =============================================
 
`,
  "m2t5_3": ` 
  =============================================
  Modul:          2
  Thema:          5 - Kreis-Chaos
  Level:          3 - BOSS-LEVEL
  Boss-Level:     JA
  Lernziel:       Alles aus Modul 2 kombinieren: Bewegung, random(), Farb-Variablen,
                  mouseX und mouseY. mousePressed() wird bei jedem Klick
                  aufgerufen - dort starten neue Kreise an der Maus.
  Arbeitsauftrag:  Klicke auf die Zeichenflaeche. Rekreire, was du in der Vorschau siehst, und mach daraus dein eigenes Chaos-Bild.
  Benoetiges Vorwissen: Alles aus Modul 2
  =============================================
 
`,
  "m3t1_1": ` 
  =============================================
  Modul:          3
  Thema:          1 - if mit der Maus: mouseX
  Level:          1
  Boss-Level:     Nein
  Lernziel:       if (Bedingung) { ... } - der Code in den Klammern laeuft nur,
                  wenn die Bedingung stimmt. mouseX > 400 = Maus ist rechts.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Bewege die Maus nach links und rechts und beobachte, was passiert.
  Benoetiges Vorwissen: Alles aus Modul 1 und 2
  =============================================
 
`,
  "m3t1_2": ` 
  =============================================
  Modul:          3
  Thema:          1 - if mit der Maus: mouseY
  Level:          2
  Boss-Level:     Nein
  Lernziel:       mouseY ist die Hoehe der Maus (0 = oben, 800 = unten).
                  In einem if koennen mehrere Befehle stehen: Hintergrund UND Farbe.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Bewege die Maus nach oben und unten und beobachte, was passiert.
  Benoetiges Vorwissen: Level m3t1_1 (if, mouseX)
  =============================================
 
`,
  "m3t1_3": ` 
  =============================================
  Modul:          3
  Thema:          1 - if / else: linke und rechte Seite
  Level:          3
  Boss-Level:     Nein
  Lernziel:       else bedeutet: "Wenn die Bedingung NICHT stimmt, mache das hier."
                  Es wird immer genau einer der beiden Wege genommen.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Bewege die Maus von links nach rechts.
  Benoetiges Vorwissen: Level m3t1_1, m3t1_2 (if, mouseX, mouseY)
  =============================================
 
`,
  "m3t2_1": ` 
  =============================================
  Modul:          3
  Thema:          2 - Klick: mouseIsPressed
  Level:          1
  Boss-Level:     Nein
  Lernziel:       mouseIsPressed ist true, solange die Maustaste gedrueckt ist.
                  if (mouseIsPressed) { ... } else { ... }
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Halte die Maustaste gedrueckt und lass sie wieder los.
  Benoetiges Vorwissen: Thema 1 (if, else)
  =============================================
 
`,
  "m3t2_2": ` 
  =============================================
  Modul:          3
  Thema:          2 - else if: vier Zonen
  Level:          2
  Boss-Level:     Nein
  Lernziel:       else if prueft mehr als zwei Moeglichkeiten.
                  Nur der ERSTE Block, der stimmt, wird ausgefuehrt!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Fahre mit der Maus langsam von links nach rechts durch alle vier Zonen.
  Benoetiges Vorwissen: Level m3t2_1 (mouseIsPressed, else)
  =============================================
 
`,
  "m3t2_3": ` 
  =============================================
  Modul:          3
  Thema:          2 - && (UND): Klick und Seite kombiniert
  Level:          3
  Boss-Level:     Nein
  Lernziel:       A && B stimmt nur, wenn BEIDE Bedingungen stimmen.
                  mouseIsPressed && mouseX < 400 = Klick auf der linken Seite.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Probiere alle vier Faelle aus: links/rechts, mit und ohne Klick.
  Benoetiges Vorwissen: Level m3t2_1, m3t2_2 (mouseIsPressed, else if)
  =============================================
 
`,
  "m3t3_1": ` 
  =============================================
  Modul:          3
  Thema:          3 - Zufall: bunte Kreise
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Position, Groesse und Farbe kommen aus random().
                  background() steht in setup(), damit die Kreise liegen bleiben.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit den Zahlen in random() herum.
  Benoetiges Vorwissen: Thema 1 und 2, random() aus Modul 2
  =============================================
 
`,
  "m3t3_2": ` 
  =============================================
  Modul:          3
  Thema:          3 - Klick: die Blume springt
  Level:          2
  Boss-Level:     Nein
  Lernziel:       mousePressed() wird bei jedem Klick EINMAL aufgerufen.
                  Dort bekommt die Blume eine neue zufaellige Position.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Klicke auf die Zeichenflaeche.
  Benoetiges Vorwissen: Level m3t3_1 (random)
  =============================================
 
`,
  "m3t3_3": ` 
  =============================================
  Modul:          3
  Thema:          3 - Treffer: Blumen fangen
  Level:          3
  Boss-Level:     Nein
  Lernziel:       dist() misst den Abstand zwischen Maus und Blume.
                  Ist er klein genug, gibt es einen Punkt - sonst einen Punkt Abzug.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Klicke die Blume so oft wie moeglich an.
  Benoetiges Vorwissen: Level m3t3_1, m3t3_2 (random, mousePressed)
  =============================================
 
`,
  "m3t4_1": ` 
  =============================================
  Modul:          3
  Thema:          4 - dist() kennenlernen
  Level:          1
  Boss-Level:     Nein
  Lernziel:       dist(x1, y1, x2, y2) berechnet den Abstand zwischen zwei Punkten.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t3 (random, mousePressed, dist)
  =============================================
 
`,
  "m3t4_2": ` 
  =============================================
  Modul:          3
  Thema:          4 - dist() mit if: Schatzsuche
  Level:          2
  Boss-Level:     Nein
  Lernziel:       dist() mit if kombinieren: Ist die Maus nah genug am Schatz?
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t4_1 (dist)
  =============================================
 
`,
  "m3t4_3": ` 
  =============================================
  Modul:          3
  Thema:          4 - dist() mit mehreren Stufen
  Level:          3
  Boss-Level:     Nein
  Lernziel:       dist() mit else if: verschiedene Reaktionen je nach Abstand.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t4_1, m3t4_2 (dist, Schatzsuche)
  =============================================
 
`,
  "m3t5_1": ` 
  =============================================
  Modul:          3
  Thema:          5 - Spiel (Boss-Vorstufe 1)
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Grundlage eines Spiels: Zielscheibe + Punktestand.
                  dist() erkennt ob du getroffen hast.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t4 (dist)
  =============================================
 
`,
  "m3t5_2": `
  =============================================
  Modul:          3
  Thema:          5 - Spiel (Boss-Vorstufe 2)
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Spiel erweitern: Ziel springt nach jedem Treffer!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t5_1 (Zielscheibe + Punktestand)
  =============================================

`,
  "m3t5_3": ` 
  =============================================
  Modul:          3
  Thema:          5
  Level:          3 - BOSS-LEVEL
  Boss-Level:     JA
  Lernziel:       Alles aus Modul 3 kombinieren: if, else if, &&, mousePressed(),
                  random() und dist(). Ergebnis: ein vollstaendiges Klickspiel!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Alles aus Modul 3
  =============================================
 
`
};
