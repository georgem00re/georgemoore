import styles from "./ContactPage.module.css";
import Canvas from "../../components/Canvas/Canvas";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function ContactPage() {
	return (
		<Canvas>
			<NavigationBar/>
			<ContactForm/>
		</Canvas>
	)
}