import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SideBar from "./components/misc/SideBar/SideBar";
import { Fragment } from "react";
import SkillLabel from "./components/labels/SkillLabel/SkillLabel";
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTerraform } from "react-icons/si"
import AboutSection from "./sections/AboutSection/AboutSection";

export default function App() {
  return (
    <Fragment>
      <SideBar/>
      <AboutSection/>
    </Fragment>
  )
}
