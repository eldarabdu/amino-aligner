import { TSequence } from "@/types/sequences"
import { getSequenceOrigin } from "./sequences"

export const isSequenceInHistory = (search: string, sequences: TSequence[]) => {
	if (search) {
		const [first, second] = getSequenceOrigin(sequences)
		if (first.startsWith(search) || second.startsWith(search)) {
			return sequences
		}
	}
	return null
}
