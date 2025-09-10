import {Box} from "@mui/material";
import HomeHero from "./components/HomeHero.jsx";
import About from "./components/About.jsx";
import References from "./components/References.jsx";
import OurServices from "./components/GallerySection.jsx";
import WhyUs from "./components/WhyUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import {useRef} from "react";
import ContactMapSection from "../contact/components/ContactMapSection.jsx";

function HomePage() {
    document.title = "DE PERLAS HOTEL";
    const servicesRef = useRef();

    return (
        <Box>
            <HomeHero servicesRef={servicesRef}/>
            <About/>
            <ContactMapSection/>
            <OurServices servicesRef={servicesRef}/>
            <WhyUs/>
            <ContactUs/>
        </Box>
    );
}

export default HomePage;
