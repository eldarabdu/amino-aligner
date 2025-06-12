import { FC } from "react"
import classes from "./styles.module.scss"
import { Outlet } from "react-router-dom"
import { NightSky } from "@/components/NightSky"
import { AppShell, em } from "@mantine/core"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { useWelcomeStore } from "@/store/welcome.state"
import classNames from "classnames"
import { Notifications } from "@mantine/notifications"

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}) => {
	const { isWelcomeModalOpen } = useWelcomeStore()
	const [opened, { toggle }] = useDisclosure()
	const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

	return (
		<>
			<NightSky stars={isWelcomeModalOpen ? 60 : 0} gradient={isWelcomeModalOpen} />
			<AppShell
				withBorder={false}
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: "sm",
					collapsed: { mobile: !opened },
				}}
				className={classes.layout}
			>
				<AppShell.Header
					className={classNames(classes.header, { [classes.collapsedTop]: isWelcomeModalOpen })}
					bg="transparent"
				>
					<Header logo={"Acid Aligner"} opened={opened} toggle={toggle} />
				</AppShell.Header>
				<AppShell.Navbar
					className={classNames(classes.navbar, { [classes.collapsedLeft]: isWelcomeModalOpen })}
					bg="transparent"
				>
					<Sidebar />
				</AppShell.Navbar>

				<AppShell.Main>
					<Outlet />
				</AppShell.Main>
			</AppShell>
			<Notifications position={isMobile ? "bottom-right" : "top-right"} limit={3} />
		</>
	)
}
