
import styles from "./NavigationBar.module.css";
import Logo from "../Logo/Logo"; 
import { Link } from "react-router-dom";

export default function NavigationBar() {
	return (
		<nav className={styles.navbar}>
			<Logo/>
			<div className={styles.links}>
				<Link to="/about" className={styles.link}>ABOUT</Link>
				<Link to="/projects" className={styles.link}>PROJECTS</Link>
				<Link to="/contact" className={styles.link}>CONTACT</Link>
			</div>
		</nav>
	)
}