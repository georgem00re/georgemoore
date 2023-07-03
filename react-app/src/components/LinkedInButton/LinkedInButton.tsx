
import styles from "./LinkedInButton.module.css";
import { BsLinkedin } from "react-icons/bs";

export default function LinkedInButton() {
	const link = "https://www.linkedin.com/in/george-moore-275087217/"
	return (
		<a className={styles.button} href={link}>
			<BsLinkedin size="25px" color="#262626"/>
		</a>
	)
}