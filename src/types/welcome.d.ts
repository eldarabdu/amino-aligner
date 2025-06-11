export interface IWelcomeState {
	isWelcomeModalOpen: boolean
}

export interface IWelcomeStore extends IWelcomeState {
	setIsWelcomeModalOpen: (value: boolean) => void
}
