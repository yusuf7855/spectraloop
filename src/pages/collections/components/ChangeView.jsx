import {Box, Button} from "@mui/material";
import {GridView, TableRowsOutlined} from "@mui/icons-material";
import {motion} from "framer-motion";

function ChangeView({isGrid, setIsGrid}) {
    const changeGridIconStyles = (isActive) => ({
        fontSize: "1.75rem",
        color: isActive ? "white" : "rgba(0,0,0,.8)",
        stroke: !isActive ? "white" : "black",
        strokeWidth: .8,
        transition: ".3s all",
        ":hover": {
            strokeWidth: .7
        }
    })

    const tabs = [
        {
            id: 1,
            isTrue: true,
            icon: <GridView sx={() => changeGridIconStyles(isGrid === true)}/>
        },
        {
            id: 2,
            isTrue: false,
            icon: <TableRowsOutlined sx={() => changeGridIconStyles(isGrid === false)}/>
        }]

    return (
        <Box sx={{
            boxShadow: "0px 0px 50px 2px rgba(0,0,0,0.1)",
            p: .8,
            borderRadius: 2,
            display: "flex",
            gap: 1,
        }}>
            {
                tabs.map((tab) => (
                    <Button
                        key={tab.id}
                        onClick={() => setIsGrid(!isGrid)}
                        sx={{
                            WebkitTapHighlightColor: "transparent",
                            ":hover": {
                                color: isGrid === tab.isTrue ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.8)",
                                backgroundColor: "transparent"
                            },
                            color: isGrid === tab.isTrue ? "white" : "black",
                            position: "relative",
                            p: 1,
                            minHeight: 0,
                            minWidth: 0,
                            zIndex: "20",
                            transition: ".5s all",
                            textTransform: "none",
                            "&& .MuiTouchRipple-child": {
                                backgroundColor: "transparent"
                            },
                        }}
                    >
                        {
                            isGrid === tab.isTrue && (
                                <motion.span
                                    layoutId="bubbleChangeViewCollection"
                                    style={{
                                        borderRadius: "8px",
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
                        </Box>
                    </Button>
                ))
            }
        </Box>
    );
}

export default ChangeView;