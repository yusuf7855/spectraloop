import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import {useState} from 'react';
import {Box, Toolbar} from "@mui/material";
import NavBar from "../navbar/NavBar.jsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import {Apartment, Engineering, Home, Phone, Article} from "@mui/icons-material";
import logoLight from "../../assets/images/logo_white1.png"
import logoDark from "../../assets/images/logo_black1.png"
import ServicesMenu from "../navbar/ServicesMenu.jsx";
import {services} from "../../utils/services.jsx"
import WhatsAppFloatingButton from "../common/WhatsAppFloatingButton.jsx";

export default function Layout({children, freeLayout}) {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const [prevPath, setPrevPath] = useState("")
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600)
    const [isLowerThanMd, setIsLowerThanMd] = React.useState(window.innerWidth <= 900)
    const isTransparent = ["/"].includes(pathname) || (pathname === "/entertainment")
    const navigateHome = () => navigate("/")

    const theme = createTheme({
        palette: {
            primary: {
                main: "#005b8c",
                secondary: "#015583",
                darkMain: "#000814",
                dark: "rgb(40,40,40)"
            }
        },
        breakpoints: {
            values: {
                xs: 0,
                xsm: 450,
                sm: 600,
                smd: 700,
                md: 900,
                mlg: 1100,
                lg: 1200,
                xl: 1536,
            },
        },
        typography: {
            allVariants: {
                fontFamily: 'Poppins, sans-serif',
            },
        },
    })

    const [sidebarOpen, setSidebarOpen] = React.useState(false)
    const toggleSidebar = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return
        setSidebarOpen(open)
    }
    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 600)
        setIsLowerThanMd(window.innerWidth <= 900)
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])

    React.useEffect(() => {
        if (pathname.split("/")[1] === prevPath.split("/")[1]) {
            setPrevPath(pathname)
            return
        }
        setPrevPath(pathname)
        window.scrollTo(0, 0)
    }, [pathname])

    const logoLightMemo = React.useMemo(() => <Box
            component={"img"}
            onClick={navigateHome}
            alt={"logo"}
            sx={{
                cursor: "pointer",
                userDrag: "none",
                userSelect: "none"
            }}
            height={{xs: "30px", md: "65px"}}
            width={{xs: "auto", md: "auto"}} src={logoLight}/>,
        [])

    const logoDarkMemo = React.useMemo(() => <Box
            component={"img"}
            onClick={navigateHome}
            alt={"logo"}
            sx={{
                cursor: "pointer",
                userDrag: "none",
                userSelect: "none"
            }}
            height={{xs: "30px", md: "82px"}}
            width={{xs: "auto", md: "auto"}} src={logoDark}/>,
        [])

    const iconStyle = {
        stroke: "white",
        strokeWidth: .6,
        color: "rgba(0,0,0,.65)"
    }

    const navItems = [
        {
            title: "ANASAYFA",
            sidebarTitle: "Anasayfa",
            icon: <Home sx={iconStyle}/>,
            route: "/",
        },
        {
            title: "ODALAR",
            sidebarTitle: "Odalar",
            icon: <Engineering sx={iconStyle}/>,
            component: ServicesMenu,
            items: services
        },
        {
            title: "KURUMSAL",
            sidebarTitle: "Kurumsal",
            icon: <Apartment sx={iconStyle}/>,
            route: "/kurumsal",
        },
        {
            title: "BLOG",
            sidebarTitle: "Blog",
            icon: <Article sx={iconStyle}/>,
            route: "/blog",
        },
        {
            title: "İLETİŞİM",
            sidebarTitle: "İletişim",
            icon: <Phone sx={iconStyle}/>,
            route: "/iletisim",
        },
    ]

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {
                freeLayout !== true ?
                    <Box className={"content-wrapper"} sx={{
                        background: "white",
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <NavBar isTransparent={isTransparent} sidebarOpen={sidebarOpen}
                                isMobile={isMobile} isLowerThanMd={isLowerThanMd}
                                logo={logoLightMemo}
                                logoDark={logoDarkMemo}
                                handleSidebar={() => setSidebarOpen(!sidebarOpen)}
                                navItems={navItems}
                        />
                        <Toolbar sx={{
                            height: {xs: 64, md: 72, mlg: 31},
                            minHeight: "0px!important",
                            display: isTransparent ? "none" : "block"
                        }}/>
                        <Box sx={{
                            flexGrow: 1,
                        }}>
                            <Outlet/>
                        </Box>
                        <Footer/>
                        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} navItems={navItems}/>
                        {/* WhatsApp Floating Button - tüm sayfalarda görünecek */}
                        <WhatsAppFloatingButton />
                    </Box> : <Box>{children}</Box>
            }

        </ThemeProvider>
    );
}