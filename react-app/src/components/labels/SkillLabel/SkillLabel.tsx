
import styles from "./SkillLabel.module.css";

interface SkillLabelProps {
	text: string,
	icon: ReactNode
}

export default function SkillLabel({ text, icon }: SkillLabelProps) {
	return (
		<div className={styles.container}>
			{icon}
			<p>{text}</p>
		</div>
	)
}