import {Box, styled, TextField} from "@mui/material";

export const StyledContainer = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    [theme.breakpoints.up('sm')]: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: 50,
        paddingRight: 50,
    },
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 100,
        paddingRight: 100,
    },
    [theme.breakpoints.up('xl')]: {
        paddingLeft: 200,
        paddingRight: 200,
    },
}))

export const StyledContainerLeft = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        paddingLeft: 0,
    },
    [theme.breakpoints.up('sm')]: {
        paddingLeft: 20,
    },
    [theme.breakpoints.up('md')]: {
        paddingLeft: 50,
    },
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 100,
    },
    [theme.breakpoints.up('xl')]: {
        paddingLeft: 200,
    },
}))

export const StyledCard = styled(Box)({
    borderRadius: "12px",
})

export const StyledInput = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        alignSelf: "stretch",
        height: {xs:"40px",md:"49px",lg:"56px"},
        borderRadius: "0px",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        "&.Mui-focused fieldset": {
            border: "1.2px solid rgba(0,0,0,.4)",
            borderRight: "0px",
            boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.1)",
        },
        '&:hover fieldset': {
            borderRight: "0px",
            boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.1)",
            border: "1.2px solid rgba(0,0,0,.4)",
        },
    }
})