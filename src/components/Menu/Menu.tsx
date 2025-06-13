import { FC } from "react"
import { Menu, Switch, Tooltip } from "@mantine/core"
import TelegramIcon from "@/assets/icons/telegram-icon.svg?react"
import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg?react"
import GithubIcon from "@/assets/icons/github-icon.svg?react"
import { useHistoryStore } from "@/store/history.state"
import { useOptionsStore } from "@/store/options.state"
import { notifications } from "@mantine/notifications"

interface MenuProps {
	children: React.ReactNode
}

export const MenuRoot: FC<MenuProps> = ({ children }) => {
	const { clearHistory } = useHistoryStore()
	const {
		toggleOption,
		options: { history: isHistory },
	} = useOptionsStore()

	return (
		<Menu shadow="md" width={200} closeOnItemClick={false}>
			<Menu.Target>{children}</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Контакты</Menu.Label>
				<Menu.Item
					component="a"
					href="https://t.me/eldar2499"
					target="_blank"
					leftSection={<TelegramIcon width={18} height={18} />}
				>
					Telegram
				</Menu.Item>
				<Menu.Item
					component="a"
					href="https://wa.me/qr/K3ORHRXEJLWSE1"
					target="_blank"
					leftSection={<WhatsAppIcon width={18} height={18} />}
				>
					WhatsApp
				</Menu.Item>
				<Menu.Item
					component="a"
					href="https://github.com/eldarabdu"
					target="_blank"
					leftSection={<GithubIcon width={18} height={18} />}
				>
					Github
				</Menu.Item>

				<Menu.Divider />
				<Menu.Label>Настройки</Menu.Label>
				<Menu.Item>
					<Tooltip label="Отключить/включить историю" refProp="rootRef">
						<Switch
							checked={isHistory}
							onChange={() => {
								toggleOption("history")
								notifications.show({
									autoClose: 1000,
									title: "Настройки",
									message: `История ${!isHistory ? "включена" : "выключена"}`,
									color: !isHistory ? "teal" : "red",
								})
							}}
							color="teal"
							size="md"
							onLabel="ON"
							offLabel="OFF"
							label="История"
						/>
					</Tooltip>
				</Menu.Item>
				<Menu.Divider />

				<Menu.Label>Опасная зона</Menu.Label>
				<Menu.Item
					color="red"
					onClick={() => {
						clearHistory()
						notifications.show({
							autoClose: 1000,
							title: "Очистка истории",
							message: "История успешно очищена",
							color: "gray",
						})
					}}
				>
					Удалить историю
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}
