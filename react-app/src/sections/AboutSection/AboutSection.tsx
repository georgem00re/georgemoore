
import styles from "./AboutSection.module.css";

export default function AboutSection() {
	return (
		<section className={styles.container}>
			<h1>George Moore</h1>
			<h2>Software Engineer</h2>
			<p>I'm a software engineer working at Cyted Ltd. in Cambridge</p>
		</section>
	)
}

// {<SkillLabel text="Node.js" icon={<FaNodeJs/>}/>
// <SkillLabel text="HTML" icon={<FaHtml5/>}/>
// <SkillLabel text="CSS" icon={<FaCss3Alt/>}/>
// <SkillLabel text="Terraform" icon={<SiTerraform/>}/>}