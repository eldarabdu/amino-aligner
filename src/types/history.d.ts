import { TSequence } from "./sequences"

export interface IHistoryState {
	history: TSequence[][]
}

export interface IHistoryStore extends IHistoryState {
	addToHistory: (sequences: TSequence[]) => void
	clearHistory: () => void
}
