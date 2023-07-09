
import styles from "./Sprite.module.css";
import SpriteSVG from "../../../assets/sprite.svg";

export default function Sprite() {
	return (
		<div className={styles.container}>
			<img className={styles.sprite} src={SpriteSVG}/>
		</div>
	)
}