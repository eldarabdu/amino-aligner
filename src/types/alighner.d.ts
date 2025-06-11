import { TSequence } from "./sequences"

export interface IAlighnerState {
	sequences: TSequence[]
}

export interface IAlighnerStore extends IAlighnerState {
	setSequences: (value: TSequence[]) => void
}
