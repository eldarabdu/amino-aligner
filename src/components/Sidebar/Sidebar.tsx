import { FC } from "react"
import classes from "./styles.module.scss"
import { Autocomplete, Group, Paper, ScrollArea, Stack, Text, UnstyledButton } from "@mantine/core"
import { useHistoryStore } from "@/store/history.state"
import { AlignerDisplay } from "@/components/aligner/AlignerDisplay/AlignerDisplay"

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
	const { history, clearHistory } = useHistoryStore()

	return (
		<Paper bg="var(--mantine-color-purple-8)" m="md" p="md" flex={1} className={classes.container}>
			<Stack h="100%">
				<Autocomplete variant="filled" data={["React", "Angular", "Vue", "Svelte"]} />
				<Group justify="space-between" className={classes.header}>
					<Text size="lg" fw={500}>
						История
					</Text>
					{history.length > 0 && (
						<UnstyledButton className={classes.clean} onClick={clearHistory}>
							Очистить
						</UnstyledButton>
					)}
				</Group>
				<ScrollArea h="100%" offsetScrollbars>
					<Stack gap="md">
						{history.length === 0 ? (
							<Text c="dimmed" ta="center">
								История пуста
							</Text>
						) : (
							<Stack gap="xl">
								{history.map((sequences, index) => (
									<div key={index} className={classes.historyItem}>
										<Text size="sm" c="dimmed" mb="xs">
											Вариант {history.length - (index + 1) + 1}
										</Text>
										<AlignerDisplay
											sequences={sequences}
											fz="var(--mantine-font-size-sm)"
											fw={400}
											size={20}
											rg="var(--mantine-spacing-xs)"
											cg="var(--mantine-spacing-xs)"
										/>
									</div>
								))}
							</Stack>
						)}
					</Stack>
				</ScrollArea>
			</Stack>
		</Paper>
	)
}

