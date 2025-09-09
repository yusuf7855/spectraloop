import React, {useState} from 'react';
import {Image, PictureAsPdf} from "@mui/icons-material";
import ViewInArIcon from "@mui/icons-material/ViewInAr.js";
import {Box, Button, Skeleton, Typography} from "@mui/material";
import {motion} from "framer-motion";

function ChangeModeTabs({selected, setSelected, isLoading, isArDisabled}) {
    const tabs = [
        {
            id: 1,
            label: "GALERİ",
            icon: <Image/>
        },
        ...(!isArDisabled ? [{
            id: 2,
            label: "AR",
            icon: <ViewInArIcon/>
        }] : []),
        {
            id: 3,
            label: "DETAY",
            icon: <PictureAsPdf/>
        }
    ]

    return (
        <>
            {
                isLoading
                    ?
                    <Box>
                        <Skeleton
                            sx={{
                                background: "grey.500",
                                width: "208px",
                                height: "64px",
                                mt: {xs: 3, md: 4},
                                mb: 1,
                                borderRadius: 2,
                                p: 1
                            }}
                            variant="rectangular"
                            animation="wave"
                        />
                    </Box>
                    :
                    <Box sx={{
                        display: "inline-flex",
                        gap: .5,
                        p: 1,
                        borderRadius: 2,
                        boxShadow: "0px 0px 50px 2px rgba(0,0,0,0.1)",
                        mb: 1
                    }}>
                        {tabs.map((tab) => (
                            <Button
                                key={tab.id}
                                onClick={() => {
                                    setSelected(tab.label)
                                }}
                                sx={{
                                    WebkitTapHighlightColor: "transparent",
                                    ":hover": {
                                        color: selected === tab.label ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.8)",
                                        backgroundColor: "transparent"
                                    },
                                    color: selected === tab.label ? "white" : "black",
                                    position: "relative",
                                    py: 1.5,
                                    px: 1.6,
                                    zIndex: "20",
                                    transition: ".5s all",
                                    textTransform: "none",
                                    "&& .MuiTouchRipple-child": {
                                        backgroundColor: "transparent"
                                    },
                                }}
                            >
                                {
                                    selected === tab.label && (
                                        <motion.span
                                            layoutId="bubble"
                                            style={{
                                                borderRadius: 8,
                                                position: "absolute",
                                                inset: 0,
                                                zIndex: 10,
                                                background: "rgb(40,40,40)"
                                            }}
                                            transition={{type: "spring", duration: 0.425}}
                                        />
                                    )
                                }
                                <Box sx={{display: "flex", gap: .75, zIndex: 11}}>
                                    {tab.icon}
                                    <Typography sx={{
                                        zIndex: 30,
                                        fontSize: "16px",
                                        letterSpacing: 2.5,
                                    }}>
                                        {tab.label}
                                    </Typography>
                                </Box>
                            </Button>
                        ))
                        }
                    </Box>
            }
        </>
    );
}

export default ChangeModeTabs;
