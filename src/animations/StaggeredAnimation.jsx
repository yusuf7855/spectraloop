import {AnimatePresence, motion} from "framer-motion"
import {Box, Stack} from "@mui/material"

export default function StaggeredAnimation({children, open, sx, fast, presence}) {

    return (
        <Stack sx={{gap: 1.5, mt: 3, fontSize: "18px", justifyContent: "flex-start", flexDirection: "row", ...sx}}>
            <Box component={presence!==false ? AnimatePresence : Box}>
                {
                    open && children.map((child, i) => (
                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    translateX: -50,
                                },
                                visible: {opacity: 1, translateX: 0},
                                exit: {
                                    opacity: 0,
                                    translateX: -50,
                                    transition: {duration: fast ? 0.2 : 0.35, delay: i * (fast ? 0.125 : 0.15)}
                                }
                            }}
                            key={i}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{duration: fast ? 0.2 : 0.35, delay: i * (fast ? 0.125 : 0.15)}}
                        >
                            {child}
                        </motion.div>
                    ))
                }
            </Box>
        </Stack>
    )
}