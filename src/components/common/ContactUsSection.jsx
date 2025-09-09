import {Grid, Typography} from "@mui/material";
import RevealInViewAnimation from "../../animations/RevealInViewAnimation.jsx";
import {StyledDarkButton} from "../styled/StyledButtons.jsx";
import {East} from "@mui/icons-material";
import {StyledContainer} from "../styled/StyledComponents.jsx";
import {useNavigate} from "react-router-dom";

function ContactUsSection({isColored, subTitle, title, descTop, descBottom}) {
    const navigate = useNavigate()

    return (
        <StyledContainer
            sx={{
                py: {xs: 5, md: 10},
                backgroundImage: isColored && "linear-gradient(90deg, #f8f8f8 0%, #fafafa 99%)"
            }}>
            <Grid container spacing={{xs: 2, md: 4, lg: 3}} alignItems={"center"}>
                <Grid item xs={12} lg={6}>
                    <RevealInViewAnimation size={20} transition={{duration: 0.5}}>
                        <Typography variant={"h2"} sx={{
                            letterSpacing: 3,
                            fontWeight: 600,
                            fontSize: {xs: "14px", md: "16px"},
                            color: "orange"
                        }}>{subTitle}</Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation size={20} transition={{duration: 0.5, delay: .2}}>
                        <Typography variant={"h3"} sx={{
                            fontWeight: 800,
                            letterSpacing: 1.5,
                            mt: 2,
                            fontSize: {xs: "24px", md: "32px"},
                        }}>
                            {title}
                        </Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation size={20} transition={{duration: 0.5, delay: .4}}>
                        <StyledDarkButton onClick={() => navigate("/iletisim")} sx={{
                            mt: 4,
                            py: 3,
                            px: 12,
                            textTransform: "none",
                            transition: ".3s all",
                            display: {xs: "none", lg: "flex"},
                            ".icon": {
                                transform: "translateX(8px)",
                                transition: ".3s all",
                            },
                            ":hover": {
                                ".icon": {
                                    transform: "translateX(12px)",
                                }
                            },
                        }}>
                            İletişime Geç
                            <East className={"icon"}/>
                        </StyledDarkButton>
                    </RevealInViewAnimation>
                </Grid>
                <Grid item xs={12} lg={6} align={"center"}>
                    <RevealInViewAnimation size={20} transition={{duration: 0.5, delay: .6}}>
                        <Typography sx={{
                            lineHeight: 2,
                            fontFamily: "'Montserrat', sans-serif",
                            textAlign: "justify"
                        }}>
                            {descTop}
                        </Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation size={20} transition={{duration: 0.5, delay: .75}}>
                        <Typography sx={{
                            mt: 3,
                            lineHeight: 2,
                            fontFamily: "'Montserrat', sans-serif",
                            textAlign: "justify"
                        }}>
                            {descBottom}
                        </Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation size={20} transition={{duration: 0.5, delay: .9}}>
                        <StyledDarkButton onClick={() => navigate("/iletisim")} sx={{
                            mt: 4,
                            py: 3,
                            width: {xs: "100%", md: "50%"},
                            textTransform: "none",
                            transition: ".3s all",
                            display: {xs: "flex", lg: "none"},
                            ".icon": {
                                transform: "translateX(8px)",
                                transition: ".3s all",
                            },
                            ":hover": {
                                ".icon": {
                                    transform: "translateX(12px)",
                                }
                            },
                        }}>
                            İletişime Geç
                            <East className={"icon"}/>
                        </StyledDarkButton>
                    </RevealInViewAnimation>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}

export default ContactUsSection;