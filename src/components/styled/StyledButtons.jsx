import {Button, IconButton, styled} from "@mui/material";

export const StyledDarkButton = styled(Button)(({theme}) => ({
    py: 1.5,
    px: 2,
    borderRadius: "8px",
    overflow: "hidden",
    textAlign: "center",
    backgroundImage: `linear-gradient(to right, rgb(40,40,40) 0%, #484848 51%, rgb(40,40,40) 100%)`,
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
    transition: ".3s all",
    ":hover": {
        backgroundColor: "black",
        color: "white",
        boxShadow: "0px 0px 50px 10px rgba(255,255,255,0.1)",
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
    backgroundImage: `linear-gradient(to right, #edb472 10%, #D4967D 51%, #B86A52 100%)`,
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
    transition: ".3s all",
    ":hover": {
        backgroundColor: "#D4967D",
        color: "white",
        boxShadow: "0px 0px 50px 10px rgba(199,122,99,0.2)",
        backgroundPosition: "right center"
    },
}))


export const StyledWhatsAppButton = styled(Button)(({theme}) => ({
    py: 1.5,
    px: 2,
    borderRadius: "400px",
    overflow: "hidden",
    textAlign: "center",
    backgroundImage: `linear-gradient(to right, #25D366 10%, #1aab4c 51%, #128C7E 100%)`,
    backgroundSize: "200% auto",
    color: "white",
    boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
    transition: ".3s all",
    ":hover": {
        backgroundColor: "#1aab4c",
        color: "white",
        boxShadow: "0px 0px 50px 10px rgba(37,211,102,0.3)",
        backgroundPosition: "right center"
    },
}));
