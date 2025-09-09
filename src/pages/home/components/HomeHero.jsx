import {useState} from 'react';
import {motion, useTransform, useScroll} from 'framer-motion';
import {Box, Button, Typography} from "@mui/material";
import {AnimatePresence} from "framer-motion";
import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import "../../../styles/components/outlined-button.css"
import {StyledColoredButton} from "../../../components/styled/StyledButtons.jsx";
import videolanding from "../../../assets/videolanding.mp4"
function HomeHero({servicesRef}) {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const {scrollY} = useScroll()
    const scale = useTransform(scrollY, [0, 500], [1, 0.9])
    const borderRadius = useTransform(scale, [1, 0.9], [0, 40])

    return (
        <Box sx={{position: "relative"}}>
            <motion.div
                style={{
                    scale,
                    borderRadius,
                    overflow: "hidden",
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        filter: "brightness(70%)",
                        objectFit: "cover",
                        objectPosition: "50% 0%", // xs için
                        width: "100%",
                        height: "100vh",
                        transition: "transform 0.3s ease",
                    }}
                    onLoadedData={() => setIsImageLoaded(true)}
                >
                    <source src={videolanding} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            <Box sx={{
                position: "absolute",
                bottom: {md: "15%"},
                left: {xs: "50%", md: "0%"},
                top: "50%",
                transform: {xs: "translate(-50%,-50%)", md: "translateY(-50%)"},
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: {xs: "center", md: "left"},
                gap: 1,
            }}>
                <StyledContainer>
                    <AnimatePresence>
                        {
                            isImageLoaded &&
                            <Box>
                                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .3}}>
                                    <Typography sx={{
                                        fontSize: {xs: "32px", md: "48px"},
                                        fontWeight: 800,
                                        fontFamily: "'Montserrat', sans-serif",
                                        lineHeight: 1.25,
                                        background: "white",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}>ATAKUM SAHİLDEKİ EVİNİZ
                                    </Typography>
                                </RevealInViewAnimation>
                                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .6}}>
                                    <Typography sx={{
                                        fontSize: {xs: "32px", md: "48px"},
                                        fontWeight: 800,
                                        fontFamily: "'Montserrat', sans-serif",
                                        lineHeight: 1.25,
                                        color: "#edb472" // edb472
                                    }}>
                                        DE PERLAS!
                                    </Typography>
                                </RevealInViewAnimation>
                                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .9}}>
                                    <Typography sx={{
                                        color: "rgba(255,255,255,.8)",
                                        fontWeight: 300,
                                        fontSize: {xs: "14px", sm: "16px"},
                                        mt: 2,
                                        lineHeight: 2,
                                        maxWidth: "60ch"
                                    }}>
                                        Perlas Otel olarak amacımız,
                                        misafirlerimize evlerindeki huzuru ve konforu yaşatmak, her zaman güleryüzlü hizmet sunmaktır.
                                    </Typography>
                                </RevealInViewAnimation>
                                <Box sx={{
                                    display: "flex",
                                    gap: 2,
                                    flexDirection: {xs: "column", md: "row"},
                                    mt: 4,
                                }}>
                                    <RevealInViewAnimation blur={true} size={20}
                                                           transition={{duration: 0.6, delay: 1.2}}>
                                        <StyledColoredButton
                                            sx={{
                                                py: 1.5,
                                                px: 8,
                                                width: {xs: "100%", sm: "100%", md: "100%"},
                                                borderRadius: 2,
                                                border: "2px solid transparent"
                                            }}
                                            onClick={() => servicesRef.current?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: "center"
                                            })}
                                        >
                                            <Typography sx={{
                                                fontWeight: 500,
                                                textTransform: "none"
                                            }}>Odalarımız</Typography>
                                        </StyledColoredButton>
                                    </RevealInViewAnimation>
                                    <RevealInViewAnimation blur={true} size={20} transition={{ duration: 0.6, delay: 1.5 }}>
                                        <Button
                                            className={"outlined-button-colored"}
                                            variant={"outlined"}
                                            sx={{
                                                p: 1.5,
                                                px: 8,
                                                borderRadius: 2,
                                                overflow: "hidden",
                                                width: { xs: "100%", sm: "100%", md: "auto" },
                                                borderColor: "#edb472", // Ana renk sınır çizgisi
                                                color: "#edb472", // Ana renk metin rengi
                                                ":hover": {
                                                    backgroundColor: "#F5E6E0", // Açık ton arka plan (hover)
                                                    borderColor: "#B86A52", // Koyu ton sınır çizgisi (hover)
                                                    color: "#B86A52", // Koyu ton metin rengi (hover)
                                                },
                                            }}
                                            href={"/iletisim"}
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    textTransform: "none",
                                                }}
                                            >
                                                İletişim
                                            </Typography>
                                        </Button>
                                    </RevealInViewAnimation>

                                </Box>
                            </Box>
                        }
                    </AnimatePresence>
                </StyledContainer>
            </Box>
        </Box>
    );
}

export default HomeHero;
