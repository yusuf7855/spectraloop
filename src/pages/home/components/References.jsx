import Marquee from "react-fast-marquee";
import lynda from "../../../assets/images/logo.png"

import {Box, Typography} from "@mui/material";
import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";

function References() {
    const referenceList = [
        lynda,
    ]

    return (
        <Box sx={{
            py: {xs: 4, md: 6},
        }}>
            <StyledContainer sx={{
                color: "black",
                textAlign: "center",
                mb: 2,

            }}>
                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .3}}>
                    <Typography sx={{
                        fontSize: "1.25rem",
                        fontWeight: 600
                    }}>
                        İşbirliği Yaptığımız Markalar
                    </Typography>
                </RevealInViewAnimation>
                <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .6}}>
                    <Typography sx={{
                        color: "rgba(0,0,0,.65)",
                        fontWeight: 600
                    }}>
                        Startuplardan büyük şirketlere kadar geniş bir müşteri portföyüne hizmet
                        sunuyoruz.
                    </Typography>
                </RevealInViewAnimation>
            </StyledContainer>
            <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .9}}>
                <Marquee
                    autoFill={true}
                    gradient={true}
                    pauseOnHover={true}
                    delay={2}
                    gradientColor={"white"}
                >
                    {
                        referenceList.map((reference, index) => <Box
                            component={"img"}
                            key={index}
                            alt={`reference-image-${index}`}
                            sx={{
                                userDrag: "none",
                                userSelect: "none",
                                height: {xs: "50px", md: "60px"},
                                my: 3,
                                mx: {xs: 2.5, md: 4.5},
                                width: "auto"
                            }}
                            src={reference}
                        />)
                    }
                </Marquee>
            </RevealInViewAnimation>
        </Box>
    );
}

export default References;