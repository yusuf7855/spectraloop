import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import {Box, Grid, LinearProgress, Typography} from "@mui/material";
import {Image} from "../../../components/common/Image.jsx";
import {
    Engineering,
    Speed,
    GroupWork,
    EmojiEvents
} from "@mui/icons-material";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import podPrototype from "/src/assets/images/spec1.jpg"
import teamWork from "/src/assets/images/spec1.jpg"
import testProcess from "/src/assets/images/spec1.jpg"
import competition from "/src/assets/images/spec1.jpg"
import React, {useEffect, useState} from "react";
import AnimateChangeInHeight from "../../../animations/AnimateChangeInHeight.jsx";
import {AnimatePresence, motion, useInView} from "framer-motion";

const data = [
    {
        title: "İleri Mühendislik ve Teknoloji",
        description: "Hyperloop teknolojisinin geliştirilmesinde en son mühendislik yaklaşımlarını kullanıyoruz. Vakum tüp teknolojisi, manyetik levitasyon ve aerodinamik tasarım prensipleriyle çalışarak, geleceğin ulaşım sistemlerini bugünden yaratıyoruz. CAD tasarımlarından prototip üretime kadar her aşamada öncü teknolojiler kullanıyoruz.",
        icon: <Engineering sx={{fontSize: "48px", color: "#0054ab"}}/>,
        image: podPrototype
    },
    {
        title: "Yüksek Hız ve Performans",
        description: "Hyperloop sistemimiz teorik olarak 1000 km/h üzeri hızlara ulaşabilen devrimsel bir ulaşım teknolojisidir. Minimum hava direnci, friktiyonsuz hareket ve optimize edilmiş enerji kullanımı ile maksimum performans hedefliyoruz. Test sonuçlarımızla bu hedeflere her geçen gün daha yakın olmaktayız.",
        icon: <Speed sx={{fontSize: "48px", color: "#0054ab"}}/>,
        image: testProcess
    },
    {
        title: "Güçlü Takım Ruhu",
        description: "Multidisipliner ekibimiz mekanik, elektrik, bilgisayar mühendisliği ve endüstriyel tasarım alanlarından uzmanlardan oluşmaktadır. Farklı üniversitelerden gelen yetenekli öğrenciler olarak, işbirliği ve bilgi paylaşımı ile güçlü sinerjiler yaratıyoruz. Takım çalışması başarımızın anahtarıdır.",
        icon: <GroupWork sx={{fontSize: "48px", color: "#0054ab"}}/>,
        image: teamWork
    },
    {
        title: "Yarışma Başarıları",
        description: "Teknofest Hyperloop yarışmasında elde ettiğimiz başarılar, teknik yetkinliğimizin kanıtıdır. Tasarım ödülü, teknik sunum başarısı ve performans testlerindeki üstün sonuçlarımızla adımızdan söz ettiriyoruz. Her yarışma yeni deneyimler ve başarılar getirmektedir.",
        icon: <EmojiEvents sx={{fontSize: "48px", color: "#0054ab"}}/>,
        image: competition
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
            background: "linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #f0f4ff 100%)"
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
                        fontWeight: 700,
                        fontSize: {xs: "14px", md: "16px"},
                        color: "#0054ab",
                        textTransform: "uppercase",
                        mb: 2
                    }}>SPECTRALOOP DENEYİMİ</Typography>
                </RevealInViewAnimation>
                <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .2}}>
                    <Typography variant={"h3"} sx={{
                        fontSize: {xs: "32px", md: "48px", lg: "56px"},
                        fontWeight: 800,
                        color: "#1a1a1a",
                        letterSpacing: -1,
                        lineHeight: 1.1,
                        mb: 4,
                        background: "linear-gradient(135deg, #0054ab 0%, #0066cc 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        maxWidth: "800px"
                    }}>
                        GELECEĞIN ULAŞIMINI TASARLIYORUZ
                    </Typography>
                </RevealInViewAnimation>
                <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .4}}>
                    <Typography sx={{
                        fontSize: {xs: "16px", md: "20px"},
                        color: "rgba(0,0,0,.7)",
                        lineHeight: 1.7,
                        maxWidth: "700px",
                        mx: "auto",
                        fontWeight: 400
                    }}>
                        Hyperloop teknolojisinde öncü olan takımımız, yenilikçi mühendislik çözümleri ve sürdürülebilir ulaşım vizyonuyla geleceği şekillendiriyor
                    </Typography>
                </RevealInViewAnimation>

                {/* Decorative Line */}
                <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .6}}>
                    <Box sx={{
                        width: "100px",
                        height: "4px",
                        backgroundColor: "#0054ab",
                        mx: "auto",
                        borderRadius: "2px",
                        mt: 4
                    }} />
                </RevealInViewAnimation>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent={"center"} alignItems={"center"}>
                        {
                            data.map((item, index) => <Grid key={index} item xs={12} md={6}>
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
                                                ? "2px solid #0054ab"
                                                : "2px solid transparent",
                                            boxShadow: activeFeature === index
                                                ? "0px 8px 30px 0 rgba(0,84,171,0.2)"
                                                : "0px 4px 15px 0 rgba(0,0,0,0.05)",
                                            p: 4,
                                            borderRadius: 3,
                                            flexDirection: "column",
                                            display: "block",
                                            gap: 1,
                                            height: "100%",
                                            minHeight: "280px",
                                            cursor: "pointer",
                                            overflow: "hidden",
                                            opacity: activeFeature === index ? 1 : .8,
                                            transform: activeFeature === index ? "scale(1.02)" : "scale(1)",
                                            transition: "all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                            position: "relative",
                                            ":hover": {
                                                opacity: 1,
                                                transform: "scale(1.01)",
                                                boxShadow: "0px 6px 25px 0 rgba(0,84,171,0.15)"
                                            },
                                            "::before": {
                                                content: '""',
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: item.gradient,
                                                opacity: activeFeature === index ? 0.05 : 0,
                                                transition: "opacity 0.3s ease",
                                                borderRadius: 3,
                                                zIndex: 0
                                            }
                                        }}>
                                        <Box sx={{position: "relative", zIndex: 1}}>
                                            <Box sx={{display: "flex", gap: 2, alignItems: "center", mb: 2}}>
                                                <Box sx={{
                                                    width: "70px",
                                                    height: "70px",
                                                    borderRadius: "50%",
                                                    background: activeFeature === index ? item.gradient : "rgba(0,84,171,0.1)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    transition: "all .3s ease",
                                                    transform: activeFeature === index ? "scale(1.1)" : "scale(1)",
                                                    boxShadow: activeFeature === index ? "0 8px 25px rgba(0,84,171,0.3)" : "none",
                                                    "& svg": {
                                                        color: activeFeature === index ? "white" : "#0054ab"
                                                    }
                                                }}>
                                                    {item.icon}
                                                </Box>
                                                <Typography sx={{
                                                    fontSize: "20px",
                                                    fontWeight: activeFeature === index ? 700 : 600,
                                                    color: activeFeature === index ? "#0054ab" : "#333",
                                                    transition: "all .3s ease",
                                                    lineHeight: 1.3
                                                }}>
                                                    {item.title}
                                                </Typography>
                                            </Box>

                                            <Typography sx={{
                                                color: "rgba(0,0,0,.7)",
                                                lineHeight: "26px",
                                                fontSize: "15px",
                                                mb: 3
                                            }}>
                                                {item.description}
                                            </Typography>

                                            {activeFeature === index && (
                                                <Box>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={(timer / 80)}
                                                        sx={{
                                                            height: 6,
                                                            borderRadius: '6px',
                                                            width: "100%",
                                                            backgroundColor: 'rgba(0,84,171,0.1)',
                                                            '& .MuiLinearProgress-bar': {
                                                                background: item.gradient,
                                                                borderRadius: '6px'
                                                            },
                                                        }}
                                                    />
                                                    <Typography sx={{
                                                        mt: 1,
                                                        fontSize: "11px",
                                                        color: "rgba(0,0,0,.5)",
                                                        fontWeight: 500,
                                                        textAlign: "center"
                                                    }}>
                                                        Sonraki özellik için: {Math.ceil((8000 - timer) / 1000)}s
                                                    </Typography>
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </RevealInViewAnimation>
                            </Grid>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}

export default About;