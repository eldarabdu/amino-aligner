import { FC } from "react"
import classes from "./styles.module.scss"
import classNames from "classnames"

interface INightSkyProps {
	stars?: number
	gradient?: boolean
}

export const NightSky: FC<INightSkyProps> = ({ stars = 150, gradient = true }) => {
	return (
		<div
			className={classNames(classes.nightSky, { [classes.gradient]: gradient })}
			style={{ "--stars-count": stars <= 200 ? stars : 200 } as React.CSSProperties}
		>
			<div className={classes.stars}>
				{Array.from({ length: stars <= 200 ? stars : 200 }).map((_, i) => (
					<div
						key={i}
						className={classes.star}
						style={{
							top: `${Math.random() * 100}vh`,
							left: `${Math.random() * 100}vw`,
						}}
					/>
				))}
			</div>
		</div>
	)
}

