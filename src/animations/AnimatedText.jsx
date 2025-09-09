import React from "react";
import {motion, useAnimation, useInView} from "framer-motion"
import {Box, Grid, Typography} from "@mui/material";
import {StyledTitle} from "../components/styled/StyledTypographies.jsx";

function AnimatedText({text, variant, sx, move, delay}) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    React.useEffect(() => {
        if (isInView) mainControls.start("visible")
    }, [isInView])

    const words = text.split(" ")

    const container = {
        hidden: {opacity: 0},
        visible: (i = 1) => ({
            opacity: 1,
            transition: {staggerChildren: 0.09, delayChildren: 0.09 * i, delay: delay && delay},
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: move != null ? 0 : 20,
            transition: {
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <div ref={ref}>
            <motion.div
                style={{overflow: "hidden", display: "flex"}}
                variants={container}
                initial="hidden"
                animate={mainControls}
                transition={{delay: 1}}
            >
                <Box sx={{display:"flex",gap:1}}>
                    {words.map((word, index) => (
                        <motion.span
                            variants={child}
                            key={index}
                        >
                            <StyledTitle title={word} sx={{...sx}} variant={variant}/>
                        </motion.span>
                    ))}
                </Box>

            </motion.div>
        </div>
    )
}

export default AnimatedText