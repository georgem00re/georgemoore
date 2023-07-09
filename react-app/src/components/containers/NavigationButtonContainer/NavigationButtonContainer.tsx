
import styles from "./NavigationButtonContainer.module.css";

export default function NavigationButtonContainer({ children }) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}