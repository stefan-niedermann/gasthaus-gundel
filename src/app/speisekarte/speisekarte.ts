export interface Gericht {
	titel: string;
	preis: number;
	altPreis?: number;
	nummer?: number;
	beschreibung?: string;
}

export interface Kategorie {
	titel: string;
	graphik?: string;
	gerichte: Gericht[];
}

export const kategorien: Kategorie[] = [{
	titel: 'Suppen',
	graphik: 'bohnensuppe',
	gerichte: [
		{
			titel: 'Bohnensuppe',
			preis: 3.00,
			nummer: 2,
			beschreibung: 'mit Brot'
		},
		{
			titel: 'Gulaschsuppe',
			preis: 3.00,
			nummer: 3,
			beschreibung: 'mit Brot'
		},

	]
},
{
	titel: 'Kalte Vorspeisen',
	gerichte: [
		{
			titel: 'Zaziki',
			preis: 3.00,
			nummer: 4,
			beschreibung: 'Joghurt mit Gurken, Knoblauch, Brot'
		},
		{
			titel: 'Feta',
			preis: 4.50,
			nummer: 5,
			beschreibung: 'Griechischer Schafskäse mit Oliven, Peperoni, Tomaten und Brot'
		},
		{
			titel: 'Gemischter Teller',
			preis: 6.50,
			nummer: 6,
			beschreibung: 'Schafskäse, Zaziki, Gurken, Oliven, Peperoni, Zwiebeln und Brot'
		},
		{
			titel: 'Oliven und Peperoni',
			preis: 3.00,
			nummer: 7,
			beschreibung: 'mit Brot'
		},
		{
			titel: 'Htapodi',
			preis: 6.00,
			nummer: 8,
			beschreibung: 'Octopussalat mit Tomaten, Gurken, Peperoni, Zwiebeln, Oliven und Brot'
		},
		{
			titel: 'Htipiti',
			preis: 4.50,
			nummer: 77,
			beschreibung: 'Schafskäse, Paprika, Knoblauch und Brot'
		},

	]
},
{
	titel: 'Warme Vorspeisen',
	graphik: 'gigades',
	gerichte: [
		{
			titel: 'Saganaki',
			preis: 4.80,
			nummer: 9,
			beschreibung: 'Gebackener Schafskäse mit Tomaten, Oliven, Peperoni und Brot'
		},
		{
			titel: 'Gigades',
			preis: 4.50,
			nummer: 10,
			beschreibung: 'Dicke Bohnen mit Brot'
		},
		{
			titel: 'Melitzanes',
			preis: 4.50,
			nummer: 11,
			beschreibung: 'Auberginen mit Schafskäse und Brot aus dem Backofen'
		},
		{
			titel: 'Tyropitakia',
			preis: 4.50,
			nummer: 12,
			beschreibung: '(5 Stück) Schafskäse mit Ei in Blätterteig gewickelt'
		},
		{
			titel: 'Knoblauchbrot',
			preis: 3.00,
			nummer: 78,
			beschreibung: ''
		},
		{
			titel: 'Florinis',
			preis: 4.50,
			nummer: 79,
			beschreibung: 'Rote Paprika gefüllt mit Schafskäse, Knoblauch und Brot'
		},
		{
			titel: 'Dolmades',
			preis: 4.50,
			nummer: 80,
			beschreibung: 'Weinblätter, gewickelt mit Reis und Brot'
		},
		{
			titel: 'Feta vom Backofen',
			preis: 5.00,
			nummer: 81,
			beschreibung: 'mit Tomaten, Peperoni, Knoblauch, Chili (scharf) und Brot'
		},

	]
},
{
	titel: 'Warme Beilagen',
	graphik: 'reis',
	gerichte: [
		{
			titel: 'Reis',
			preis: 2.00,
			nummer: 13,
			beschreibung: 'mit Tomatensoße'
		},
		{
			titel: 'Pommes Frites',
			preis: 2.00,
			nummer: 14,
			beschreibung: ''
		},

	]
},
{
	titel: 'Salate',
	graphik: 'salate',
	gerichte: [
		{
			titel: 'Griechischer Salat',
			preis: 5.50,
			nummer: 15,
			beschreibung: 'Krautsalat, Gruken, Tomaten, Oliven, Peperoni, Zwiebeln, Schafskäse'
		},
		{
			titel: 'Griechischer Salatteller',
			preis: 5.50,
			nummer: 16,
			beschreibung: 'Grüner Salat, Gurken, Tomaten, Oliven, Peperoni, Zwiebeln, Schafskäse'
		},
		{
			titel: 'Gemischter Salatteller',
			preis: 5.50,
			nummer: 17,
			beschreibung: 'Krautsalat, grüner Salat, Gurken, Tomaten, Oliven, Peperoni, Zwiebeln, Gouda'
		},
		{
			titel: 'Chefsalat',
			preis: 6.50,
			nummer: 84,
			beschreibung: 'Grüner Salat, Gurken, Tomaten, Mais, Eier, Thunfisch, Oliven, Peperoni, Soße und Brot'
		},
		{
			titel: 'Griechischer Bauernsalat',
			preis: 3.00,
			nummer: 18,
			beschreibung: 'klein'
		},
		{
			titel: 'Krautsalat',
			preis: 2.00,
			nummer: 19,
			beschreibung: ''
		},
		{
			titel: 'Tomatensalat',
			preis: 2.00,
			nummer: 20,
			beschreibung: ''
		},
		{
			titel: 'Gemischter Salat',
			preis: 2.00,
			nummer: 21,
			beschreibung: ''
		},

	]
},
{
	titel: 'Hauptgerichte vom Grill',
	graphik: 'hauptgerichte-vom-grill',
	gerichte: [
		{
			titel: 'Gyros',
			preis: 9.50,
			nummer: 22,
			beschreibung: 'mit Pommes Frites, Zaziki und gemischtem Salat'
		},
		{
			titel: 'Gyros Pitta',
			preis: 9.50,
			nummer: 23,
			beschreibung: 'mit Fladenbrot, Zaziki und gemischtem Salat'
		},
		{
			titel: 'Zwei Suvlaki',
			preis: 9.50,
			nummer: 24,
			beschreibung: 'mit Pommes Frites, Zaziki und gemischtem Salat'
		},
		{
			titel: 'Zwei Suvlaki',
			preis: 10.00,
			nummer: 25,
			beschreibung: 'mit gerösteten Zwiebeln, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Drei Schweinesteaks',
			preis: 9.00,
			nummer: 26,
			beschreibung: 'mit Kräuterbutter, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Schweinelenden',
			preis: 9.50,
			nummer: 27,
			beschreibung: 'mit Kräuterbutter, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Spezial-Bifteki',
			preis: 9.50,
			nummer: 28,
			beschreibung: 'gefüllt mit Schafskäse, Pommes Frites und gemischten Salat'
		},
		{
			titel: 'Schweineleber',
			preis: 9.00,
			nummer: 29,
			beschreibung: 'mit gerösteten Zwiebeln, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Fünf Lammkoteletts',
			preis: 11.50,
			nummer: 30,
			beschreibung: 'mit Reis, Zaziki und gemischtem Salat'
		},

	]
},
{
	titel: 'Hauptgerichte vom Backofen',
	graphik: 'garnelen',
	gerichte: [
		{
			titel: 'Giuvetsi Kritharaki',
			preis: 11.50,
			nummer: 44,
			beschreibung: 'Lammfleisch, Langkornnudeln, mit Käse überbacken'
		},
		{
			titel: 'Giuvetsi Spaghetti',
			preis: 11.50,
			nummer: 45,
			beschreibung: 'Lammfleisch, Spaghetti, mit Käse überbacken'
		},
		{
			titel: 'Giuvetsi Fasolakia',
			preis: 11.50,
			nummer: 46,
			beschreibung: 'Lammfleisch mit grünen Bohnen und Brot'
		},
		{
			titel: 'Giuvetsi Gigades',
			preis: 11.50,
			nummer: 47,
			beschreibung: 'Lammfleisch mit dicken Bohnen und Brot'
		},
		{
			titel: 'Stifado',
			preis: 11.50,
			nummer: 48,
			beschreibung: 'Lammfleisch mit Zwiebeln und Brot'
		},
		{
			titel: 'Giuvetsi Bamies',
			preis: 11.50,
			nummer: 49,
			beschreibung: 'Lammfleisch mit Okraschoten'
		},
		{
			titel: 'Giuvetsi Melitzanes',
			preis: 11.50,
			nummer: 50,
			beschreibung: 'Lammfleisch mit Auberginen, Schafskäse und Brot'
		},
		{
			titel: 'Giuvetsi Rizi',
			preis: 11.50,
			nummer: 92,
			beschreibung: 'Lammfleisch mit Reis und Käse überbacken'
		},

	]
},
{
	titel: 'Grillplatten',
	gerichte: [
		{
			titel: 'Athina-Platte',
			preis: 9.90,
			nummer: 31,
			beschreibung: 'Suvlaki, Bifteki, Gyros, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Delphi-Platte',
			preis: 9.50,
			nummer: 32,
			beschreibung: 'Suvlaki, Gyros, Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Bauernteller',
			preis: 9.50,
			nummer: 33,
			beschreibung: 'Suvlaki, Lende, Gyros, Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Olympia-Platte',
			preis: 9.90,
			nummer: 34,
			beschreibung: 'Gyros, Kalamaria, Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Samos-Platte',
			preis: 9.50,
			nummer: 35,
			beschreibung: 'Suvlaki, Kalamaria, Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Spezial-Platte',
			preis: 12.50,
			nummer: 36,
			beschreibung: 'Lende, Leber, Bifteki, Gyros, Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Flampouresi-Platte',
			preis: 11.50,
			nummer: 37,
			beschreibung: 'Gyros, Suvlaki, Kalamaria, Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Hellas-Platte',
			preis: 11.50,
			nummer: 85,
			beschreibung: 'Gyros, Lende, 2 Lammkoteletts, Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Meteora-Platte',
			preis: 9.50,
			nummer: 86,
			beschreibung: 'Gyros, Suvlaki, Leber, Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Akropolis-Platte',
			preis: 9.50,
			nummer: 87,
			beschreibung: 'Gyros, Steak, Leber, Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Trikala-Platte',
			preis: 11.50,
			nummer: 88,
			beschreibung: 'Gyros, Suvlaki, 1 Lammkotelett, Bifteki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Gyros mit Metaxa-Soße',
			preis: 10.50,
			nummer: 89,
			beschreibung: 'überbacken mit Käse, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Drei Schweinesteaks',
			preis: 9.00,
			nummer: 90,
			beschreibung: 'mit Pfeffersoße, Pommes Frites und gemischtem Salat'
		},

	]
},
{
	titel: 'Fischgerichte',
	gerichte: [
		{
			titel: 'Kalamaria',
			preis: 9.90,
			nummer: 38,
			beschreibung: 'Tintenfisch mit Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Glosses',
			preis: 9.50,
			nummer: 39,
			beschreibung: 'Zungenfilet mit Reis und gemischtem Salat'
		},
		{
			titel: 'Kalamaria - Garides',
			preis: 12.50,
			nummer: 40,
			beschreibung: 'mit Reis und gemischtem Salat'
		},
		{
			titel: 'Sardelles',
			preis: 9.00,
			nummer: 41,
			beschreibung: 'gebacken, mit Reis und gemischtem Salat'
		},
		{
			titel: 'Kalamaria - Garides - Glosses',
			preis: 16.00,
			nummer: 42,
			beschreibung: 'mit Reis und gemischtem Salat'
		},
		{
			titel: 'Garides (Garnelen)',
			preis: 15.50,
			nummer: 43,
			beschreibung: 'mit Reis und gemischtem Salat'
		},
		{
			titel: 'Kalamaria-Spieß',
			preis: 11.50,
			nummer: 91,
			beschreibung: 'mit Reis und gemischtem Salat'
		},

	]
},
{
	titel: 'Deutsche Gerichte',
	graphik: 'schnitzel',
	gerichte: [
		{
			titel: 'Schnitzel "Wiener Art"',
			preis: 7.50,
			nummer: 51,
			beschreibung: 'mit Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Cordon-Bleu',
			preis: 9.00,
			nummer: 52,
			beschreibung: 'mit Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Jägerschnitzel',
			preis: 8.50,
			nummer: 53,
			beschreibung: 'mit Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Paprika-Schnitzel',
			preis: 8.50,
			nummer: 54,
			beschreibung: 'mit Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Zigeuner-Schnitzel',
			preis: 8.50,
			nummer: 55,
			beschreibung: 'mit Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Paradies-Schnitzel',
			preis: 8.50,
			nummer: 94,
			beschreibung: 'mit Pommes Frites und gemischtem Salat'
		},

	]
},
{
	titel: 'Für unsere kleinen Gäste',
	gerichte: [
		{
			titel: 'Gyros',
			preis: 6.50,
			nummer: 69,
			beschreibung: 'mit Zaziki, Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Suvlaki',
			preis: 6.00,
			nummer: 70,
			beschreibung: 'mit Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Schnitzel',
			preis: 5.00,
			nummer: 71,
			beschreibung: 'mit Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Kalamaris',
			preis: 6.50,
			nummer: 72,
			beschreibung: 'mit Pommes Frites und gemischtem Salat'
		},
		{
			titel: 'Glossa',
			preis: 6.50,
			nummer: 97,
			beschreibung: 'Zungenfilet mit Pommes Frites und gemischtem Salat'
		},

	]
},
{
	titel: 'Pizza',
	graphik: 'pizza',
	gerichte: [
		{
			titel: 'Pizza Spezial',
			preis: 4.00,
			altPreis: 6.50,
			nummer: 56,
			beschreibung: 'mit Vorderschinken, Salami, Champignons, Paprika, Peperoni, Käse'
		},
		{
			titel: 'Pizza Spezial',
			preis: 4.00,
			altPreis: 6.50,
			nummer: 57,
			beschreibung: 'mit Zwiebeln'
		},
		{
			titel: 'Pizza',
			preis: 4.00,
			altPreis: 6.50,
			nummer: 58,
			beschreibung: 'mit Vorderschinken, Champignons, Zwiebeln, Käse'
		},
		{
			titel: 'Pizza Hackfleisch',
			preis: 4.00,
			altPreis: 6.00,
			nummer: 59,
			beschreibung: 'mit Käse'
		},
		{
			titel: 'Pizza Hackfleisch',
			preis: 4.00,
			altPreis: 6.00,
			nummer: 60,
			beschreibung: 'mit Champignons, Zwiebeln und Käse'
		},
		{
			titel: 'Pizza Salami',
			preis: 4.00,
			altPreis: 6.00,
			nummer: 61,
			beschreibung: 'mit Käse'
		},
		{
			titel: 'Pizza',
			preis: 4.00,
			altPreis: 6.00,
			nummer: 62,
			beschreibung: 'mit Vorderschinken und Käse'
		},
		{
			titel: 'Pizza',
			preis: 4.00,
			altPreis: 6.00,
			nummer: 63,
			beschreibung: 'mit Vorderschinken, Champignons und Käse'
		},
		{
			titel: 'Pizza Vier Jahreszeiten',
			preis: 4.00,
			altPreis: 6.00,
			nummer: 64,
			beschreibung: ''
		},
		{
			titel: 'Pizza Gyros',
			preis: 4.50,
			altPreis: 7.50,
			nummer: 65,
			beschreibung: ''
		},
		{
			titel: 'Pizza Hawaii',
			preis: 4.00,
			altPreis: 6.50,
			nummer: 66,
			beschreibung: ''
		},
		{
			titel: 'Pizza Vegetarisch',
			preis: 4.00,
			altPreis: 6.50,
			nummer: 67,
			beschreibung: ''
		},
		{
			titel: 'Pizza Margherita',
			preis: 3.00,
			altPreis: 5.00,
			nummer: 68,
			beschreibung: ''
		},
		{
			titel: 'Pizza Thunfisch',
			preis: 4.00,
			altPreis: 6.50,
			nummer: 95,
			beschreibung: 'mit Zwiebeln'
		},
		{
			titel: 'Pizza Spezial',
			preis: 4.50,
			altPreis: 7.50,
			nummer: 96,
			beschreibung: 'mit Sardinen'
		},

	]
},
{
	titel: 'Nachspeisen',
	graphik: 'eis',
	gerichte: [
		{
			titel: 'Gemischtes Eis',
			preis: 3.50,
			nummer: 73,
			beschreibung: 'mit Früchten und Sahne'
		},
		{
			titel: 'Gemischtes Eis',
			preis: 3.30,
			nummer: 74,
			beschreibung: 'mit Sahne und Schokosoße'
		},
		{
			titel: 'Gemischtes Eis',
			preis: 3.30,
			nummer: 75,
			beschreibung: 'mit Schokosoße'
		},
		{
			titel: 'Joghurt',
			preis: 3.30,
			nummer: 76,
			beschreibung: 'mit Honig und Nüssen'
		},

	]
}];