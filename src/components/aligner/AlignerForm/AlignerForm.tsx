import { FC } from "react"
import classes from "./styles.module.scss"
import { Button, Stack } from "@mantine/core"
import { useForm } from "@mantine/form"
import { validateAminoAcids } from "@/utils/validation"
import { useAlighnerStore } from "@/store/aligner.state"
import { TSequence } from "@/types/sequences"
import { createSequencePairs } from "@/utils/sequences"
import { AlignerInput } from "../AlignerInput/AlignerInput"
import { VALID_AMINO_ACIDS } from "@/utils/validation"

interface AlignerFormProps {}

interface FormValues {
	sequence1: string
	sequence2: string
}

export const AlignerForm: FC<AlignerFormProps> = () => {
	const setSequences = useAlighnerStore(state => state.setSequences)

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
				return null
			},
			sequence2: value => {
				const aminoAcidError = validateAminoAcids(value)
				if (aminoAcidError) return aminoAcidError
				if (value.length !== form.values.sequence1.length && form.values.sequence1) {
					return "Длина последовательностей должна совпадать"
				}
				return null
			},
		},
	})

	const handleSubmit = (values: FormValues) => {
		const [sequence1, sequence2] = [values.sequence1, values.sequence2]
		const result: TSequence[] = createSequencePairs(sequence1, sequence2)
		setSequences([...result])
	}

	const getInputProps = (field: keyof FormValues) => {
		const props = form.getInputProps(field)
		return {
			...props,
			onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
				const newValue = event.currentTarget.value.toUpperCase()
				form.setFieldValue(field, newValue)
			},
		}
	}

	return (
		<form onSubmit={form.onSubmit(handleSubmit)} className={classes.container}>
			<Stack gap="md">
				<AlignerInput
					label="Первая последовательность"
					placeholder="Введите последовательность аминокислот"
					validateSymbols={VALID_AMINO_ACIDS}
					{...getInputProps("sequence1")}
				/>
				<AlignerInput
					label="Вторая последовательность"
					placeholder="Введите последовательность аминокислот"
					validateSymbols={VALID_AMINO_ACIDS}
					{...getInputProps("sequence2")}
				/>
				<Button className={classes.button} type="submit">
					Выровнять
				</Button>
			</Stack>
		</form>
	)
}

