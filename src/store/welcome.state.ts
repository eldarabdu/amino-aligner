import { create } from "zustand"
import { IWelcomeState, IWelcomeStore } from "@/types/welcome"

const initialState: IWelcomeState = {
	isWelcomeModalOpen: true,
}

export const useWelcomeStore = create<IWelcomeStore>(set => ({
	...initialState,
	setIsWelcomeModalOpen: value => set({ isWelcomeModalOpen: value }),
}))
