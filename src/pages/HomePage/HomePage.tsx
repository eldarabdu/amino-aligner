import { FC } from "react"
import classes from "./styles.module.scss"
import { Welcome } from "@/components/Welcome"
import { useWelcomeStore } from "@/store/welcome.state"
import { AlignerRoot } from "@/components/aligner/AlignerRoot"

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
	const { isWelcomeModalOpen, setIsWelcomeModalOpen } = useWelcomeStore()

	return (
		<div className={classes.container}>
			{isWelcomeModalOpen && (
				<Welcome
					title="Привет"
					description="Сделаю всё ровно"
					buttonText="Начать"
					onClose={() => setIsWelcomeModalOpen(false)}
				/>
			)}
			{!isWelcomeModalOpen && <AlignerRoot />}
		</div>
	)
}

