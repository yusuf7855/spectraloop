import {Box} from "@mui/material";
import {Mail, Map, Phone} from "@mui/icons-material";
import {FooterItemTypography} from "../styled/StyledTypographies.jsx";
import {Link} from "react-router-dom";

function ContactUs() {
    const FooterItem = ({title, route, onClick, isClickable = false}) => {
        if (isClickable && onClick) {
            return (
                <FooterItemTypography
                    component="div"
                    onClick={onClick}
                    sx={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        ":hover": {
                            color: "#edb472",
                            transform: "translateX(3px)"
                        }
                    }}
                >
                    {title}
                </FooterItemTypography>
            );
        }

        return (
            <FooterItemTypography
                component={route ? Link : "div"}
                to={route}
                sx={{
                    cursor: route ? "pointer" : "default",
                    transition: "all 0.3s ease",
                    ":hover": route ? {
                        color: "#edb472",
                        transform: "translateX(3px)"
                    } : {}
                }}
            >
                {title}
            </FooterItemTypography>
        );
    }

    const handlePhoneClick = () => {
        window.open("tel:+905396385955", "_self");
    };

    const handleEmailClick = () => {
        window.open("mailto:deperlasotel@gmail.com", "_self");
    };

    const handleMapClick = () => {
        const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.917876402438!2d36.249724575302004!3d41.34489257130528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088792792426efd%3A0xfbb6da36fe1b311e!2sSamsun%20De%20Perlas%20Otel!5e1!3m2!1str!2str!4v1752287129676!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;
        window.open(mapsUrl, "_blank");
    };

    return (
        <Box sx={{mt: 3, display: "inline-flex", flexDirection: "column", gap: 2}}>
            <FooterItem
                isClickable={true}
                onClick={handlePhoneClick}
                title={
                    <Box sx={{display: "flex", alignItems: "center", gap: 1.5}}>
                        <Box sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            backgroundColor: "#F5E6E0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease"
                        }}>
                            <Phone sx={{fontSize: "18px", color: "#edb472"}}/>
                        </Box>
                        <Box>
                            <Box sx={{fontSize: "14px", fontWeight: 600}}>
                                +90 539 638 59 55
                            </Box>
                            <Box sx={{fontSize: "12px", opacity: 0.7, mt: 0.2}}>
                                Rezervasyon Hattı
                            </Box>
                        </Box>
                    </Box>
                }
            />

            <FooterItem
                isClickable={true}
                onClick={handleEmailClick}
                title={
                    <Box sx={{display: "flex", alignItems: "center", gap: 1.5}}>
                        <Box sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            backgroundColor: "#F5E6E0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease"
                        }}>
                            <Mail sx={{fontSize: "18px", color: "#edb472"}}/>
                        </Box>
                        <Box>
                            <Box sx={{fontSize: "14px", fontWeight: 600}}>
                                deperlasotel@gmail.com
                            </Box>
                            <Box sx={{fontSize: "12px", opacity: 0.7, mt: 0.2}}>
                                Bilgi ve Rezervasyon
                            </Box>
                        </Box>
                    </Box>
                }
            />

            <FooterItem
                isClickable={true}
                onClick={handleMapClick}
                title={
                    <Box sx={{display: "flex", alignItems: "center", gap: 1.5}}>
                        <Box sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            backgroundColor: "#F5E6E0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease"
                        }}>
                            <Map sx={{fontSize: "18px", color: "#edb472"}}/>
                        </Box>
                        <Box>
                            <Box sx={{fontSize: "14px", fontWeight: 600}}>
                                Güzelyalı, 3012. Sk. No:10
                            </Box>
                            <Box sx={{fontSize: "12px", opacity: 0.7, mt: 0.2}}>
                                55270 Atakum/Samsun
                            </Box>
                        </Box>
                    </Box>
                }
            />
        </Box>
    );
}


export default ContactUs;