import {Box} from "@mui/material";
import "../../styles/hamburger-menu.css"

function HamburgerMenu({sidebarOpen, onClick, scrolled, isTransparent}) {
    return (
        <Box>
            <input aria-label="toggle-navigation" id="dropdown" onChange={()=>{}} checked={sidebarOpen} className="input-box" type="checkbox" onClick={onClick} style={{
                display: "none",
            }}/>
            <Box component={"label"} htmlFor="dropdown" className="dropdown">
                <Box component={"span"} className="hamburger">
                    <Box component={"span"} sx={{background: (!scrolled && !sidebarOpen && isTransparent) && "white!important"}}
                         className="icon-bar top-bar"/>
                    <Box component={"span"} sx={{background: (!scrolled && !sidebarOpen && isTransparent) && "white!important"}}
                         className="icon-bar middle-bar"/>
                    <Box component={"span"} sx={{background: (!scrolled && !sidebarOpen && isTransparent) && "white!important"}}
                         className="icon-bar bottom-bar"/>
                </Box>
            </Box>
        </Box>


    );
}

export default HamburgerMenu;