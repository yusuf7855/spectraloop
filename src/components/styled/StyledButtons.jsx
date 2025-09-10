import {Button, IconButton, styled} from "@mui/material";

export const StyledDarkButton = styled(Button)(({theme}) => ({
    py: 1.5,
    px: 2,
    borderRadius: "8px",
    overflow: "hidden",
    textAlign: "center",
    backgroundImage: `linear-gradient(to right, #0054ab 0%, #0066cc 51%, #0054ab 100%)`,
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0px 0px 50px 10px rgba(0,84,171,0.1)",
    transition: ".3s all",
    ":hover": {
        backgroundColor: "#003d7a",
        color: "white",
        boxShadow: "0px 0px 50px 10px rgba(0,84,171,0.2)",
        backgroundPosition: "right center"
    },
}))

export const StyledDarkIconButton = styled(IconButton)(({theme}) => ({
    background: "transparent",
    border: "1px solid rgba(255,255,255,.2)",
    borderRadius: "8px",
    color: "rgba(255,255,255,.6)",
    transition: ".2s all ease-in-out",
    ":hover": {
        border: "1px solid rgba(0,0,0,.4)",
        background: "rgba(255,255,255,.9)",
        color: "rgba(0,0,0,.8)"
    }
}))

export const StyledDarkSliderButton = styled(IconButton)(() => ({
    background: "transparent",
    boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
    borderRadius: "50%",
    color: "rgba(0,0,0,.6)",
    transition: ".2s all ease-in-out",
    ":hover": {
        border: "1px solid white",
        background: "rgba(0,0,0,.9)",
        color: "white",
    }
}))

export const StyledLightSliderButton = styled(IconButton)(() => ({
    background: "white",
    boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
    borderRadius: "50%",
    color: "rgba(0,0,0,.6)",
    transition: ".2s all ease-in-out",
    ":hover": {
        background: "white",
        boxShadow: "0px 0px 50px 25px rgba(0,0,0,0.1)",
        transform: "scale(1.075)"
    }
}))

export const StyledColoredButton = styled(Button)(({theme}) => ({
    py: 1.5,
    px: 2,
    borderRadius: "400px",
    overflow: "hidden",
    textAlign: "center",
    backgroundImage: `linear-gradient(to right, #0054ab 10%, #0066cc 51%, #003d7a 100%)`,
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0px 0px 50px 10px rgba(0,84,171,0.1)",
    transition: ".3s all",
    ":hover": {
        backgroundColor: "#003d7a",
        color: "white",
        boxShadow: "0px 0px 50px 10px rgba(0,84,171,0.3)",
        backgroundPosition: "right center"
    },
}))


export const StyledWhatsAppButton = styled(Button)(({theme}) => ({
    py: 1.5,
    px: 2,
    borderRadius: "400px",
    overflow: "hidden",
    textAlign: "center",
    backgroundImage: `linear-gradient(to right, #0054ab 10%, #0066cc 51%, #003d7a 100%)`,
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0px 0px 50px 10px rgba(0,84,171,0.1)",
    transition: ".3s all",
    ":hover": {
        backgroundColor: "#003d7a",
        color: "white",
        boxShadow: "0px 0px 50px 10px rgba(0,84,171,0.3)",
        backgroundPosition: "right center"
    },
}));