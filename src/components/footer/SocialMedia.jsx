import {StyledDarkIconButton} from "../styled/StyledButtons.jsx";
import {Link} from "react-router-dom";
import {Instagram, LinkedIn, X} from "@mui/icons-material";
import {Box} from "@mui/material";

function SocialMedia({sx, iconSx}) {
    return (
        <Box sx={{display: "flex", flexDirection: "row", gap: 1.5, mt: 3}}>
            <StyledDarkIconButton sx={sx} aria-label="instagram-link" component={Link} target="_blank"
                                  to={"https://www.instagram.com/spectraloop/"}><Instagram
                sx={{fontSize: "24px", ...iconSx}}/></StyledDarkIconButton>
            <StyledDarkIconButton sx={sx} aria-label="linkedin-link" component={Link} target="_blank"
                                  to={"https://tr.linkedin.com/spectraloop"}><LinkedIn
                sx={{fontSize: "24px", ...iconSx}}/></StyledDarkIconButton>
            <StyledDarkIconButton sx={sx} aria-label="twitter-link" component={Link} target="_blank" to={""}>
                <X sx={{fontSize: "24px", ...iconSx}}/></StyledDarkIconButton>
        </Box>
    );
}

export default SocialMedia;