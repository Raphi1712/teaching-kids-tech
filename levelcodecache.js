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
 
`,
  "m4t1_1": ` 
  =============================================
  Modul:          4
  Thema:          1 - Pfeiltasten: links und rechts
  Level:          1
  Boss-Level:     Nein
  Lernziel:       keyIsDown(LEFT_ARROW) ist wahr, solange die Pfeiltaste nach links gedrückt ist. Mit if veränderst du dann x - so steuerst du den Kreis mit der Tastatur.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Drücke danach die Pfeiltasten links und rechts.
  Benoetiges Vorwissen: Alles aus Modul 1 bis 3 (Variablen, if)
  =============================================
 
`,
  "m4t1_2": ` 
  =============================================
  Modul:          4
  Thema:          1 - Pfeiltasten: alle Richtungen
  Level:          2
  Boss-Level:     Nein
  Lernziel:       UP_ARROW und DOWN_ARROW verändern y. Vier weitere ifs halten den Kreis im Bild: Ist x kleiner als 50, wird x wieder 50.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Steuere den Kreis in alle Richtungen und fahre gegen die Ränder.
  Benoetiges Vorwissen: Level m4t1_1 (keyIsDown)
  =============================================
 
`,
  "m4t1_3": ` 
  =============================================
  Modul:          4
  Thema:          1 - Mit Tasten malen
  Level:          3
  Boss-Level:     Nein
  Lernziel:       keyPressed() wird bei jedem Tastendruck einmal aufgerufen. key ist die gedrückte Taste: if (key == "r") { ... }. Weil background() nur in setup() steht, bleibt jede Ellipse liegen - du malst.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Male mit den Pfeiltasten und wechsle die Farbe mit r, g, b und z. Die Leertaste löscht das Bild.
  Benoetiges Vorwissen: Level m4t1_1, m4t1_2 (keyIsDown, Ränder)
  =============================================
 
`,
  "m4t2_1": ` 
  =============================================
  Modul:          4
  Thema:          2 - Raketenstart: Zündung
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Eine Variable kann true (wahr) oder false (falsch) sein. gestartet ist am Anfang false. Die Leertaste (key == " ") setzt sie in keyPressed() auf true - erst dann steigt die Rakete und die Flamme flackert.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Drücke die Leertaste und schau der Rakete beim Start zu.
  Benoetiges Vorwissen: Thema 1 (keyIsDown, keyPressed, key)
  =============================================
 
`,
  "m4t2_2": ` 
  =============================================
  Modul:          4
  Thema:          2 - Raketenstart: Lenken
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Während des Flugs lenkst du mit keyIsDown(LEFT_ARROW) und keyIsDown(RIGHT_ARROW). Fliegt die Rakete oben aus dem Bild (raketeY < -100), setzt raketeY = 900 sie wieder unten hin.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Starte die Rakete und lenke sie nach links und rechts.
  Benoetiges Vorwissen: Level m4t2_1 (true / false, Zündung)
  =============================================
 
`,
  "m4t2_3": ` 
  =============================================
  Modul:          4
  Thema:          2 - Raketenstart: Turbo
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Ein Trick wie in echten Spielen: Die Rakete bleibt stehen und die Sterne rauschen vorbei. Pfeil hoch erhöht tempo, beim Loslassen bremst die Rakete langsam ab. Ab tempo 12 werden die Sterne zu Strichen.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Starte mit der Leertaste und halte Pfeil hoch gedrückt, bis du Lichtgeschwindigkeit erreichst.
  Benoetiges Vorwissen: Level m4t2_1, m4t2_2 (Zündung, Lenken)
  =============================================
 
`,
  "m4t3_1": ` 
  =============================================
  Modul:          4
  Thema:          3 - Fliegende Kreise: ein Schuss
  Level:          1
  Boss-Level:     Nein
  Lernziel:       keyPressed() reagiert auf jede Taste. Bei jedem Druck startet der Kreis wieder in der Mitte und bekommt mit random() eine neue Richtung (speedX, speedY) und eine neue Farbe.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Drücke immer wieder irgendeine Taste.
  Benoetiges Vorwissen: Thema 1 (keyPressed), Modul 2 (Bewegung mit speed)
  =============================================
 
`,
  "m4t3_2": ` 
  =============================================
  Modul:          4
  Thema:          3 - Fliegende Kreise: drei Tasten
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Jede Taste hat ihren eigenen Kreis mit eigenen Variablen: a startet Kreis 1, s Kreis 2 und d Kreis 3 (else if). Mit || prallen die Kreise an allen Rändern ab.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Drücke a, s und d.
  Benoetiges Vorwissen: Level m4t3_1 (ein Schuss), Modul 3 (||)
  =============================================
 
`,
  "m4t3_3": ` 
  =============================================
  Modul:          4
  Thema:          3 - Fliegende Kreise: Chaos-Taste
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Die Leertaste würfelt alle Richtungen und Farben neu. f schaltet tempo zwischen 1 (fliegen) und 0 (eingefroren) um, denn x1 = x1 + speedX1 * tempo bewegt sich bei tempo 0 nicht.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Drücke die Leertaste für Chaos und f zum Einfrieren und Weiterfliegen.
  Benoetiges Vorwissen: Level m4t3_1, m4t3_2 (Schuss, drei Kreise)
  =============================================
 
`,
  "m4t4_1": ` 
  =============================================
  Modul:          4
  Thema:          4 - Buchstaben: Taste zeigen
  Level:          1
  Boss-Level:     Nein
  Lernziel:       key enthält die zuletzt gedrückte Taste als Text. text(buchstabe, 400, 420) zeigt ihn riesig an, textAlign(CENTER, CENTER) setzt ihn genau in die Mitte.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Tippe verschiedene Buchstaben und Zahlen.
  Benoetiges Vorwissen: Thema 1 (keyPressed, key)
  =============================================
 
`,
  "m4t4_2": ` 
  =============================================
  Modul:          4
  Thema:          4 - Buchstaben-Collage
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Gezeichnet wird direkt in keyPressed() und nur einmal pro Tastendruck - darum bleiben alle Buchstaben stehen. key.length == 1 prüft, ob es ein echtes Zeichen ist (und nicht z. B. Shift).
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Tippe wild drauflos und mach eine bunte Collage. Mit der Leertaste beginnst du neu.
  Benoetiges Vorwissen: Level m4t4_1 (key, text)
  =============================================
 
`,
  "m4t4_3": ` 
  =============================================
  Modul:          4
  Thema:          4 - Tresor knacken
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Texte kann man zusammensetzen: wort = wort + key hängt jeden Buchstaben an. Mit Enter (keyCode == ENTER) und && prüfst du, ob das Wort stimmt. falsch zählt herunter, solange das Display rot leuchtet.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Tippe zuerst ein falsches Wort und drücke Enter, dann das Geheimwort sesam.
  Benoetiges Vorwissen: Level m4t4_1, m4t4_2 (key, key.length)
  =============================================
 
`,
  "m4t5_1": ` 
  =============================================
  Modul:          4
  Thema:          5 - Weltraum-Flug (Boss-Vorstufe 1)
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Die Rakete fährt mit den Pfeiltasten unten hin und her. Mit && bleibt sie im Bild: keyIsDown(LEFT_ARROW) && raketeX > 50. Drei Kreise fliegen im oberen Teil und prallen ab.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Steuere die Rakete mit den Pfeiltasten.
  Benoetiges Vorwissen: Thema 1 bis 3 (Pfeiltasten, Rakete, fliegende Kreise)
  =============================================
 
`,
  "m4t5_2": ` 
  =============================================
  Modul:          4
  Thema:          5 - Weltraum-Flug (Boss-Vorstufe 2)
  Level:          2
  Boss-Level:     Nein
  Lernziel:       keyIsDown(32) ist wahr, solange die Leertaste gedrückt ist (32 ist ihr Tastencode). Dann zeichnet line() einen Laserstrahl von der Raketenspitze nach oben.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Fahre hin und her und halte die Leertaste gedrückt.
  Benoetiges Vorwissen: Level m4t5_1 (Rakete und Kreise)
  =============================================
 
`,
  "m4t5_3": ` 
  =============================================
  Modul:          4
  Thema:          5 - Weltraum-Flug
  Level:          3 - BOSS-LEVEL
  Boss-Level:     JA
  Lernziel:       Alles aus Modul 4 kombinieren: Pfeiltasten, Turbo, Laser und Treffer. Ein Kreis ist getroffen, wenn der Laser an ist UND der Kreis genau über der Rakete fliegt (&&). Dann springt er an eine neue Stelle und treffer zählt hoch.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Triff so viele Kreise wie möglich - Pfeil hoch ist der Turbo.
  Benoetiges Vorwissen: Alles aus Modul 4
  =============================================
 
`
};

// Englische Arbeitsauftraege (Sprache "English" in den Einstellungen)
const levelTaskEn = {
  "m1t1_1": `Module: 1
Topic: 1 - First steps
Level: 1
Boss level: No
Learning goal: You learn how to create a canvas and set a background.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: None - this is the start!`,
  "m1t1_2": `Module: 1
Topic: 1 - First steps
Level: 2
Boss level: No
Learning goal: You learn how to change the brightness of the background. Numbers from 0 to 255 control the brightness.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m1t1_1 (createCanvas, background)`,
  "m1t1_3": `Module: 1
Topic: 1 - First steps
Level: 3
Boss level: No
Learning goal: You get to know fill() - it gives shapes a color. Then you draw your first ellipse with ellipse()!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Levels m1t1_1, m1t1_2 (createCanvas, background)`,
  "m1t2_1": `Module: 1
Topic: 2 - Colors: RGB primary colors
Level: 1
Boss level: No
Learning goal: You get to know the RGB color system. R = Red, G = Green, B = Blue. Each value goes from 0 (off) to 255 (fully on).
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m1t1 (createCanvas, background, fill, rect)`,
  "m1t2_2": `Module: 1
Topic: 2 - Colors: mixing colors
Level: 2
Boss level: No
Learning goal: You learn how to mix colors! Red + Green = Yellow, Red + Blue = Purple, Green + Blue = Turquoise. All three fully on = White.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m1t2_1 (RGB primary colors, ellipse)`,
  "m1t2_3": `Module: 1
Topic: 2 - Colors: checking RGB values
Level: 3
Boss level: No
Learning goal: RGB values must ALWAYS be between 0 and 255! fill(300, 500, 100) is wrong - 300 and 500 are too big.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Levels m1t2_1, m1t2_2 (RGB, mixing colors)`,
  "m1t3_1": `Module: 1
Topic: 3 - Houses: the first house
Level: 1
Boss level: No
Learning goal: You build a house out of simple shapes: rect() for the wall, triangle() for the roof. triangle(x1, y1, x2, y2, x3, y3) needs three corner points.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m1t2 (RGB colors, rect, ellipse)`,
  "m1t3_2": `Module: 1
Topic: 3 - Houses: door and windows
Level: 2
Boss level: No
Learning goal: The order matters: whatever is drawn later ends up on top. That is why the door and windows come AFTER the wall.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m1t3_1 (rect, triangle)`,
  "m1t3_3": `Module: 1
Topic: 3 - Houses: two houses
Level: 3
Boss level: No
Learning goal: Build a whole scene: two houses, a sun and a cloud.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Levels m1t3_1, m1t3_2 (house, door, windows)`,
  "m1t4_1": `Module: 1
Topic: 4 - Variables: your first variable
Level: 1
Boss level: No
Learning goal: let x = 400; means: "From now on, call the number 400 x." Then you can use x everywhere.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Topics 1-3 (fill with RGB, ellipse, rect)`,
  "m1t4_2": `Module: 1
Topic: 4 - Variables: x and y
Level: 2
Boss level: No
Learning goal: You learn how to use two variables at the same time. Change x or y - the whole snowman moves with it!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m1t4_1 (first variable)`,
  "m1t4_3": `Module: 1
Topic: 4 - Variables: position and size
Level: 3
Boss level: No
Learning goal: Use variables for the size too: groesse * 0.5 is half as big. Change groesse - the whole snowman grows or shrinks!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Levels m1t4_1, m1t4_2 (variables)`,
  "m1t5_1": `Module: 1
Topic: 5 - Face (boss warm-up 1)
Level: 1
Boss level: No
Learning goal: Combine several shapes: head, eyes, pupils.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: All levels from topics 1-4`,
  "m1t5_2": `Module: 1
Topic: 5 - Face (boss warm-up 2)
Level: 2
Boss level: No
Learning goal: Expand the face: add ears, a nose, a mouth and cheeks.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m1t5_1 (head + eyes)`,
  "m1t5_3": `Module: 1
Topic: 5 - Face
Level: 3 - BOSS LEVEL
Boss level: YES
Learning goal: Combine everything from module 1: fill(), RGB, ellipse(), triangle(), variables. The whole face depends on x and y!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Everything from module 1`,
  "m2t1_1": `Module: 2
Topic: 1 - Movement: x = x + 2
Level: 1
Boss level: No
Learning goal: x = x + 2 means: "Add 2 to x." draw() runs again and again - that is why the sun moves!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Everything from module 1`,
  "m2t1_2": `Module: 2
Topic: 1 - Movement: speed as a variable
Level: 2
Boss level: No
Learning goal: speed stores how fast something moves. cloudX = cloudX + speed; - change speed and see what happens!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m2t1_1 (movement)`,
  "m2t1_3": `Module: 2
Topic: 1 - Movement: going up
Level: 3
Boss level: No
Learning goal: y gets bigger the further down you go. With y = y - speed the balloon moves UP.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Levels m2t1_1, m2t1_2 (movement, speed)`,
  "m2t2_1": `Module: 2
Topic: 2 - Randomness: random()
Level: 1
Boss level: No
Learning goal: random(800) gives you a different number between 0 and 800 every time. rot = random(0, 255) - this way every piece of confetti gets a new color! background() is in setup() so the dots stay on the canvas.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Topic 1 (movement)`,
  "m2t2_2": `Module: 2
Topic: 2 - Randomness: diagonal movement
Level: 2
Boss level: No
Learning goal: Each dot starts at a random spot (in setup()). Changing x and y at the same time = diagonal movement.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m2t2_1 (random)`,
  "m2t2_3": `Module: 2
Topic: 2 - Randomness: painting with mouseX and mouseY
Level: 3
Boss level: No
Learning goal: mouseX and mouseY are the position of the mouse. Add random() and it turns into a colorful spray can!
Task: Move the mouse over the canvas. Recreate what you see in the preview, then try out your own colors and sizes.
Prior knowledge: Levels m2t2_1, m2t2_2 (random)`,
  "m2t3_1": `Module: 2
Topic: 3 - Fish: a fish swims
Level: 1
Boss level: No
Learning goal: All parts of the fish depend on x. x = x + 3 - and the whole fish starts swimming!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Topics 1 and 2 (movement, random)`,
  "m2t3_2": `Module: 2
Topic: 3 - Fish: back and forth
Level: 2
Boss level: No
Learning goal: Plus = to the right, minus = to the left. Two fish swim past each other, with random bubbles too.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m2t3_1 (fish)`,
  "m2t3_3": `Module: 2
Topic: 3 - Fish: random school of fish
Level: 3
Boss level: No
Learning goal: The height, speed and color of each fish are random. rot1, gruen1, blau1 store the color of the first fish. Every time you press Run = a new school of fish!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Levels m2t3_1, m2t3_2 (fish)`,
  "m2t4_1": `Module: 2
Topic: 4 - Random sizes: pulsing flowers
Level: 1
Boss level: No
Learning goal: random(10, 70) gives you a number between 10 and 70. Used as a size, it makes the flowers wobble wildly. frameRate(10) makes draw() slower: 10 frames per second.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Topic 2 (random)`,
  "m2t4_2": `Module: 2
Topic: 4 - Random sizes: music bars
Level: 2
Boss level: No
Learning goal: Each bar gets a random height (10 to 70, times 8). That way the bars bounce like on a music display!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m2t4_1 (random(10, 70), frameRate)`,
  "m2t4_3": `Module: 2
Topic: 4 - Random sizes: rain cloud
Level: 3
Boss level: No
Learning goal: The cloud jumps to random x positions and stays at the top. The raindrops below it are placed randomly and have random lengths (10 to 70).
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Levels m2t4_1, m2t4_2 (random, frameRate)`,
  "m2t5_1": `Module: 2
Topic: 5 - Circle chaos (boss warm-up 1)
Level: 1
Boss level: No
Learning goal: In setup(), a circle gets a random direction (speedX, speedY) and a random color - and off it flies.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Topics 1-4`,
  "m2t5_2": `Module: 2
Topic: 5 - Circle chaos (boss warm-up 2)
Level: 2
Boss level: No
Learning goal: Three circles fly in random directions. Without background() in draw(), they paint colorful trails.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m2t5_1 (circle chaos with one circle)`,
  "m2t5_3": `Module: 2
Topic: 5 - Circle chaos
Level: 3 - BOSS LEVEL
Boss level: YES
Learning goal: Combine everything from module 2: movement, random(), color variables, mouseX and mouseY. mousePressed() is called with every click - that is where new circles start at the mouse.
Task: Click on the canvas. Recreate what you see in the preview and turn it into your own chaos picture.
Prior knowledge: Everything from module 2`,
  "m3t1_1": `Module: 3
Topic: 1 - if with the mouse: mouseX
Level: 1
Boss level: No
Learning goal: if (condition) { ... } - the code inside the curly brackets only runs when the condition is true. mouseX > 400 = the mouse is on the right.
Task: Recreate what you see in the preview. Move the mouse left and right and watch what happens.
Prior knowledge: Everything from modules 1 and 2`,
  "m3t1_2": `Module: 3
Topic: 1 - if with the mouse: mouseY
Level: 2
Boss level: No
Learning goal: mouseY is the height of the mouse (0 = top, 800 = bottom). An if can contain several commands: background AND color.
Task: Recreate what you see in the preview. Move the mouse up and down and watch what happens.
Prior knowledge: Level m3t1_1 (if, mouseX)`,
  "m3t1_3": `Module: 3
Topic: 1 - if / else: left and right side
Level: 3
Boss level: No
Learning goal: else means: "If the condition is NOT true, do this instead." Exactly one of the two paths is always taken.
Task: Recreate what you see in the preview. Move the mouse from left to right.
Prior knowledge: Levels m3t1_1, m3t1_2 (if, mouseX, mouseY)`,
  "m3t2_1": `Module: 3
Topic: 2 - Click: mouseIsPressed
Level: 1
Boss level: No
Learning goal: mouseIsPressed is true as long as the mouse button is held down. if (mouseIsPressed) { ... } else { ... }
Task: Recreate what you see in the preview. Hold the mouse button down and then let go.
Prior knowledge: Topic 1 (if, else)`,
  "m3t2_2": `Module: 3
Topic: 2 - else if: four zones
Level: 2
Boss level: No
Learning goal: else if checks more than two possibilities. Only the FIRST block that is true gets run!
Task: Recreate what you see in the preview. Slowly move the mouse from left to right through all four zones.
Prior knowledge: Level m3t2_1 (mouseIsPressed, else)`,
  "m3t2_3": `Module: 3
Topic: 2 - && (AND): click and side combined
Level: 3
Boss level: No
Learning goal: A && B is only true when BOTH conditions are true. mouseIsPressed && mouseX < 400 = a click on the left side.
Task: Recreate what you see in the preview. Try out all four cases: left/right, with and without a click.
Prior knowledge: Levels m3t2_1, m3t2_2 (mouseIsPressed, else if)`,
  "m3t3_1": `Module: 3
Topic: 3 - Randomness: colorful circles
Level: 1
Boss level: No
Learning goal: Position, size and color come from random(). background() is in setup() so the circles stay on the canvas.
Task: Recreate what you see in the preview. Then play around with the numbers in random().
Prior knowledge: Topics 1 and 2, random() from module 2`,
  "m3t3_2": `Module: 3
Topic: 3 - Click: the flower jumps
Level: 2
Boss level: No
Learning goal: mousePressed() is called ONCE with every click. That is where the flower gets a new random position.
Task: Recreate what you see in the preview. Click on the canvas.
Prior knowledge: Level m3t3_1 (random)`,
  "m3t3_3": `Module: 3
Topic: 3 - Hits: catch the flowers
Level: 3
Boss level: No
Learning goal: dist() measures the distance between the mouse and the flower. If it is small enough, you get a point - otherwise you lose a point.
Task: Recreate what you see in the preview. Click the flower as often as you can.
Prior knowledge: Levels m3t3_1, m3t3_2 (random, mousePressed)`,
  "m3t4_1": `Module: 3
Topic: 4 - Getting to know dist()
Level: 1
Boss level: No
Learning goal: dist(x1, y1, x2, y2) calculates the distance between two points.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m3t3 (random, mousePressed, dist)`,
  "m3t4_2": `Module: 3
Topic: 4 - dist() with if: treasure hunt
Level: 2
Boss level: No
Learning goal: Combine dist() with if: is the mouse close enough to the treasure?
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m3t4_1 (dist)`,
  "m3t4_3": `Module: 3
Topic: 4 - dist() with several steps
Level: 3
Boss level: No
Learning goal: dist() with else if: different reactions depending on the distance.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Levels m3t4_1, m3t4_2 (dist, treasure hunt)`,
  "m3t5_1": `Module: 3
Topic: 5 - Game (boss warm-up 1)
Level: 1
Boss level: No
Learning goal: The basics of a game: a target + a score. dist() checks whether you hit the target.
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m3t4 (dist)`,
  "m3t5_2": `Module: 3
Topic: 5 - Game (boss warm-up 2)
Level: 2
Boss level: No
Learning goal: Expand the game: the target jumps after every hit!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Level m3t5_1 (target + score)`,
  "m3t5_3": `Module: 3
Topic: 5
Level: 3 - BOSS LEVEL
Boss level: YES
Learning goal: Combine everything from module 3: if, else if, &&, mousePressed(), random() and dist(). The result: a complete click game!
Task: Recreate what you see in the preview. Then play around with numbers, colors or shapes and watch what happens when you change something.
Prior knowledge: Everything from module 3`,
  "m4t1_1": `Module: 4
Topic: 1 - Arrow keys: left and right
Level: 1
Boss level: No
Learning goal: keyIsDown(LEFT_ARROW) is true as long as the left arrow key is held down. With if you then change x - that is how you steer the circle with the keyboard.
Task: Recreate what you see in the preview. Then press the left and right arrow keys.
Prior knowledge: Everything from modules 1 to 3 (variables, if)`,
  "m4t1_2": `Module: 4
Topic: 1 - Arrow keys: all directions
Level: 2
Boss level: No
Learning goal: UP_ARROW and DOWN_ARROW change y. Four more ifs keep the circle on the canvas: if x is smaller than 50, x becomes 50 again.
Task: Recreate what you see in the preview. Steer the circle in all directions and drive into the edges.
Prior knowledge: Level m4t1_1 (keyIsDown)`,
  "m4t1_3": `Module: 4
Topic: 1 - Painting with keys
Level: 3
Boss level: No
Learning goal: keyPressed() is called once with every key press. key is the key that was pressed: if (key == "r") { ... }. Because background() is only in setup(), every ellipse stays on the canvas - you are painting.
Task: Recreate what you see in the preview. Paint with the arrow keys and change the color with r, g, b and z. The space bar clears the picture.
Prior knowledge: Levels m4t1_1, m4t1_2 (keyIsDown, edges)`,
  "m4t2_1": `Module: 4
Topic: 2 - Rocket launch: ignition
Level: 1
Boss level: No
Learning goal: A variable can be true or false. gestartet ("started") is false at the beginning. The space bar (key == " ") sets it to true in keyPressed() - only then does the rocket rise and the flame flicker.
Task: Recreate what you see in the preview. Press the space bar and watch the rocket take off.
Prior knowledge: Topic 1 (keyIsDown, keyPressed, key)`,
  "m4t2_2": `Module: 4
Topic: 2 - Rocket launch: steering
Level: 2
Boss level: No
Learning goal: During the flight you steer with keyIsDown(LEFT_ARROW) and keyIsDown(RIGHT_ARROW). When the rocket flies out of the top of the canvas (raketeY < -100), raketeY = 900 puts it back at the bottom (raketeY = "rocket y").
Task: Recreate what you see in the preview. Launch the rocket and steer it left and right.
Prior knowledge: Level m4t2_1 (true / false, ignition)`,
  "m4t2_3": `Module: 4
Topic: 2 - Rocket launch: turbo
Level: 3
Boss level: No
Learning goal: A trick like in real games: the rocket stays where it is and the stars rush past. The up arrow increases tempo ("speed"), and when you let go the rocket slowly slows down. From tempo 12 on the stars turn into lines.
Task: Recreate what you see in the preview. Launch with the space bar and hold the up arrow until you reach light speed ("LICHTGESCHWINDIGKEIT!").
Prior knowledge: Levels m4t2_1, m4t2_2 (ignition, steering)`,
  "m4t3_1": `Module: 4
Topic: 3 - Flying circles: one shot
Level: 1
Boss level: No
Learning goal: keyPressed() reacts to every key. With every press the circle starts in the middle again and gets a new direction (speedX, speedY) and a new color from random().
Task: Recreate what you see in the preview. Press any key again and again.
Prior knowledge: Topic 1 (keyPressed), module 2 (movement with speed)`,
  "m4t3_2": `Module: 4
Topic: 3 - Flying circles: three keys
Level: 2
Boss level: No
Learning goal: Every key has its own circle with its own variables: a starts circle 1, s circle 2 and d circle 3 (else if). With || the circles bounce off all the edges.
Task: Recreate what you see in the preview. Press a, s and d.
Prior knowledge: Level m4t3_1 (one shot), module 3 (||)`,
  "m4t3_3": `Module: 4
Topic: 3 - Flying circles: chaos key
Level: 3
Boss level: No
Learning goal: The space bar rolls new directions and colors for all circles. f switches tempo ("speed") between 1 (flying) and 0 (frozen, "EINGEFROREN"), because x1 = x1 + speedX1 * tempo does not move when tempo is 0.
Task: Recreate what you see in the preview. Press the space bar for chaos and f to freeze and fly on again.
Prior knowledge: Levels m4t3_1, m4t3_2 (shot, three circles)`,
  "m4t4_1": `Module: 4
Topic: 4 - Letters: show the key
Level: 1
Boss level: No
Learning goal: key contains the last key you pressed as text. text(buchstabe, 400, 420) shows it really big (buchstabe = "letter"), and textAlign(CENTER, CENTER) puts it exactly in the middle.
Task: Recreate what you see in the preview. Type different letters and numbers.
Prior knowledge: Topic 1 (keyPressed, key)`,
  "m4t4_2": `Module: 4
Topic: 4 - Letter collage
Level: 2
Boss level: No
Learning goal: The drawing happens directly in keyPressed() and only once per key press - that is why all the letters stay on the canvas. key.length == 1 checks whether it is a real character (and not, for example, Shift).
Task: Recreate what you see in the preview. Type wildly and make a colorful collage. The space bar starts a new picture.
Prior knowledge: Level m4t4_1 (key, text)`,
  "m4t4_3": `Module: 4
Topic: 4 - Crack the safe
Level: 3
Boss level: No
Learning goal: You can put texts together: wort = wort + key adds every letter to the end (wort = "word"). With Enter (keyCode == ENTER) and && you check whether the word is correct. falsch ("wrong") counts down while the display glows red.
Task: Recreate what you see in the preview. First type a wrong word and press Enter, then the secret word sesam ("sesame", as in "open sesame").
Prior knowledge: Levels m4t4_1, m4t4_2 (key, key.length)`,
  "m4t5_1": `Module: 4
Topic: 5 - Space flight (boss warm-up 1)
Level: 1
Boss level: No
Learning goal: The rocket moves back and forth at the bottom with the arrow keys. With && it stays on the canvas: keyIsDown(LEFT_ARROW) && raketeX > 50 (raketeX = "rocket x"). Three circles fly in the upper part and bounce off.
Task: Recreate what you see in the preview. Steer the rocket with the arrow keys.
Prior knowledge: Topics 1 to 3 (arrow keys, rocket, flying circles)`,
  "m4t5_2": `Module: 4
Topic: 5 - Space flight (boss warm-up 2)
Level: 2
Boss level: No
Learning goal: keyIsDown(32) is true as long as the space bar is held down (32 is its key code). Then line() draws a laser beam upwards from the tip of the rocket.
Task: Recreate what you see in the preview. Move back and forth and hold the space bar down.
Prior knowledge: Level m4t5_1 (rocket and circles)`,
  "m4t5_3": `Module: 4
Topic: 5 - Space flight
Level: 3 - BOSS LEVEL
Boss level: YES
Learning goal: Combine everything from module 4: arrow keys, turbo, laser and hits. A circle is hit when the laser is on AND the circle is flying exactly above the rocket (&&). Then it jumps to a new place and treffer ("hits") counts up.
Task: Recreate what you see in the preview. Hit as many circles as you can - the up arrow is the turbo.
Prior knowledge: Everything from module 4`
};
