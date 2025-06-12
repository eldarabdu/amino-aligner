import { IHistoryState, IHistoryStore } from "@/types/history"
import { create } from "zustand"
import { persist } from "zustand/middleware"

const initialState: IHistoryState = {
	history: [],
}

export const useHistoryStore = create<IHistoryStore>()(
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
