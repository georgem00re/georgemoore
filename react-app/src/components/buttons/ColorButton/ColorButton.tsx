
import styles from "./ColorButton.module.css"

interface ColorButtonProps {
	color: string,
	selected: boolean,
}

export default function ColorButton({ color, selected }) {
	return (
		<button className={styles.button} style={{ backgroundColor: color }}>

		</button>
	)
}
