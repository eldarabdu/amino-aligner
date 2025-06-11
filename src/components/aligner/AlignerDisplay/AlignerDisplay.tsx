import { FC } from "react"
import classes from "./styles.module.scss"
import { useAlighnerStore } from "@/store/aligner.state"
import { Group } from "@mantine/core"
import { Acid } from "@/components/Acid"

interface AlignerDisplayProps {}

export const AlignerDisplay: FC<AlignerDisplayProps> = ({}) => {
	const sequences = useAlighnerStore(state => state.sequences)

	return (
		<Group className={classes.container}>
			{sequences.map((sequence, index) => (
				<div className={classes.acids} key={sequence[0] + sequence[1] + index}>
					<Acid acid={sequence[0]} withBackground={true} />
					<Acid acid={sequence[1]} withBackground={sequence[0] !== sequence[1]} />
				</div>
			))}
		</Group>
	)
}

