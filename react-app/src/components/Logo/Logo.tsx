
import LogoSVG from "../../assets/logo.svg";
import styles from "./Logo.module.css";

export default function Logo() {
	return (
		<div className={styles.container}>
			<img src={LogoSVG} className={styles.logo}/>
		</div>
	)
}