import { create } from "zustand"
import { IAlighnerState, IAlighnerStore } from "@/types/alighner"

const initialState: IAlighnerState = {
	sequences: [],
}

export const useAlighnerStore = create<IAlighnerStore>(set => ({
	...initialState,
	setSequences: value => set({ sequences: value }),
}))
