import {AppBar, Box, Slide, Stack, Typography} from "@mui/material";
import React from 'react'
import {Link} from "react-router-dom";
import {AppBarTypography} from "../styled/StyledTypographies.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";
import {StyledContainer} from "../styled/StyledComponents.jsx";
import {StyledWhatsAppButton} from "../styled/StyledButtons.jsx";
import {NavigationMenu} from "./NavigationMenu.jsx";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function NavBar({handleSidebar, logo, sidebarOpen, isTransparent, navItems, logoDark}) {
    const [scrolled, setScrolled] = React.useState(false)
    const changeColor = () => {
        if (window.scrollY >= 120) setScrolled(true)
        else setScrolled(false)
    }

    React.useEffect(() => {
        window.addEventListener("scroll", changeColor)
    }, [scrolled])

    const tabs = navItems.filter((item) => item.component)

    function GetAppBar() {
        return <AppBar
            elevation={0}
            sx={{
                transition: "color .4s, background-color .2s, box-shadow .4s, borderBottom .4s",
                backgroundColor: (scrolled || !isTransparent || sidebarOpen) ? "white" : "transparent",
                boxShadow: (scrolled || sidebarOpen || !isTransparent) && "0px 0px 30px -3px rgba(0,0,0,0.1)",
                width: "100%",
                top: {xs: 0, md: 0},
                zIndex: 1250,
                position: isTransparent ? !scrolled ? "absolute" : "fixed" : {xs: "fixed", mlg: "sticky"}
            }}
        >
            <StyledContainer sx={{
                display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
                <Box sx={{
                    flex: 1,
                    mr: "auto",
                    py: {xs: 1, md: 1.5}, // Padding'i azalttım
                    height: {xs: "50px", md: "60px"}, // Height'ı azalttım
                    display: "flex",
                    alignItems: "center"
                }}>
                    {(scrolled || !isTransparent || sidebarOpen) ? logoDark : logo}
                </Box>
                <Box
                    flexDirection="row"
                    display={{xs: "none", lg: "flex"}}
                    gap={3.5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        flex: 1,
                        height: "90px" // Height'ı azalttım
                    }}
                >
                    <StyledSimpleBarItem
                        scrolled={scrolled}
                        href={navItems[0].route}
                        isTransparent={isTransparent}>{navItems[0].sidebarTitle}</StyledSimpleBarItem>
                    <NavigationMenu tabs={tabs} scrolled={scrolled} isTransparent={isTransparent}/>
                    {navItems.slice(2, navItems.length).map((item, index) => <StyledSimpleBarItem
                        key={index}
                        scrolled={scrolled}
                        href={item.route}
                        isTransparent={isTransparent}>{item.sidebarTitle}</StyledSimpleBarItem>)}

                </Box>
                <Box sx={{
                    height: "32px",
                    display: {xs: "block", lg: "none"},
                    alignItems: "center",
                    justifyContent: "right",
                    mt: 1
                }}>
                    <HamburgerMenu isTransparent={isTransparent} onClick={handleSidebar}
                                   sidebarOpen={sidebarOpen}
                                   scrolled={scrolled}/>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        ml: "auto",
                        display: { xs: "none", lg: "flex" },
                        justifyContent: "flex-end",
                        py: { xs: 1, md: 1.5 }, // Padding'i azalttım
                    }}
                >
                    <StyledWhatsAppButton
                        sx={{
                            py: 1.5, // Padding'i azalttım
                            px: 4, // Padding'i azalttım
                            width: { xs: "80%", sm: "30%", md: "auto" },
                            backgroundColor: "#0054ab", // Ana renginiz
                            ":hover": {
                                backgroundColor: "#003d7a", // Koyu ton
                            }
                        }}
                        href="https://wa.me/905396385955"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Typography sx={{ fontWeight: 300, textTransform: "none", color: "#fff" }}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <WhatsAppIcon sx={{ color: "#fff" }} />
                                +90 (539) 638 59 55
                            </Stack>
                        </Typography>
                    </StyledWhatsAppButton>
                </Box>

            </StyledContainer>
        </AppBar>;
    }

    return (<React.Fragment>
        {(scrolled && isTransparent) ?
            <Slide direction="down" in={scrolled} mountOnEnter unmountOnExit>
                <div>
                    {GetAppBar()}
                </div>
            </Slide> :
            GetAppBar()
        }
    </React.Fragment>);
}

// StyledSimpleBarItem bileşenini ekliyorum
const StyledSimpleBarItem = ({children, href, isTransparent, scrolled}) => {
    return <Box sx={{display: "flex", alignItems: "center", gap: 3, py: 0}}
                onClick={() => {
                    if (href.startsWith("#")) {
                        document.getElementById(href.substring(1)).scrollIntoView({behavior: "smooth"})
                    }
                }}
    >
        <AppBarTypography
            component={Link}
            to={href.startsWith("#") ? "" : href}
            transparent={(isTransparent ? "transparent" : undefined)}
            sx={{
                userDrag: "none",
                userSelect: "none",
                fontWeight: 500,
                fontSize: "1rem",
                color: (scrolled || !isTransparent) ? "black" : "white",
                textDecoration: "none"
            }}
            scrolled={scrolled ? "scrolled" : undefined}>{children}</AppBarTypography>
    </Box>
}

export default NavBar;