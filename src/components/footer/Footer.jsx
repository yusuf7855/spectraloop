import {Box, Divider, Grid, Typography} from "@mui/material";
import {StyledContainer} from "../styled/StyledComponents.jsx";
import {Link} from "react-router-dom";
import SocialMedia from "./SocialMedia.jsx";
import {FooterItemTypography} from "../styled/StyledTypographies.jsx";
import {Email, LocationOn, School} from "@mui/icons-material";
import spectralooLogo from "../../assets/images/ikon.png";
function Footer({logo}) {
    const FooterItem = ({title, route}) => {
        return <FooterItemTypography component={Link} to={route}>{title}</FooterItemTypography>;
    }

    const ContactItem = ({icon, title, subtitle, onClick}) => {
        return (
            <Box
                onClick={onClick}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    cursor: onClick ? "pointer" : "default",
                    transition: "all 0.3s ease",
                    p: 1,
                    borderRadius: 2,
                    ":hover": onClick ? {
                        backgroundColor: "rgba(0,84,171,0.1)",
                        transform: "translateX(3px)"
                    } : {}
                }}
            >
                <Box sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0054ab 0%, #0066cc 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease"
                }}>
                    {icon}
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "white"
                    }}>
                        {title}
                    </Typography>
                    <Typography sx={{
                        fontSize: "12px",
                        opacity: 0.7,
                        mt: 0.2,
                        color: "rgba(255,255,255,0.7)"
                    }}>
                        {subtitle}
                    </Typography>
                </Box>
            </Box>
        );
    }

    const handleEmailClick = () => {
        window.open("mailto:spectraloop@gmail.com", "_self");
    };

    const handleUniversityClick = () => {
        window.open("https://www.omu.edu.tr", "_blank");
    };

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
                marginTop: 'auto',
                zIndex: 1,
            }}
        >
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    background: `
                        linear-gradient(to right, rgba(0,84,171,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,84,171,0.03) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                }}
            />

            {/* Hyperloop themed decoration */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #0054ab 0%, #0066cc 50%, #0054ab 100%)",
                    zIndex: 3
                }}
            />

            <Box sx={{position: 'relative', zIndex: 2, width: "100%"}}>
                <StyledContainer sx={{py: {xs: 5, sm: 8}}}>
                    <Grid container justifyContent={"space-between"} spacing={{xs: 5, md: 6}}>
                        {/* Logo Section */}
                        <Grid item xs={12} lg={3}>
                            <Box sx={{mb: 3}}>
                                {/* SpectraLoop Logo */}
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    mb: 3
                                }}>
                                    <Box sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        position: "relative",
                                        boxShadow: "0 8px 25px rgba(0,84,171,0.3)",
                                        border: "2px solid rgba(0,84,171,0.2)"
                                    }}>
                                        <img
                                            src={spectralooLogo}
                                            alt="SpectraLoop Logo"
                                            style={{
                                                width: "100%",
                                                height: "80%",
                                                objectFit: "cover",
                                                filter: "brightness(1.1) contrast(1.1)"
                                            }}
                                        />
                                        {/* Logo overlay for branding */}
                                        <Box sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: "20%",
                                            background: "linear-gradient(transparent, rgba(0,84,171,0.8))",
                                            zIndex: 1
                                        }} />
                                    </Box>
                                    <Typography sx={{
                                        color: "white",
                                        fontSize: "24px",
                                        fontWeight: 800,
                                        letterSpacing: 1,
                                        background: "linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}>
                                        SPECTRALOOP
                                    </Typography>
                                </Box>
                                {logo}
                                <Typography sx={{
                                    color: "rgba(255,255,255,0.8)",
                                    fontSize: "14px",
                                    mt: 2,
                                    lineHeight: 1.6,
                                    maxWidth: "280px"
                                }}>
                                    Hyperloop teknolojisinde öncü olan takımımız, geleceğin ulaşım sistemlerini bugünden yaratıyor.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Contact Section */}
                        <Grid item xs={12} lg={3} sx={{
                            display: {lg: "flex"},
                            flexDirection: {lg: "column"},
                            alignItems: {lg: "flex-start"}
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: "white",
                                    letterSpacing: 2,
                                    fontWeight: "700",
                                    fontSize: "16px",
                                    mb: 2
                                }}>
                                    İLETİŞİM
                                </Typography>
                                <Divider sx={{
                                    backgroundColor: "#0054ab",
                                    width: "60px",
                                    height: "3px",
                                    mb: 3
                                }}/>

                                <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
                                    <ContactItem
                                        icon={<Email sx={{fontSize: "20px", color: "white"}}/>}
                                        title="spectraloop@gmail.com"
                                        subtitle="Takım İletişim"
                                        onClick={handleEmailClick}
                                    />

                                    <ContactItem
                                        icon={<School sx={{fontSize: "20px", color: "white"}}/>}
                                        title="Samsun Üniversitesi"
                                        subtitle="Ana Kampüs"
                                        onClick={handleUniversityClick}
                                    />

                                    <ContactItem
                                        icon={<LocationOn sx={{fontSize: "20px", color: "white"}}/>}
                                        title="Ballıca 19 Mayıs, Samsun, Türkiye"
                                        subtitle="Takım Merkezi"
                                    />
                                </Box>
                            </Box>
                        </Grid>

                        {/* Menu Section */}
                        <Grid item xs={12} lg={3} sx={{
                            display: {lg: "flex"},
                            flexDirection: {lg: "column"},
                            alignItems: {lg: "flex-start"}
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: "white",
                                    letterSpacing: 2,
                                    fontWeight: "700",
                                    fontSize: "16px",
                                    mb: 2
                                }}>
                                    SAYFALAR
                                </Typography>
                                <Divider sx={{
                                    backgroundColor: "#0054ab",
                                    width: "60px",
                                    height: "3px",
                                    mb: 3
                                }}/>
                                <Box display={"flex"} gap={5}>
                                    <Box sx={{display: "inline-flex", flexDirection: "column", gap: 2}}>
                                        <FooterItem title={"Anasayfa"} route={"/"}/>
                                        <FooterItem title={"Takım Başvurusu"} route={"/basvuru"}/>
                                        <FooterItem title={"Blog"} route={"/blog"}/>
                                        <FooterItem title={"İletişim"} route={"/iletisim"}/>
                                    </Box>

                                </Box>
                            </Box>
                        </Grid>

                        {/* Social Media Section */}
                        <Grid item xs={12} lg={3} sx={{
                            display: {lg: "flex"},
                            flexDirection: {lg: "column"},
                            alignItems: {lg: "flex-start"}
                        }}>
                            <Box display={"flex"} justifyContent={"flex-start"} alignItems={"flex-start"}
                                 flexDirection={"column"} width="100%">
                                <Typography sx={{
                                    color: "white",
                                    letterSpacing: 2,
                                    fontWeight: "700",
                                    fontSize: "16px",
                                    mb: 2
                                }}>
                                    BİZİ TAKİP EDİN
                                </Typography>
                                <Divider sx={{
                                    backgroundColor: "#0054ab",
                                    width: "60px",
                                    height: "3px",
                                    mb: 3
                                }}/>
                                <SocialMedia/>


                            </Box>
                        </Grid>
                    </Grid>
                </StyledContainer>

                {/* Bottom Section */}
                <StyledContainer>
                    <Divider sx={{
                        height: "2px",
                        width: "100%",
                        background: "linear-gradient(90deg, transparent 0%, #0054ab 50%, transparent 100%)",
                        mb: 3
                    }}/>
                </StyledContainer>

                <Grid container justifyContent={"center"} sx={{p: 2}}>
                    <Typography component={'span'} sx={{
                        color: "rgba(255,255,255,.8)",
                        fontSize: "14px",
                        display: "inline-flex",
                        gap: .5,
                        textAlign: "center"
                    }}>
                        <Box sx={{
                            background: "linear-gradient(135deg, #0054ab 0%, #0066cc 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            cursor: "default",
                            textDecoration: "none",
                            transition: ".2s all",
                            fontWeight: 700,
                            letterSpacing: 1
                        }}>SPECTRALOOP</Box>
                        © {new Date().getFullYear()}. Tüm hakları saklıdır. | Hyperloop teknolojisinde geleceği inşa ediyoruz.
                    </Typography>
                </Grid>
            </Box>
        </Box>
    );
}

export default Footer;