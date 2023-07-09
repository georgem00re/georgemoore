
import styles from "./SideBar.module.css";
import Sprite from "../../images/Sprite/Sprite";
import NavigationButton from "../../buttons/NavigationButton/NavigationButton";
import NavigationButtonContainer from "../../containers/NavigationButtonContainer/NavigationButtonContainer";
import SocialButton from "../../buttons/SocialButton/SocialButton";
import SocialButtonContainer from "../../containers/SocialButtonContainer/SocialButtonContainer";
import LightModeButton from "../../buttons/LightModeButton/LightModeButton";
import ColorButtonContainer from "../../containers/ColorButtonContainer/ColorButtonContainer";
import ColorButton from "../../buttons/ColorButton/ColorButton";

import { BsFillPersonFill } from "react-icons/bs";
import { AiFillProject, AiFillGithub, AiFillStar, AiFillInstagram } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { FaRedditAlien } from "react-icons/fa"

export default function SideBar() {

	const para = "Hi, my name is George Moore and I'm a junior software engineer. Welcome to my personal website!"
	const colors = ["#54B689", "#5BC3D5", "#3B7EEB", "#5ECCA9", "#EEA73B", "#5469C9", "#5D6BA7", "#6C51A4", "#D67553", "#5FCB71"]

	const colorButtons = colors.map((element, index) => {
		return <ColorButton key={index} color={element}/>
	})

	return (
		<div className={styles.container}>
			<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				<h1 className={styles.header}>George Moore</h1>
				<Sprite/>
				<p className={styles.para}>{para}</p>
				<SocialButtonContainer>
					<SocialButton icon={<AiFillGithub/>} url="https://www.google.com"/>
					<SocialButton icon={<BiLogoLinkedin/>}/>
					<SocialButton icon={<AiFillInstagram/>}/>
					<SocialButton icon={<FaRedditAlien/>}/>
					<SocialButton icon={<BiLogoFacebook/>}/>
				</SocialButtonContainer>
			</div>
			<NavigationButtonContainer>
				<NavigationButton text="About Me" icon={<BsFillPersonFill/>}/>
				<NavigationButton text="Skills" icon={<AiFillStar/>}/>
				<NavigationButton text="Portfolio" icon={<AiFillProject/>}/>
				<NavigationButton text="Curriculum Vitae" icon={<HiDocumentText/>}/>
				<NavigationButton text="Get in Touch" icon={<MdEmail/>}/>
			</NavigationButtonContainer>
			<ColorButtonContainer>
				{colorButtons}
			</ColorButtonContainer>
			<LightModeButton/>
		</div>
	)
}