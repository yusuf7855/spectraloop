import {Typography} from "@mui/material";
import {StyledContainer} from "../styled/StyledComponents.jsx";
import RevealInViewAnimation from "../../animations/RevealInViewAnimation.jsx";

function PageHero({title, subTitle, description, sx, size = "big"}) {
    const sizes = {
        title: {
            small: {xs: "32px", sm: "48px", md: "56px"},
            medium: {xs: "40px", sm: "56px", md: "64px"},
            big: {xs: "48px", sm: "64px", md: "72px"}
        },
    }

    return (<StyledContainer sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: {xs: 5, md: 8},
            flexDirection: "column",
            ...sx
        }}>
            <RevealInViewAnimation size={20} transition={{duration: 0.6}}>
                <Typography sx={{
                    letterSpacing: 3,
                    fontWeight: 600,
                    fontSize: {xs: "12px", sm: "13px", md: "14px"},
                    color: "#edb472"
                }}>{subTitle}</Typography>
            </RevealInViewAnimation>
            <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .2}}>
                <Typography variant="h2" sx={{
                    fontSize: sizes.title[size],
                    letterSpacing: 5,
                    wordSpacing: 5,
                    fontWeight: 700,
                    textAlign: "center",
                    userSelect: "none",
                    lineHeight: 1.425,
                    fontFamily: "'Montserrat', sans-serif",
                    background: "-webkit-linear-gradient(#000, #363535)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>{title}</Typography>
            </RevealInViewAnimation>
            {
                description && <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .4}}>
                    <Typography sx={{
                        maxWidth: "600px",
                        textAlign: "center",
                        mt: 2,
                        color: "rgba(0,0,0,.65)",
                        fontSize: {xs: "12px", sm: "13px", md: "15px"},
                    }}>
                        {description}
                    </Typography>
                </RevealInViewAnimation>
            }
        </StyledContainer>
    );
}

export default PageHero;