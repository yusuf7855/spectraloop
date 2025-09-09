import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import {Box, Grid, Typography, Chip, Card, CardContent, Button} from "@mui/material";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {ArrowForward, People, SquareFoot, Star, Wifi, LocalParking, Pool, Restaurant} from "@mui/icons-material";
import {Image} from "../../../components/common/Image.jsx";
import {rooms} from "../../../utils/rooms.jsx";
import {Link} from "react-router-dom";
import {StyledDarkButton} from "../../../components/styled/StyledButtons.jsx";
import {motion, useAnimation, useInView} from "framer-motion";
import React from "react";

function OurServices({servicesRef}) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    React.useEffect(() => {
        if (isInView) mainControls.start("visible")
    }, [isInView])

    const roomsList = [...rooms.slice(1, 7), {isButton: true, route: "odalar"}]

    // Fiyatı formatla
    const formatPrice = (price) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    // Öne çıkan olanakları göster
    const getFeaturedAmenities = (amenities) => {
        const featured = ["Ücretsiz Wi-Fi", "Klima", "Minibar", "LCD TV"];
        return amenities.filter(amenity =>
            featured.some(feat => amenity.includes(feat.split(" ")[0]))
        ).slice(0, 3);
    };

    return (
        <StyledContainer sx={{py: 8}} ref={servicesRef}>
            {/* Header Section */}
            <Box sx={{textAlign: "center", mb: 6}}>
                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.5, delay: .3}}>
                    <Typography sx={{
                        letterSpacing: 1.25,
                        fontWeight: 600,
                        fontSize: {xs: "14px", md: "16px"},
                        color: "#edb472",
                        textTransform: "uppercase"
                    }}>ODALARIMIZ</Typography>
                </RevealInViewAnimation>

                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.5, delay: .6}}>
                    <Typography sx={{
                        mt: 2,
                        fontSize: {xs: "28px", md: "40px"},
                        fontWeight: 700,
                        color: "black",
                        letterSpacing: 1.5,
                        lineHeight: 1.2
                    }}>
                        Konforunuz İçin Tasarlandı!
                    </Typography>
                </RevealInViewAnimation>

                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.5, delay: .9}}>
                    <Typography sx={{
                        mt: 3,
                        maxWidth: "600px",
                        mx: "auto",
                        color: "rgba(0,0,0,.65)",
                        fontSize: {xs: "16px", md: "18px"},
                        lineHeight: 1.6,
                    }}>
                        Perlas Otel olarak her detayı düşünülerek tasarlanmış odalarımızda, konforunuz ve huzurunuz için gereken her şeyi sunuyoruz.
                    </Typography>
                </RevealInViewAnimation>

                {/* Otel Özellikleri */}
                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.5, delay: 1.2}}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 3,
                        mt: 4,
                        flexWrap: "wrap"
                    }}>
                        <Chip
                            icon={<Wifi />}
                            label="Ücretsiz Wi-Fi"
                            sx={{
                                backgroundColor: "#F5E6E0",
                                color: "#edb472",
                                fontWeight: 600,
                                px: 1
                            }}
                        />
                        <Chip
                            icon={<LocalParking />}
                            label="Ücretsiz Otopark"
                            sx={{
                                backgroundColor: "#F5E6E0",
                                color: "#edb472",
                                fontWeight: 600,
                                px: 1
                            }}
                        />

                        <Chip
                            icon={<Restaurant />}
                            label="Restoran"
                            sx={{
                                backgroundColor: "#F5E6E0",
                                color: "#edb472",
                                fontWeight: 600,
                                px: 1
                            }}
                        />
                    </Box>
                </RevealInViewAnimation>
            </Box>

            {/* Rooms Grid */}
            <Grid container sx={{mt: 4}} ref={ref} spacing={3}>
                {
                    roomsList.map((item, index) =>
                        <Grid item xs={12} lg={item.isButton ? 12 : 6} key={index}>
                            <motion.div
                                key={item.route}
                                variants={{
                                    hidden: {opacity: 0, y: 30},
                                    visible: {opacity: 1, y: 0}
                                }}
                                initial="hidden"
                                animate={mainControls}
                                transition={{duration: .7, delay: index === 0 ? 1 : .8 + (index + 1) * .2}}
                            >
                                {
                                    !item.isButton
                                        ?
                                        <Card
                                            component={Link}
                                            to={`odalar/${item.route}`}
                                            sx={{
                                                height: "100%",
                                                textDecoration: "none",
                                                cursor: "pointer",
                                                transition: "all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                                position: "relative",
                                                overflow: "hidden",
                                                borderRadius: 3,
                                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                                ":hover": {
                                                    transform: "translateY(-8px)",
                                                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                                                    ".room-image": {
                                                        transform: "scale(1.1)"
                                                    },
                                                    ".price-badge": {
                                                        transform: "scale(1.05)"
                                                    },
                                                    ".arrow-icon": {
                                                        transform: "translateX(8px)"
                                                    }
                                                }
                                            }}
                                        >
                                            {/* Image Section */}
                                            <Box sx={{
                                                position: "relative",
                                                height: 240,
                                                overflow: "hidden"
                                            }}>


                                                {/* Yıldız Rating */}
                                                <Box sx={{
                                                    position: "absolute",
                                                    top: 16,
                                                    left: 16,
                                                    zIndex: 2,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 0.5,
                                                    backgroundColor: "rgba(255,255,255,0.95)",
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: 15,
                                                    backdropFilter: "blur(10px)"
                                                }}>
                                                    <Star sx={{fontSize: "16px", color: "#FFD700"}} />
                                                    <Typography sx={{fontSize: "12px", fontWeight: 600}}>
                                                        4.8
                                                    </Typography>
                                                </Box>

                                                <Image
                                                    skeleton={true}
                                                    className={"room-image"}
                                                    sx={{
                                                        userDrag: "none",
                                                        userSelect: "none",
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                        transition: "transform .6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                                    }}
                                                    objectFit={"cover"}
                                                    src={item.images[0]}
                                                />
                                            </Box>

                                            {/* Content Section */}
                                            <CardContent sx={{p: 3}}>
                                                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2}}>
                                                    <Typography sx={{
                                                        fontSize: "20px",
                                                        fontWeight: 700,
                                                        color: "black",
                                                        lineHeight: 1.3
                                                    }}>
                                                        {item.title}
                                                    </Typography>
                                                </Box>

                                                {/* Room Info Chips */}
                                                <Box sx={{
                                                    display: "flex",
                                                    gap: 1,
                                                    mb: 2.5,
                                                    flexWrap: "wrap"
                                                }}>
                                                    <Chip
                                                        icon={<People sx={{fontSize: "16px !important"}} />}
                                                        label={item.capacity || "2 Kişi"}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: "#F0F8FF",
                                                            color: "#1976D2",
                                                            fontWeight: 600,
                                                            fontSize: "12px"
                                                        }}
                                                    />
                                                    <Chip
                                                        icon={<SquareFoot sx={{fontSize: "16px !important"}} />}
                                                        label={item.size || "25 m²"}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: "#F5F5F5",
                                                            color: "#666",
                                                            fontWeight: 600,
                                                            fontSize: "12px"
                                                        }}
                                                    />
                                                </Box>

                                                {/* Description */}
                                                <Typography sx={{
                                                    color: "rgba(0,0,0,.7)",
                                                    fontSize: "14px",
                                                    lineHeight: 1.6,
                                                    mb: 3,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: "3",
                                                    WebkitBoxOrient: "vertical",
                                                }}>
                                                    {item.description}
                                                </Typography>

                                                {/* Featured Amenities */}
                                                {item.amenities && (
                                                    <Box sx={{mb: 3}}>
                                                        <Typography sx={{
                                                            fontSize: "12px",
                                                            fontWeight: 600,
                                                            color: "#edb472",
                                                            mb: 1,
                                                            textTransform: "uppercase",
                                                            letterSpacing: 0.5
                                                        }}>
                                                            Öne Çıkan Özellikler
                                                        </Typography>
                                                        <Box sx={{display: "flex", gap: 0.5, flexWrap: "wrap"}}>
                                                            {getFeaturedAmenities(item.amenities).map((amenity, idx) => (
                                                                <Typography key={idx} sx={{
                                                                    fontSize: "11px",
                                                                    color: "rgba(0,0,0,0.6)",
                                                                    backgroundColor: "#F8F9FA",
                                                                    px: 1,
                                                                    py: 0.3,
                                                                    borderRadius: 1,
                                                                    border: "1px solid #E9ECEF"
                                                                }}>
                                                                    {amenity}
                                                                </Typography>
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                )}

                                                {/* Action Button */}
                                                <Button
                                                    fullWidth
                                                    sx={{
                                                        backgroundColor: "#edb472",
                                                        color: "white",
                                                        py: 1.5,
                                                        borderRadius: 2,
                                                        textTransform: "none",
                                                        fontWeight: 600,
                                                        fontSize: "14px",
                                                        transition: "all .3s ease",
                                                        ":hover": {
                                                            backgroundColor: "#B86A52",
                                                            transform: "translateY(-2px)",
                                                            boxShadow: "0 6px 20px rgba(199, 122, 99, 0.3)"
                                                        }
                                                    }}
                                                    endIcon={<ArrowForward className="arrow-icon" sx={{
                                                        fontSize: "16px",
                                                        transition: "transform .3s ease"
                                                    }} />}
                                                >
                                                    Detayları İncele
                                                </Button>
                                            </CardContent>
                                        </Card>
                                        :
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            pt: 2
                                        }}>
                                            <StyledDarkButton
                                                component={Link}
                                                to={"odalar"}
                                                sx={{
                                                    py: 3,
                                                    px: 6,
                                                    textTransform: "none",
                                                    fontSize: "16px",
                                                    fontWeight: 600,
                                                    borderRadius: 3,
                                                    width: {xs: "100%", sm: "auto"},
                                                    minWidth: "280px",
                                                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                                                    transition: "all .4s ease",
                                                    ":hover": {
                                                        transform: "translateY(-3px)",
                                                        boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
                                                    }
                                                }}
                                            >
                                                Tüm Odaları Keşfet
                                                <ArrowForward sx={{ml: 1, fontSize: "18px"}} />
                                            </StyledDarkButton>
                                        </Box>
                                }
                            </motion.div>
                        </Grid>
                    )
                }
            </Grid>
        </StyledContainer>
    );
}

export default OurServices;