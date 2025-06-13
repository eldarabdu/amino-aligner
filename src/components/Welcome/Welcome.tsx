import { FC, useState } from "react"
import classes from "./styles.module.scss"
import ArrowLeftIcon from "@/assets/icons/arrow-left-icon.svg?react"
import { Button, Stack, Text } from "@mantine/core"
import classNames from "classnames"

interface WelcomeProps {
	title: string
	description: string
	buttonText: string
	onClose: () => void
}

export const Welcome: FC<WelcomeProps> = ({ title, description, buttonText, onClose }) => {
	const [isClosing, setIsClosing] = useState(false)

	const handleClose = () => {
		setIsClosing(true)
		setTimeout(() => {
			onClose()
		}, 300)
	}

	return (
		<div className={classNames(classes.welcomeOverlay, { [classes.closing]: isClosing })}>
			<Stack gap="lg" p="lg" align="center" className={classes.welcomeModal}>
				<Stack gap={0}>
					<Text className={classes.title}>{title}</Text>
					<Text className={classes.subtitle}>{description}</Text>
				</Stack>
				<Button className={classes.button} onClick={handleClose}>
					{buttonText}
				</Button>
				<div>
					<a
						href="https://github.com/eldarabdu/amino-aligner.git"
						target="_blank"
						rel="noopener noreferrer"
						className={classes.githubLink}
					>
						GitHub Repository <ArrowLeftIcon className={classes.linkIcon} />
					</a>
				</div>
			</Stack>
		</div>
	)
}
