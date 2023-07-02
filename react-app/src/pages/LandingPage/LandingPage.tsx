import styles from "./LandingPage.module.css";
import Canvas from "../../components/Canvas/Canvas";
import Sprite from "../../components/Sprite/Sprite";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export default function LandingPage() {
	return (
		<Canvas>
			<NavigationBar/>
			<Sprite/>
		</Canvas>
	)
}