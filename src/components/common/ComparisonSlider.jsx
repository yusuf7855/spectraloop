import React from 'react';
import {Box} from "@mui/material";
import {Image} from "./Image.jsx";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";

function ComparisonSlider({leftImage, rightImage, height, light}) {
    const [isMobile, setIsMobile] = React.useState(window.matchMedia('(pointer: coarse)').matches)
    const [sliderPosition, setSliderPosition] = React.useState(50)
    const [isDragging, setIsDragging] = React.useState(false)
    const sliderRef = React.useRef()
    const handleRef = React.useRef()

    const handleWindowSizeChange = () => setIsMobile(window.matchMedia('(pointer: coarse)').matches)

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])

    const handleTouchStartEnd = (event) => {
        if (event.type === 'touchstart') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    };

    const handleMove = (e) => {
        if (e.target.className.length >= 6 && isMobile) {
            const includes = e.target.className.includes("handle")
            if (!includes) return
        }

        if (!isDragging) return
        const rect = e.currentTarget.getBoundingClientRect()
        const touch = isMobile ? e.touches[0].clientX : e.clientX
        const x = Math.max(0, Math.min(touch - rect.left, rect.width))
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
        setSliderPosition(percent)
    };

    React.useEffect(() => {
        const handle = handleRef.current;
        if (handle) {
            handle.addEventListener('touchmove', function (e) {
                e.preventDefault();
                handleMove(e)
            }, {passive: false});
            handle.addEventListener('touchstart', handleTouchStartEnd, {passive: false});
            handle.addEventListener('touchend', handleTouchStartEnd, {passive: false});
            handle.addEventListener('touchcancel', handleTouchStartEnd, {passive: false});
        }

        return () => {
            if (handle) {
                handle.removeEventListener('touchmove', handleMove, {passive: false});
                handle.removeEventListener('touchstart', handleTouchStartEnd, {passive: false});
                handle.removeEventListener('touchend', handleTouchStartEnd, {passive: false});
                handle.removeEventListener('touchcancel', handleTouchStartEnd, {passive: false});
            }
        };
    }, []);

    const handleMouseDown = () => setIsDragging(true)

    const handleMouseUp = () => setIsDragging(false)

    return (
        <Box sx={{width: "100%", position: "relative", cursor: "ew-resize"}}
             onMouseUp={!isMobile ? handleMouseUp : undefined} onTouchEnd={isMobile ? handleMouseUp : undefined}>
            <Box
                ref={sliderRef}
                sx={{
                    position: "relative",
                    width: "100%",
                    height: height ? height : "80vh",
                    margin: "auto",
                    overflow: "hidden",
                    userSelect: "none",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                }}
                onMouseMove={!isMobile ? handleMove : undefined}
                onTouchMove={isMobile ? handleMove : undefined}
                onTouchStart={isMobile ? handleMouseDown : undefined}
                onMouseDown={!isMobile ? handleMouseDown : undefined}
            >
                <Image alt={"comparison-1"} skeleton={true} height={height ? height : "80vh"} objectFit={"cover"}
                       src={rightImage}/>
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        width: "100%",
                        height: height ? height : "80vh",
                        margin: "auto",
                        overflow: "hidden",
                        userSelect: "none",
                    }}
                    style={{clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}
                >
                    <Image alt={"comparison-2"} skeleton={true} height={height ? height : "80vh"} objectFit={"cover"}
                           src={leftImage}/>
                </Box>
                <Box sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    background: light ? "white" : "rgba(0,0,0,.5)",
                    width: "0.1rem",
                    left: `calc(${sliderPosition}% - 1px)`
                }}
                >
                    <Box ref={handleRef} sx={{
                        position: "absolute",
                        background: light ? "white" : "#282929",
                        height: "50px",
                        width: "60px",
                        left: -30,
                        borderRadius: "6px",
                        top: "50%",
                        transform: "translate(0,-50%)",
                        color: light ? "black" : "white"
                    }}>
                        <Box className={"handle"} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            gap: .5
                        }}>
                            <NavigateBefore sx={{
                                fontSize: "32px",
                                mr: -.6,
                                stroke: "#ffffff",
                                strokeWidth: .2,
                            }} className={"handle"}/>
                            <NavigateNext sx={{
                                fontSize: "32px",
                                ml: -.6,
                                stroke: "#ffffff",
                                strokeWidth: .2,
                            }} className={"handle"}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ComparisonSlider;