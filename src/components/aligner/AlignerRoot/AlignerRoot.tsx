import { FC } from "react"
import classes from "./styles.module.scss"
import { AlignerForm } from "../AlignerForm"
import { AlignerDisplay } from "../AlignerDisplay"
import { Stack, Title } from "@mantine/core"

interface AlignerRootProps {}

export const AlignerRoot: FC<AlignerRootProps> = ({}) => {
	return (
		<Stack className={classes.container}>
			<Title order={1}>Выравнивание аминокислотных последовательностей</Title>
			<AlignerForm />
			<AlignerDisplay />
		</Stack>
	)
}

