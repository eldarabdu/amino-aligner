import { IHistoryState } from "@/types/history"
import { create } from "zustand"
import { persist } from "zustand/middleware"

const initialState: IHistoryState = {
	history: [],
	addToHistory: () => {},
	clearHistory: () => {},
}

export const useHistoryStore = create<IHistoryState>()(
	persist(
		set => ({
			...initialState,
			addToHistory: sequences =>
				set(state => ({
					history: [sequences, ...state.history],
				})),
			clearHistory: () =>
				set(() => ({
					history: [],
				})),
		}),
		{
			name: "history-storage",
		}
	)
)
