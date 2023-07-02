
import styles from "./Canvas.module.css";

export default function Canvas({ children }) {
	return (
		<div className={styles.canvas}>
			{children}
		</div>
	)
}