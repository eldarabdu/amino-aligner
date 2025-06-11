import { FC } from "react"
import classes from "./styles.module.scss"
import { Autocomplete, Paper, ScrollArea, Stack, Text } from "@mantine/core"

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
	return (
		<Paper bg="var(--mantine-color-purple-8)" m="md" p="md" flex={1} className={classes.container}>
			<Stack>
				<Autocomplete variant="filled" data={["React", "Angular", "Vue", "Svelte"]} />
				<ScrollArea>
					<Stack>
						<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</Text>
					</Stack>
				</ScrollArea>
			</Stack>
		</Paper>
	)
}

