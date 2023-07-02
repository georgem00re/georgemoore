
import styles from "./CVButton.module.css";
import { IoDocument } from "react-icons/IO";

export default function CVButton() {
	return (
		<button className={styles.button}>
			<IoDocument size="50px"/>
		</button>
	)
}