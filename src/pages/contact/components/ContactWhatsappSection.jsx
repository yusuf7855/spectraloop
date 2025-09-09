import {Box, Button, Typography} from "@mui/material";
import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {Link} from "react-router-dom";
import {WhatsApp} from "@mui/icons-material";

function ContactWhatsappSection() {
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                py: 6,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    backgroundColor: 'white',
                    background: `
                        linear-gradient(to right, rgba(0,0,0,0.025) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    left: "50%",
                    top: "50%",
                    margin: 'auto',
                    height: {xs: '300px', md: '350px'},
                    width: {xs: '300px', md: '350px'},
                    transform: "translate(-50%,-50%)",
                    borderRadius: '50%',
                    backgroundColor: '#25d366',
                    opacity: 0.2,
                    filter: 'blur(100px)',
                    zIndex: 2,
                }}
            />
            <Box sx={{
                position: 'relative',
                zIndex: 2,
                width: "100%",
                height: "40vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            }}>
                <StyledContainer>
                    <RevealInViewAnimation style={{display: "flex", justifyContent: "center"}} blur={true} size={20} transition={{duration: 0.6, delay: .3}}>
                        <Typography sx={{
                            fontSize: {xs: "32px", md: "48px"},
                            fontWeight: 600,
                            lineHeight: 1.25,
                            background: "linear-gradient(110deg, rgb(0, 0, 0) 0%, rgb(40, 40, 40) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            maxWidth: "20ch",
                            wordBreak: "break-word",
                        }}>
                            WhatsApp ile İletişime Geçin!
                        </Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .6}}>
                        <Typography sx={{
                            color: "rgba(0,0,0,.8)",
                            fontWeight: 300,
                            fontSize: {xs: "14px", sm: "16px"},
                            mt: 2,
                            lineHeight: 2,
                            maxWidth: "60ch"
                        }}>
                            Herhangi bir konuda yardım mı ihtiyacınız var? WhatsApp üzerinden bizimle iletişime geçin.
                            Size en kısa sürede yardımcı olacağız!
                        </Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .9}}>
                        <Box component={"a"} rel={"noreferrer"} target={"_blank"} href={"https://wa.me/905396385955"}>
                            <Button sx={{
                                boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
                                borderRadius: "400px",
                                backgroundColor: "white",
                                color: "#25d366",
                                px: 4,
                                py: 1.5,
                                mt: 3,
                                transition: ".3s all",
                                ":hover": {
                                    backgroundColor: "#25d366",
                                    color: "white",
                                    boxShadow: "0px 0px 20px 0 #25d366",
                                    transform: "scale(.95)"
                                }
                            }}>
                                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                    <WhatsApp sx={{ fontSize: "1.75rem" }} />
                                    <Typography sx={{
                                        fontWeight: 500,
                                        textTransform: "none"
                                    }}>İletişime Geç</Typography>
                                </Box>
                            </Button>
                        </Box>

                    </RevealInViewAnimation>
                </StyledContainer>
            </Box>
        </Box>
    );
}

export default ContactWhatsappSection;