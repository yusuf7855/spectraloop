import {Box, Grid, Typography} from "@mui/material";
import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import {Image} from "../../../components/common/Image.jsx";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import image1 from "/src/assets/images/corpo/seo.png"
import image2 from "/src/assets/images/corpo/icerikvideo.png";
import image3 from "/src/assets/images/corpo/socialmedia.png";
import image4 from "/src/assets/images/corpo/web.png";

function AboutUs() {
    return (
        <StyledContainer sx={{
            py: {xs: 5, md: 10},
            backgroundImage: "linear-gradient(90deg, #f8f8f8 0%, #fafafa 99%)"
        }}>
            <Grid container spacing={8} alignItems={{md: "center", lgx: "center"}}>
                <Grid item xs={12} lg={6} order={{xs: 1, lg: 0}}>
                    <Box sx={{display: "flex", flexDirection: "row", gap: {xs: 3, md: 4}}}>
                        <Box sx={{display: "flex", flexDirection: "column", gap: {xs: 3, md: 4}, width: "100%"}}>
                            <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6}}>
                                <Image
                                    alt={"about-us-1"}
                                    src={image1}
                                    sx={{
                                        filter: "brightness(85%)",
                                        userDrag: "none",
                                        aspectRatio: {xs: 1.1, sm: 2, lg: 1.1},
                                        userSelect: "none",
                                        borderRadius: 2
                                    }}
                                    width={"100%"}
                                    skeleton={true}
                                    objectFit={"cover"}
                                />
                            </RevealInViewAnimation>
                            <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .4}}>
                                <Image
                                    alt={"about-us-2"}
                                    src={image2}
                                    sx={{
                                        filter: "brightness(85%)",
                                        userDrag: "none",
                                        aspectRatio: {xs: 1.1, sm: 2, lg: 1.1},
                                        userSelect: "none",
                                        borderRadius: 2
                                    }}
                                    width={"100%"}
                                    skeleton={true}
                                    objectFit={"cover"}
                                />
                            </RevealInViewAnimation>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", gap: {xs: 3, md: 4}, width: "100%", mt: 4}}>
                            <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .2}}>
                                <Image
                                    alt={"about-us-3"}
                                    src={image3}
                                    sx={{
                                        filter: "brightness(85%)",
                                        userDrag: "none",
                                        aspectRatio: {xs: 1.1, sm: 2, lg: 1.1},
                                        userSelect: "none",
                                        borderRadius: 2
                                    }}
                                    width={"100%"}
                                    skeleton={true}
                                    objectFit={"cover"}
                                />
                            </RevealInViewAnimation>
                            <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .4}}>
                                <Image
                                    alt={"about-us-4"}
                                    src={image4}
                                    sx={{
                                        filter: "brightness(85%)",
                                        userDrag: "none",
                                        aspectRatio: {xs: 1.1, sm: 2, lg: 1.1},
                                        userSelect: "none",
                                        borderRadius: 2
                                    }}
                                    width={"100%"}
                                    skeleton={true}
                                    objectFit={"cover"}
                                />
                            </RevealInViewAnimation>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .2}}>
                        <Typography variant={"h2"} sx={{
                            letterSpacing: 2.5,
                            fontWeight: 600,
                            fontSize: {xs: "14px", md: "16px"},
                            color: "#edb472"
                        }}>HAKKIMIZDA</Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .4}}>
                        <Typography variant={"h3"} sx={{
                            fontWeight: 800,
                            letterSpacing: 1.5,
                            mt: 2,
                            fontSize: {xs: "24px", md: "32px"},
                        }}>
                            Konforunuz İçin Buradayız!</Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .4}}>
                        <Typography sx={{
                            lineHeight: 2,
                            textAlign: "justify",
                            mt: 3,
                            color: "rgba(0,0,0,.65)",
                        }}>
                            Perlas Otel; Samsun Atakum'da konforlu ve modern bir atmosferde misafirlerine unutulmaz bir konaklama deneyimi sunmak için kurulmuş bir oteldir. Mükemmel hizmet anlayışımız ve sıcak atmosferimizle, her detayı düşünülerek tasarlanmış odalarımızda rahatlığınızı ön planda tutuyoruz. Karadeniz'in eşsiz manzarasına sahip otelimizde, modern amenities, spa hizmetleri, fitness center ve premium restoran ile misafirlerimize evlerindeki huzuru ve konforu yaşatmak, her zaman güleryüzlü ve profesyonel hizmet sunmak amacımızdır.
                        </Typography>
                    </RevealInViewAnimation>
                    <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .2}}>

                    </RevealInViewAnimation>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}

export default AboutUs;
