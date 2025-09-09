import {motion} from "framer-motion"

export default function ScaleDownAnimation({children, exit, delay}) {
    return (
        <motion.div
            variants={{
                start: {
                    scale: 1.2,
                    opacity: 0,
                    filter: "blur(2px)",
                },
                end: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)"
                },
                exit: {
                    opacity: 0,
                    scale: 1.2,
                    filter: "blur(2px)"
                },
            }}
            initial="start"
            animate="end"
            exit={exit && "exit"}
            transition={{duration: 0.6, delay: delay}}
        >
            {children}
        </motion.div>
    )
}