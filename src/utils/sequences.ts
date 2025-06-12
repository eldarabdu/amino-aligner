import { TAcidData, TAminoAcid, TSequence } from "@/types/sequences"

export const createSequencePairs = (sequence1: string, sequence2: string): TSequence[] => {
	const chars1 = sequence1.split("") as TAminoAcid[]
	const chars2 = sequence2.split("") as TAminoAcid[]

	return chars1.map((char1, index) => [char1, chars2[index]])
}

export const getAcidData = (acid: TAminoAcid): TAcidData => {
	const colorSchema: TAcidData[] = [
		["C", "#FFEA00", "Цистеин"],
		["AILMFWYVP", "#67E4A6", "Гидрофобные"],
		["G", "#C4C4C4", "Глицин"],
		["DE", "#FC9CAC", "Отрицательно заряженные"],
		["KR", "#BB99FF", "Положительно заряженные"],
		["STHQN", "#80BFFF", "Полярные незаряженные"],
	]

	const acidData = colorSchema.find(item => item[0].includes(acid))
	return acidData || ["-", "transparent", ""]
}

export const getSequenceOrigin = (sequence: TSequence[]): [string, string] => {
	const sequence1 = sequence.reduce((acc, pair) => acc + pair[0], "")
	const sequence2 = sequence.reduce((acc, pair) => acc + pair[1], "")
	return [sequence1, sequence2]
}
