import { useEffect, RefObject } from "react"
import { notifications } from "@mantine/notifications"

export const useAutoCopy = (ref: RefObject<HTMLElement>) => {
	useEffect(() => {
		const handleSelection = (event: Event) => {
			console.log(event.type)
			console.log(event.type === "keydown")
			console.log((event as KeyboardEvent).ctrlKey)
			console.log((event as KeyboardEvent).ctrlKey)
			console.log((event as KeyboardEvent).key)
			console.log((event as KeyboardEvent).key !== "a")

			console.log(
				(event.type === "keydown" && !(event as KeyboardEvent).ctrlKey) ||
					(event as KeyboardEvent).key !== "a"
			)

			if (
				event.type === "keydown" &&
				!(event as KeyboardEvent).ctrlKey &&
				(event as KeyboardEvent).key !== "a"
			)
				return

			setTimeout(async () => {
				const selection = window.getSelection()
				if (selection?.type.toLocaleLowerCase() !== "range") return

				const selectedText = selection?.toString()

				if (selectedText) {
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
			})
		}

		ref.current?.addEventListener("mouseup", handleSelection)
		ref.current?.addEventListener("keydown", handleSelection)

		return () => {
			ref.current?.removeEventListener("mouseup", handleSelection)
			ref.current?.removeEventListener("keydown", handleSelection)
		}
	}, [ref])
}
