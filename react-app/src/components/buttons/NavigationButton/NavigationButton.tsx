
import styles from "./NavigationButton.module.css";

interface NavigationButtonProps {
	text: string,
	icon: ReactNode
}

export default function NavigationButton({ text, icon }: NavigationButtonProps) {
	return (
		<button className={styles.button}>
			{icon}
			<h1 className={styles.text}>{text}</h1>
		</button>
	)
}