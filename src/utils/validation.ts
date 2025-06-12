export const VALID_AMINO_ACIDS = "ARNDCEQGHILKMFPSTWYV-"

export const validateAminoAcids = (value: string): string | null => {
	const isValid = value
		.toUpperCase()
		.split("")
		.every(char => VALID_AMINO_ACIDS.includes(char))
	return isValid
		? null
		: "Допустимы только символы аминокислот (A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V) и символ -"
}
