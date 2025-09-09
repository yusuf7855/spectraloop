import React from 'react'
import {motion, useAnimation, useInView} from "framer-motion"

function RevealInViewAnimation({children, style, direction, size, transition, onlyOpacity, blur}) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()
    const verticalAnimation = {
        hidden: {
            opacity: 0,
            y: size ? size : -75,
            filter: blur && "blur(6px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            textShadow: "unset",
            filter: blur && "0"
        }
    }

    const horizontalAnimation = {
        hidden: {opacity: 0, x: size ? size : -75},
        visible: {opacity: 1, x: 0}
    }

    const variant = onlyOpacity ? {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    } : direction === "horizontal" ? horizontalAnimation : verticalAnimation

    React.useEffect(() => {
        if (isInView) mainControls.start("visible")
    }, [isInView])

    return (
        <motion.div ref={ref} style={{...style}}
                    variants={variant}
                    initial="hidden"
                    animate={mainControls}
                    transition={transition ? transition : {duration: .45}}
        >
            {children}
        </motion.div>
    )
}

export default RevealInViewAnimation