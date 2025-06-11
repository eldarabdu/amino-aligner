import { FC } from "react"
import classes from "./styles.module.scss"
import { TextInput } from "@mantine/core"

interface AlignerInputProps {
	label: string
	placeholder: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
	error?: string | null
	validateSymbols?: string
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export const AlignerInput: FC<AlignerInputProps> = ({
	label,
	placeholder,
	value = "",
	error,
	validateSymbols,
	onChange,
	...props
}) => {
	return (
		<TextInput
			label={label}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			error={error}
			{...props}
		/>
	)
}

