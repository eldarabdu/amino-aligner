import { FC } from "react"
import classes from "./styles.module.scss"
import { Group, rem } from "@mantine/core"
import { Acid } from "@/components/Acid"
import { TSequence } from "@/types/sequences"

interface AlignerDisplayProps {
	sequences: TSequence[]
	fz?: number | string
	fw?: number
	size?: number | string
	rg?: number | string
	cg?: number | string
}

export const AlignerDisplay: FC<AlignerDisplayProps> = ({
	sequences,
	fz,
	fw,
	size,
	rg = "var(--mantine-spacing-md)",
	cg = "var(--mantine-spacing-xs)",
}) => {
	return (
		<Group
			className={classes.container}
			style={{
				rowGap: typeof rg === "string" ? rg : rem(rg),
				columnGap: typeof cg === "string" ? cg : rem(cg),
			}}
		>
			{sequences.map((pair, index) => (
				<div
					className={classes.acids}
					key={pair[0] + pair[1] + index}
					style={{ gap: typeof rg === "string" ? rg : rem(rg) }}
				>
					<Acid acid={pair[0]} withBackground={true} fz={fz} fw={fw} size={size} />
					<Acid acid={pair[1]} withBackground={pair[0] !== pair[1]} fz={fz} fw={fw} size={size} />
				</div>
			))}
		</Group>
	)
}
