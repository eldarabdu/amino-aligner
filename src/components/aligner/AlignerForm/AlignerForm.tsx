import { FC } from "react"
import classes from "./styles.module.scss"
import { Button, Stack } from "@mantine/core"
import { useForm } from "@mantine/form"
import { validateAminoAcids } from "@/utils/validation"
import { useAlignerStore } from "@/store/aligner.state"
import { TSequence } from "@/types/sequences"
import { createSequencePairs } from "@/utils/sequences"
import { useHistoryStore } from "@/store/history.state"
import { AlignerInput } from "@/components/aligner/AlignerInput"

interface AlignerFormProps {}

interface FormValues {
	sequence1: string
	sequence2: string
}

export const AlignerForm: FC<AlignerFormProps> = () => {
	const setSequences = useAlignerStore(state => state.setSequences)
	const addToHistory = useHistoryStore(state => state.addToHistory)

	const form = useForm<FormValues>({
		initialValues: {
			sequence1: "",
			sequence2: "",
		},
		validate: {
			sequence1: value => {
				const aminoAcidError = validateAminoAcids(value)
				if (aminoAcidError) return aminoAcidError
				if (value.length !== form.values.sequence2.length && form.values.sequence2) {
					return "Длина последовательностей должна совпадать"
				}
				if (value.length < 1) return "Введите последовательность"

				return null
			},
			sequence2: value => {
				const aminoAcidError = validateAminoAcids(value)
				if (aminoAcidError) return aminoAcidError
				if (value.length !== form.values.sequence1.length && form.values.sequence1) {
					return "Длина последовательностей должна совпадать"
				}
				if (value.length < 1) return "Введите последовательность"
				return null
			},
		},
	})

	const handleSubmit = (values: FormValues) => {
		const [sequence1, sequence2] = [values.sequence1, values.sequence2]
		const result: TSequence[] = createSequencePairs(
			sequence1.toUpperCase(),
			sequence2.toUpperCase()
		)
		setSequences(result)
		addToHistory(result)
	}

	return (
		<form onSubmit={form.onSubmit(handleSubmit)} className={classes.container}>
			<Stack gap="md">
				<AlignerInput
					label="Первая последовательность"
					placeholder="ARND..."
					key={form.key("sequence1")}
					{...form.getInputProps("sequence1")}
				/>
				<AlignerInput
					label="Вторая последовательность"
					placeholder="ARND..."
					key={form.key("sequence2")}
					{...form.getInputProps("sequence2")}
				/>
				<Button className={classes.button} type="submit">
					Выровнять
				</Button>
			</Stack>
		</form>
	)
}

