import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {Link} from "react-router-dom";

function ContactUs() {
    return (<Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                py: 8,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    backgroundColor: 'white',
                    background: `
                        linear-gradient(to right, rgba(199,122,99,0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(199,122,99,0.08) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    left: "50%",
                    top: "50%",
                    margin: 'auto',
                    height: '400px',
                    width: '400px',
                    transform: "translate(-50%,-50%)",
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #edb472 0%, #D4967D 100%)',
                    opacity: 0.15,
                    filter: 'blur(120px)',
                    zIndex: 0,
                }}
            />
            {/* Additional decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    right: "10%",
                    top: "20%",
                    height: '150px',
                    width: '150px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F5E6E0 0%, #edb472 100%)',
                    opacity: 0.1,
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    left: "15%",
                    bottom: "25%",
                    height: '200px',
                    width: '200px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #D4967D 0%, #B86A52 100%)',
                    opacity: 0.08,
                    filter: 'blur(80px)',
                    zIndex: 0,
                }}
            />
            <Box sx={{
                position: 'relative',
                zIndex: 2,
                width: "100%",
                minHeight: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                py: 4
            }}>
                <StyledContainer>
                    <RevealInViewAnimation blur={true} size={20} style={{display: "flex", justifyContent: "center"}}
                                           transition={{duration: 0.6, delay: .3}}>
                        <Typography sx={{
                            fontSize: {xs: "32px", md: "52px"},
                            fontWeight: 700,
                            fontFamily: "'Montserrat', sans-serif",
                            lineHeight: 1.2,
                            background: "linear-gradient(135deg, #edb472 0%, #B86A52 50%, #333 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            maxWidth: "20ch",
                            wordBreak: "break-word",
                            textAlign: "center",
                            letterSpacing: "0.5px"
                        }}>
                            Samsun'da Konforun Yeni Adresi
                        </Typography>
                    </RevealInViewAnimation>

                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .6}}>
                        <Typography sx={{
                            color: "rgba(0,0,0,.75)",
                            fontWeight: 400,
                            fontSize: {xs: "16px", sm: "18px"},
                            mt: 3,
                            lineHeight: 1.8,
                            maxWidth: "65ch",
                            mx: "auto"
                        }}>
                            Perlas Otel'de size özel hazırlanmış konforlu odalarımız, eşsiz hizmet kalitemiz ve Atakum'un panoramik manzarası ile unutulmaz bir konaklama deneyimi sizi bekliyor. Rezervasyonunuzu hemen yapın, ayrıcalığı yaşayın.
                        </Typography>
                    </RevealInViewAnimation>

                    {/* Hotel Features */}
                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .8}}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 3,
                            mt: 4,
                            mb: 4,
                            flexWrap: "wrap"
                        }}>
                            <Box sx={{
                                backgroundColor: "#F5E6E0",
                                color: "#edb472",
                                px: 2,
                                py: 1,
                                borderRadius: 20,
                                fontSize: "14px",
                                fontWeight: 600,
                                border: "1px solid rgba(199,122,99,0.2)"
                            }}>
                                ⭐ 4.8/5 Misafir Puanı
                            </Box>
                            <Box sx={{
                                backgroundColor: "#F5E6E0",
                                color: "#edb472",
                                px: 2,
                                py: 1,
                                borderRadius: 20,
                                fontSize: "14px",
                                fontWeight: 600,
                                border: "1px solid rgba(199,122,99,0.2)"
                            }}>
                                🏖️ Denize 2 Dakika
                            </Box>
                            <Box sx={{
                                backgroundColor: "#F5E6E0",
                                color: "#edb472",
                                px: 2,
                                py: 1,
                                borderRadius: 20,
                                fontSize: "14px",
                                fontWeight: 600,
                                border: "1px solid rgba(199,122,99,0.2)"
                            }}>
                                🚗 Ücretsiz Otopark
                            </Box>
                        </Box>
                    </RevealInViewAnimation>
                </StyledContainer>
            </Box>
        </Box>
    );
}

export default ContactUs;