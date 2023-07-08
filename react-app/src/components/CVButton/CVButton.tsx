
import styles from "./CVButton.module.css";
import { IoMdDocument } from "react-icons/io";

export default function CVButton() {
	return (
		<button className={styles.button}>
			<IoMdDocument size="25px" color="#262626"/>
		</button>
	)
}