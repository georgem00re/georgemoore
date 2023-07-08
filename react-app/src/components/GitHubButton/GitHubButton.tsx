
import styles from "./GitHubButton.module.css";
import { AiFillGithub } from "react-icons/ai";

export default function GitHubButton() {
	const link = "https://github.com/georgem00re"
	return (
		<a className={styles.button} href={link}>
			<AiFillGithub size="25px" color="#262626"/>
		</a>
	)
}