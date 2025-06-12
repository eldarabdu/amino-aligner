import { FC } from "react"
import classes from "./styles.module.scss"
import { AlignerForm } from "../AlignerForm"
import { AlignerDisplay } from "../AlignerDisplay"
import { Stack, Title } from "@mantine/core"
import { useAlignerStore } from "@/store/aligner.state"

interface AlignerRootProps {}

export const AlignerRoot: FC<AlignerRootProps> = ({}) => {
	const sequences = useAlignerStore(state => state.sequences)

	return (
		<Stack gap="xl" className={classes.container}>
			<Stack gap="md">
				<Title order={1}>Выравнивание</Title>
				<AlignerForm />
			</Stack>
			<AlignerDisplay sequences={sequences} />
		</Stack>
	)
}

