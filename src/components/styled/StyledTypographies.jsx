import {styled, Typography} from "@mui/material";

export const TopBannerTypography = styled(Typography)(() => ({
    color: "rgba(255,255,255,.85)",
    textDecoration: "none",
    fontFamily: "'Poppins',sans-serif",
    fontSize: "14px",
    transition: ".2s color ease-in-out",
    ":hover": {
        color: "rgb(255,255,255)"
    }
}))
export const AppBarTypography = styled(Typography)(({scrolled, hovered, parent, transparent}) => ({
    color: (scrolled || hovered || parent || !transparent) ? "black" : "white",
    textDecoration: "none",
    cursor: "pointer",
    position: "relative",
    fontWeight: 400,
    transition: ".2s color ease-in-out",
    ":before": {
        content: "''",
        position: "absolute",
        display: "block",
        width: "100%",
        height: "2px",
        bottom: -.5,
        left: 0,
        background: (scrolled || hovered || !transparent) ? "rgba(0,0,0,.75)" : "white",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 0.3s ease",
    },
    ":hover:before": {
        transform: "scaleX(1);"
    },
}))
export const FooterItemTypography = styled(Typography)(() => ({
    color: "rgba(255,255,255,.7)",
    textDecoration: "none",
    cursor: "pointer",
    paddingLeft: 0,
    paddingRight: 5,
    fontSize: "14px",
    fontFamily: "'Poppins',sans-serif",
    transition: ".2s all ease-in-out",
    ":hover": {
        color: "rgba(255,255,255,.9)",
        paddingLeft: 5,
        paddingRight: 0
    }
}))

export const StyledTitle = ({title}) => <Typography variant="h2"
                                                    sx={{fontSize: "28px", fontWeight: "300"}}>{title}</Typography>