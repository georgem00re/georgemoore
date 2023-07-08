
import styles from "./ContactForm.module.css";

export default function ContactForm() {
	return (
		<form className={styles.form}>
			<h1>Get in Touch</h1>
			<input type="text" placeholder="Name"/>
			<input type="text" placeholder="Email"/>
			<textarea placeholder="Message"></textarea>
			<input type="submit" text="SEND"/>
		</form>
	)
}