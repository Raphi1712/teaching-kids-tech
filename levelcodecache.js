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
  Thema:          2 - Formen: ellipse()
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Du lernst die vier Parameter von ellipse() genau kennen.
                  ellipse(x, y, breite, hoehe)
                  x und y sind die Mitte. Breite und Hoehe bestimmen die Groesse.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t1 (createCanvas, background, fill, ellipse)
  =============================================
 
`,
  "m1t2_2": ` 
  =============================================
  Modul:          1
  Thema:          2 - Formen: mehrere Ellipsen
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Du lernst, mehrere Ellipsen hintereinander zu zeichnen.
                  Jedes fill() gilt nur fuer die naechste Form!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t2_1 (fill, ellipse)
  =============================================
 
`,
  "m1t2_3": ` 
  =============================================
  Modul:          1
  Thema:          2 - Formen: circle()
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Du lernst circle() kennen - eine einfachere Version von ellipse().
                  circle(x, y, durchmesser) braucht nur 3 Parameter!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t2_1, m1t2_2 (fill, ellipse)
  =============================================
 
`,
  "m1t3_1": ` 
  =============================================
  Modul:          1
  Thema:          3 - Farben: RGB-Grundfarben
  Level:          1
  Boss-Level:     Nein
  Lernziel:       Du lernst das RGB-Farbsystem kennen.
                  R = Rot, G = Gruen, B = Blau
                  Jeder Wert geht von 0 (aus) bis 255 (voll an).
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t2 (fill, circle, ellipse)
  =============================================
 
`,
  "m1t3_2": ` 
  =============================================
  Modul:          1
  Thema:          3 - Farben: Mischfarben
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Du lernst Farben zu mischen!
                  Rot + Gruen = Gelb, Rot + Blau = Lila, Gruen + Blau = Tuerkis.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t3_1 (RGB-Grundfarben)
  =============================================
 
`,
  "m1t3_3": ` 
  =============================================
  Modul:          1
  Thema:          3 - Farben: RGB-Werte pruefen
  Level:          3
  Boss-Level:     Nein
  Lernziel:       RGB-Werte muessen IMMER zwischen 0 und 255 liegen!
                  fill(300, 500, 100) ist falsch - 300 und 500 sind zu gross.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t3_1, m1t3_2 (RGB, Mischfarben)
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
  Benoetiges Vorwissen: Level m1t3 (fill mit RGB, circle)
  =============================================
 
`,
  "m1t4_2": ` 
  =============================================
  Modul:          1
  Thema:          4 - Variablen: x und y
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Du lernst zwei Variablen gleichzeitig zu benutzen.
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
  Lernziel:       Variablen auch fuer die Groesse von Formen benutzen.
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
  Lernziel:       Gesicht erweitern: Nase, Mund und Wangen hinzufuegen.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m1t5_1 (Kopf + Augen)
  =============================================
 
`,
  "m1t5_3": ` 
  =============================================
  Modul:          1
  Thema:          5
  Level:          3 - BOSS-LEVEL
  Boss-Level:     JA
  Lernziel:       Alles aus Modul 1 kombinieren: fill(), RGB, ellipse(), circle(), Variablen.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Alles aus Modul 1
  =============================================
 
`,
  "m2t1_1": ` 
  =============================================
  Modul:          2
  Thema:          1 - Das if-Statement
  Level:          1
  Boss-Level:     Nein
  Lernziel:       if (Bedingung) { Anweisungen }
                  Wenn die Bedingung wahr ist, werden die Anweisungen ausgefuehrt.
                  mouseX ist die aktuelle x-Position der Maus.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Alles aus Modul 1
  =============================================
 
`,
  "m2t1_2": ` 
  =============================================
  Modul:          2
  Thema:          1 - if: verschiedene Bedingungen
  Level:          2
  Boss-Level:     Nein
  Lernziel:       mouseY ist die y-Position der Maus (0 = oben, 800 = unten).
                  > heisst "groesser als", < heisst "kleiner als".
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t1_1 (if, mouseX)
  =============================================
 
`,
  "m2t1_3": ` 
  =============================================
  Modul:          2
  Thema:          1 - if / else
  Level:          3
  Boss-Level:     Nein
  Lernziel:       else bedeutet: "Wenn die Bedingung NICHT stimmt, mache das stattdessen."
                  if und else: Immer genau einer der Wege wird genommen!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t1_1, m2t1_2 (if)
  =============================================
 
`,
  "m2t2_1": ` 
  =============================================
  Modul:          2
  Thema:          2 - mouseIsPressed
  Level:          1
  Boss-Level:     Nein
  Lernziel:       mouseIsPressed ist true, wenn du die Maus gedrueckt haelst.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t1 (if, else)
  =============================================
 
`,
  "m2t2_2": ` 
  =============================================
  Modul:          2
  Thema:          2 - else if
  Level:          2
  Boss-Level:     Nein
  Lernziel:       else if: mehr als zwei Moeglichkeiten pruefen.
                  Nur der erste zutreffende Block wird ausgefuehrt!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t2_1 (mouseIsPressed)
  =============================================
 
`,
  "m2t2_3": ` 
  =============================================
  Modul:          2
  Thema:          2 - Kombination: if + else if + mouseIsPressed
  Level:          3
  Boss-Level:     Nein
  Lernziel:       Mehrere Bedingungen zusammen ergeben spannende Interaktionen!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t2_1, m2t2_2
  =============================================
 
`,
  "m2t3_1": ` 
  =============================================
  Modul:          2
  Thema:          3 - Animation: Bewegung mit Variablen
  Level:          1
  Boss-Level:     Nein
  Lernziel:       x = x + 3 bedeutet: "Addiere 3 zu x dazu."
                  Da draw() immer laeuft, bewegt sich der Kreis!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t2 (if/else, mouseIsPressed)
  =============================================
 
`,
  "m2t3_2": ` 
  =============================================
  Modul:          2
  Thema:          3 - Animation: Grenze mit if
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Wenn der Kreis den Rand erreicht, wird x auf 0 zurueckgesetzt.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t3_1 (Bewegung)
  =============================================
 
`,
  "m2t3_3": ` 
  =============================================
  Modul:          2
  Thema:          3 - Animation: Bouncing Ball
  Level:          3
  Boss-Level:     Nein
  Lernziel:       speed = -speed dreht die Richtung um!
                  Positiv = rechts, Negativ = links.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t3_1, m2t3_2 (Bewegung, Grenze)
  =============================================
 
`,
  "m2t4_1": ` 
  =============================================
  Modul:          2
  Thema:          4 - Logik: && (UND)
  Level:          1
  Boss-Level:     Nein
  Lernziel:       A && B ist nur true, wenn BEIDE Bedingungen gleichzeitig stimmen!
                  mouseX > 200 && mouseX < 600 = Maus ist zwischen 200 und 600.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t3 (Animation)
  =============================================
 
`,
  "m2t4_2": ` 
  =============================================
  Modul:          2
  Thema:          4 - Logik: || (ODER)
  Level:          2
  Boss-Level:     Nein
  Lernziel:       A || B ist true, wenn MINDESTENS EINE Bedingung stimmt.
                  mouseX < 100 || mouseX > 700 = Maus ganz links ODER rechts.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t4_1 (&&)
  =============================================
 
`,
  "m2t4_3": ` 
  =============================================
  Modul:          2
  Thema:          4 - Logik: ! (NICHT)
  Level:          3
  Boss-Level:     Nein
  Lernziel:       !Bedingung kehrt das Ergebnis um: true wird false, false wird true.
                  !mouseIsPressed = "Maus wird NICHT gedrueckt."
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t4_1, m2t4_2 (&&, ||)
  =============================================
 
`,
  "m2t5_1": ` 
  =============================================
  Modul:          2
  Thema:          5 - Interaktion (Boss-Vorstufe 1)
  Level:          1
  Boss-Level:     Nein
  Lernziel:       mousePressed() wird EINMALIG aufgerufen, wenn geklickt wird.
                  mouseReleased() wird EINMALIG aufgerufen, wenn losgelassen wird.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t4 (&&, ||, !)
  =============================================
 
`,
  "m2t5_2": ` 
  =============================================
  Modul:          2
  Thema:          5 - Interaktion (Boss-Vorstufe 2)
  Level:          2
  Boss-Level:     Nein
  Lernziel:       Animation und Interaktion kombinieren.
                  Der Ball bewegt sich automatisch - die Maus pausiert ihn!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m2t5_1, m2t3_3 (Bouncing Ball)
  =============================================
 
`,
  "m2t5_3": ` 
  =============================================
  Modul:          2
  Thema:          5
  Level:          3 - BOSS-LEVEL
  Boss-Level:     JA
  Lernziel:       Alles aus Modul 2 kombinieren: if, else if, &&, ||, !,
                  mouseIsPressed, mousePressed(), mouseReleased().
  Arbeitsauftrag:
                   Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Alles aus Modul 2
  =============================================
 
`,
  "m3t1_1": ` 
  =============================================
  Modul:          3
  Thema:          1 - Neue Formen: rect()
  Level:          1
  Boss-Level:     Nein
  Lernziel:       rect(x, y, breite, hoehe) zeichnet ein Rechteck.
                  ACHTUNG: x und y sind die LINKE OBERE ECKE (nicht die Mitte)!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Alles aus Modul 1 und 2
  =============================================
 
`,
  "m3t1_2": ` 
  =============================================
  Modul:          3
  Thema:          1 - Neue Formen: line()
  Level:          2
  Boss-Level:     Nein
  Lernziel:       line(x1, y1, x2, y2) zeichnet eine Linie von Punkt 1 zu Punkt 2.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t1_1 (rect)
  =============================================
 
`,
  "m3t1_3": ` 
  =============================================
  Modul:          3
  Thema:          1 - rect() + line() kombiniert: Haus
  Level:          3
  Boss-Level:     Nein
  Lernziel:       rect() und line() kombinieren um ein Haus zu bauen.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t1_1 (rect), m3t1_2 (line)
  =============================================
 
`,
  "m3t2_1": ` 
  =============================================
  Modul:          3
  Thema:          2 - Neue Formen: triangle()
  Level:          1
  Boss-Level:     Nein
  Lernziel:       triangle(x1,y1, x2,y2, x3,y3) zeichnet ein Dreieck.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t1 (rect, line)
  =============================================
 
`,
  "m3t2_2": ` 
  =============================================
  Modul:          3
  Thema:          2 - stroke() + strokeWeight()
  Level:          2
  Boss-Level:     Nein
  Lernziel:       stroke(R,G,B) = Konturfarbe. strokeWeight(n) = Linienstaerke.
                  noStroke() entfernt die Kontur komplett.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t2_1 (triangle)
  =============================================
 
`,
  "m3t2_3": ` 
  =============================================
  Modul:          3
  Thema:          2 - triangle + stroke + fill: Berglandschaft
  Level:          3
  Boss-Level:     Nein
  Lernziel:       triangle(), stroke(), strokeWeight() und fill() kombinieren.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t2_1 (triangle), m3t2_2 (stroke)
  =============================================
 
`,
  "m3t3_1": ` 
  =============================================
  Modul:          3
  Thema:          3 - random()
  Level:          1
  Boss-Level:     Nein
  Lernziel:       random(min, max) gibt jedes Mal eine zufaellige Zahl zurueck.
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t2 (triangle, stroke)
  =============================================
 
`,
  "m3t3_2": ` 
  =============================================
  Modul:          3
  Thema:          3 - text() und textSize()
  Level:          2
  Boss-Level:     Nein
  Lernziel:       text(inhalt, x, y) schreibt Text. textSize(n) = Schriftgroesse.
                  fill() gilt auch fuer Text!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t3_1 (random)
  =============================================
 
`,
  "m3t3_3": ` 
  =============================================
  Modul:          3
  Thema:          3 - nfc() und Zahlenformatierung
  Level:          3
  Boss-Level:     Nein
  Lernziel:       nfc(zahl, stellen) formatiert Zahlen mit Tausendertrennzeichen.
                  nfc(12345, 0) ergibt "12,345".
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Level m3t3_1, m3t3_2 (random, text)
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
  Benoetiges Vorwissen: Level m3t3 (random, text, nfc)
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
  Lernziel:       Alles aus Modul 3 kombinieren: rect, line, triangle, stroke,
                  random, text, nfc, dist. Ergebnis: ein vollstaendiges Klickspiel!
  Arbeitsauftrag:  Rekreire, was du in der Vorschau siehst. Spiele danach mit Zahlen, Farben oder Formen herum und beobachte, was passiert, wenn du etwas veränderst.
  Benoetiges Vorwissen: Alles aus Modul 3
  =============================================
 
`
};
