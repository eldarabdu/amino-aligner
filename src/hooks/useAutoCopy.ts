import { useEffect, useRef } from "react"
import { notifications } from "@mantine/notifications"

export const useAutoCopy = () => {
	const intervalRef = useRef<number>(0)
	const selectedValue = useRef<string>("")

	const handleSelection = async (e: Event) => {
		const timeStampInterval = e.timeStamp - intervalRef.current

		const selection = window.getSelection()
		const selectedText = selection?.toString()
		if (selectedText) {
			if (selectedText === selectedValue.current && timeStampInterval < 2500) return
			intervalRef.current = e.timeStamp
			selectedValue.current = selectedText

			try {
				await navigator.clipboard.writeText(selectedText)
				notifications.show({
					title: "Скопировано",
					message: "Последовательность скопирована в буфер обмена",
					color: "green",
					autoClose: 1000,
				})
			} catch (error) {
				notifications.show({
					title: "Ошибка",
					message: "Не удалось скопировать последовательность",
					color: "red",
					autoClose: 1000,
				})
			}
		}
	}

	useEffect(() => {
		document.addEventListener("select", handleSelection)
		return () => {
			document.removeEventListener("select", handleSelection)
		}
	}, [])
}
