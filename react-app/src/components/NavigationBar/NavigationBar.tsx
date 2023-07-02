
import styles from "./NavigationBar.module.css";
import Logo from "../Logo/Logo"; 

export default function NavigationBar() {
	return (
		<nav className={styles.navbar}>
			<Logo/>
			<div className={styles.links}>
				<a href="http://www.google.com">ABOUT</a>
				<a>PROJECTS</a>
				<a>CONTACT</a>
			</div>
		</nav>
	)
}