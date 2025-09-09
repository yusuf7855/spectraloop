import {useEffect, useState} from 'react';
import {Box, Grow, MenuItem, Typography} from "@mui/material";
import {ExpandMore, KeyboardArrowDown} from "@mui/icons-material";
import {useOuterClick} from "../common/UseOuterClick.jsx";

function StyledSelectMenu({options, defaultOption, setValue}) {
    const [innerValue, setInnerValue] = useState(defaultOption ? options.find(option => option.value === defaultOption) : "")
    const [open, setOpen] = useState(false)
    const innerRef = useOuterClick(() => setOpen(false))

    useEffect(() => {
        defaultOption && setValue(defaultOption)
    }, [])

    useEffect(() => {
        const element = document.querySelector(".content-wrapper")
        if (open) {
            element.style.pointerEvents = "none"
        } else {
            element.style.pointerEvents = "auto"
        }
    }, [open])

    return (
        <Box>
            <Box ref={innerRef} sx={{position: "relative", pointerEvents: "auto"}} value={innerValue.value}>
                <Box onClick={() => setOpen(!open)} aria-describedby={open ? 'sorting-selection' : undefined} sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1.5,
                    py: 2,
                    cursor: "pointer",
                    border: "0!important",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
                    transition: ".4s all",
                    ":hover": {
                        boxShadow: "0px 0px 50px 20px rgba(0,0,0,0.1)",
                    }
                }}>
                    <Typography noWrap sx={{
                        fontWeight: "300",
                        userDrag: "none",
                        userSelect: "none"
                    }}>{innerValue.name}</Typography>
                    <ExpandMore sx={{
                        transform: open && "rotate(-180deg)",
                        transition: ".45s transform",
                        stroke: "#ffffff",
                        strokeWidth: .6
                    }}/>
                </Box>
                <Grow in={open} timeout={450}>
                    <Box open={open} sx={{
                        position: "absolute",
                        background: "white",
                        zIndex: 5,
                        width: "100%",
                        top: 64,
                        borderRadius: "8px",
                        boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
                        padding: 1,
                        '& .MuiMenuItem-root': {
                            padding: 1.5,
                            borderRadius: "8px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "no-wrap",
                            mt: .5,
                            ":hover": {
                                backgroundColor: "rgba(0,0,0,.1)"
                            }
                        },
                        "& .MuiMenuItem-root.Mui-selected": {
                            backgroundColor: (theme) => theme.palette.primary.main,
                            color: "white",
                            ":hover": {
                                backgroundColor: (theme) => theme.palette.primary.main,
                            },
                            "&.Mui-focusVisible": {
                                backgroundColor: (theme) => theme.palette.primary.main,
                            }
                        },
                    }}>
                        {
                            options.map((option, index) => (
                                <MenuItem
                                    selected={option.value === innerValue.value}
                                    onClick={() => {
                                        setInnerValue(option)
                                        setValue(option.value)
                                        setOpen(false)
                                    }}
                                    key={index}
                                    value={option.value}>
                                    <Typography sx={{
                                        fontWeight: "300",
                                        userDrag: "none",
                                        userSelect: "none"
                                    }}>{option.name}</Typography>
                                </MenuItem>
                            ))
                        }
                    </Box>
                </Grow>
            </Box>
        </Box>

    );
}

export default StyledSelectMenu;