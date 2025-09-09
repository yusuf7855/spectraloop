import { Box, Divider, Grid, Typography } from "@mui/material";

function AboutUsWithNumbers() {
    return (
        <Box
            sx={{
                p: { xs: 4, md: 8 },
                background: "linear-gradient(135deg, rgb(199, 122, 99) 0%, rgb(184, 106, 82) 100%)",
                color: "white",
                flexDirection: { xs: "column", md: "row" },
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Background decoration */}
            <Box
                sx={{
                    position: "absolute",
                    top: "-50%",
                    right: "-20%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    zIndex: 0
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: "-30%",
                    left: "-15%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.03)",
                    zIndex: 0
                }}
            />

            <Grid container justifyContent={"center"} spacing={{ xs: 8, sm: 4, md: 6 }} sx={{ position: "relative", zIndex: 1 }}>
                <Grid item xs={6} sm={6} md={2} align="center">
                    <Box sx={{
                        transition: "transform 0.3s ease",
                        ":hover": {
                            transform: "translateY(-5px)"
                        }
                    }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: "28px", sm: "32px", md: "42px" },
                                fontFamily: "'Montserrat', sans-serif",
                                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                            }}
                        >
                            50+
                        </Typography>
                        <Typography sx={{
                            mt: 0.5,
                            fontSize: { xs: "13px", md: "14px" },
                            fontWeight: 500,
                            opacity: 0.95
                        }}>
                            Konforlu Oda
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ alignSelf: "stretch", display: { xs: "none", md: "block" } }}
                >
                    <Divider orientation="vertical" sx={{ background: "rgba(255,255,255,0.3)", height: "100%" }} />
                </Grid>
                <Grid item xs={6} sm={6} md={2} align="center">
                    <Box sx={{
                        transition: "transform 0.3s ease",
                        ":hover": {
                            transform: "translateY(-5px)"
                        }
                    }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: "28px", sm: "32px", md: "42px" },
                                fontFamily: "'Montserrat', sans-serif",
                                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                            }}
                        >
                            1500+
                        </Typography>
                        <Typography sx={{
                            mt: 0.5,
                            fontSize: { xs: "13px", md: "14px" },
                            fontWeight: 500,
                            opacity: 0.95
                        }}>
                            Mutlu Misafir
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ alignSelf: "stretch", display: { xs: "none", md: "block" } }}
                >
                    <Divider orientation="vertical" sx={{ background: "rgba(255,255,255,0.3)", height: "100%" }} />
                </Grid>
                <Grid item xs={6} sm={6} md={2} align="center">
                    <Box sx={{
                        transition: "transform 0.3s ease",
                        ":hover": {
                            transform: "translateY(-5px)"
                        }
                    }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: "28px", sm: "32px", md: "42px" },
                                fontFamily: "'Montserrat', sans-serif",
                                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                            }}
                        >
                            24/7
                        </Typography>
                        <Typography sx={{
                            mt: 0.5,
                            fontSize: { xs: "13px", md: "14px" },
                            fontWeight: 500,
                            opacity: 0.95
                        }}>
                            Hizmet Saati
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ alignSelf: "stretch", display: { xs: "none", md: "block" } }}
                >
                    <Divider orientation="vertical" sx={{ background: "rgba(255,255,255,0.3)", height: "100%" }} />
                </Grid>
                <Grid item xs={6} sm={6} md={2} align="center">
                    <Box sx={{
                        transition: "transform 0.3s ease",
                        ":hover": {
                            transform: "translateY(-5px)"
                        }
                    }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: "28px", sm: "32px", md: "42px" },
                                fontFamily: "'Montserrat', sans-serif",
                                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                            }}
                        >
                            4.8★
                        </Typography>
                        <Typography sx={{
                            mt: 0.5,
                            fontSize: { xs: "13px", md: "14px" },
                            fontWeight: 500,
                            opacity: 0.95
                        }}>
                            Misafir Puanı
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutUsWithNumbers;