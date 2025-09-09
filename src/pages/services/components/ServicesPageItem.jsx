import {Box, Grid, Typography, Chip} from "@mui/material";
import {East, People, SquareFoot} from "@mui/icons-material";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {Image} from "../../../components/common/Image.jsx";
import {Link} from "react-router-dom";
import {StyledColoredButton} from "../../../components/styled/StyledButtons.jsx";

function ServicesPageItem({service, index}) {
    // Fiyatı formatla
    const formatPrice = (price) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Grid item xs={12} sm={6} lg={4} key={service.id} sx={{display: "flex", flexDirection: "column"}}
              alignSelf={"stretch"}>
            <RevealInViewAnimation key={index} direction={"horizontal"}
                                   style={{
                                       display: "flex",
                                       flexDirection: "column",
                                       height: "100%"
                                   }}
                                   transition={{duration: .75, delay: index < 5 ? .4 : .3}}
                                   onlyOpacity={true}
                                   size={20}

            >
                <Box
                    component={Link}
                    to={`/odalar/${service.route}`}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
                        borderRadius: 2,
                        width: "100%",
                        cursor: "pointer",
                        height: "100%",
                        textDecoration: "none!important",
                        transition: "all .6s",
                        position: "relative",
                        ":hover": {
                            transform: "translateY(-5px)",
                            ".icon": {
                                transform: "translateX(8px)",
                            },
                        }
                    }}
                >
                    {/* Fiyat Badge */}
                    <Box sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        zIndex: 2,
                        backgroundColor: "#edb472",
                        color: "white",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: "14px"
                    }}>
                        {formatPrice(service.price?.daily)}/gece
                    </Box>

                    {/* Müsaitlik Durumu */}
                    {!service.availability && (
                        <Box sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            zIndex: 2,
                            backgroundColor: "rgba(255,0,0,0.8)",
                            color: "white",
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            fontWeight: 600,
                            fontSize: "12px"
                        }}>
                            Dolu
                        </Box>
                    )}

                    <Image className={"room-image"} alt={`room-image-${index}`}
                           sx={{
                               filter: "brightness(75%)",
                               userDrag: "none",
                               userSelect: "none",
                               cursor: "pointer",
                               borderRadius: 2,
                               width: "100%",
                               aspectRatio: 2,
                               objectFit: "cover",
                               transition: "all .6s",
                           }}
                           skeleton={true}
                           objectFit={"cover"}
                           src={service.images[0]}
                    />
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: 1,
                        width: "100%",
                        flex: 1,
                        px: 2,
                        pb: 2
                    }}>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: "18px",
                            textAlign: "center",
                            display: "flex",
                            mt: 3,
                            mb: 1,
                            color: "rgba(0,0,0,.8)"
                        }}>{service.title}</Typography>

                        {/* Oda Özellikleri */}
                        <Box sx={{
                            display: "flex",
                            gap: 1,
                            mb: 2,
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>
                            <Chip
                                icon={<People sx={{fontSize: "16px !important"}} />}
                                label={service.capacity}
                                size="small"
                                sx={{
                                    backgroundColor: "#F5E6E0",
                                    color: "#edb472",
                                    fontWeight: 500,
                                    fontSize: "12px"
                                }}
                            />
                            <Chip
                                icon={<SquareFoot sx={{fontSize: "16px !important"}} />}
                                label={service.size}
                                size="small"
                                sx={{
                                    backgroundColor: "#F5E6E0",
                                    color: "#edb472",
                                    fontWeight: 500,
                                    fontSize: "12px"
                                }}
                            />
                        </Box>

                        {/* Açıklama */}
                        <Typography sx={{
                            fontSize: "14px",
                            textAlign: "center",
                            color: "rgba(0,0,0,.6)",
                            mb: 2,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                        }}>
                            {service.description}
                        </Typography>

                        <StyledColoredButton
                            fullWidth
                            sx={{
                                mt: "auto",
                                py: 2,
                                borderRadius: 2,
                                textTransform: "none",
                                ".icon": {
                                    transform: "translateX(4px)",
                                    transition: ".3s transform",
                                }
                            }}>
                            <Typography sx={{
                                fontWeight: 500,
                                fontSize: "1rem",
                            }}>Detayları Görüntüle</Typography>
                            <East className={"icon"} sx={{fontSize: "18px",}}/>
                        </StyledColoredButton>
                    </Box>
                </Box>
            </RevealInViewAnimation>
        </Grid>
    );
}

export default ServicesPageItem;