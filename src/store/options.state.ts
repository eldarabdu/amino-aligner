import { create } from "zustand"
import { persist } from "zustand/middleware"
import { IOptionsState, IOptionsStore } from "@/types/options"

const initialState: IOptionsState = {
	options: {
		history: true,
	},
}

export const useOptionsStore = create<IOptionsStore>()(
	persist(
		set => ({
			...initialState,
			toggleOption: option =>
				set(state => ({ options: { ...state.options, [option]: !state.options[option] } })),
		}),
		{ name: "options-storage" }
	)
)
