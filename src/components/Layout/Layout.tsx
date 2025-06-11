import { FC } from "react"
import classes from "./styles.module.scss"
import { Outlet } from "react-router-dom"
import { NightSky } from "@/components/NightSky"
import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { useWelcomeStore } from "@/store/welcome.state"

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}) => {
	const { isWelcomeModalOpen, setIsWelcomeModalOpen } = useWelcomeStore()
	const [opened, { toggle }] = useDisclosure()

	return (
		<>
			<NightSky stars={isWelcomeModalOpen ? 60 : 0} gradient={isWelcomeModalOpen} />
			<AppShell
				withBorder={false}
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: "sm",
					collapsed: { mobile: !opened, desktop: isWelcomeModalOpen },
				}}
				className={classes.layout}
			>
				<AppShell.Header
					top={isWelcomeModalOpen ? "-100%" : 0}
					className={classes.header}
					bg="transparent"
				>
					<Header logo={"Acid Aligner"} opened={opened} toggle={toggle} />
				</AppShell.Header>
				<AppShell.Navbar bg="transparent">
					<Sidebar />
				</AppShell.Navbar>

				<AppShell.Main>
					<Outlet />
				</AppShell.Main>
			</AppShell>
		</>
	)
}

