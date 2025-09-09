import {Box, CircularProgress, Skeleton} from "@mui/material";
import {useState} from "react";
import LazyLoad from 'react-lazyload';

export const Image = ({
                          src,
                          height,
                          width,
                          sx,
                          objectFit,
                          skeleton,
                          alt,
                          skeletonBorderRadius,
                          draggable,
                          onClick,
                          className,
                          setParentLoaded,
                          opacityTransition = true
                      }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <Box
            onClick={onClick}
            draggable={draggable === false ? "false" : undefined}
            className={className}
            sx={{
                height: height,
                width: width,
                objectFit: objectFit ? objectFit : "contain",
                overflow: "hidden",
                position: "relative",
                ...sx,
            }}
        >
            <LazyLoad style={{height: "100%", width: "100%"}}>
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => {
                        setLoaded(true);
                        setParentLoaded && setParentLoaded(true);
                    }}
                    onError={() => {
                        setLoaded(true);
                    }}
                    width={"100%"}
                    height={"100%"}
                    style={{
                        objectFit: objectFit ? objectFit : "contain",
                        width: "100%",
                        height: "100%",
                        display: "block",
                        opacity: loaded ? 1 : 0,
                        transition: opacityTransition && "opacity .4s",
                    }}
                />
            </LazyLoad>
            {!loaded && (
                <Box sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%"
                }}>
                    {
                        skeleton ?
                            <Skeleton
                                height={"100%"}
                                width={"100%"}
                                sx={{background: "grey.500", borderRadius: skeletonBorderRadius}}
                                variant="rectangular"
                                animation="wave"
                            />
                            :
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: width,
                                height: height
                            }}>
                                <CircularProgress/>
                            </Box>
                    }
                </Box>
            )}
        </Box>
    );
};