import {Box, Typography} from "@mui/material";
import "../../styles/pages/contact.css"
import RevealInViewAnimation from "../../animations/RevealInViewAnimation.jsx";
import ContactFormSection from "./components/ContactFormSection.jsx";
import ContactMapSection from "./components/ContactMapSection.jsx";
import ContactWhatsappSection from "./components/ContactWhatsappSection.jsx";

function ContactPage() {
    document.title = "İletişim -  De Perlas Hotel"

    return (
        <Box>
            <Box sx={{position: "relative"}}>
                <Box sx={{
                    background: (theme) => theme.palette.primary.darkMain,
                    height: {xs: "20vh", md: "20vh"},
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "0px!important"
                }}>
                    <Typography variant={"h2"} sx={{
                        color: "white",
                        fontSize: {xs: "24px", md: "32px"},
                        letterSpacing: 3,
                        wordSpacing: 2,
                        textAlign: "center",
                        mx: 1
                    }}>
                        DETAYLI BİLGİ İÇİN LÜTFEN BİZİ ARAYIN
                    </Typography>
                </Box>
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
            </Box>
            <RevealInViewAnimation
                blur={true}
                size={20}
                transition={{delay: .2, duration: 0.5}}
            >
                <ContactFormSection/>
            </RevealInViewAnimation>
            <ContactWhatsappSection/>
            <RevealInViewAnimation
                blur={true}
                size={20}
                transition={{delay: .2, duration: 0.6}}
            >
                <ContactMapSection/>
            </RevealInViewAnimation>
        </Box>
    );
}

export default ContactPage;
