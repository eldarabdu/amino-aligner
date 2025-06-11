import { TSequence } from "./sequences"

export interface IHistoryState {
	history: TSequence[][]
	addToHistory: (sequences: TSequence[]) => void
	clearHistory: () => void
}

export interface IHistoryStore extends IHistoryState {}
