
import styles from "./LinkedInButton.module.css";
import { BsLinkedin } from "react-icons/bs";

export default function LinkedInButton() {
	return (
		<button className={styles.button}>
			<BsLinkedin size="50px"/>
		</button>
	)
}