import {AnimatePresence, motion} from "framer-motion"
import {Box, Grid} from "@mui/material"

function GridStaggeredAnimation({items, open, translate, xs, sm, md, mlg, lg, xl, align, presence, spacing}) {

    const variant = translate ? {
        hidden: {opacity: 0, translateY: 75},
        visible: {opacity: 1, translateY: 0},
        exit: {opacity: 0, translateY: 75}
    } : {
        hidden: {opacity: 0},
        visible: {opacity: 1},
        exit: {opacity: 0}
    }

    return (
        <Box component={presence !== false ? AnimatePresence : Box}>
            <Grid container sx={{py: 3}} spacing={spacing ? spacing : 2.25}>
                {
                    open && items.map((child, i) => (
                        <Grid item xs={xs} sm={sm} md={md} mlg={mlg} lg={lg} xl={xl} align={align} key={i}>
                            <motion.div
                                variants={variant}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{duration: .75, delay: i * 0.1}}
                            >
                                {child}
                            </motion.div>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default GridStaggeredAnimation;
