
import styles from "./SocialButtonContainer.module.css";

export default function SocialButtonContainer({ children }) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}