import {motion, useAnimation, useInView} from "framer-motion"
import {Box, Grid} from "@mui/material"
import React from "react";

function GridStaggeredInViewAnimation({
                                          children,
                                          translate,
                                          xs,
                                          sm,
                                          md,
                                          mlg,
                                          lg,
                                          xl,
                                          align,
                                          delay = .3,
                                          initialDelay = .6,
                                          size = 20
                                      }) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    const variant = translate ? {
        hidden: {opacity: 0, translateY: size},
        visible: {opacity: 1, translateY: 0},
        exit: {opacity: 0, translateY: size}
    } : {
        hidden: {opacity: 0},
        visible: {opacity: 1},
        exit: {opacity: 0}
    }

    React.useEffect(() => {
        if (isInView) mainControls.start("visible")
    }, [isInView])

    return (
        <Box ref={ref} sx={{width: "100%"}}>
            <Grid container sx={{mt: 4}} spacing={2}>
                {
                    children.map((child, i) => (
                        <Grid item xs={xs} sm={sm} md={md} mlg={mlg} lg={lg} xl={xl} align={align} key={i}>
                            <motion.div
                                variants={variant}
                                initial="hidden"
                                animate={mainControls}
                                exit="exit"
                                transition={{duration: .6, delay: (i === 0) ? initialDelay : .6 + (i + 1) * delay}}
                            >
                                {child}
                            </motion.div>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default GridStaggeredInViewAnimation;