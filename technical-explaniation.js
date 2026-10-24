let technicalExplanation = {
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
