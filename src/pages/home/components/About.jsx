import {Grid, Typography} from "@mui/material";
import {StyledContainerLeft} from "../../../components/styled/StyledComponents.jsx";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {Image} from "../../../components/common/Image.jsx";
import aboutImage from "/src/assets/images/home/about/ilk.jpg"

function About() {
    return (
        <StyledContainerLeft sx={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            textAlign: "center",
            backgroundImage: "linear-gradient(90deg, #f8f8f8 0%, #fafafa 99%)",
            position: "relative",
        }}>
            <Grid container>
                <Grid item xs={12} mlg={4} sx={{py: 8}}>
                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.5, delay: .3}}>
                        <Typography sx={{
                            letterSpacing: 1.25,
                            fontWeight: 600,
                            fontSize: {xs: "14px", md: "16px"},
                            color: "#edb472",
                            textAlign: {xs: "center", mlg: "left"}
                        }}>HAKKIMIZDA</Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.5, delay: .6}}>
                        <Typography sx={{
                            mt: 1,
                            fontSize: {xs: "24px", md: "30px"},
                            fontWeight: 800,
                            color: "black",
                            letterSpacing: 1.5,
                            textAlign: {xs: "center", mlg: "left"}
                        }}>
                            Konforunuz İçin Buradayız !
                        </Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.5, delay: .9}}>
                        <Typography sx={{
                            mt: 4,
                            color: "rgba(0,0,0,.65)",
                            textAlign: {xs: "center", mlg: "left"},
                            lineHeight: 1.6,
                            mx: {xs: 2, mlg: 0}
                        }}>
                            Perlas Otel, Samsun Atakum'da, konforlu ve modern bir atmosferde misafirlerine unutulmaz bir konaklama deneyimi sunuyor. Mükemmel hizmet anlayışımız ve sıcak atmosferimizle, her detayı düşünülerek tasarlanmış odalarımızda rahatlığınızı ön planda tutuyoruz. Perlas Otel olarak amacımız, misafirlerimize evlerindeki huzuru ve konforu yaşatmak, her zaman güleryüzlü hizmet sunmaktır.
                        </Typography>
                    </RevealInViewAnimation>
                </Grid>
                <Grid item xs={12} mlg={8}>
                    <RevealInViewAnimation style={{height: "100%"}} onlyOpacity={true}
                                           transition={{duration: 0.5, delay: .6}}>
                        <Image
                            alt={"perlas otel"}
                            skeleton={true}
                            sx={{
                                userDrag: "none",
                                userSelect: "none",
                                mb: 1,
                                position: "absolute",
                                top: 0,
                                height: "100%",
                                width: {mlg: "45%", lg: "40%", xl: "35%"},
                                objectFit: "cover",
                                right: 0,
                                borderBottomLeftRadius: "100%",
                                display: {xs: "none", mlg: "block"}
                            }}
                            objectFit={"cover"}
                            src={aboutImage}/>
                    </RevealInViewAnimation>
                </Grid>
            </Grid>
        </StyledContainerLeft>
    );
}

export default About;