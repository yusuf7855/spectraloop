import {Box, Button, Collapse, SwipeableDrawer, Typography} from "@mui/material";
import {ExpandMore, WhatsApp} from "@mui/icons-material";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {StyledDarkButton} from "../styled/StyledButtons.jsx";
import RevealInViewAnimation from "../../animations/RevealInViewAnimation.jsx";

const Option = ({title, icon, onClose, route, items}) => {
    const iconStyle = {
        stroke: "white",
        strokeWidth: .6,
        color: "rgba(0,0,0,.65)"
    };
    const [open, setOpen] = useState(false);
    const isService = title === "Odalar"
    const getRoute = (item) => {
        return `/${isService ? "odalar" : "urunler"}/${item.route}`
    }

    const handleClick = () => !items ? onClose() : setOpen(!open);

    return (
        <Box>
            <Box component={Link} to={route} sx={{textDecoration: "none"}}>
                <Box
                    component={motion.li}
                    variants={itemVariants}
                    onClick={handleClick}
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        gap: 2,
                        width: '100%',
                        borderRadius: 2,
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        p: 2,
                        px: 2,
                    }}
                >
                    <motion.div variants={actionIconVariants}>
                        <Box sx={{display: "flex", alignItems: "center", ...iconStyle}}>
                            {icon}
                        </Box>
                    </motion.div>
                    <Typography sx={{color: "black"}}>{title}</Typography>
                    {items && <ExpandMore
                        sx={{
                            cursor: "pointer",
                            transition: ".3s all",
                            stroke: "white",
                            strokeWidth: .6,
                            color: "black",
                            transform: open ? "rotate(-180deg)" : "rotate(0deg)",
                        }}
                    />}
                </Box>
            </Box>
            {items && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{display: "flex", flexDirection: "column", mb: 2}}>
                        {items.map((item) => (
                            <Box
                                key={item.id}
                                onClick={onClose}
                                component={Link}
                                to={item.id === 0 ? item.route : getRoute(item)}
                                sx={{textDecoration: "none", px: 7, py: 1}}
                            >
                                <Typography sx={{
                                    fontSize: {xs: "14px", md: "16px"},
                                    color: "rgba(0,0,0,.75)",
                                }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Collapse>
            )}
        </Box>
    );
};

function Sidebar({sidebarOpen, onClose, onOpen, isLowerThanMd, navItems}) {
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 120) setScrolled(true);
        else setScrolled(false);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        document.getElementsByTagName('html')[0].style.overflowY = sidebarOpen ? "hidden" : "auto";
    }, [sidebarOpen]);

    return (
        <SwipeableDrawer
            transitionDuration={500}
            anchor={"top"}
            open={sidebarOpen}
            onClose={onClose}
            onOpen={onOpen}
            disableSwipeToOpen={true}
            disableBackdropTransition={!iOS || isLowerThanMd}
            disableDiscovery={iOS || !isLowerThanMd}
            BackdropProps={{
                sx: {
                    backdropFilter: "blur(1px)",
                },
            }}
            PaperProps={{
                sx: {
                    top: {xs: 62, md: 72},
                    px: {md: 4},
                    minHeight: `${56 * navItems.length}px`,
                    overflow: "auto",
                    backdropFilter: "blur(20px)",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    maxHeight: "80vh",
                },
            }}
        >
            <Box sx={{minHeight: "100%"}}>
                <Box sx={{pb: 2}}>
                    <AnimatePresence>
                        {sidebarOpen && (
                            <motion.div
                                key="sidebar-menu-items"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                style={{position: "relative"}}
                            >
                                <motion.ul
                                    key="sidebar-menu-items-list"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={wrapperVariants}
                                    style={{padding: 0, margin: 0}}
                                >
                                    {navItems.map((item, index) => (
                                        <Option
                                            key={index}
                                            icon={item.icon}
                                            title={item.sidebarTitle}
                                            onClose={onClose}
                                            route={item.route}
                                            items={item.items}
                                        />
                                    ))}
                                </motion.ul>
                                <RevealInViewAnimation
                                    blur={true}
                                    size={-10}
                                    onlyOpacity={true}
                                    transition={{delay: navItems.length * 0.3, duration: 0.6}}
                                >
                                    <Box sx={{px: 2, py: 1}}>

                                    </Box>
                                </RevealInViewAnimation>
                                <motion.div
                                    key="action-close"
                                    variants={actionBarVariants}
                                    transition={{delay: (navItems.length + 1) * 0.3, duration: 0.4}}
                                >
                                    <Box sx={{
                                        height: "4.25px",
                                        width: "25%",
                                        background: "rgba(39, 39, 42)",
                                        borderRadius: "9999px",
                                        mx: "auto",
                                        mt: 2.5,
                                    }}/>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Box>
            </Box>
        </SwipeableDrawer>
    );
}

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            delay: 0.2
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};

const actionIconVariants = {
    open: {scale: 1, y: 0},
    closed: {scale: 0, y: -7},
};

const actionBarVariants = {
    open: {scaleX: 1},
    closed: {scaleX: 0}
};

export default Sidebar;
