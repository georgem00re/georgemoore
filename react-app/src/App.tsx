import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/contact" element ={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}