import {Box, Grid, Typography} from "@mui/material";
import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import {
    Hotel,
    RoomService,
    LocationOn,
    Restaurant
} from "@mui/icons-material";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import {useState} from "react";


function OurFeatures() {
    const featureData = [
        {
            icon: <Hotel sx={{fontSize: "48px"}} />,
            title: "KONFORLU KONAKLAMA",
            description: "Modern ve rahat odalarımızda evinizin sıcaklığını hissedeceğiniz konforlu bir konaklama deneyimi sunuyoruz."
        },
        {
            icon: <RoomService sx={{fontSize: "48px"}} />,
            title: "24 SAAT HİZMET",
            description: "Room service, concierge hizmetleri ve kişiselleştirilmiş yaklaşımımızla sizlere özel hizmet sunuyoruz."
        },
        {
            icon: <LocationOn sx={{fontSize: "48px"}} />,
            title: "STRATEJİK KONUM",
            description: "Atakum sahiline sadece 2 dakika yürüme mesafesinde, deniz kenarında eşsiz konum avantajı ile tatil keyfini doyasıya yaşayın."
        },
        {
            icon: <Restaurant sx={{fontSize: "48px"}} />,
            title: "PREMIUM RESTORAN",
            description: "Karadeniz mutfağından uluslararası lezzetlere, özenle hazırlanmış menülerimizle damak tadınıza hitap ediyoruz."
        }
    ]

    return (
        <Box sx={{
            background: "rgb(32, 32, 32)",
            py: {xs: 5, md: 10},
            color: "white",
            position: "relative",
        }}>
            <StyledContainer sx={{
                position: "relative",
                zIndex: 2
            }}>
                <RevealInViewAnimation size={20} transition={{duration: 0.6}}>
                    <Typography variant={"h2"} sx={{
                        letterSpacing: 2.5,
                        fontWeight: 600,
                        fontSize: {xs: "14px", md: "16px"},
                    }}>PERLAS OTEL HİZMETLERİ</Typography>
                </RevealInViewAnimation>
                <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .2}}>
                    <Typography variant={"h3"} sx={{
                        mt: 2,
                        fontSize: {xs: "24px", md: "32px"},
                        fontWeight: 800,
                        color: "white",
                        letterSpacing: 1.5
                    }}>
                        SAMSUN'DA UNUTULMAZ KONAKLAMA DENEYİMİ
                    </Typography>
                </RevealInViewAnimation>

                <Grid container sx={{mt: {xs: 3, md: 4}}} spacing={{xs: 3, lg: 4}} alignItems={"stretch"}
                      justifyContent={"stretch"}>
                    {
                        featureData.map((feature, index) => <Grid key={index} item xs={12} md={6} lg={3}
                                                                  sx={{zIndex: 10}}>
                            <RevealInViewAnimation style={{height: "100%"}} size={15 + 5 * (index + 1)}
                                                   transition={{duration: 0.6, delay: .3 + 0.1 * (index + 1)}}>
                                <CardRevealedPointer feature={feature}/>
                            </RevealInViewAnimation>
                        </Grid>)
                    }
                </Grid>
            </StyledContainer>
        </Box>
    );
}

export function CardRevealedPointer({feature}) {
    const [visible, setVisible] = useState(false)
    const mouseX = useMotionValue(200)
    const mouseY = useMotionValue(0)

    return (
        <Box
            onMouseMove={(e) => {
                setVisible(true)
                const {left, top} = e.currentTarget.getBoundingClientRect()
                mouseX.set(e.clientX - left)
                mouseY.set(e.clientY - top)
            }}
            onMouseLeave={() => {
                setVisible(false)
            }}
            sx={{
                background: "transparent",
                color: "white",
                borderRadius: 4,
                textAlign: "center",
                height: "100%",
                position: "relative",
                width: "100%",
                zIndex: 10
            }}
        >
            <motion.div
                className="hoverEffect"
                style={{
                    position: "absolute",
                    inset: -1,
                    borderRadius: "inherit",
                    opacity: visible ? .3 : 0,
                    zIndex: 2,
                    transition: "opacity 0.3s",
                    background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(199, 122, 99, 0.6), transparent 80%)`,
                }}
            />
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    borderRadius: "inherit",
                    border: "1px solid rgba(199, 122, 99, 0.2)",
                    padding: "16px",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Box sx={{
                    position: "absolute",
                    top: 24,
                    left: "50%",
                    transform: "translateX(-50%)!important",
                    color: "#edb472"
                }}>
                    {feature.icon}
                </Box>
                <Typography sx={{
                    mt: 9,
                    fontSize: "18px",
                    fontWeight: "600",
                    letterSpacing: 2
                }}>{feature.title}</Typography>
                <Typography sx={{mt: 2, color: "rgba(255,255,255,.7)",}}>
                    {feature.description}
                </Typography>
            </Box>
        </Box>
    );
}

export default OurFeatures;