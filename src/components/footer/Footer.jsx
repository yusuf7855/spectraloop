import {Box, Divider, Grid, Typography} from "@mui/material";
import {StyledContainer} from "../styled/StyledComponents.jsx";
import {Link} from "react-router-dom";
import SocialMedia from "./SocialMedia.jsx";
import ContactUs from "./ContactUs.jsx";
import {FooterItemTypography} from "../styled/StyledTypographies.jsx";

function Footer({logo}) {
    const FooterItem = ({title, route}) => {
        return <FooterItemTypography component={Link} to={route}>{title}</FooterItemTypography>;
    }

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: 'gray',
                marginTop: 'auto', // Footer'ı sayfanın altına iter
                zIndex: 1, // İçeriğin üstünde kalmasını sağlar
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    backgroundColor: 'white',
                    background: `
                        linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                }}
            />
            <Box sx={{position: 'relative', zIndex: 2, width: "100%"}}>
                <StyledContainer sx={{py: {xs: 5, sm: 8}}}>
                    <Grid container justifyContent={"space-between"} spacing={{xs: 5, md: 6}}>
                        <Grid item xs={12} lg={3}>
                            {logo}
                        </Grid>
                        <Grid item xs={12} lg={3} sx={{
                            display: {lg: "flex"},
                            flexDirection: {lg: "column"},
                            alignItems: {lg: "center"}
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: "white",
                                    letterSpacing: 2,
                                    fontWeight: "600",
                                    fontSize: "16px",
                                }}>
                                    BİZE ULAŞIN
                                </Typography>
                                <Divider sx={{
                                    backgroundColor: "#f15a22",
                                    width: "60px",
                                    height: "2px"
                                }}/>
                                <ContactUs/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3} sx={{
                            display: {lg: "flex"},
                            flexDirection: {lg: "column"},
                            alignItems: {lg: "center"}
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: "white",
                                    letterSpacing: 2,
                                    fontWeight: "600",
                                    fontSize: "16px",
                                }}>
                                    MENÜLER
                                </Typography>
                                <Divider sx={{
                                    backgroundColor: "#f15a22",
                                    width: "60px",
                                    height: "2px"
                                }}/>
                                <Box display={"flex"} gap={5}>
                                    <Box sx={{mt: 3, display: "inline-flex", flexDirection: "column", gap: 2}}>
                                        <FooterItem title={"Anasayfa"} route={"/"}/>
                                        <FooterItem title={"Odalar"} route={"/odalar"}/>
                                    </Box>
                                    <Box sx={{mt: 3, display: "inline-flex", flexDirection: "column", gap: 2}}>
                                        <FooterItem title={"Kurumsal"} route={"/kurumsal"}/>
                                        <FooterItem title={"İletişim"} route={"/iletisim"}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={3} sx={{
                            display: {lg: "flex"},
                            flexDirection: {lg: "column"},
                            alignItems: {lg: "center"}
                        }}>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"flex-start"}
                                 flexDirection={"column"}>
                                <Typography sx={{
                                    color: "white",
                                    letterSpacing: 2,
                                    fontWeight: "600",
                                    fontSize: "16px",
                                }}>
                                    BİZİ TAKİP EDİN
                                </Typography>
                                <Divider sx={{
                                    backgroundColor: "#f15a22",
                                    width: "60px",
                                    height: "2px"
                                }}/>
                                <SocialMedia/>
                            </Box>
                        </Grid>
                    </Grid>
                </StyledContainer>
                <StyledContainer>
                    <Divider sx={{
                        height: ".4px",
                        width: "100%",
                        backgroundColor: "#f15a22",
                        mb: 1
                    }}/>
                </StyledContainer>
                <Grid container justifyContent={"center"} sx={{p: 2}}>
                    <Typography component={'span'} sx={{
                        color: "rgba(255,255,255,.8)",
                        fontSize: "14px",
                        display: "inline-flex",
                        gap: .5
                    }}>
                        <Box sx={{
                            color: "white",
                            cursor: "default",
                            textDecoration: "none",
                            transition: ".2s color",
                            fontWeight: 600,
                        }}>DE PERLAS HOTEL</Box>
                        © {new Date().getFullYear()}. Tüm hakları saklıdır.
                    </Typography>
                </Grid>
            </Box>
        </Box>
    );
}

export default Footer;