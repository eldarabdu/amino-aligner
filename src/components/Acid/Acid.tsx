import { FC } from "react"
import classes from "./styles.module.scss"
import { TAminoAcid } from "@/types/sequences"
import { getAcidData } from "@/utils/sequences"
import { Tooltip, rem } from "@mantine/core"

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
			className={classes.acid}
			style={{
				fontSize: typeof fz === "string" ? fz : rem(fz),
				fontWeight: fw,
				width: typeof size === "string" ? size : rem(size),
				height: typeof size === "string" ? size : rem(size),
				backgroundColor: withBackground ? acidData[1] : "transparent",
			}}
		>
			<span
				style={{
					color:
						withBackground && acid !== "-"
							? "var(--mantine-color-dark-9)"
							: "var(--mantine-color-dark-0)",
				}}
			>
				{acid}
			</span>
		</div>
	)

	return acidData[2] ? <Tooltip label={acidData[2]}>{content}</Tooltip> : content
}

