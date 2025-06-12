import { FC, useMemo, useState } from "react"
import classes from "./styles.module.scss"
import { Group, Paper, ScrollArea, Stack, Text, UnstyledButton } from "@mantine/core"
import { useHistoryStore } from "@/store/history.state"
import { AlignerDisplay } from "@/components/aligner/AlignerDisplay/AlignerDisplay"
import { Search } from "../Search"
import { isSequenceInHistory } from "@/utils/history"

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
	const [search, setSearch] = useState("")
	const { history, clearHistory } = useHistoryStore()

	const filteredHistory = useMemo(() => {
		return history.filter(sequences => isSequenceInHistory(search, sequences))
	}, [history, search])

	return (
		<Paper bg="var(--mantine-color-purple-8)" m="md" p="md" flex={1} className={classes.container}>
			<Stack h="100%">
				<Search onChange={value => setSearch(value.toUpperCase())} />
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
						) : filteredHistory.length === 0 && search ? (
							<Text c="dimmed" ta="center">
								Последовательности не найдены
							</Text>
						) : (
							<Stack gap="xl">
								{search &&
									filteredHistory.map((sequences, index) => (
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
								{!search &&
									history.map((sequences, index) => (
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

