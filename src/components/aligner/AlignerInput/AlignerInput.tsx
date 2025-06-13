import { FC } from "react"
import { TextInput } from "@mantine/core"

interface AlignerInputProps {
	label: string
	placeholder: string
	value?: string
	defaultValue?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
	error?: string
}

export const AlignerInput: FC<AlignerInputProps> = ({
	label,
	placeholder,
	value,
	defaultValue,
	onChange,
	onFocus,
	onBlur,
	error,
}) => {
	return (
		<TextInput
			label={label}
			placeholder={placeholder}
			value={value}
			defaultValue={defaultValue}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			error={error}
			styles={{
				input: {
					textTransform: "uppercase",
				},
			}}
		/>
	)
}
