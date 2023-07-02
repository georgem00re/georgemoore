
import styles from "./NavigationBar.module.css";
import Logo from "../Logo/Logo"; 

export default function NavigationBar() {
	return (
		<nav className={styles.navbar}>
			<Logo/>
		</nav>
	)
}