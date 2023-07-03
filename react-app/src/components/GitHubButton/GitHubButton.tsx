
import styles from "./GitHubButton.module.css";
import { AiFillGithub } from "react-icons/ai";

export default function GitHubButton() {
	return (
		<button className={styles.button}>
			<AiFillGithub size="25px" color="#262626"/>
		</button>
	)
}