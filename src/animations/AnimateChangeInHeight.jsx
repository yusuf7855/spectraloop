import {motion} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'

function AnimateChangeInHeight({children, duration, disabled}) {
    const containerRef = useRef(null)
    const [height, setHeight] = useState()
    const [initialOpen, setInitialOpen] = useState(true)

    useEffect(() => {
        if (containerRef.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                const observedHeight = entries[0].contentRect.height
                setHeight(observedHeight)
            })

            resizeObserver.observe(containerRef.current)

            return () => {
                resizeObserver.disconnect()
                //For test purposes. Will be removed from the code. Might Be Needed Later
                // await new Promise(resolve => setTimeout(resolve, 100))
                // setInitialOpen(false)
            }
        }
    }, [])

    return <motion.div transition={{duration: disabled ? 0 : duration || .5, delay: 0}} style={{height}}
                       animate={{height}}>
        <div ref={containerRef}>{children}</div>
    </motion.div>;
}

export default AnimateChangeInHeight;
