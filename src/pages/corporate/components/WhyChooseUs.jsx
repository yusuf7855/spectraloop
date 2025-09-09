import { Box, Grid, Typography } from "@mui/material";
import { Hotel, RoomService, Spa, Security, Wifi, LocalParking } from "@mui/icons-material";
import { StyledContainer } from "../../../components/styled/StyledComponents.jsx";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";

function WhyChooseUs() {
    const data = [
        {
            icon: <Hotel sx={{ fontSize: "48px", color: "#edb472" }} />,
            title: "KONFORLU KONAKLAMA",
            description: "Modern ve rahat odalarımızda, evinizin sıcaklığını hissedeceğiniz konforlu bir konaklama deneyimi sunuyoruz."
        },
        {
            icon: <RoomService sx={{ fontSize: "48px", color: "#edb472" }} />,
            title: "ÖZEL HİZMET ANLAYIŞI",
            description: "24 saat room service, concierge hizmetleri ve kişiselleştirilmiş yaklaşımımızla sizlere özel hizmet sunuyoruz."
        },
        {
            icon: <Spa sx={{ fontSize: "48px", color: "#edb472" }} />,
            title: "WELLNESS & SPA",
            description: "Fitness center, spa hizmetleri ve dinlenme alanlarıyla hem bedeninizi hem ruhunuzu yenileme fırsatı sunuyoruz."
        },
        {
            icon: <Security sx={{ fontSize: "48px", color: "#edb472" }} />,
            title: "GÜVENLİ ORTAM",
            description: "7/24 güvenlik hizmetleri, güvenli otopark ve modern güvenlik sistemleriyle huzurlu bir konaklama garantisi veriyoruz."
        },
        {
            icon: <Wifi sx={{ fontSize: "48px", color: "#edb472" }} />,
            title: "MODERN TEKNOLOJİ",
            description: "Tüm alanlarda ücretsiz yüksek hızlı Wi-Fi, smart TV'ler ve modern teknolojik donanımlarla donatılmış odalar."
        },
        {
            icon: <LocalParking sx={{ fontSize: "48px", color: "#edb472" }} />,
            title: "ÜCRETSIZ HİZMETLER",
            description: "Ücretsiz otopark, Wi-Fi, kahvaltı ve havaalanı transfer hizmetleri ile konaklama maliyetlerinizi minimize ediyoruz."
        }
    ];

    return (
        <StyledContainer sx={{
            py: 8,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
        }}>
            <RevealInViewAnimation blur={true} size={20} transition={{ duration: 0.5, delay: .3 }}>
                <Typography sx={{
                    letterSpacing: 3,
                    fontWeight: 600,
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#edb472",
                    textTransform: "uppercase"
                }}>NEDEN PERLAS OTEL?</Typography>
            </RevealInViewAnimation>
            <RevealInViewAnimation blur={true} size={20} transition={{ duration: 0.5, delay: .6 }}>
                <Typography sx={{
                    mt: 2,
                    fontSize: { xs: "28px", md: "36px" },
                    fontWeight: 700,
                    color: "black",
                    letterSpacing: 1.5,
                    lineHeight: 1.3,
                    maxWidth: "800px"
                }}>
                    SAMSUN'DA KONFORUN YENİ ADRESİ
                </Typography>
            </RevealInViewAnimation>
            <RevealInViewAnimation blur={true} size={20} transition={{ duration: 0.5, delay: .9 }}>
                <Typography sx={{
                    mt: 3,
                    fontSize: { xs: "16px", md: "18px" },
                    color: "rgba(0,0,0,.7)",
                    maxWidth: "600px",
                    lineHeight: 1.6
                }}>
                    Atakum'un kalbinde, modern konfor ve geleneksel misafirperverliği bir araya getiren eşsiz konaklama deneyimi
                </Typography>
            </RevealInViewAnimation>

            <Grid container sx={{ mt: { xs: 4, md: 6 } }} spacing={{ xs: 3, md: 4 }} alignItems={"stretch"} justifyContent={"stretch"}>
                {
                    data.map((item, index) => (
                        <Grid item key={index} xs={12} sm={6} lg={4}>
                            <RevealInViewAnimation
                                key={index}
                                direction={"vertical"}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%"
                                }}
                                transition={{ duration: .6, delay: (index === 0) ? .8 : .5 + (index + 1) * .15 }}
                                size={30}
                            >
                                <Box sx={{
                                    p: 4,
                                    background: "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    borderRadius: 3,
                                    textAlign: "center",
                                    height: "100%",
                                    border: "1px solid #f0f0f0",
                                    boxShadow: "0px 4px 20px 0px rgba(0,0,0,.08)",
                                    transition: "all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                    position: "relative",
                                    overflow: "hidden",
                                    ":hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: "0px 20px 40px 0px rgba(199, 122, 99, 0.15)",
                                        "& .icon-bg": {
                                            transform: "scale(1.1)",
                                            opacity: 0.1
                                        }
                                    },
                                    "::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "4px",
                                        background: "linear-gradient(90deg, #edb472 0%, #D4967D 100%)",
                                        borderTopLeftRadius: 3,
                                        borderTopRightRadius: 3
                                    }
                                }}>
                                    {/* Background decorative element */}
                                    <Box
                                        className="icon-bg"
                                        sx={{
                                            position: "absolute",
                                            top: "-20px",
                                            right: "-20px",
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "50%",
                                            backgroundColor: "#edb472",
                                            opacity: 0.05,
                                            transition: "all .4s ease",
                                            zIndex: 0
                                        }}
                                    />

                                    {/* Icon with background */}
                                    <Box sx={{
                                        width: "80px",
                                        height: "80px",
                                        borderRadius: "50%",
                                        backgroundColor: "#F5E6E0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mb: 3,
                                        position: "relative",
                                        zIndex: 1,
                                        transition: "transform .3s ease"
                                    }}>
                                        {item.icon}
                                    </Box>

                                    <Typography sx={{
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        letterSpacing: 1,
                                        color: "#333",
                                        mb: 2,
                                        position: "relative",
                                        zIndex: 1
                                    }}>
                                        {item.title}
                                    </Typography>

                                    <Typography sx={{
                                        color: "rgba(0,0,0,.65)",
                                        lineHeight: 1.6,
                                        fontSize: "14px",
                                        position: "relative",
                                        zIndex: 1,
                                        flexGrow: 1,
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </RevealInViewAnimation>
                        </Grid>
                    ))
                }
            </Grid>


        </StyledContainer>
    );
}

export default WhyChooseUs;