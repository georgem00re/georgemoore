import { PropsWithChildren } from "react";
import styles from "./Canvas.module.css";

export default function Canvas({ children }: PropsWithChildren) {
	return (
		<div className={styles.canvas}>
			{children}
		</div>
	)
}