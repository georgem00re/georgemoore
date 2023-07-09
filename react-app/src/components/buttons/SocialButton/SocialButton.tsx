
import styles from "./SocialButton.module.css";

interface SocialButtonProps {
	icon: ReactNode,
	url: string,
}

export default function SocialButton ({ icon, url }: SocialButtonProps) {

	const onClick = () => {
		window.location = url
	}

	return (
		<button className={styles.button} onClick={onClick}>
			{icon}
		</button>
	)
}