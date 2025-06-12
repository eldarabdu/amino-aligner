import { create } from "zustand"
import { IAlignerState, IAlignerStore } from "@/types/aligner"

const initialState: IAlignerState = {
	sequences: [],
}

export const useAlignerStore = create<IAlignerStore>(set => ({
	...initialState,
	setSequences: value => set({ sequences: value }),
}))
