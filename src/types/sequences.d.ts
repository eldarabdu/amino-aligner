export type TAminoAcid =
	| "A"
	| "R"
	| "N"
	| "D"
	| "C"
	| "E"
	| "Q"
	| "G"
	| "H"
	| "I"
	| "L"
	| "K"
	| "M"
	| "F"
	| "P"
	| "S"
	| "T"
	| "W"
	| "Y"
	| "V"
	| "-"

export type TAminoColors =
	| "#FFEA00"
	| "#67E4A6"
	| "#C4C4C4"
	| "#FC9CAC"
	| "#BB99FF"
	| "#80BFFF"
	| "transparent"

export type TSequence = [TAminoAcid, TAminoAcid]

export type TAcidData = [string, TAminoColors, string]
