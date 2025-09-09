import "../../styles/components/checkbox.css"
import {useState} from "react";
import {Check} from "@mui/icons-material";
import {Box} from "@mui/material";

function StyledCheckbox({onChange, index}) {
    const [checked,setChecked] = useState("")
    return (
        <Box sx={{position: "relative"}}>
            <input aria-label={`check${index}`} type="checkbox" id={`check${index}`} name={`check${index}`} checked={checked} onChange={() => {
                onChange()
                setChecked(!checked)
            }}/>
            <Check sx={{
                position: "absolute",
                color: "white",
                left: "50%",
                top: "35%",
                transform: "translate(-50%,-50%)",
                zIndex: 0,
                fontSize: "18px",
                cursor: "pointer",
                opacity: checked ? 1 : 0,
                transition: "opacity .3s",
            }} onClick={() => {
                onChange()
                setChecked(!checked)
            }}/>
        </Box>
    );
}

export default StyledCheckbox;