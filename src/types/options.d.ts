export interface IOptions {
	history: boolean
}

export interface IOptionsState {
	options: IOptions
}

export interface IOptionsStore extends IOptionsState {
	toggleOption: (option: keyof IOptions) => void
}
