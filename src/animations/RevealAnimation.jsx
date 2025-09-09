import {AnimatePresence, motion} from "framer-motion"
import {Box} from "@mui/material";

export default function RevealAnimation({
                                            open,
                                            style,
                                            children,
                                            delay,
                                            presence,
                                            duration,
                                            animationKey,
                                            variants,
                                            size
                                        }) {
    return (
        <Box component={presence !== false ? AnimatePresence : Box}>
            {
                open && <div style={{...style}}>
                    <motion.div style={{...style}}
                                key={animationKey && animationKey}
                                variants={variants ? variants : {
                                    hidden: {opacity: 0, x: size || -100},
                                    visible: {opacity: 1, x: size || 0},
                                    exit: {opacity: 0, x: size || -100,}
                                }}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{duration: duration ? duration : .45, delay: delay ? delay : .1}}
                    >
                        {children}
                    </motion.div>
                </div>
            }
        </Box>
    )
}