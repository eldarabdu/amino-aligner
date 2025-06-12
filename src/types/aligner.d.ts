import { TSequence } from "./sequences"

export interface IAlignerState {
	sequences: TSequence[]
}

export interface IAlignerStore extends IAlignerState {
	setSequences: (value: TSequence[]) => void
}
