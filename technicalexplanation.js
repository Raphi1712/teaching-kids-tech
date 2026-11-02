let technicalExplanation = {
  "1.1.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Eine Zeichenfläche erstellst du so: createCanvas(<Breite>, <Höhe>);. Beispiel: createCanvas(800, 800);. Mit background(<Rot>, <Grün>, <Blau>); färbst du den Hintergrund. Beispiel: background(250, 0, 0); erzeugt Rot.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Dabei färbt background(250, 0, 0); die ganze Zeichenfläche rot.
Wichtige Tipps: setup() läuft nur einmal am Anfang, draw() immer wieder. Jeder Befehl endet mit einem Semikolon. Die drei Werte in background() stehen für Rot, Grün und Blau und gehen jeweils von 0 bis 255. Achte darauf, dass jede geöffnete Klammer { auch wieder mit } geschlossen wird.
`,
  "1.1.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Mit nur einem Wert in background(<Helligkeit>); färbst du den Hintergrund grau. Beispiel: background(80); ergibt Dunkelgrau. Eine Ellipse schreibst du so: ellipse(<x-Position>, <y-Position>, <Breite>, <Höhe>);. Beispiel: ellipse(400, 400, 250, 250);. Mit fill(<Rot>, <Grün>, <Blau>); legst du vorher ihre Farbe fest.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(80); den Hintergrund dunkelgrau. Dann legt fill(255, 220, 0); die Farbe Gelb fest und ellipse(400, 400, 250, 250); zeichnet einen gelben Kreis in die Mitte.
Wichtige Tipps: Bei nur einem Wert in background() gilt: 0 ist Schwarz, 255 ist Weiß. Die Mitte der Zeichenfläche liegt bei x = 400 und y = 400. fill() muss vor der Ellipse stehen, damit sie die gewünschte Farbe erhält. Sind Breite und Höhe gleich, entsteht ein Kreis.
`,
  "1.1.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Einen Kreis schreibst du so: circle(<x-Position>, <y-Position>, <Durchmesser>);. Ein Rechteck erstellst du mit rect(<x>, <y>, <Breite>, <Höhe>);. Text schreibst du mit text("<Text>", <x>, <y>); und die Schriftgröße legst du vorher mit textSize(<Größe>); fest. Beispiel: textSize(64);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(180, 220, 255); den Hintergrund hellblau. Anschließend zeichnet das Programm eine gelbe Sonne, eine orange Bodenfläche und den dunklen Text „Hallo, p5!“.
Wichtige Tipps: Bei rect() geben die ersten beiden Werte die linke obere Ecke an. Bei text() muss der Text in Anführungszeichen stehen. textSize() muss vor text() stehen. fill() bestimmt auch die Farbe des Textes, deshalb steht vor dem Text ein dunkles fill(40, 40, 60);.
`,
  "1.2.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Ein Rechteck schreibst du so: rect(<x-Position>, <y-Position>, <Breite>, <Höhe>);. Beispiel: rect(90, 250, 180, 300);. Mit fill(<Rot>, <Grün>, <Blau>); legst du vorher seine Farbe fest. Beispiel: fill(255, 0, 0); erzeugt Rot.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(245); den Hintergrund hellgrau. Anschließend zeichnet das Programm nebeneinander ein rotes, ein grünes und ein blaues Rechteck.
Wichtige Tipps: Bei rect() bestimmen die ersten beiden Werte die x- und y-Position. Die letzten beiden Werte legen Breite und Höhe fest. fill() muss vor dem jeweiligen Rechteck stehen, damit es die gewünschte Farbe erhält. Unterschiedliche x-Positionen ordnen die Rechtecke nebeneinander an.
`,
  "1.2.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Eine Ellipse schreibst du so: ellipse(<x-Position>, <y-Position>, <Breite>, <Höhe>);. Beispiel: ellipse(200, 280, 200, 200);. Mit fill(<Rot>, <Grün>, <Blau>); legst du vorher ihre Farbe fest. Beispiel: fill(255, 255, 0); erzeugt Gelb.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(40); den Hintergrund dunkelgrau. Anschließend zeichnet das Programm sechs verschiedenfarbige, kreisförmige Ellipsen in zwei Reihen.
Wichtige Tipps: Bei ellipse() bestimmen die ersten beiden Werte die x- und y-Position. Die letzten beiden Werte legen Breite und Höhe fest. Sind Breite und Höhe gleich, entsteht ein Kreis. fill() muss vor der jeweiligen Ellipse stehen, damit sie die gewünschte Farbe erhält.
`,
  "1.2.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Ein Dreieck schreibst du so: triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);. Beispiel: triangle(90, 560, 280, 260, 470, 560);. Die drei x- und y-Werte bestimmen die Eckpunkte. Rechtecke erstellst du mit rect(<x>, <y>, <Breite>, <Höhe>);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(20, 20, 40); den Hintergrund dunkelblau. Anschließend zeichnet das Programm eine grüne Bodenfläche, zwei verschiedenfarbige Berge sowie ein oranges Haus mit einer hellen Tür.
Wichtige Tipps: Bei triangle() bestimmst du die Form mit drei Eckpunkten. Jeder Eckpunkt besteht aus einer x- und einer y-Position. fill() muss vor der jeweiligen Form stehen, damit sie die gewünschte Farbe erhält. Die Methoden werden von oben nach unten ausgeführt, deshalb liegen später gezeichnete Formen vor den früher gezeichneten Formen.
`,
  "1.3.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Eine Ellipse schreibst du so: ellipse(<x-Position>, <y-Position>, <Breite>, <Höhe>);. Beispiel: ellipse(120, 120, 90, 90);. Ein Rechteck erstellst du mit rect(<x>, <y>, <Breite>, <Höhe>); und ein Dreieck mit triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(230, 245, 255); den Hintergrund hellblau. Anschließend zeichnet das Programm eine gelbe Sonne, zwei weiße Wolken, eine grüne Bodenfläche sowie ein rotes Haus mit braunem Dach.
Wichtige Tipps: Bei ellipse() bestimmen die ersten beiden Werte die x- und y-Position und die letzten beiden Werte Breite und Höhe. Bei triangle() legst du drei Eckpunkte fest. fill() muss vor der jeweiligen Form stehen. Später gezeichnete Formen liegen vor den früher gezeichneten Formen.
`,
  "1.3.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Ein Rechteck schreibst du so: rect(<x-Position>, <y-Position>, <Breite>, <Höhe>);. Beispiel: rect(280, 370, 260, 220);. Eine Ellipse erstellst du mit ellipse(<x>, <y>, <Breite>, <Höhe>); und ein Dreieck mit triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(180, 225, 255); den Hintergrund hellblau. Anschließend zeichnet das Programm eine grüne Bodenfläche, eine gelbe Sonne sowie ein rotes Haus mit braunem Dach, Tür und zwei hellblauen Fenstern.
Wichtige Tipps: Bei rect() bestimmen die ersten beiden Werte die x- und y-Position und die letzten beiden Werte Breite und Höhe. fill() muss vor der jeweiligen Form stehen. Gleiche Größen und passende x-Positionen sorgen dafür, dass die Fenster gleichmäßig angeordnet sind. Später gezeichnete Formen liegen vor den früher gezeichneten Formen.
`,
  "1.3.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Ein Rechteck schreibst du so: rect(<x-Position>, <y-Position>, <Breite>, <Höhe>);. Beispiel: rect(260, 390, 300, 200);. Eine Ellipse erstellst du mit ellipse(<x>, <y>, <Breite>, <Höhe>); und ein Dreieck mit triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(165, 220, 255); den Hintergrund hellblau. Anschließend zeichnet das Programm eine grüne Bodenfläche, eine gelbe Sonne, zwei weiße Wolken sowie ein großes rotes und ein kleines gelbes Haus mit Dächern, Türen und Fenstern.
Wichtige Tipps: Bei rect() bestimmen die ersten beiden Werte die x- und y-Position und die letzten beiden Werte Breite und Höhe. Bei ellipse() geben die ersten beiden Werte den Mittelpunkt an. fill() muss vor der jeweiligen Form stehen. Später gezeichnete Formen liegen vor den früher gezeichneten Formen.
`,
  "1.4.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen und Methoden.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiel: let x = 300;. Eine Ellipse schreibst du mit ellipse(<x-Position>, <y-Position>, <Breite>, <Höhe>);. Mit x - 20 und x + 20 kannst du Positionen relativ zur Variable verändern.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(40, 60, 110); den Hintergrund dunkelblau. Anschließend zeichnet das Programm eine helle Bodenfläche und aus drei weißen Ellipsen einen Schneemann. Die Variable x bestimmt seine horizontale Position. Danach werden Augen und eine orange Nase relativ zu x gezeichnet.
Wichtige Tipps: Die Variable x speichert hier die horizontale Position des Schneemanns. Bei ellipse() geben die ersten beiden Werte den Mittelpunkt und die letzten beiden Werte Breite und Höhe an. Mit x - 20 und x + 20 verschiebst du Formen relativ zur Grundposition nach links oder rechts. Ändert sich x, bewegen sich alle davon abhängigen Teile gemeinsam.
`,
  "1.4.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen und Methoden.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiele: let x = 400; und let y = 520;. Mit x - 20, x + 20 oder y - 160 kannst du Positionen relativ zu diesen Variablen verändern.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(40, 60, 110); den Hintergrund dunkelblau. Anschließend zeichnet das Programm Mond und Bodenfläche sowie einen Schneemann. Die Variablen x und y bestimmen seine Grundposition. Kopf, Körper, Augen, Knöpfe, Hut und Nase werden relativ zu diesen beiden Variablen positioniert.
Wichtige Tipps: Die Variable x bestimmt die horizontale und y die vertikale Grundposition des Schneemanns. Bei ellipse() geben die ersten beiden Werte den Mittelpunkt und die letzten beiden Werte Breite und Höhe an. Mit Ausdrücken wie x - 20, x + 20 oder y - 295 verschiebst du einzelne Teile relativ zur Grundposition. Änderst du x oder y, verschieben sich alle davon abhängigen Teile gemeinsam
`,
  "1.4.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen und Methoden.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiele: let x = 400;, let y = 540; und let groesse = 200;. Mit Ausdrücken wie groesse * 0.75 oder y - groesse * 1.3 kannst du Größe und Position relativ zur Variable berechnen.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(40, 60, 110); den Hintergrund dunkelblau. Anschließend zeichnet das Programm Mond und Bodenfläche sowie einen Schneemann. Die Variablen x und y bestimmen seine Grundposition, während groesse die Größe und die Abstände seiner einzelnen Teile beeinflusst.
Wichtige Tipps: Die Variablen x und y bestimmen die Grundposition und groesse dient als gemeinsamer Größenwert. Bei ellipse() geben die ersten beiden Werte den Mittelpunkt und die letzten beiden Werte Breite und Höhe an. Mit Berechnungen wie groesse * 0.75 werden Teile proportional zur Grundgröße verkleinert. Änderst du groesse, verändern sich dadurch auch die davon abhängigen Größen und Positionen gemeinsam.
`,
  "1.5.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Mit noStroke(); entfernst du die Umrandung der danach gezeichneten Formen. Eine Ellipse schreibst du so: ellipse(<x-Position>, <y-Position>, <Breite>, <Höhe>);. Beispiel: ellipse(400, 400, 420, 420);. Mit fill(<Rot>, <Grün>, <Blau>); legst du vorher die Füllfarbe fest.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(255, 230, 150); den Hintergrund hellgelb. Anschließend zeichnet das Programm ein Gesicht, zwei weiße Augen, zwei blaue Irisflächen und zwei schwarze Pupillen.
Wichtige Tipps: Bei ellipse() bestimmen die ersten beiden Werte den Mittelpunkt und die letzten beiden Werte Breite und Höhe. fill() muss vor der jeweiligen Ellipse stehen, damit sie die gewünschte Farbe erhält. noStroke() entfernt die Konturen. Später gezeichnete Ellipsen liegen vor den früher gezeichneten Ellipsen.
`,
  "1.5.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen und Methoden.
Verwendung: Mit noStroke(); entfernst du die Umrandung der Formen. Eine Ellipse schreibst du so: ellipse(<x-Position>, <y-Position>, <Breite>, <Höhe>);. Beispiel: ellipse(400, 400, 420, 420);. Ein Dreieck erstellst du mit triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(255, 230, 150); den Hintergrund hellgelb. Anschließend zeichnet das Programm Ohren und Gesicht, danach Augen, Irisflächen, Pupillen, Wangen, Nase und Mund.
Wichtige Tipps: Bei ellipse() bestimmen die ersten beiden Werte den Mittelpunkt und die letzten beiden Werte Breite und Höhe. Bei triangle() legst du drei Eckpunkte fest. fill() muss vor der jeweiligen Form stehen. Später gezeichnete Formen liegen vor den früher gezeichneten Formen, deshalb werden die Ohren vor dem Gesicht gezeichnet.
`,
  "1.5.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen und Methoden.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiele: let x = 400; und let y = 430;. Mit Ausdrücken wie x - 80, x + 80 oder y - 50 positionierst du Formen relativ zu diesen Variablen.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(120, 200, 255); den Hintergrund hellblau. Anschließend zeichnet das Programm eine grüne Bodenfläche sowie ein Gesicht mit Haaren, Ohren, Augen, Wangen, Nase, Mund und Partyhut. Die Variablen x und y bestimmen die Grundposition des Gesichts.
Wichtige Tipps: Die Variable x bestimmt die horizontale und y die vertikale Grundposition. Bei ellipse() geben die ersten beiden Werte den Mittelpunkt und die letzten beiden Werte Breite und Höhe an. Mit Berechnungen wie x - 200 oder y - 370 verschiebst du einzelne Teile relativ zur Grundposition. Änderst du x oder y, verschieben sich alle davon abhängigen Gesichtsteile gemeinsam.
`,
  "2.1.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, eine Variable und Methoden.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiel: let x = 120;. Mit x = x + 2; erhöhst du den gespeicherten Wert bei jedem Durchlauf um 2.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst zeichnet das Programm einen hellblauen Hintergrund und eine grüne Bodenfläche. Anschließend wird der gelbe Kreis an der x-Position der Variable x gezeichnet. Danach erhöht x = x + 2; die Position, sodass sich der Kreis nach rechts bewegt.
Wichtige Tipps: Die Variable x bestimmt die horizontale Position des Kreises. Bei ellipse() geben die ersten beiden Werte den Mittelpunkt und die letzten beiden Werte Breite und Höhe an. Weil draw() ständig wiederholt wird, verändert x = x + 2; die Position fortlaufend. Ein größerer addierter Wert lässt den Kreis schneller nach rechts laufen.
`,
  "2.1.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen und Methoden.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiele: let cloudX = 0; und let speed = 3;. Mit cloudX = cloudX + speed; erhöhst du die x-Position der Wolke bei jedem Durchlauf um den Wert der Geschwindigkeit.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt background(165, 220, 255); den Hintergrund hellblau. Anschließend zeichnet das Programm aus drei weißen Ellipsen eine Wolke und darunter eine grüne Bodenfläche. Danach verändert cloudX = cloudX + speed; die Position, sodass sich die Wolke nach rechts bewegt.
Wichtige Tipps: Die Variable cloudX bestimmt die horizontale Position der Wolke und speed ihre Geschwindigkeit. Die Ausdrücke cloudX + 55 und cloudX + 110 halten die drei Ellipsen in einem festen Abstand zueinander. Weil draw() ständig wiederholt wird, bewegt sich die gesamte Wolke gemeinsam. Ein größerer Wert für speed lässt sie schneller nach rechts laufen.
`,
  "2.1.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen und Methoden.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiele: let balloonY = 800; und let speedY = 2.5;. Mit balloonY = balloonY - speedY; verringerst du die y-Position des Ballons bei jedem Durchlauf um den Wert der Geschwindigkeit.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst zeichnet das Programm einen hellblauen Hintergrund und eine grüne Bodenfläche. Anschließend entstehen der Ballon, die Schnur und der Korb. Danach verändert balloonY = balloonY - speedY; die Position, sodass der gesamte Ballon nach oben steigt.
Wichtige Tipps: Die Variable balloonY bestimmt die vertikale Position und speedY die Geschwindigkeit. Kleinere y-Werte liegen weiter oben auf der Zeichenfläche. Die Ausdrücke balloonY + 55 und balloonY + 95 halten Schnur und Korb relativ zum Ballon. stroke(80); schaltet die Kontur für die Schnur ein, während noStroke(); sie für die Formen wieder entfernt.
`,
  "2.2.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, lokale Variablen, Methoden und Zufallswerte.
Verwendung: Eine lokale Variable schreibst du innerhalb einer Funktion, zum Beispiel let rot = random(0, 255);. Mit random(<Minimum>, <Maximum>); erzeugst du bei jedem Durchlauf einen zufälligen Wert. Beispiel: random(10, 40) liefert eine zufällige Größe zwischen 10 und 40.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche, färbt den Hintergrund dunkel und entfernt die Konturen. Danach wird draw() fortlaufend wiederholt. Bei jedem Durchlauf entstehen neue Zufallswerte für Rot, Grün und Blau. Anschließend zeichnet das Programm an einer zufälligen Position eine zufällig große und gefärbte Ellipse.
Wichtige Tipps: Die Variablen rot, gruen und blau gelten nur innerhalb von draw(), weil sie dort erstellt werden. random(800) erzeugt eine zufällige Position zwischen 0 und 800. Da background() nur in setup() steht, wird die Zeichenfläche nicht bei jedem Durchlauf gelöscht und die Ellipsen bleiben sichtbar.
`,
  "2.2.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden und Zufallswerte.
Verwendung: Eine Variable ohne Startwert schreibst du zum Beispiel so: let x1;. Später weist du ihr mit x1 = random(100, 700); einen zufälligen Wert zu. Mit Befehlen wie x1 = x1 + 3; oder x2 = x2 - 3; veränderst du ihre Position bei jedem Durchlauf.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche und legt für alle drei Punkte zufällige x- und y-Positionen fest. Danach wird draw() fortlaufend wiederholt. Das Programm zeichnet einen roten, einen grünen und einen blauen Punkt. Anschließend verändern sich ihre Positionen, sodass sich die Punkte diagonal in unterschiedliche Richtungen bewegen.
Wichtige Tipps: Die Variablen x1, y1, x2, y2, x3 und y3 speichern die Positionen der drei Punkte. Ein Pluswert bewegt einen Punkt nach rechts oder unten, ein Minuswert nach links oder oben. Weil background() nur in setup() steht, wird die Zeichenfläche nicht gelöscht und die bewegten Punkte hinterlassen sichtbare Spuren.
`,
  "2.2.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, lokale Variablen, Methoden, Mauspositionen und Zufallswerte.
Verwendung: Die aktuelle Mausposition verwendest du mit mouseX und mouseY. Mit mouseX + random(-30, 30) und mouseY + random(-30, 30) verteilst du die Ellipsen zufällig rund um den Mauszeiger. random(10, 50) erzeugt eine zufällige Breite und Höhe zwischen 10 und 50.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche, färbt den Hintergrund weiß und entfernt die Konturen. Danach wird draw() fortlaufend wiederholt. Bei jedem Durchlauf entstehen neue Zufallswerte für Rot, Grün und Blau. Anschließend zeichnet das Programm eine zufällig gefärbte und große Ellipse in der Nähe des Mauszeigers.
Wichtige Tipps: mouseX bestimmt die horizontale und mouseY die vertikale Mausposition. Zufallswerte zwischen −30 und 30 verschieben jede Ellipse etwas um den Mauszeiger. Da background() nur in setup() steht, wird die Zeichenfläche nicht bei jedem Durchlauf gelöscht und die Ellipsen bilden beim Bewegen der Maus eine farbige Spur.
`,
  "2.3.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, eine Variable und Methoden.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiel: let x = 0;. Mit x = x + 3; erhöhst du den gespeicherten Wert bei jedem Durchlauf um 3. Ein Dreieck erstellst du mit triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst zeichnet das Programm einen blauen Himmel und eine dunklere Wasserfläche. Anschließend entstehen eine orange Ellipse und ein Dreieck, die zusammen ein Boot bilden. Danach erhöht x = x + 3; die Position, sodass sich das Boot nach rechts bewegt.
Wichtige Tipps: Die Variable x bestimmt die horizontale Position des gesamten Boots. Die Ausdrücke x - 55 und x - 105 positionieren das Dreieck relativ zur Ellipse. Änderst du x, bewegen sich beide Formen gemeinsam. Weil background() in draw() steht, wird die Zeichenfläche bei jedem Durchlauf neu gezeichnet und es entstehen keine Spuren.
`,
  "2.3.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden und Zufallswerte.
Verwendung: Die Positionen der Fische speicherst du mit let fish1X = 0; und let fish2X = 800;. Mit fish1X = fish1X + 3; bewegst du den ersten Fisch nach rechts und mit fish2X = fish2X - 2; den zweiten Fisch nach links. Eine zufällige Blasengröße erzeugst du mit let blase = random(5, 20);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche und entfernt die Konturen. Danach wird draw() fortlaufend wiederholt. Zuerst zeichnet das Programm Wasser und Meeresboden. Anschließend entstehen zwei Fische mit Augen, die sich in entgegengesetzte Richtungen bewegen. Bei jedem Durchlauf wird außerdem eine zufällig große Luftblase an einer zufälligen Position gezeichnet.
Wichtige Tipps: fish1X und fish2X bestimmen die horizontalen Positionen der beiden Fische. Ausdrücke wie fish1X - 55 oder fish2X + 55 halten Schwanz und Auge relativ zum jeweiligen Körper. Ein Pluswert bewegt nach rechts, ein Minuswert nach links. Weil background() in draw() steht, wird die Zeichenfläche ständig neu gezeichnet und es entstehen keine Spuren.
`,
  "2.3.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden und Zufallswerte.
Verwendung: Variablen ohne Startwert schreibst du zum Beispiel als let y1; oder let speed1;. In setup() weist du ihnen mit y1 = random(100, 550); und speed1 = random(1, 6); zufällige Werte zu. Die Farbe eines Fisches setzt du mit drei Farbvariablen ein, zum Beispiel fill(rot1, gruen1, blau1);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche und legt für jeden Fisch eine zufällige Höhe, Geschwindigkeit und Farbe fest. Danach wird draw() fortlaufend wiederholt. Das Programm zeichnet Wasser, Meeresboden, drei verschiedenfarbige Fische und eine zufällige Luftblase. Anschließend erhöhen speed1, speed2 und speed3 die jeweiligen x-Positionen, sodass die Fische unterschiedlich schnell nach rechts schwimmen.
Wichtige Tipps: x1, x2 und x3 speichern die horizontalen Positionen, während y1, y2 und y3 die Höhen bestimmen. Die Variablen speed1, speed2 und speed3 steuern die unterschiedlichen Geschwindigkeiten. Ausdrücke wie x1 - 55 und y1 - 35 halten den Schwanz relativ zum Körper. Die Zufallswerte werden nur einmal in setup() festgelegt und bleiben während der Bewegung gleich.
`,
  "2.4.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, lokale Variablen, Methoden und Zufallswerte.
Verwendung: Mit frameRate(<Anzahl>); legst du fest, wie oft draw() pro Sekunde wiederholt wird. Beispiel: frameRate(10);. Zufällige Größen speicherst du mit lokalen Variablen, zum Beispiel let groesse1 = random(10, 70);. Mit groesse1 * 2 zeichnest du eine Form doppelt so groß wie den gespeicherten Wert.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche, entfernt die Konturen und stellt zehn Wiederholungen pro Sekunde ein. Danach wird draw() fortlaufend wiederholt. Zuerst zeichnet das Programm Himmel, Boden und drei Stiele. Anschließend entstehen drei farbige Blüten mit zufälligen Größen und jeweils einer gelben Mitte.
Wichtige Tipps: groesse1, groesse2 und groesse3 werden bei jedem Durchlauf neu zufällig bestimmt. Die äußeren Blüten haben mit groesse * 2 den doppelten Durchmesser der gelben Mitte. Dadurch bleiben beide Teile proportional zueinander. Weil background() in draw() steht, werden die vorherigen Größen gelöscht und die Blüten verändern ihre Größe sichtbar.
`,
  "2.4.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, lokale Variablen, Methoden und Zufallswerte.
Verwendung: Eine zufällige Höhe speicherst du zum Beispiel mit let hoehe1 = random(10, 70);. Mit hoehe1 * 8 vergrößerst du den Zufallswert für die Balkenhöhe. Die y-Position berechnest du mit 650 - hoehe1 * 8, damit der Balken trotz unterschiedlicher Höhe auf derselben Grundlinie endet.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche, entfernt die Konturen und stellt zehn Wiederholungen pro Sekunde ein. Danach wird draw() fortlaufend wiederholt. Bei jedem Durchlauf erzeugt das Programm fünf neue Zufallshöhen und zeichnet fünf verschiedenfarbige Balken. Dadurch verändern sich ihre Höhen fortlaufend.
Wichtige Tipps: Bei rect() bestimmen die ersten beiden Werte die x- und y-Position und die letzten beiden Werte Breite und Höhe. Weil Rechtecke von oben nach unten gezeichnet werden, muss die y-Position kleiner werden, wenn die Höhe größer wird. Deshalb wird dieselbe berechnete Höhe in 650 - hoehe1 * 8 und hoehe1 * 8 verwendet. So bleiben alle Balken unten auf einer Linie.
`,
  "2.4.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, eine lokale Variable, Methoden und Zufallswerte.
Verwendung: Eine zufällige Wolkenposition speicherst du mit let wolkeX = random(80, 580);. Mit wolkeX + random(-60, 200) verteilst du Regentropfen rund um die Wolke. Ein Tropfen entsteht mit rect(<x-Position>, <y-Position>, 4, <Höhe>);, wobei random(10, 70) seine zufällige Länge bestimmt.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche, entfernt die Konturen und stellt fünf Wiederholungen pro Sekunde ein. Danach wird draw() fortlaufend wiederholt. Bei jedem Durchlauf erhält die Wolke eine neue zufällige x-Position. Anschließend zeichnet das Programm Himmel, Boden, fünf zufällig verteilte Regentropfen und eine Wolke aus drei Ellipsen.
Wichtige Tipps: wolkeX bestimmt die horizontale Grundposition der gesamten Wolke. Die Ausdrücke wolkeX + 70 und wolkeX + 140 halten die drei Ellipsen in festen Abständen zusammen. Bei rect() bestimmen die ersten beiden Werte Position und die letzten beiden Werte Breite und Höhe. Weil wolkeX in draw() neu berechnet wird, springt die Wolke bei jeder Wiederholung an eine andere Stelle.
`,
  "2.5.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden und Zufallswerte.
Verwendung: Variablen ohne Startwert schreibst du zum Beispiel als let speedX; oder let rot;. In setup() weist du ihnen mit speedX = random(-3, 3); und rot = random(0, 255); zufällige Werte zu. Mit x = x + speedX; und y = y + speedY; veränderst du die Position bei jedem Durchlauf.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche und legt zufällige Geschwindigkeiten sowie eine zufällige Farbe fest. Danach wird draw() fortlaufend wiederholt. Zuerst färbt das Programm den Hintergrund dunkel und zeichnet eine farbige Ellipse an der Position x und y. Anschließend verändern speedX und speedY die Position, sodass sich die Ellipse in eine zufällige Richtung bewegt.
Wichtige Tipps: x bestimmt die horizontale und y die vertikale Position. Positive Werte für speedX bewegen die Ellipse nach rechts, negative nach links. Positive Werte für speedY bewegen sie nach unten, negative nach oben. Weil Geschwindigkeit und Farbe nur einmal in setup() festgelegt werden, bleiben sie während der Bewegung gleich.
`,
  "2.5.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden und Zufallswerte.
Verwendung: Für jeden Punkt speicherst du eine x- und y-Position, zum Beispiel mit let x1 = 400; und let y1 = 400;. In setup() weist du den Geschwindigkeiten mit sx1 = random(-5, 5); und sy1 = random(-5, 5); zufällige Werte zu. Die Farbe setzt du mit drei Farbvariablen ein, zum Beispiel fill(rot1, gruen1, blau1);.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche, zeichnet den dunklen Hintergrund und legt für jeden Punkt eine zufällige Geschwindigkeit und Farbe fest. Danach wird draw() fortlaufend wiederholt. Das Programm zeichnet drei farbige Punkte und verändert anschließend ihre x- und y-Positionen, sodass sie sich vom gleichen Startpunkt in unterschiedliche Richtungen bewegen.
Wichtige Tipps: x1, y1 bis x3, y3 speichern die Positionen der drei Punkte. sx verändert die horizontale und sy die vertikale Position. Positive Werte bewegen nach rechts oder unten, negative nach links oder oben. Weil background() nur in setup() steht, wird die Zeichenfläche nicht gelöscht und die Punkte hinterlassen farbige Spuren.
`,
  "2.5.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden, Parameter, Mausereignisse und Zufallswerte.
Verwendung: Eine eigene Funktion mit Parametern schreibst du zum Beispiel als function neueKreise(startX, startY) { ... }. Mit neueKreise(400, 400); übergibst du feste Startwerte. In mousePressed() ruft neueKreise(mouseX, mouseY); die Funktion mit der aktuellen Mausposition auf.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche, zeigt einen Hinweistext und ruft neueKreise(400, 400); auf. Die Funktion legt für drei Kreise gemeinsame Startpositionen sowie zufällige Geschwindigkeiten, Farben und Größen fest. draw() zeichnet und bewegt die Kreise fortlaufend. Bei einem Mausklick startet mousePressed() drei neue Kreise an der angeklickten Position.
Wichtige Tipps: startX und startY sind Parameter und übernehmen beim Funktionsaufruf die übergebenen Werte. mouseX und mouseY liefern die aktuelle Mausposition. Die Variablen für Position, Geschwindigkeit, Farbe und Größe gehören jeweils zusammen. Weil background() nur in setup() steht, bleiben die bewegten Kreise und die kleinen zufälligen Punkte als Spuren sichtbar.
`,
  "3.1.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Methoden, eine Bedingung und die Mausposition.
Verwendung: Eine Bedingung schreibst du so: if (<Bedingung>) { <Befehle>; }. Beispiel: if (mouseX > 400) { fill(60, 120, 230); }. Der Operator > bedeutet „größer als“.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt das Programm den Hintergrund grau und legt Rot als Kreisfarbe fest. Wenn sich die Maus rechts von x = 400 befindet, ersetzt das if-Statement die Farbe durch Blau. Danach zeichnet circle() den Kreis in der Mitte.
Wichtige Tipps: mouseX enthält die horizontale Position der Maus. Die Bedingung ist nur erfüllt, wenn mouseX größer als 400 ist. fill() muss vor circle() stehen, damit die gewählte Farbe verwendet wird. Da es kein else gibt, bleibt der Kreis links von der Mitte rot.
`,
  "3.1.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Methoden, eine Bedingung und die Mausposition.
Verwendung: Eine Bedingung schreibst du so: if (<Bedingung>) { <Befehle>; }. Beispiel: if (mouseY > 400) { background(255, 235, 120); fill(40, 170, 80); }. Der Operator > bedeutet „größer als“.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt das Programm den Hintergrund hellgrau und legt Rot als Kreisfarbe fest. Wenn sich die Maus unterhalb von y = 400 befindet, ändert das if-Statement den Hintergrund zu Hellgelb und die Kreisfarbe zu Grün. Danach zeichnet circle() den Kreis in der Mitte.
Wichtige Tipps: mouseY enthält die vertikale Position der Maus. Die y-Werte werden von oben nach unten größer, deshalb liegt mouseY > 400 in der unteren Hälfte der Zeichenfläche. Die beiden Befehle innerhalb der geschweiften Klammern werden gemeinsam ausgeführt. Da es kein else gibt, bleiben Hintergrund und Kreis in der oberen Hälfte hellgrau und rot.
`,
  "3.1.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Methoden, eine if/else-Bedingung und die Mausposition.
Verwendung: Eine Auswahl zwischen zwei Fällen schreibst du so: if (<Bedingung>) { <Befehle>; } else { <andere Befehle>; }. Beispiel: if (mouseX > 400) { ... } else { ... }. Der erste Block gilt bei einer wahren Bedingung, der else-Block in allen anderen Fällen.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Befindet sich die Maus rechts von x = 400, zeichnet das Programm einen blauen Hintergrund, weiße Schrift und den Text „Rechte Seite“. Andernfalls entstehen ein orangefarbener Hintergrund, dunkle Schrift und der Text „Linke Seite“. Zum Schluss zeichnet circle() den Kreis mit der zuletzt festgelegten Füllfarbe.
Wichtige Tipps: mouseX enthält die horizontale Mausposition. Bei mouseX > 400 wird der if-Block ausgeführt, sonst der else-Block. Es wird immer nur einer der beiden Blöcke ausgeführt. Weil fill() vor text() und circle() steht, haben Text und Kreis in jedem Programmzweig dieselbe Farbe.
`,
  "3.2.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Methoden, eine if/else-Bedingung und den Mausklick.
Verwendung: Den Zustand der Maustaste prüfst du mit mouseIsPressed. Eine Auswahl zwischen zwei Fällen schreibst du so: if (mouseIsPressed) { <Befehle>; } else { <andere Befehle>; }. Ist die Maustaste gedrückt, gilt der if-Block, sonst der else-Block.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt das Programm den Hintergrund dunkel. Bei gedrückter Maustaste legt das if-Statement Gelb als Kreisfarbe fest. Ohne Mausklick wählt der else-Block Grau. Danach zeichnet circle() den Kreis in der Mitte.
Wichtige Tipps: mouseIsPressed ist wahr, solange eine Maustaste gedrückt wird, und sonst falsch. Es wird immer nur einer der beiden Blöcke ausgeführt. fill() muss vor circle() stehen, damit der Kreis die gewählte Farbe erhält. Beim Loslassen der Maustaste wechselt der Kreis wieder zu Grau.
`,
  "3.2.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Methoden, eine if/else-if/else-Bedingung und die Mausposition.
Verwendung: Mehrere Fälle schreibst du so: if (<Bedingung>) { ... } else if (<weitere Bedingung>) { ... } else { ... }. Beispiel: if (mouseX < 200) { ... } else if (mouseX < 400) { ... }. Der Operator < bedeutet „kleiner als“.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Zuerst färbt das Programm den Hintergrund dunkel. Anschließend prüft es die horizontale Mausposition und wählt je nach Bereich Rot, Gelb, Grün oder Blau. Danach zeichnet circle() den Kreis in der Mitte mit der gewählten Farbe.
Wichtige Tipps: Die Bedingungen werden von oben nach unten geprüft. Sobald eine Bedingung stimmt, werden die weiteren Bedingungen übersprungen. Dadurch gilt Rot für x-Werte unter 200, Gelb von 200 bis unter 400, Grün von 400 bis unter 600 und Blau ab 600. Die Grenzwerte müssen deshalb in aufsteigender Reihenfolge stehen.
`,
  "3.2.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Methoden, Bedingungen, Mausposition, Mausklick und einen logischen Operator.
Verwendung: Zwei Bedingungen verbindest du mit &&. Beispiel: if (mouseIsPressed && mouseX < 400) { ... }. Der Operator && bedeutet „und“: Die Maustaste muss gedrückt sein und die Maus muss sich links von x = 400 befinden.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Das Programm prüft Mausklick und Mausposition. Mit Mausklick wird der Kreis links gelb und rechts pink; ohne Mausklick wird er links blau und rechts grün. In den beiden Klick-Fällen ändert sich zusätzlich der Hintergrund.
Wichtige Tipps: Die Bedingungen werden von oben nach unten geprüft. Die genaueste Bedingung mit Mausklick und linker Seite muss zuerst stehen. Sobald eine Bedingung stimmt, werden die weiteren Bedingungen übersprungen. mouseIsPressed prüft den Mausklick und mouseX < 400 die linke Hälfte der Zeichenfläche.
`,
  "3.3.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, lokale Variablen, Methoden und Zufallswerte.
Verwendung: Eine lokale Variable mit Zufallswert schreibst du zum Beispiel als let r = random(0, 255);. Mit random(<Minimum>, <Maximum>); erzeugst du einen zufälligen Wert. Die Variablen x, y und d speichern die zufällige Position und den Durchmesser des Kreises.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche und färbt den Hintergrund dunkel. Danach wird draw() fortlaufend wiederholt. Bei jedem Durchlauf entstehen neue Zufallswerte für Farbe, Position und Größe. Anschließend zeichnet circle(x, y, d); einen neuen Kreis auf die Zeichenfläche.
Wichtige Tipps: random(0, 255) erzeugt zufällige RGB-Farbwerte. random(0, 800) verteilt die Kreise über die gesamte Zeichenfläche. Die Variable d bestimmt den Durchmesser. Weil background() nur in setup() steht, wird die Zeichenfläche nicht bei jedem Durchlauf gelöscht und die Kreise bleiben sichtbar.
`,
  "3.3.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden, ein Mausereignis, Zufallswerte und einen Rechenoperator.
Verwendung: Die Position und Farbe speicherst du mit let flowerX = 400;, let flowerY = 430; und let flowerColor = 0;. In mousePressed() erhält die Blume mit random() eine neue Position. Mit flowerColor = (flowerColor + 60) % 255; erhöhst du den Farbwert und hältst ihn im Bereich von 0 bis 254.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Das Programm zeichnet Himmel, Boden, Stiel und eine Blume an der Position flowerX und flowerY. Bei einem Mausklick setzt mousePressed() die Blume an eine zufällige Stelle und verändert ihre Farbe.
Wichtige Tipps: flowerX bestimmt die horizontale und flowerY die vertikale Grundposition. Ausdrücke wie flowerX - 45 oder flowerY - 125 halten Blütenblätter und Stiel relativ zusammen. Der Operator % gibt den Rest einer Division zurück und verhindert hier, dass der Farbwert immer weiter wächst. Weil alle Blumenteile dieselben Grundvariablen verwenden, bewegen sie sich gemeinsam.
`,
  "3.3.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden, Bedingungen, Mausereignisse und logische Operatoren.
Verwendung: Einen Wahrheitswert speicherst du zum Beispiel mit let sichtbar = true;. Den Abstand zwischen Mausklick und Blume berechnest du mit dist(mouseX, mouseY, flowerX, flowerY - 90);. Die Trefferbedingung if (sichtbar && abstand < 48) { ... } prüft, ob die Blume sichtbar ist und der Klick nah genug liegt. !sichtbar bedeutet „nicht sichtbar“.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach zeichnet draw() Himmel, Boden, Punktestand und – solange sichtbar wahr ist – die Blume. Bei einem Treffer erhöht mousePressed() die Punkte, blendet die Blume aus und startet die Pause. Während der Pause zählt pause herunter; danach erscheint die Blume an einer neuen zufälligen Position.
Wichtige Tipps: sichtbar steuert, ob die Blume gezeichnet wird. pause speichert die Wartezeit in Durchläufen von draw(). dist() gibt den Abstand zwischen zwei Punkten zurück. max(0, punkte - 1) zieht bei einem Fehlklick einen Punkt ab, verhindert aber einen negativen Punktestand. Die genauere Trefferbedingung muss vollständig erfüllt sein, bevor Punkte vergeben werden.
`,
  "3.4.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, lokale Variablen, Methoden, die Mausposition und den Bildzähler.
Verwendung: Eine Wellenbewegung schreibst du so: sin(frameCount * <Tempo>) * <Ausschlag>. Beispiel: let zielX = 400 + sin(frameCount * 0.03) * 170;. Für die y-Position wird cos() verwendet. Den Abstand berechnest du mit dist(<x1>, <y1>, <x2>, <y2>), hier zwischen Maus und Ziel. nfc(abstand, 0) zeigt ihn ohne Nachkommastellen an.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Das Programm zeichnet einen dunkelblauen Hintergrund und berechnet die neue Zielposition sowie den Abstand zur Maus. Anschließend zeigt es den Abstand als Text, das bewegte gelbe Ziel und einen kleinen hellblauen Kreis an der Mausposition.
Wichtige Tipps: frameCount zählt die gezeichneten Bilder. sin() und cos() liefern Werte zwischen −1 und 1. Die Faktoren 170 und 120 bestimmen den Ausschlag um die Mitte bei 400; 0.03 und 0.04 bestimmen das Bewegungstempo. Bei dist() gehören jeweils zwei Werte zu einem Punkt. "Abstand: " + nfc(abstand, 0) verbindet den Text mit der formatierten Zahl.
`,
  "3.4.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, lokale Variablen, Methoden, eine if/else-Bedingung, die Mausposition und den Bildzähler.
Verwendung: Eine bewegte Zielposition schreibst du so: let zielX = <Mitte> + sin(frameCount * <Tempo>) * <Ausschlag>;. Beispiel: let zielX = 400 + sin(frameCount * 0.025) * 210;. Mit dist(mouseX, mouseY, zielX, zielY) berechnest du den Abstand. Die Auswahl schreibst du als if (<Bedingung>) { ... } else { ... }, hier mit abstand < 80.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Das Programm zeichnet einen grünen Hintergrund und berechnet die bewegte Zielposition sowie den Abstand zur Maus. Liegt die Maus näher als 80 Pixel am Ziel, erscheinen ein brauner Hintergrund, ein größerer gelber Kreis und „Schatz gefunden!“. Sonst bleibt das Ziel kleiner. Zum Schluss zeichnet das Programm einen kleinen roten Kreis an der Mausposition.
Wichtige Tipps: frameCount zählt die gezeichneten Bilder; sin() und cos() erzeugen die Wellenbewegung. 210 und 140 bestimmen den Ausschlag, 0.025 und 0.03 das Tempo. Bei dist() geben jeweils zwei Werte einen Mittelpunkt an. abstand < 80 prüft die Nähe, keinen Mausklick. Bei genau 80 Pixeln gilt der else-Block. Die Treffergrenze ist unabhängig vom gezeichneten Kreisdurchmesser.
`,
  "3.4.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, lokale Variablen, Methoden, eine if/else-if/else-Bedingung, die Mausposition und den Bildzähler.
Verwendung: Eine bewegte Position schreibst du so: let kernX = <Mitte> + sin(frameCount * <Tempo>) * <Ausschlag>;. Beispiel: let kernX = 400 + sin(frameCount * 0.02) * 170;. Mit dist(mouseX, mouseY, kernX, kernY) berechnest du den Abstand. Mehrere Bereiche prüfst du mit if (<Bedingung>) { ... } else if (<weitere Bedingung>) { ... } else { ... }.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Das Programm zeichnet einen dunklen Hintergrund und berechnet die bewegte Kernposition sowie den Abstand zur Maus. Unter 90 Pixeln erscheint ein großer roter Kreis mit „ZU NAH!“, von 90 bis unter 220 Pixeln ein gelber Kreis und ab 220 Pixeln ein kleiner blauer Kreis. Zum Schluss zeichnet es einen weißen Kreis an der Mausposition.
Wichtige Tipps: sin() und cos() erzeugen mit frameCount die Wellenbewegung. 170 und 130 bestimmen den Ausschlag, 0.02 und 0.018 das Tempo. Bei dist() geben jeweils zwei Werte die Position eines Punktes an. Die Bedingungen werden von oben nach unten geprüft; deshalb muss abstand < 90 vor abstand < 220 stehen. Es gilt nur der erste passende Block. Die Grenzen prüfen den Abstand zum Mittelpunkt, keinen Mausklick.
`,
  "3.5.1": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden, Bedingungen, ein Mausereignis und einen logischen Operator.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiel: let speed = 4;. Mit zielX = zielX + speed; bewegst du das Ziel. Zwei Bedingungen verbindest du mit if (<Bedingung> || <weitere Bedingung>) { ... }, hier zielX > 760 || zielX < 40. speed = -speed; kehrt die Richtung um.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Das Programm zeichnet den dunklen Hintergrund, verändert die Zielposition und prüft die seitlichen Grenzen. Anschließend zeigt es den orangefarbenen Kreis, den Punktestand und den Hinweistext. Bei einem Mausklick berechnet mousePressed() mit dist() den Abstand zum Ziel. Liegt er unter 45 Pixeln, werden zehn Punkte hinzugefügt.
Wichtige Tipps: || bedeutet „oder“: Eine der beiden Grenzbedingungen muss stimmen. Ein positives speed bewegt nach rechts, ein negatives nach links. Bei circle() geben die ersten beiden Werte den Mittelpunkt und der dritte den Durchmesser an. Der Durchmesser 90 ergibt einen Radius von 45; genau 45 Pixel zählen hier nicht als Treffer. nfc(punkte, 0) zeigt den Punktestand ohne Nachkommastellen. Die Grenzen 40 und 760 beziehen sich auf den Mittelpunkt, nicht den Kreisrand.
`,
  "3.5.2": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, globale und lokale Variablen, Methoden, eine Bedingung, ein Mausereignis und Zufallswerte.
Verwendung: Eine Variable schreibst du so: let <Variablenname> = <Wert der Variable>;. Beispiel: let punkte = 0;. Die bewegte Position berechnest du mit let drawX = zielX + sin(frameCount * 0.08) * 18; und entsprechend mit cos() für drawY. In function mousePressed() { ... } prüfst du einen Klick mit if (abstand < 40) { ... }.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Das Programm zeichnet den dunklen Hintergrund, das orangefarbene Ziel und den Punktestand. Das Ziel bewegt sich in einem kleinen Kreis um seine Grundposition. Bei einem Mausklick berechnet mousePressed() die aktuelle Zielposition und den Abstand zur Maus. Bei einem Treffer kommen zehn Punkte hinzu und das Ziel erhält eine neue zufällige Grundposition.
Wichtige Tipps: zielX und zielY speichern die Grundposition; drawX und drawY die bewegte Position. Die lokalen Variablen werden in beiden Funktionen getrennt erstellt, deshalb muss die Bewegungsformel übereinstimmen. Bei dist() gehören jeweils zwei Werte zu einem Punkt. Der Kreisdurchmesser 80 ergibt den Trefferradius 40; genau 40 Pixel zählen nicht. nfc(punkte, 0) zeigt die Punkte ohne Nachkommastellen. Fehlklicks verändern nichts.
`,
  "3.5.3": `
Werkzeuge: In diesem Auftrag verwenden wir Funktionen, Variablen, Methoden, Bedingungen, ein Mausereignis, Zufallswerte und logische Operatoren.
Verwendung: Zwei Bedingungen verbindest du so: if (<Bedingung> || <weitere Bedingung>) { ... }. Beispiel: if (ziel1X > 765 || ziel1X < 35) { v1X = -v1X; }. Eine Trefferprüfung speicherst du mit let hit1 = dist(mouseX, mouseY, ziel1X, ziel1Y) < 35;. return; beendet den aktuellen Funktionsaufruf.
Zusammenspiel: Beim Start erstellt setup() einmal eine 800 × 800 Pixel große Zeichenfläche. Danach wird draw() fortlaufend wiederholt. Es prüft zuerst Sieg und Niederlage, bewegt dann zwei Ziele, kehrt ihre Richtung an den Grenzen um und zeigt den Spielstand. Ein Treffer bringt zwölf Punkte und versetzt das getroffene Ziel zufällig. Ein Fehlklick zählt einen Fehlversuch und zieht sechs Punkte ab. Nach zwölf Treffern erscheint „GEWONNEN!“, nach acht Fehlklicks „GAME OVER“.
Wichtige Tipps: || bedeutet „oder“, >= „größer oder gleich“. v1X = -v1X kehrt die horizontale Richtung um; bei der y-Geschwindigkeit funktioniert es genauso. Durchmesser 70 ergibt Trefferradius 35; genau 35 Pixel zählen nicht. max(0, punkte - 6) verhindert negative Punkte, nfc(punkte, 0) zeigt sie ohne Nachkommastellen. return verhindert nach Spielende weitere Bewegung und Klickauswertung, beendet aber nicht die Wiederholung von draw(). Treffen beide Ziele gleichzeitig, zählt der Klick einmal und beide werden versetzt. Die zusätzlichen Zeichen nach der letzten Funktionsklammer gehören nicht zum eigenständigen Sketch und müssen dort entfernt werden.
`,
};

// Englische IT-Hilfe (Sprache "English" in den Einstellungen)
const technicalExplanationEn = {
  "1.1.1": `
Tools: In this task we use functions and methods.
Usage: You create a canvas like this: createCanvas(<width>, <height>);. Example: createCanvas(800, 800);. With background(<red>, <green>, <blue>); you color the background. Example: background(250, 0, 0); makes red.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. Each time, background(250, 0, 0); colors the whole canvas red.
Important tips: setup() runs only once at the start, draw() runs again and again. Every command ends with a semicolon. The three values in background() stand for red, green and blue, and each one goes from 0 to 255. Make sure that every opening bracket { is closed again with }.
`,
  "1.1.2": `
Tools: In this task we use functions and methods.
Usage: With only one value in background(<brightness>); you color the background gray. Example: background(80); makes dark gray. You write an ellipse like this: ellipse(<x-position>, <y-position>, <width>, <height>);. Example: ellipse(400, 400, 250, 250);. With fill(<red>, <green>, <blue>); you set its color first.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(80); colors the background dark gray. Then fill(255, 220, 0); sets the color to yellow and ellipse(400, 400, 250, 250); draws a yellow circle in the middle.
Important tips: With only one value in background(), 0 is black and 255 is white. The middle of the canvas is at x = 400 and y = 400. fill() must come before the ellipse so that it gets the color you want. If the width and height are the same, you get a circle.
`,
  "1.1.3": `
Tools: In this task we use functions and methods.
Usage: You write a circle like this: circle(<x-position>, <y-position>, <diameter>);. You create a rectangle with rect(<x>, <y>, <width>, <height>);. You write text with text("<text>", <x>, <y>); and you set the font size first with textSize(<size>);. Example: textSize(64);.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(180, 220, 255); colors the background light blue. Then the program draws a yellow sun, an orange ground and the dark text "Hallo, p5!" ("Hello, p5!").
Important tips: In rect() the first two values give the top left corner. In text() the text must be in quotation marks. textSize() must come before text(). fill() also sets the color of the text, so there is a dark fill(40, 40, 60); before the text.
`,
  "1.2.1": `
Tools: In this task we use functions and methods.
Usage: You write a rectangle like this: rect(<x-position>, <y-position>, <width>, <height>);. Example: rect(90, 250, 180, 300);. With fill(<red>, <green>, <blue>); you set its color first. Example: fill(255, 0, 0); makes red.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(245); colors the background light gray. Then the program draws a red, a green and a blue rectangle next to each other.
Important tips: In rect() the first two values set the x- and y-position. The last two values set the width and height. fill() must come before each rectangle so that it gets the color you want. Different x-positions place the rectangles next to each other.
`,
  "1.2.2": `
Tools: In this task we use functions and methods.
Usage: You write an ellipse like this: ellipse(<x-position>, <y-position>, <width>, <height>);. Example: ellipse(200, 280, 200, 200);. With fill(<red>, <green>, <blue>); you set its color first. Example: fill(255, 255, 0); makes yellow.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(40); colors the background dark gray. Then the program draws six round ellipses in different colors in two rows.
Important tips: In ellipse() the first two values set the x- and y-position. The last two values set the width and height. If the width and height are the same, you get a circle. fill() must come before each ellipse so that it gets the color you want.
`,
  "1.2.3": `
Tools: In this task we use functions and methods.
Usage: You write a triangle like this: triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);. Example: triangle(90, 560, 280, 260, 470, 560);. The three x- and y-values set the corner points. You create rectangles with rect(<x>, <y>, <width>, <height>);.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(20, 20, 40); colors the background dark blue. Then the program draws a green ground, two mountains in different colors and an orange house with a light door.
Important tips: In triangle() you set the shape with three corner points. Each corner point has an x- and a y-position. fill() must come before each shape so that it gets the color you want. The methods run from top to bottom, so shapes drawn later appear in front of shapes drawn earlier.
`,
  "1.3.1": `
Tools: In this task we use functions and methods.
Usage: You write an ellipse like this: ellipse(<x-position>, <y-position>, <width>, <height>);. Example: ellipse(120, 120, 90, 90);. You create a rectangle with rect(<x>, <y>, <width>, <height>); and a triangle with triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(230, 245, 255); colors the background light blue. Then the program draws a yellow sun, two white clouds, a green ground and a red house with a brown roof.
Important tips: In ellipse() the first two values set the x- and y-position and the last two values set the width and height. In triangle() you set three corner points. fill() must come before each shape. Shapes drawn later appear in front of shapes drawn earlier.
`,
  "1.3.2": `
Tools: In this task we use functions and methods.
Usage: You write a rectangle like this: rect(<x-position>, <y-position>, <width>, <height>);. Example: rect(280, 370, 260, 220);. You create an ellipse with ellipse(<x>, <y>, <width>, <height>); and a triangle with triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(180, 225, 255); colors the background light blue. Then the program draws a green ground, a yellow sun and a red house with a brown roof, a door and two light blue windows.
Important tips: In rect() the first two values set the x- and y-position and the last two values set the width and height. fill() must come before each shape. Equal sizes and matching x-positions make sure that the windows are evenly spaced. Shapes drawn later appear in front of shapes drawn earlier.
`,
  "1.3.3": `
Tools: In this task we use functions and methods.
Usage: You write a rectangle like this: rect(<x-position>, <y-position>, <width>, <height>);. Example: rect(260, 390, 300, 200);. You create an ellipse with ellipse(<x>, <y>, <width>, <height>); and a triangle with triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(165, 220, 255); colors the background light blue. Then the program draws a green ground, a yellow sun, two white clouds, a big red house and a small yellow house with roofs, doors and windows.
Important tips: In rect() the first two values set the x- and y-position and the last two values set the width and height. In ellipse() the first two values give the center. fill() must come before each shape. Shapes drawn later appear in front of shapes drawn earlier.
`,
  "1.4.1": `
Tools: In this task we use functions, variables and methods.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Example: let x = 300;. You write an ellipse with ellipse(<x-position>, <y-position>, <width>, <height>);. With x - 20 and x + 20 you can change positions relative to the variable.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(40, 60, 110); colors the background dark blue. Then the program draws a light ground and a snowman made of three white ellipses. The variable x sets his horizontal position. After that, the eyes and an orange nose are drawn relative to x.
Important tips: Here the variable x stores the horizontal position of the snowman. In ellipse() the first two values give the center and the last two values give the width and height. With x - 20 and x + 20 you move shapes to the left or right of the base position. If x changes, all parts that depend on it move together.
`,
  "1.4.2": `
Tools: In this task we use functions, variables and methods.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Examples: let x = 400; and let y = 520;. With x - 20, x + 20 or y - 160 you can change positions relative to these variables.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(40, 60, 110); colors the background dark blue. Then the program draws the moon, the ground and a snowman. The variables x and y set his base position. Head, body, eyes, buttons, hat and nose are placed relative to these two variables.
Important tips: The variable x sets the horizontal and y the vertical base position of the snowman. In ellipse() the first two values give the center and the last two values give the width and height. With expressions like x - 20, x + 20 or y - 295 you move single parts relative to the base position. If you change x or y, all parts that depend on them move together.
`,
  "1.4.3": `
Tools: In this task we use functions, variables and methods.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Examples: let x = 400;, let y = 540; and let groesse = 200;. With expressions like groesse * 0.75 or y - groesse * 1.3 you can calculate size and position relative to the variable.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(40, 60, 110); colors the background dark blue. Then the program draws the moon, the ground and a snowman. The variables x and y set his base position, while groesse controls the size of his parts and the space between them.
Important tips: The variables x and y set the base position and groesse ("groesse" is German for "size") is used as a shared size value. In ellipse() the first two values give the center and the last two values give the width and height. With calculations like groesse * 0.75, parts get smaller in proportion to the base size. If you change groesse, all sizes and positions that depend on it change together.
`,
  "1.5.1": `
Tools: In this task we use functions and methods.
Usage: With noStroke(); you remove the outline of the shapes drawn after it. You write an ellipse like this: ellipse(<x-position>, <y-position>, <width>, <height>);. Example: ellipse(400, 400, 420, 420);. With fill(<red>, <green>, <blue>); you set the fill color first.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(255, 230, 150); colors the background light yellow. Then the program draws a face, two white eyes, two blue irises and two black pupils.
Important tips: In ellipse() the first two values set the center and the last two values set the width and height. fill() must come before each ellipse so that it gets the color you want. noStroke() removes the outlines. Ellipses drawn later appear in front of ellipses drawn earlier.
`,
  "1.5.2": `
Tools: In this task we use functions and methods.
Usage: With noStroke(); you remove the outline of the shapes. You write an ellipse like this: ellipse(<x-position>, <y-position>, <width>, <height>);. Example: ellipse(400, 400, 420, 420);. You create a triangle with triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(255, 230, 150); colors the background light yellow. Then the program draws the ears and the face, and after that the eyes, irises, pupils, cheeks, nose and mouth.
Important tips: In ellipse() the first two values set the center and the last two values set the width and height. In triangle() you set three corner points. fill() must come before each shape. Shapes drawn later appear in front of shapes drawn earlier, so the ears are drawn before the face.
`,
  "1.5.3": `
Tools: In this task we use functions, variables and methods.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Examples: let x = 400; and let y = 430;. With expressions like x - 80, x + 80 or y - 50 you place shapes relative to these variables.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(120, 200, 255); colors the background light blue. Then the program draws a green ground and a face with hair, ears, eyes, cheeks, nose, mouth and a party hat. The variables x and y set the base position of the face.
Important tips: The variable x sets the horizontal and y the vertical base position. In ellipse() the first two values give the center and the last two values give the width and height. With calculations like x - 200 or y - 370 you move single parts relative to the base position. If you change x or y, all face parts that depend on them move together.
`,
  "2.1.1": `
Tools: In this task we use functions, a variable and methods.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Example: let x = 120;. With x = x + 2; you increase the stored value by 2 in every round.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, the program draws a light blue background and a green ground. Then the yellow circle is drawn at the x-position stored in the variable x. After that, x = x + 2; increases the position, so the circle moves to the right.
Important tips: The variable x sets the horizontal position of the circle. In ellipse() the first two values give the center and the last two values give the width and height. Because draw() is repeated all the time, x = x + 2; keeps changing the position. A bigger added value makes the circle move to the right faster.
`,
  "2.1.2": `
Tools: In this task we use functions, variables and methods.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Examples: let cloudX = 0; and let speed = 3;. With cloudX = cloudX + speed; you increase the x-position of the cloud by the value of the speed in every round.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, background(165, 220, 255); colors the background light blue. Then the program draws a cloud made of three white ellipses and a green ground below it. After that, cloudX = cloudX + speed; changes the position, so the cloud moves to the right.
Important tips: The variable cloudX sets the horizontal position of the cloud and speed sets how fast it moves. The expressions cloudX + 55 and cloudX + 110 keep the three ellipses at a fixed distance from each other. Because draw() is repeated all the time, the whole cloud moves together. A bigger value for speed makes it move to the right faster.
`,
  "2.1.3": `
Tools: In this task we use functions, variables and methods.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Examples: let balloonY = 800; and let speedY = 2.5;. With balloonY = balloonY - speedY; you decrease the y-position of the balloon by the value of the speed in every round.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, the program draws a light blue background and a green ground. Then the balloon, the string and the basket are drawn. After that, balloonY = balloonY - speedY; changes the position, so the whole balloon rises up.
Important tips: The variable balloonY sets the vertical position and speedY sets the speed. Smaller y-values are higher up on the canvas. The expressions balloonY + 55 and balloonY + 95 keep the string and the basket in place relative to the balloon. stroke(80); turns on the outline for the string, while noStroke(); removes it again for the shapes.
`,
  "2.2.1": `
Tools: In this task we use functions, local variables, methods and random values.
Usage: You write a local variable inside a function, for example let rot = random(0, 255);. With random(<minimum>, <maximum>); you create a random value in every round. Example: random(10, 40) gives a random size between 10 and 40.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once, colors the background dark and removes the outlines. After that, draw() is repeated over and over. In every round, new random values for red, green and blue are created. Then the program draws an ellipse with a random size and color at a random position.
Important tips: The variables rot, gruen and blau (German for red, green and blue) only work inside draw(), because they are created there. random(800) creates a random position between 0 and 800. Because background() is only in setup(), the canvas is not cleared in every round and the ellipses stay visible.
`,
  "2.2.2": `
Tools: In this task we use functions, variables, methods and random values.
Usage: You write a variable without a starting value like this, for example: let x1;. Later you give it a random value with x1 = random(100, 700);. With commands like x1 = x1 + 3; or x2 = x2 - 3; you change its position in every round.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once and sets random x- and y-positions for all three dots. After that, draw() is repeated over and over. The program draws a red, a green and a blue dot. Then their positions change, so the dots move diagonally in different directions.
Important tips: The variables x1, y1, x2, y2, x3 and y3 store the positions of the three dots. A plus value moves a dot to the right or down, a minus value moves it to the left or up. Because background() is only in setup(), the canvas is not cleared and the moving dots leave visible trails.
`,
  "2.2.3": `
Tools: In this task we use functions, local variables, methods, mouse positions and random values.
Usage: You use the current mouse position with mouseX and mouseY. With mouseX + random(-30, 30) and mouseY + random(-30, 30) you spread the ellipses randomly around the mouse pointer. random(10, 50) creates a random width and height between 10 and 50.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once, colors the background white and removes the outlines. After that, draw() is repeated over and over. In every round, new random values for red, green and blue are created. Then the program draws an ellipse with a random color and size near the mouse pointer.
Important tips: mouseX gives the horizontal and mouseY the vertical mouse position. Random values between −30 and 30 move each ellipse a little bit around the mouse pointer. Because background() is only in setup(), the canvas is not cleared in every round and the ellipses form a colorful trail when you move the mouse.
`,
  "2.3.1": `
Tools: In this task we use functions, a variable and methods.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Example: let x = 0;. With x = x + 3; you increase the stored value by 3 in every round. You create a triangle with triangle(<x1>, <y1>, <x2>, <y2>, <x3>, <y3>);.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, the program draws a blue sky and darker water. Then an orange ellipse and a triangle appear, which together form a boat. After that, x = x + 3; increases the position, so the boat moves to the right.
Important tips: The variable x sets the horizontal position of the whole boat. The expressions x - 55 and x - 105 place the triangle relative to the ellipse. If you change x, both shapes move together. Because background() is in draw(), the canvas is drawn again in every round and no trails appear.
`,
  "2.3.2": `
Tools: In this task we use functions, variables, methods and random values.
Usage: You store the positions of the fish with let fish1X = 0; and let fish2X = 800;. With fish1X = fish1X + 3; you move the first fish to the right and with fish2X = fish2X - 2; the second fish to the left. You create a random bubble size with let blase = random(5, 20); ("blase" is German for "bubble").
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once and removes the outlines. After that, draw() is repeated over and over. First, the program draws the water and the sea floor. Then two fish with eyes appear, which move in opposite directions. In every round, a bubble with a random size is also drawn at a random position.
Important tips: fish1X and fish2X set the horizontal positions of the two fish. Expressions like fish1X - 55 or fish2X + 55 keep the tail and the eye in place relative to each body. A plus value moves to the right, a minus value to the left. Because background() is in draw(), the canvas is drawn again all the time and no trails appear.
`,
  "2.3.3": `
Tools: In this task we use functions, variables, methods and random values.
Usage: You write variables without a starting value, for example as let y1; or let speed1;. In setup() you give them random values with y1 = random(100, 550); and speed1 = random(1, 6);. You set the color of a fish with three color variables, for example fill(rot1, gruen1, blau1);.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once and sets a random height, speed and color for each fish. After that, draw() is repeated over and over. The program draws the water, the sea floor, three fish in different colors and a random bubble. Then speed1, speed2 and speed3 increase the x-positions, so the fish swim to the right at different speeds.
Important tips: x1, x2 and x3 store the horizontal positions, while y1, y2 and y3 set the heights. The variables speed1, speed2 and speed3 control the different speeds. Expressions like x1 - 55 and y1 - 35 keep the tail in place relative to the body. The random values are set only once in setup() and stay the same while the fish move.
`,
  "2.4.1": `
Tools: In this task we use functions, local variables, methods and random values.
Usage: With frameRate(<number>); you set how often draw() is repeated per second. Example: frameRate(10);. You store random sizes in local variables, for example let groesse1 = random(10, 70);. With groesse1 * 2 you draw a shape twice as big as the stored value.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once, removes the outlines and sets ten repetitions per second. After that, draw() is repeated over and over. First, the program draws the sky, the ground and three stems. Then three colorful blossoms appear, each with a random size and a yellow center.
Important tips: groesse1, groesse2 and groesse3 ("groesse" is German for "size") get new random values in every round. With groesse * 2 the outer blossoms are twice as wide as the yellow center. This keeps both parts in proportion to each other. Because background() is in draw(), the old sizes are cleared and you can see the blossoms change their size.
`,
  "2.4.2": `
Tools: In this task we use functions, local variables, methods and random values.
Usage: You store a random height, for example, with let hoehe1 = random(10, 70); ("hoehe" is German for "height"). With hoehe1 * 8 you make the random value bigger for the height of the bar. You calculate the y-position with 650 - hoehe1 * 8, so that every bar ends on the same base line, even if the heights are different.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once, removes the outlines and sets ten repetitions per second. After that, draw() is repeated over and over. In every round, the program creates five new random heights and draws five bars in different colors. This way, their heights keep changing.
Important tips: In rect() the first two values set the x- and y-position and the last two values set the width and height. Because rectangles are drawn from top to bottom, the y-position must get smaller when the height gets bigger. That is why the same calculated height is used in 650 - hoehe1 * 8 and hoehe1 * 8. This keeps all bars on one line at the bottom.
`,
  "2.4.3": `
Tools: In this task we use functions, a local variable, methods and random values.
Usage: You store a random cloud position with let wolkeX = random(80, 580); ("wolke" is German for "cloud"). With wolkeX + random(-60, 200) you spread raindrops around the cloud. A drop is made with rect(<x-position>, <y-position>, 4, <height>);, where random(10, 70) sets its random length.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once, removes the outlines and sets five repetitions per second. After that, draw() is repeated over and over. In every round, the cloud gets a new random x-position. Then the program draws the sky, the ground, five randomly placed raindrops and a cloud made of three ellipses.
Important tips: wolkeX sets the horizontal base position of the whole cloud. The expressions wolkeX + 70 and wolkeX + 140 keep the three ellipses together at fixed distances. In rect() the first two values set the position and the last two values set the width and height. Because wolkeX is calculated again in draw(), the cloud jumps to a different place in every round.
`,
  "2.5.1": `
Tools: In this task we use functions, variables, methods and random values.
Usage: You write variables without a starting value, for example as let speedX; or let rot;. In setup() you give them random values with speedX = random(-3, 3); and rot = random(0, 255);. With x = x + speedX; and y = y + speedY; you change the position in every round.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once and sets random speeds and a random color. After that, draw() is repeated over and over. First, the program colors the background dark and draws a colorful ellipse at the position x and y. Then speedX and speedY change the position, so the ellipse moves in a random direction.
Important tips: x sets the horizontal and y the vertical position. Positive values for speedX move the ellipse to the right, negative values to the left. Positive values for speedY move it down, negative values up. Because the speed and the color are set only once in setup(), they stay the same while the ellipse moves.
`,
  "2.5.2": `
Tools: In this task we use functions, variables, methods and random values.
Usage: For each dot you store an x- and a y-position, for example with let x1 = 400; and let y1 = 400;. In setup() you give the speeds random values with sx1 = random(-5, 5); and sy1 = random(-5, 5);. You set the color with three color variables, for example fill(rot1, gruen1, blau1);.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once, draws the dark background and sets a random speed and color for each dot. After that, draw() is repeated over and over. The program draws three colorful dots and then changes their x- and y-positions, so they move from the same starting point in different directions.
Important tips: x1, y1 to x3, y3 store the positions of the three dots. sx changes the horizontal and sy the vertical position. Positive values move to the right or down, negative values to the left or up. Because background() is only in setup(), the canvas is not cleared and the dots leave colorful trails.
`,
  "2.5.3": `
Tools: In this task we use functions, variables, methods, parameters, mouse events and random values.
Usage: You write your own function with parameters, for example as function neueKreise(startX, startY) { ... } ("neueKreise" is German for "new circles"). With neueKreise(400, 400); you pass fixed starting values. In mousePressed(), neueKreise(mouseX, mouseY); calls the function with the current mouse position.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once, shows a hint text and calls neueKreise(400, 400);. The function sets shared starting positions and random speeds, colors and sizes for three circles. draw() keeps drawing and moving the circles. When you click the mouse, mousePressed() starts three new circles at the position you clicked.
Important tips: startX and startY are parameters and take the values that are passed in when the function is called. mouseX and mouseY give the current mouse position. The variables for position, speed, color and size belong together. Because background() is only in setup(), the moving circles and the small random dots stay visible as trails.
`,
  "3.1.1": `
Tools: In this task we use functions, methods, a condition and the mouse position.
Usage: You write a condition like this: if (<condition>) { <commands>; }. Example: if (mouseX > 400) { fill(60, 120, 230); }. The operator > means "greater than".
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, the program colors the background gray and sets red as the circle color. If the mouse is to the right of x = 400, the if statement changes the color to blue. After that, circle() draws the circle in the middle.
Important tips: mouseX holds the horizontal position of the mouse. The condition is only true if mouseX is greater than 400. fill() must come before circle() so that the chosen color is used. Because there is no else, the circle stays red on the left side of the middle.
`,
  "3.1.2": `
Tools: In this task we use functions, methods, a condition and the mouse position.
Usage: You write a condition like this: if (<condition>) { <commands>; }. Example: if (mouseY > 400) { background(255, 235, 120); fill(40, 170, 80); }. The operator > means "greater than".
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, the program colors the background light gray and sets red as the circle color. If the mouse is below y = 400, the if statement changes the background to light yellow and the circle color to green. After that, circle() draws the circle in the middle.
Important tips: mouseY holds the vertical position of the mouse. The y-values get bigger from top to bottom, so mouseY > 400 is in the lower half of the canvas. The two commands inside the curly brackets run together. Because there is no else, the background and the circle stay light gray and red in the upper half.
`,
  "3.1.3": `
Tools: In this task we use functions, methods, an if/else condition and the mouse position.
Usage: You write a choice between two cases like this: if (<condition>) { <commands>; } else { <other commands>; }. Example: if (mouseX > 400) { ... } else { ... }. The first block runs when the condition is true, the else block runs in all other cases.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. If the mouse is to the right of x = 400, the program draws a blue background, white letters and the text "Rechte Seite" ("Right side"). Otherwise, it draws an orange background, dark letters and the text "Linke Seite" ("Left side"). At the end, circle() draws the circle with the fill color that was set last.
Important tips: mouseX holds the horizontal mouse position. If mouseX > 400, the if block runs, otherwise the else block runs. Only one of the two blocks runs at a time. Because fill() comes before text() and circle(), the text and the circle have the same color in each branch of the program.
`,
  "3.2.1": `
Tools: In this task we use functions, methods, an if/else condition and the mouse click.
Usage: You check the state of the mouse button with mouseIsPressed. You write a choice between two cases like this: if (mouseIsPressed) { <commands>; } else { <other commands>; }. If the mouse button is pressed, the if block runs, otherwise the else block runs.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, the program colors the background dark. While the mouse button is pressed, the if statement sets yellow as the circle color. Without a mouse click, the else block chooses gray. After that, circle() draws the circle in the middle.
Important tips: mouseIsPressed is true as long as a mouse button is pressed, and false otherwise. Only one of the two blocks runs at a time. fill() must come before circle() so that the circle gets the chosen color. When you let go of the mouse button, the circle turns gray again.
`,
  "3.2.2": `
Tools: In this task we use functions, methods, an if/else-if/else condition and the mouse position.
Usage: You write several cases like this: if (<condition>) { ... } else if (<another condition>) { ... } else { ... }. Example: if (mouseX < 200) { ... } else if (mouseX < 400) { ... }. The operator < means "less than".
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, the program colors the background dark. Then it checks the horizontal mouse position and chooses red, yellow, green or blue depending on the area. After that, circle() draws the circle in the middle with the chosen color.
Important tips: The conditions are checked from top to bottom. As soon as one condition is true, the other conditions are skipped. So red is used for x-values below 200, yellow from 200 to below 400, green from 400 to below 600 and blue from 600 on. That is why the limits must be in increasing order.
`,
  "3.2.3": `
Tools: In this task we use functions, methods, conditions, the mouse position, the mouse click and a logical operator.
Usage: You connect two conditions with &&. Example: if (mouseIsPressed && mouseX < 400) { ... }. The operator && means "and": the mouse button must be pressed and the mouse must be to the left of x = 400.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. The program checks the mouse click and the mouse position. With a mouse click, the circle turns yellow on the left and pink on the right; without a mouse click, it turns blue on the left and green on the right. In the two click cases, the background changes too.
Important tips: The conditions are checked from top to bottom. The most exact condition, with mouse click and left side, must come first. As soon as one condition is true, the other conditions are skipped. mouseIsPressed checks the mouse click and mouseX < 400 checks the left half of the canvas.
`,
  "3.3.1": `
Tools: In this task we use functions, local variables, methods and random values.
Usage: You write a local variable with a random value, for example as let r = random(0, 255);. With random(<minimum>, <maximum>); you create a random value. The variables x, y and d store the random position and the diameter of the circle.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once and colors the background dark. After that, draw() is repeated over and over. In every round, new random values for color, position and size are created. Then circle(x, y, d); draws a new circle on the canvas.
Important tips: random(0, 255) creates random RGB color values. random(0, 800) spreads the circles over the whole canvas. The variable d sets the diameter. Because background() is only in setup(), the canvas is not cleared in every round and the circles stay visible.
`,
  "3.3.2": `
Tools: In this task we use functions, variables, methods, a mouse event, random values and a math operator.
Usage: You store the position and the color with let flowerX = 400;, let flowerY = 430; and let flowerColor = 0;. In mousePressed(), the flower gets a new position with random(). With flowerColor = (flowerColor + 60) % 255; you increase the color value and keep it between 0 and 254.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. The program draws the sky, the ground, the stem and a flower at the position flowerX and flowerY. When you click the mouse, mousePressed() puts the flower at a random place and changes its color.
Important tips: flowerX sets the horizontal and flowerY the vertical base position. Expressions like flowerX - 45 or flowerY - 125 keep the petals and the stem together. The operator % gives back the remainder of a division and here it stops the color value from growing bigger and bigger. Because all parts of the flower use the same base variables, they move together.
`,
  "3.3.3": `
Tools: In this task we use functions, variables, methods, conditions, mouse events and logical operators.
Usage: You store a true/false value, for example with let sichtbar = true; ("sichtbar" is German for "visible"). You calculate the distance between the mouse click and the flower with dist(mouseX, mouseY, flowerX, flowerY - 90);. The hit condition if (sichtbar && abstand < 48) { ... } checks if the flower is visible and the click is close enough ("abstand" is German for "distance"). !sichtbar means "not visible".
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() draws the sky, the ground, the score and – as long as sichtbar is true – the flower. When you hit the flower, mousePressed() adds points, hides the flower and starts the pause. During the pause, pause counts down; after that, the flower appears at a new random position.
Important tips: sichtbar controls whether the flower is drawn. pause stores the waiting time as a number of rounds of draw(). dist() gives back the distance between two points. max(0, punkte - 1) takes away one point ("punkte" is German for "points") when you miss, but it stops the score from going below zero. The more exact hit condition must be completely true before points are given.
`,
  "3.4.1": `
Tools: In this task we use functions, local variables, methods, the mouse position and the frame counter.
Usage: You write a wave movement like this: sin(frameCount * <speed>) * <swing>. Example: let zielX = 400 + sin(frameCount * 0.03) * 170;. For the y-position, cos() is used. You calculate the distance with dist(<x1>, <y1>, <x2>, <y2>), here between the mouse and the target. nfc(abstand, 0) shows it without decimal places.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. The program draws a dark blue background and calculates the new target position and the distance to the mouse. Then it shows the distance as text, the moving yellow target and a small light blue circle at the mouse position.
Important tips: frameCount counts the frames that have been drawn. sin() and cos() give values between −1 and 1. The numbers 170 and 120 set how far the target swings around the center at 400; 0.03 and 0.04 set how fast it moves. In dist(), each pair of values belongs to one point. "Abstand: " + nfc(abstand, 0) joins the text with the formatted number ("Abstand" is German for "distance").
`,
  "3.4.2": `
Tools: In this task we use functions, local variables, methods, an if/else condition, the mouse position and the frame counter.
Usage: You write a moving target position like this: let zielX = <center> + sin(frameCount * <speed>) * <swing>;. Example: let zielX = 400 + sin(frameCount * 0.025) * 210;. With dist(mouseX, mouseY, zielX, zielY) you calculate the distance. You write the choice as if (<condition>) { ... } else { ... }, here with abstand < 80 ("ziel" is German for "target", "abstand" for "distance").
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. The program draws a green background and calculates the moving target position and the distance to the mouse. If the mouse is closer than 80 pixels to the target, a brown background, a bigger yellow circle and "Schatz gefunden!" ("Treasure found!") appear. Otherwise, the target stays smaller. At the end, the program draws a small red circle at the mouse position.
Important tips: frameCount counts the frames that have been drawn; sin() and cos() create the wave movement. 210 and 140 set how far it swings, 0.025 and 0.03 set how fast it moves. In dist(), each pair of values gives one center point. abstand < 80 checks how close the mouse is, not a mouse click. At exactly 80 pixels, the else block runs. The hit limit does not depend on the size of the drawn circle.
`,
  "3.4.3": `
Tools: In this task we use functions, local variables, methods, an if/else-if/else condition, the mouse position and the frame counter.
Usage: You write a moving position like this: let kernX = <center> + sin(frameCount * <speed>) * <swing>;. Example: let kernX = 400 + sin(frameCount * 0.02) * 170;. With dist(mouseX, mouseY, kernX, kernY) you calculate the distance. You check several areas with if (<condition>) { ... } else if (<another condition>) { ... } else { ... }.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. The program draws a dark background and calculates the moving core position ("kern" is German for "core") and the distance to the mouse. Below 90 pixels, a big red circle with "ZU NAH!" ("TOO CLOSE!") appears, from 90 to below 220 pixels a yellow circle, and from 220 pixels on a small blue circle. At the end, it draws a white circle at the mouse position.
Important tips: sin() and cos() create the wave movement together with frameCount. 170 and 130 set how far it swings, 0.02 and 0.018 set how fast it moves. In dist(), each pair of values gives the position of one point. The conditions are checked from top to bottom; that is why abstand < 90 must come before abstand < 220. Only the first matching block runs. The limits check the distance to the center, not a mouse click.
`,
  "3.5.1": `
Tools: In this task we use functions, variables, methods, conditions, a mouse event and a logical operator.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Example: let speed = 4;. With zielX = zielX + speed; you move the target. You connect two conditions with if (<condition> || <another condition>) { ... }, here zielX > 760 || zielX < 40. speed = -speed; turns the direction around.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. The program draws the dark background, changes the target position and checks the limits on the left and right. Then it shows the orange circle, the score and the hint text. When you click the mouse, mousePressed() uses dist() to calculate the distance to the target. If it is less than 45 pixels, ten points are added.
Important tips: || means "or": one of the two limit conditions must be true. A positive speed moves to the right, a negative one to the left. In circle() the first two values give the center and the third value gives the diameter. The diameter 90 gives a radius of 45; exactly 45 pixels does not count as a hit here. nfc(punkte, 0) shows the score without decimal places. The limits 40 and 760 are for the center, not the edge of the circle.
`,
  "3.5.2": `
Tools: In this task we use functions, global and local variables, methods, a condition, a mouse event and random values.
Usage: You write a variable like this: let <variable name> = <value of the variable>;. Example: let punkte = 0;. You calculate the moving position with let drawX = zielX + sin(frameCount * 0.08) * 18; and in the same way with cos() for drawY. In function mousePressed() { ... } you check a click with if (abstand < 40) { ... }.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. The program draws the dark background, the orange target and the score. The target moves in a small circle around its base position. When you click the mouse, mousePressed() calculates the current target position and the distance to the mouse. If you hit the target, ten points are added and the target gets a new random base position.
Important tips: zielX and zielY store the base position; drawX and drawY store the moving position. The local variables are created separately in both functions, so the movement formula must be the same in both. In dist(), each pair of values belongs to one point. The circle diameter 80 gives a hit radius of 40; exactly 40 pixels does not count. nfc(punkte, 0) shows the points without decimal places. Missed clicks change nothing.
`,
  "3.5.3": `
Tools: In this task we use functions, variables, methods, conditions, a mouse event, random values and logical operators.
Usage: You connect two conditions like this: if (<condition> || <another condition>) { ... }. Example: if (ziel1X > 765 || ziel1X < 35) { v1X = -v1X; }. You store a hit check with let hit1 = dist(mouseX, mouseY, ziel1X, ziel1Y) < 35;. return; ends the current function call.
How it works together: At the start, setup() creates an 800 × 800 pixel canvas once. After that, draw() is repeated over and over. First, it checks for a win or a loss, then it moves two targets, turns their direction around at the limits and shows the score. A hit gives twelve points and moves the target that was hit to a random place. A missed click counts as a failed try and takes away six points. After twelve hits, "GEWONNEN!" ("YOU WON!") appears, after eight missed clicks "GAME OVER".
Important tips: || means "or", >= means "greater than or equal to". v1X = -v1X turns the horizontal direction around; it works the same way for the y-speed. Diameter 70 gives a hit radius of 35; exactly 35 pixels does not count. max(0, punkte - 6) prevents negative points, nfc(punkte, 0) shows them without decimal places. After the game is over, return stops more movement and click checks, but it does not stop draw() from repeating. If a click hits both targets at the same time, it counts once and both targets are moved. The extra characters after the last closing bracket of the function do not belong to a standalone sketch and must be removed there.
`,
};
