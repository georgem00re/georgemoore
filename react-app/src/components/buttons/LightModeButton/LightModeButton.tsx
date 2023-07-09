
import { FaSun, FaMoon } from "react-icons/fa"
import styles from "./LightModeButton.module.css";
import { useState } from "react";

enum Mode { Light, Dark }

export default function LightModeButton() {

	const [mode, setMode] = useState(Mode.Light)

	const toggleMode = () => {
		if (mode == Mode.Light) setMode(Mode.Dark)
		else if (mode == Mode.Dark) setMode(Mode.Light) 
	}

 	const getIcon = () => {
 		if (mode == Mode.Light) return <FaSun/>
 		else if (mode == Mode.Dark) return <FaMoon/>
 	}

 	const getColour = () => {
 		if (mode == Mode.Light) return "#D14311"
 		else if (mode == Mode.Dark) return "#4471F4"
 	}

 	const getJustifyContent = () => {
 		if (mode == Mode.Light) return "flex-start"
 		else if (mode == Mode.Dark) return "flex-end"
 	}

	return (
		<button className={styles.button} onClick={() => toggleMode()} style={{ backgroundColor: getColour(), justifyContent: getJustifyContent() }}>
			<div className={styles.circle} style={{ color: getColour() }}>
				{ getIcon() }
			</div>
		</button>
	)
}