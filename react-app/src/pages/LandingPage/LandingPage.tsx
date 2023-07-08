import * as styles from "./LandingPage.module.css";
import Canvas from "../../components/Canvas/Canvas";
import Sprite from "../../components/Sprite/Sprite";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import GitHubButton from "../../components/GitHubButton/GitHubButton";
import LinkedInButton from "../../components/LinkedInButton/LinkedInButton";
import CVButton from "../../components/CVButton/CVButton";

export default function LandingPage() {
	return (
		<Canvas>
			<NavigationBar/>
			<div>
				<Sprite/>
				<div className={styles.container}>
					<GitHubButton/>
					<LinkedInButton/>
					<CVButton/>
				</div>
			</div>
		</Canvas>
	)
}