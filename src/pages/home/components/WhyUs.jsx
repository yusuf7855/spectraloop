import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import {Box, Grid, LinearProgress, Typography} from "@mui/material";
import {Image} from "../../../components/common/Image.jsx";
import {
    Hotel,
    RoomService,
    LocationOn,
    Security
} from "@mui/icons-material";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import hotelExterior from "/src/assets/images/hotel/maps.png"
import hotelLobby from "/src/assets/images/hotel/ikram.jpg"
import hotelRoom from "/src/assets/images/hotel/hotel.jpg"
import hotelSecurity from "/src/assets/images/hotel/security.png"
import React, {useEffect, useState} from "react";
import AnimateChangeInHeight from "../../../animations/AnimateChangeInHeight.jsx";
import {AnimatePresence, motion, useInView} from "framer-motion";

const data = [
    {
        title: "Stratejik Konum Avantajı",
        description: "Samsun Atakum'un kalbinde, denize ve şehir merkezine yürüme mesafesinde konumlanmış otelimiz. Alışveriş merkezleri, restoranlar ve iş merkezlerine kolay ulaşım imkanı. Karadeniz'in eşsiz manzarasını odanızdan izleyebilirsiniz.",
        icon: <LocationOn sx={{fontSize: "48px", color: "#edb472"}}/>,
        image: hotelExterior
    },
    {
        title: "Lüks Konfor ve Modern Tasarım",
        description: "Her detayı özenle tasarlanmış odalarımızda, modern konfor ile geleneksel misafirperverliği bir araya getirdik. Premium yatak takımları, akıllı oda kontrolleri ve özel banyo amenities ile unutulmaz bir konaklama deneyimi.",
        icon: <Hotel sx={{fontSize: "48px", color: "#edb472"}}/>,
        image: hotelRoom
    },
    {
        title: "Özel Hizmet ve İkramlar",
        description: "24 saat room service, kişisel concierge desteği, ücretsiz Wi-Fi ve otopark hizmetleri. Özel etkinlikleriniz için toplantı salonları, transfer hizmetleri ve özelleştirilmiş konaklama paketleri sunuyoruz.",
        icon: <RoomService sx={{fontSize: "48px", color: "#edb472"}}/>,
        image: hotelLobby
    },
    {
        title: "Güvenlik ve Huzur",
        description: "7/24 profesyonel güvenlik hizmetleri, kamera sistemleri ve güvenli otopark alanları. Yangın güvenlik sistemleri, acil durum protokolleri ve sağlık önlemleri ile tam güvenli konaklama ortamı.",
        icon: <Security sx={{fontSize: "48px", color: "#edb472"}}/>,
        image: hotelSecurity
    }
]

function About() {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: true})
    const [activeFeature, setActiveFeature] = useState(0)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (isInView) setTimer((prev) => prev + 100)
        }, 100)
        return () => clearInterval(interval)
    }, [isInView])

    useEffect(() => {
        if (timer > 8000) {
            setActiveFeature((prev) => (prev + 1) % data.length)
            setTimer(0)
        }
    }, [timer])

    return (
        <StyledContainer ref={ref} sx={{
            py: {xs: 6, md: 12},
            backgroundImage: "linear-gradient(135deg, #f8f8f8 0%, #fafafa 50%, #f5f5f5 100%)"
        }}>
            <Box sx={{
                mb: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
            }}>
                <RevealInViewAnimation size={20} transition={{duration: 0.6}}>
                    <Typography variant={"h2"} sx={{
                        letterSpacing: 3,
                        fontWeight: 600,
                        fontSize: {xs: "14px", md: "16px"},
                        color: "#edb472",
                        textTransform: "uppercase"
                    }}>PERLAS OTEL DENEYİMİ</Typography>
                </RevealInViewAnimation>
                <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .2}}>
                    <Typography variant={"h3"} sx={{
                        mt: 2,
                        fontSize: {xs: "28px", md: "38px"},
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        lineHeight: 1.3,
                        maxWidth: "700px"
                    }}>
                        SAMSUN DA KONFORUN VE LÜKSÜN BULUŞTUGU NOKTA
                    </Typography>
                </RevealInViewAnimation>
                <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .4}}>
                    <Typography sx={{
                        mt: 3,
                        fontSize: {xs: "16px", md: "18px"},
                        color: "rgba(0,0,0,.7)",
                        maxWidth: "600px",
                        lineHeight: 1.6
                    }}>
                        Her detayı özenle tasarlanmış hizmetlerimiz ve olanaklarımızla size unutulmaz bir konaklama deneyimi sunuyoruz
                    </Typography>
                </RevealInViewAnimation>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} mlg={6}>
                    <Grid container spacing={3} justifyContent={"center"} alignItems={"center"}>
                        {
                            data.map((item, index) => <Grid key={index} item xs={12}>
                                <RevealInViewAnimation size={15 + 5 * (index + 1)}
                                                       transition={{duration: 0.6, delay: .5 + 0.08 * (index + 1)}}>
                                    <Box
                                        onClick={() => {
                                            setActiveFeature(index)
                                            setTimer(0)
                                        }}
                                        sx={{
                                            background: activeFeature === index
                                                ? "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)"
                                                : "linear-gradient(145deg, #fafafa 0%, #f0f0f0 100%)",
                                            border: activeFeature === index
                                                ? "2px solid #edb472"
                                                : "2px solid transparent",
                                            boxShadow: activeFeature === index
                                                ? "0px 8px 30px 0 rgba(199, 122, 99, 0.2)"
                                                : "0px 4px 15px 0 rgba(0,0,0,0.05)",
                                            p: 3.5,
                                            borderRadius: 3,
                                            flexDirection: "column",
                                            display: "block",
                                            gap: 1,
                                            height: "fit-content",
                                            cursor: "pointer",
                                            overflow: "hidden",
                                            opacity: activeFeature === index ? 1 : .7,
                                            transform: activeFeature === index ? "scale(1.02)" : "scale(1)",
                                            transition: "all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                            ":hover": {
                                                opacity: 1,
                                                transform: "scale(1.01)",
                                                boxShadow: "0px 6px 25px 0 rgba(199, 122, 99, 0.15)"
                                            }
                                        }}>
                                        <Box sx={{display: "flex", gap: 2, alignItems: "center", mb: 1}}>
                                            <Box sx={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                                backgroundColor: "#F5E6E0",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "transform .3s ease",
                                                transform: activeFeature === index ? "scale(1.1)" : "scale(1)"
                                            }}>
                                                {item.icon}
                                            </Box>
                                            <Typography sx={{
                                                fontSize: "18px",
                                                fontWeight: activeFeature === index ? 700 : 600,
                                                color: activeFeature === index ? "#edb472" : "#333",
                                                transition: "all .3s ease"
                                            }}>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                        <AnimateChangeInHeight duration={.4}>
                                            <Box
                                                sx={{
                                                    height: activeFeature === index ? "fit-content" : 0,
                                                    opacity: activeFeature === index ? 1 : 0,
                                                    transition: "all .4s ease",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <Typography sx={{
                                                    mt: 2,
                                                    ml: 1,
                                                    color: "rgba(0,0,0,.7)",
                                                    lineHeight: "26px",
                                                    fontSize: "14px"
                                                }}>
                                                    {item.description}
                                                </Typography>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={activeFeature === index ? (timer / 80) : 0}
                                                    sx={{
                                                        height: 6,
                                                        mt: 3,
                                                        ml: 1,
                                                        borderRadius: '6px',
                                                        width: "calc(100% - 8px)",
                                                        backgroundColor: 'rgba(199, 122, 99, 0.1)',
                                                        '& .MuiLinearProgress-bar': {
                                                            backgroundColor: '#edb472',
                                                            borderRadius: '6px'
                                                        },
                                                    }}
                                                />
                                                <Typography sx={{
                                                    mt: 1,
                                                    ml: 1,
                                                    fontSize: "11px",
                                                    color: "rgba(0,0,0,.5)",
                                                    fontWeight: 500
                                                }}>
                                                    Sonraki özellik için: {Math.ceil((8000 - timer) / 1000)}s
                                                </Typography>
                                            </Box>
                                        </AnimateChangeInHeight>
                                    </Box>
                                </RevealInViewAnimation>
                            </Grid>)
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} mlg={6}>
                    <RevealInViewAnimation size={20} style={{
                        height: "100%"
                    }} transition={{duration: 0.6, delay: .2}}>
                        <Box sx={{
                            height: "100%",
                            minHeight: "500px",
                            position: "relative",
                            borderRadius: 3,
                            overflow: "hidden",
                            boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
                        }}>
                            {/* Image overlay with hotel info */}
                            <Box sx={{
                                position: "absolute",
                                top: 20,
                                left: 20,
                                zIndex: 2,
                                backgroundColor: "rgba(255,255,255,0.95)",
                                px: 2.5,
                                py: 1.5,
                                borderRadius: 2,
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.2)"
                            }}>
                                <Typography sx={{
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    color: "#edb472",
                                    textTransform: "uppercase",
                                    letterSpacing: 0.5
                                }}>
                                    {`${activeFeature + 1}/${data.length}`} • PERLAS OTEL
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "#333",
                                    mt: 0.5
                                }}>
                                    {data[activeFeature].title}
                                </Typography>
                            </Box>

                            <AnimatePresence initial={false} mode={"wait"}>
                                <motion.div
                                    key={activeFeature}
                                    initial={{opacity: 0, scale: 1.1, filter: "blur(20px)"}}
                                    animate={{opacity: 1, scale: 1, filter: "blur(0px)"}}
                                    exit={{opacity: 0, scale: 0.95}}
                                    transition={{duration: 0.6, ease: "easeInOut"}}
                                    style={{height: "100%", position: "relative"}}
                                >
                                    <Image
                                        alt={`perlas-hotel-${activeFeature}`}
                                        src={data[activeFeature].image}
                                        skeleton={true}
                                        sx={{
                                            filter: "brightness(90%) contrast(1.1)",
                                            userDrag: "none",
                                            userSelect: "none",
                                            height: "100%",
                                            width: "100%",
                                            objectFit: "cover"
                                        }}
                                        skeletonBorderRadius={"12px"}
                                        objectFit={"cover"}
                                    />
                                    {/* Gradient overlay */}
                                    <Box sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: "40%",
                                        background: "linear-gradient(transparent, rgba(0,0,0,0.4))",
                                        zIndex: 1
                                    }} />
                                </motion.div>
                            </AnimatePresence>
                        </Box>
                    </RevealInViewAnimation>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}

export default About;