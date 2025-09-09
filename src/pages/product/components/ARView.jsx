import React, {useEffect} from "react";
import {Box, Skeleton} from "@mui/material";
import {getProductImage} from "../../../service/ProductApi.jsx";

export function ARView({
                           selectedVariant,
                           selectedDimension,
                           setSelectedDimension,
                           selectedGlb,
                           setSelectedGlb,
                           isLoading,
                           setIsLoading
                       }) {
    const ref = React.useRef()

    useEffect(() => {
        ref.current.variantName = selectedGlb?.color
    }, [selectedGlb])

    useEffect(() => {
        ref.current.addEventListener('load', () => {
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        setSelectedDimension(selectedVariant?.dimensions[0])
        const selected = selectedVariant?.dimensions[0].glbs[0]
        const selectedObject = {id: selected.id, color: selected.colors[0], glb: selected.glb}
        setSelectedGlb(selectedObject)
    }, [selectedVariant])

    useEffect(() => {
        const selected = selectedDimension.glbs[0]
        const selectedObject = {id: selected.id, color: selected.colors[0], glb: selected.glb}

        setSelectedGlb(selectedObject)
    }, [selectedDimension])


    return <>
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    aspectRatio: {xs: 1.25, sm: 2, lg: 1.25},
                    width: "100%",
                    "model-viewer": {
                        "--progress-bar-color": "transparent"
                    },
                }}>
                {
                    isLoading && <>
                        <Skeleton
                            height={"100%"}
                            width={"100%"}
                            sx={{background: "grey.500"}}
                            variant="rectangular"
                            animation="wave"
                        />
                        <Skeleton
                            width={"100%"}
                            sx={{
                                background: "grey.500",
                                mt: 1,
                                height: "64px"
                            }}
                            variant="rectangular"
                            animation="wave"
                        />
                    </>
                }
                <model-viewer
                    id="model-viewer"
                    ref={ref}
                    style={{
                        height: isLoading ? 0 : "100%",
                        width: "100%",
                        visibility: isLoading ? "hidden" : "visible",
                        transition: "visibility 0s",
                        transitionDelay: "0.0001s"
                    }}
                    src={getProductImage(selectedGlb.glb)}
                    alt="A 3D model of an astronaut"
                    shadow-intensity="1"
                    camera-controls
                    auto-rotate
                    ar
                    loading="eager"
                />
            </Box>
        </Box>
    </>;
}

