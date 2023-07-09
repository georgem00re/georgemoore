
import styles from "./ColorButtonContainer.module.css";

export default function ColorButtonContainer({ children }) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}