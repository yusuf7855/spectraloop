import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import {Box, Grid, Typography} from "@mui/material";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {Image} from "../../../components/common/Image.jsx";
import {motion, useAnimation, useInView} from "framer-motion";
import React from "react";

function GallerySection({servicesRef}) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    React.useEffect(() => {
        if (isInView) mainControls.start("visible")
    }, [isInView])

    // Demo görseller - Gerçek projelerinizin fotoğraflarıyla değiştirin
    const galleryImages = [
        {
            id: 1,
            src: "/src/assets/images/spec1.jpg",
            title: "Hyperloop Pod Prototipi",
            category: "Prototip"
        },
        {
            id: 2,
            src: "/src/assets/images/spec1.jpg",
            title: "Mekanik Sistem Tasarımı",
            category: "Tasarım"
        },
        {
            id: 3,
            src: "/src/assets/images/spec1.jpg",
            title: "Takım Çalışması",
            category: "Ekip"
        },
        {
            id: 4,
            src: "/src/assets/images/spec1.jpg",
            title: "Test Süreci",
            category: "Test"
        },
        {
            id: 5,
            src: "/src/assets/images/spec1.jpg",
            title: "Teknofest Yarışması",
            category: "Yarışma"
        },
        {
            id: 6,
            src: "/src/assets/images/spec1.jpg",
            title: "Ödül Töreni",
            category: "Başarı"
        }
    ];

    const getImageHeight = (index) => {
        const heights = [300, 300, 300, 300, 300, 300];
        return heights[index % heights.length];
    };

    return (
        <Box sx={{
            py: {xs: 8, md: 12},
            background: "linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #f0f4ff 100%)",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Background Pattern */}
            <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 20% 20%, rgba(0,84,171,0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(0,84,171,0.03) 0%, transparent 50%)
                `,
                zIndex: 0
            }} />

            <StyledContainer sx={{position: "relative", zIndex: 1}} ref={servicesRef}>
                {/* Header Section */}
                <Box sx={{textAlign: "center", mb: 8}}>
                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .2}}>
                        <Typography sx={{
                            letterSpacing: 2,
                            fontWeight: 700,
                            fontSize: {xs: "14px", md: "16px"},
                            color: "#0054ab",
                            textTransform: "uppercase",
                            mb: 2
                        }}>GALERİMİZ</Typography>
                    </RevealInViewAnimation>

                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .4}}>
                        <Typography sx={{
                            fontSize: {xs: "32px", md: "48px", lg: "56px"},
                            fontWeight: 800,
                            color: "#1a1a1a",
                            letterSpacing: -1,
                            lineHeight: 1.1,
                            mb: 4,
                            background: "linear-gradient(135deg, #0054ab 0%, #0066cc 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                        }}>
                            Yolculuğumuzu Keşfedin
                        </Typography>
                    </RevealInViewAnimation>

                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .6}}>
                        <Typography sx={{
                            fontSize: {xs: "16px", md: "20px"},
                            color: "rgba(0,0,0,.7)",
                            lineHeight: 1.7,
                            maxWidth: "700px",
                            mx: "auto",
                            fontWeight: 400
                        }}>
                            Hyperloop teknolojisinin geliştirilmesindeki adımlarımız, başarılarımız ve takım ruhumuzu yansıtan anlarımız
                        </Typography>
                    </RevealInViewAnimation>

                    {/* Decorative Line */}
                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .8}}>
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

                {/* Gallery Grid */}
                <Box ref={ref}>
                    <Grid container spacing={3}>
                        {galleryImages.map((image, index) => (
                            <Grid item xs={12} sm={6} md={4} key={image.id}>
                                <motion.div
                                    variants={{
                                        hidden: {opacity: 0, y: 60, scale: 0.8},
                                        visible: {opacity: 1, y: 0, scale: 1}
                                    }}
                                    initial="hidden"
                                    animate={mainControls}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1 + (index * 0.15),
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                >
                                    <Box sx={{
                                        position: "relative",
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        boxShadow: "0 10px 40px rgba(0,84,171,0.1)",
                                        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                        cursor: "pointer",
                                        ":hover": {
                                            transform: "translateY(-12px) scale(1.02)",
                                            boxShadow: "0 25px 60px rgba(0,84,171,0.2)",
                                            ".gallery-image": {
                                                transform: "scale(1.1)"
                                            },
                                            ".overlay": {
                                                opacity: 1
                                            }
                                        }
                                    }}>
                                        {/* Category Badge */}
                                        <Box sx={{
                                            position: "absolute",
                                            top: 16,
                                            left: 16,
                                            zIndex: 3,
                                            backgroundColor: "rgba(0,84,171,0.9)",
                                            color: "white",
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: 2,
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: 0.5,
                                            backdropFilter: "blur(10px)"
                                        }}>
                                            {image.category}
                                        </Box>

                                        {/* Main Image */}
                                        <Image
                                            skeleton={true}
                                            className="gallery-image"
                                            sx={{
                                                width: "100%",
                                                height: getImageHeight(index),
                                                objectFit: "cover",
                                                transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                                userSelect: "none",
                                                userDrag: "none"
                                            }}
                                            src={image.src}
                                            alt={image.title}
                                        />

                                        {/* Hover Overlay */}
                                        <Box className="overlay" sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: "linear-gradient(45deg, rgba(0,84,171,0.8) 0%, rgba(0,102,204,0.8) 100%)",
                                            opacity: 0,
                                            transition: "opacity 0.4s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            zIndex: 2
                                        }}>
                                            <Box sx={{
                                                textAlign: "center",
                                                color: "white",
                                                p: 3
                                            }}>
                                                <Typography sx={{
                                                    fontSize: "18px",
                                                    fontWeight: 700,
                                                    mb: 1,
                                                    letterSpacing: 0.5
                                                }}>
                                                    {image.title}
                                                </Typography>
                                                <Box sx={{
                                                    width: "40px",
                                                    height: "2px",
                                                    backgroundColor: "white",
                                                    mx: "auto",
                                                    borderRadius: "1px"
                                                }} />
                                            </Box>
                                        </Box>

                                        {/* Bottom Accent Line */}
                                        <Box sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: "4px",
                                            background: "linear-gradient(90deg, #0054ab 0%, #0066cc 100%)",
                                            opacity: 0.8
                                        }} />
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Bottom Stats Section */}
                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: 2.5}}>
                    <Box sx={{
                        mt: 10,
                        textAlign: "center",
                        p: 4,
                        backgroundColor: "rgba(0,84,171,0.03)",
                        borderRadius: 3,
                        border: "1px solid rgba(0,84,171,0.1)"
                    }}>
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={6} md={3}>
                                <Typography sx={{
                                    fontSize: {xs: "24px", md: "32px"},
                                    fontWeight: 800,
                                    color: "#0054ab",
                                    mb: 1
                                }}>50+</Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.7)",
                                    fontWeight: 500
                                }}>Proje Fotoğrafı</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography sx={{
                                    fontSize: {xs: "24px", md: "32px"},
                                    fontWeight: 800,
                                    color: "#0054ab",
                                    mb: 1
                                }}>3</Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.7)",
                                    fontWeight: 500
                                }}>Yıl Deneyim</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography sx={{
                                    fontSize: {xs: "24px", md: "32px"},
                                    fontWeight: 800,
                                    color: "#0054ab",
                                    mb: 1
                                }}>15+</Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.7)",
                                    fontWeight: 500
                                }}>Takım Üyesi</Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                                <Typography sx={{
                                    fontSize: {xs: "24px", md: "32px"},
                                    fontWeight: 800,
                                    color: "#0054ab",
                                    mb: 1
                                }}>3</Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,.7)",
                                    fontWeight: 500
                                }}>Ödül</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </RevealInViewAnimation>
            </StyledContainer>
        </Box>
    );
}

export default GallerySection;
