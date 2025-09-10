import {Grid, Typography, Box, Container} from "@mui/material";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {EmojiEvents} from "@mui/icons-material";

function About() {
    const achievements = [
        {
            year: "2022",
            title: "Finalist - Jüri Özel Ödülü",
            description: "Kuruluş yılımızda aldığımız ilk büyük başarı",
            icon: <EmojiEvents sx={{ color: "#0054ab", fontSize: "2rem" }} />
        },
        {
            year: "2023",
            title: "Finalist",
            description: "Teknofest'te finalist olmayı başardık",
            icon: <EmojiEvents sx={{ color: "#0054ab", fontSize: "2rem" }} />
        },
        {
            year: "2025",
            title: "Finalist - Mekanik Sistem Geliştirme İnovasyon Ödülü",
            description: "En son kazandığımız prestijli ödül",
            icon: <EmojiEvents sx={{ color: "#0054ab", fontSize: "2rem" }} />
        }
    ];

    return (
        <Box sx={{
            py: {xs: 6, md: 10},
            background: "linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #f0f4ff 100%)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center"
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} justifyContent="center">
                    <Grid item xs={12} md={10} lg={8}>
                        {/* Header Section */}
                        <Box sx={{ textAlign: "center", mb: 8 }}>
                            <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .2}}>
                                <Typography sx={{
                                    letterSpacing: 2,
                                    fontWeight: 700,
                                    fontSize: {xs: "14px", md: "16px"},
                                    color: "#0054ab",
                                    textTransform: "uppercase",
                                    mb: 2
                                }}>HAKKIMIZDA</Typography>
                            </RevealInViewAnimation>

                            <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .4}}>
                                <Typography sx={{
                                    fontSize: {xs: "32px", md: "48px", lg: "56px"},
                                    fontWeight: 800,
                                    color: "#1a1a1a",
                                    letterSpacing: -1,
                                    lineHeight: 1.1,
                                    mb: 4,
                                    background: "linear-gradient(135deg, #0054ab 0%, #0066cc 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}>
                                    Geleceği Şekillendiren Takım
                                </Typography>
                            </RevealInViewAnimation>

                            <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .6}}>
                                <Typography sx={{
                                    fontSize: {xs: "16px", md: "20px"},
                                    color: "rgba(0,0,0,.7)",
                                    lineHeight: 1.7,
                                    maxWidth: "700px",
                                    mx: "auto",
                                    fontWeight: 400
                                }}>
                                    SpectraLoop, 2022 yılında kurulan bir Hyperloop takımıdır.
                                    Teknofest yarışmalarında yenilikçi mühendislik çözümleri geliştirerek,
                                    sürdürülebilir ulaşım teknolojilerinin öncüsü olmayı hedefliyoruz.
                                </Typography>
                            </RevealInViewAnimation>
                        </Box>

                        {/* Achievements Section */}
                        <RevealInViewAnimation blur={true} size={20} transition={{duration: 0.6, delay: .8}}>
                            <Box sx={{ textAlign: "center", mb: 6 }}>
                                <Typography sx={{
                                    fontSize: {xs: "24px", md: "32px"},
                                    fontWeight: 700,
                                    color: "#0054ab",
                                    mb: 2,
                                    letterSpacing: 1
                                }}>
                                    BAŞARILARIMIZ
                                </Typography>
                                <Box sx={{
                                    width: "80px",
                                    height: "4px",
                                    backgroundColor: "#0054ab",
                                    mx: "auto",
                                    borderRadius: "2px",
                                    mb: 6
                                }} />
                            </Box>
                        </RevealInViewAnimation>

                        {/* Achievement Cards */}
                        <Grid container spacing={4} justifyContent="center">
                            {achievements.map((achievement, index) => (
                                <Grid item xs={12} md={6} lg={4} key={index}>
                                    <RevealInViewAnimation
                                        blur={true}
                                        size={20}
                                        transition={{duration: 0.6, delay: 1 + (index * 0.2)}}
                                    >
                                        <Box sx={{
                                            p: 4,
                                            backgroundColor: "white",
                                            borderRadius: 4,
                                            boxShadow: "0 10px 40px rgba(0,84,171,0.08)",
                                            border: "1px solid rgba(0,84,171,0.1)",
                                            textAlign: "center",
                                            height: "100%",
                                            transition: "all 0.3s ease",
                                            ":hover": {
                                                transform: "translateY(-8px)",
                                                boxShadow: "0 20px 60px rgba(0,84,171,0.15)",
                                                borderColor: "#0054ab"
                                            }
                                        }}>
                                            <Box sx={{
                                                mb: 3,
                                                p: 2,
                                                backgroundColor: "rgba(0,84,171,0.05)",
                                                borderRadius: "50%",
                                                width: "80px",
                                                height: "80px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mx: "auto"
                                            }}>
                                                {achievement.icon}
                                            </Box>

                                            <Typography sx={{
                                                fontSize: "20px",
                                                fontWeight: 700,
                                                color: "#0054ab",
                                                mb: 1,
                                                letterSpacing: 0.5
                                            }}>
                                                {achievement.year}
                                            </Typography>

                                            <Typography sx={{
                                                fontSize: "18px",
                                                fontWeight: 600,
                                                color: "#1a1a1a",
                                                mb: 2,
                                                lineHeight: 1.3
                                            }}>
                                                {achievement.title}
                                            </Typography>

                                            <Typography sx={{
                                                fontSize: "14px",
                                                color: "rgba(0,0,0,.6)",
                                                lineHeight: 1.5
                                            }}>
                                                {achievement.description}
                                            </Typography>
                                        </Box>
                                    </RevealInViewAnimation>
                                </Grid>
                            ))}
                        </Grid>


                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default About;