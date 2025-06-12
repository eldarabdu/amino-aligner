import { FC } from "react"
import classes from "./styles.module.scss"
import { Burger, Button } from "@mantine/core"

import SocialIcon from "@/assets/icons/options-icon.svg?react"
import { MenuRoot } from "../Menu"

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
			<div className={classes.navigation}>
				<MenuRoot>
					<Button bg="transparent" p={0} className={classes.menuBtn}>
						<SocialIcon width={32} height={32} color="var(--mantine-color-text)" />
					</Button>
				</MenuRoot>
			</div>
		</div>
	)
}

