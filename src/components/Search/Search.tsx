import { FC, useMemo, useRef } from "react"
import classes from "./styles.module.scss"
import { Autocomplete } from "@mantine/core"
import { useHistoryStore } from "@/store/history.state"
import { getSequenceOrigin } from "@/utils/sequences"
import { useAutoCopy } from "@/hooks/useAutoCopy"

interface SearchProps {
	onChange: (value: string) => void
}

export const Search: FC<SearchProps> = ({ onChange }) => {
	const { history } = useHistoryStore()
	const inputRef = useRef<HTMLInputElement>(null)
	useAutoCopy(inputRef)

	const searchData = useMemo(
		() => [
			...new Set(
				history.flatMap(sequences => {
					const originSequences = getSequenceOrigin(sequences)
					return originSequences
				})
			),
		],
		[history]
	)

	return (
		<div className={classes.container}>
			<Autocomplete
				variant="filled"
				data={searchData}
				placeholder="Поиск..."
				clearable
				onChange={onChange}
				ref={inputRef}
			/>
		</div>
	)
}

