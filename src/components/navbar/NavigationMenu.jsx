import {createElement, useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import {AnimatePresence, motion} from 'framer-motion';
import {KeyboardArrowDown} from "@mui/icons-material";
import {Link} from "react-router-dom";
import AnimateChangeInHeight from "../../animations/AnimateChangeInHeight.jsx";

export const NavigationMenu = ({tabs, scrolled, isTransparent}) => {
    const [selected, setSelected] = useState(null)
    const [dir, setDir] = useState(null)
    const tabsResult = tabs.map((n, idx) => ({...n, id: idx + 1}));

    const handleSetSelected = (val) => {
        if (typeof selected === 'number' && typeof val === 'number') {
            setDir(selected > val ? 'r' : 'l')
        } else if (val === null) {
            setDir(null)
        }

        setSelected(val)
    };

    return (
        <Box
            onMouseLeave={() => handleSetSelected(null)}
            sx={{position: 'relative', display: 'flex', gap: 3, flexDirection: 'row', height: "100%"}}
        >
            {tabsResult.map((t) => (
                <Tab
                    key={t.id}
                    selected={selected}
                    handleSetSelected={handleSetSelected}
                    tab={t.id}
                    scrolled={scrolled}
                    route={t.route}
                    isTransparent={isTransparent}
                >
                    {t.sidebarTitle}
                </Tab>
            ))}
            <AnimatePresence>
                {selected &&
                    <Content handleSetSelected={handleSetSelected} tabs={tabsResult} dir={dir} selected={selected}/>}
            </AnimatePresence>
        </Box>
    );
};

const Tab = ({children, tab, handleSetSelected, selected, scrolled, route, isTransparent}) => {
    return (
        <Box
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: .5,
                borderRadius: '50%',
                fontSize: '0.875rem',
                transition: 'background-color 0.2s, color 0.2s',
                backgroundColor: selected === tab ? 'neutral.800' : 'transparent',
                cursor: "pointer",
                color: (scrolled || !isTransparent) ? "black" : "white",
                '&:hover': {
                    backgroundColor: selected === tab ? 'neutral.800' : 'neutral.700',
                },
            }}
        >
            <Typography component={Link} to={route} sx={{
                userDrag: "none",
                userSelect: "none",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
                color: (scrolled || !isTransparent) ? "black" : "white",
            }}>{children}</Typography>
            <KeyboardArrowDown
                style={{
                    transition: 'transform 0.3s',
                    transform: selected === tab ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
            />
        </Box>
    );
};

const Content = ({selected, dir, tabs, handleSetSelected}) => {
    return (
        <Box
            id="overlay-content"
            component={motion.div}
            initial={{opacity: 0, scale: .6}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, y: 8}}
            transition={{duration: 0.3}}
            sx={{
                position: 'absolute',
                left: 0,
                top: 96,
                width: 580,
                borderRadius: 3,
                boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.2)",
                background: 'white',
                height: "auto"
            }}
        >
            <Bridge/>
            <Nub selected={selected}/>
            <Box sx={{overflow: "hidden"}}>
                <AnimateChangeInHeight duration={.3}>
                    {tabs.map((t) => (
                        <Box key={t.id} sx={{overflow: 'hidden'}}>
                            {selected === t.id && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
                                    }}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.25, ease: 'easeInOut'}}
                                >
                                    {createElement(t.component, {handleClose: () => handleSetSelected(null)})}
                                </motion.div>
                            )}
                        </Box>
                    ))}
                </AnimateChangeInHeight>
            </Box>
        </Box>
    );
};

const Bridge = () => (
    <Box sx={{position: 'absolute', top: -24, left: 0, right: 0, height: 24}}/>
);

const Nub = ({selected}) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById('overlay-content');

            if (!hoveredTab || !overlayContent) return;

            const baseCenter = 40
            const tabCenter = selected === 1 ? baseCenter : 40 + ((selected - 1) * 120)
            setLeft(tabCenter)
        }
    };

    return (
        <Box
            component={motion.span}
            sx={{
                clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)',
                position: 'absolute',
                left: '50%',
                top: 0,
                height: 16,
                width: 16,
                transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'neutral.600',
                backgroundColor: 'white',
            }}
            animate={{left}}
            transition={{duration: 0.25, ease: 'easeInOut'}}
        />
    );
};
