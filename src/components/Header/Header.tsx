import { FC } from "react"
import classes from "./styles.module.scss"
import { Burger } from "@mantine/core"

interface HeaderProps {
	logo: string | React.ReactNode
	opened: boolean
	toggle: () => void
}

export const Header: FC<HeaderProps> = ({ logo, opened, toggle }) => {
	return (
		<div className={classes.header}>
			<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
			<div className={classes.logo}>
				{typeof logo === "string" ? <p className={classes.logo__text}>{logo}</p> : logo}
			</div>
		</div>
	)
}

