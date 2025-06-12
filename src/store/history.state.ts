import { IHistoryState, IHistoryStore } from "@/types/history"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useOptionsStore } from "./options.state"

const initialState: IHistoryState = {
	history: [],
}

export const useHistoryStore = create<IHistoryStore>()(
	persist(
		set => ({
			...initialState,
			addToHistory: sequences => {
				const optionsStore = useOptionsStore.getState()
				if (!optionsStore.options.history) return

				set(state => ({
					history: [sequences, ...state.history],
				}))
			},
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
