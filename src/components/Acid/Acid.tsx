import { FC } from "react"
import classes from "./styles.module.scss"
import { TAminoAcid } from "@/types/sequences"
import { getAcidData } from "@/utils/sequences"
import { Tooltip, UnstyledButton, rem } from "@mantine/core"

interface AcidProps {
	fz?: number | string
	fw?: number
	size?: number | string
	acid: TAminoAcid
	withBackground?: boolean
}

export const Acid: FC<AcidProps> = ({
	fz = "var(--mantine-font-size-xxxl)",
	fw = 800,
	size = 40,
	acid,
	withBackground = true,
}) => {
	const acidData = getAcidData(acid)

	const content = (
		<div
			style={{
				backgroundColor: withBackground ? acidData[1] : "transparent",
			}}
		>
			<UnstyledButton
				className={classes.acid}
				style={{
					width: typeof size === "string" ? size : rem(size),
					height: typeof size === "string" ? size : rem(size),
					fontSize: typeof fz === "string" ? fz : rem(fz),
					fontWeight: fw,
					color:
						withBackground && acid !== "-"
							? "var(--mantine-color-dark-9)"
							: "var(--mantine-color-dark-0)",
				}}
			>
				{acid}
			</UnstyledButton>
		</div>
	)

	return acidData[2] ? (
		<Tooltip events={{ hover: true, focus: true, touch: true }} label={acidData[2]}>
			{content}
		</Tooltip>
	) : (
		content
	)
}
