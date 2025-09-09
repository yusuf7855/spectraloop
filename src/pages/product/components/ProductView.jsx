import {Box, Button, colors, Divider, Grid, Skeleton, Typography} from "@mui/material";
import ProductGallerySection from "./ProductGallerySection.jsx";
import ProductBreadcrumbsSection from "./ProductBreadcrumbsSection.jsx";
import {StyledDarkButton} from "../../../components/styled/StyledButtons.jsx";
import {DesignServices} from "@mui/icons-material";
import {ARView} from "./ARView.jsx";
import ProductDetails from "./ProductDetails.jsx";
import TechnicDetail from "./TechnicDetail.jsx";
import RecommendedProducts from "./RecommendedProducts.jsx";
import {getProductImage} from "../../../service/ProductApi.jsx";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import RevealAnimation from "../../../animations/RevealAnimation.jsx";

export function ProductView({selected, data, isLoading}) {
    const [selectedVariant, setSelectedVariant] = React.useState(!isLoading && data?.variants[0])
    const [selectedDimension, setSelectedDimension] = useState(!isLoading && data?.variants[0]?.dimensions[0])
    const [selectedGlb, setSelectedGlb] = useState(!isLoading && data?.variants[0]?.dimensions[0]?.glbs[0])
    const [isArLoading, setIsArLoading] = React.useState(true)

    useEffect(() => {
        if (data?.variants && data.variants.length > 0) {
            setSelectedVariant(data.variants[0]);
            setSelectedDimension(data.variants[0]?.dimensions[0]);
            const selected = data.variants[0]?.dimensions[0]?.glbs[0]
            const selectedObject = {id: selected.id, color: selected.colors[0], glb: selected.glb}

            setSelectedGlb(selectedObject);
        }
    }, [data]);

    const glbList = []

    selectedDimension?.glbs?.forEach((item, index) => {
        if (item && item.colors) {
            item.colors.forEach((color, i) => {
                glbList.push({
                    color: color,
                    id: item.id + index + i,
                    glb: item.glb
                })
            });
        }
    });

    const imageList = data?.images.map((image) => {
        return getProductImage(image)
    }) || []

    return (<>
        <Grid container spacing={{sx: 4, lg: 8}}>
            {
                isLoading
                    ?
                    <>
                        <Grid item xs={12} lg={7}>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <Skeleton
                                    sx={{
                                        background: "grey.500",
                                        width: "100%",
                                        aspectRatio: {xs: 1.25, sm: 2, lg: 1.5},
                                        height: "100%"
                                    }}
                                    variant="rectangular"
                                    animation="wave"
                                />
                                <Box sx={{display: "flex", gap: "25px", mt: {xs: 2, lg: 4}}}>
                                    <Skeleton
                                        sx={{
                                            background: "grey.500",
                                            width: "100%",
                                            aspectRatio: {xs: 1.5, sm: 2, lg: 2},
                                            height: "100%"
                                        }}
                                        variant="rectangular"
                                        animation="wave"
                                    />
                                    <Skeleton
                                        sx={{
                                            background: "grey.500",
                                            width: "100%",
                                            aspectRatio: {xs: 1.5, sm: 2, lg: 2},
                                            height: "100%"
                                        }}
                                        variant="rectangular"
                                        animation="wave"
                                    />
                                    <Skeleton
                                        sx={{
                                            background: "grey.500",
                                            width: "100%",
                                            aspectRatio: {xs: 1.5, sm: 2, lg: 2},
                                            height: "100%"
                                        }}
                                        variant="rectangular"
                                        animation="wave"
                                    />
                                    <Skeleton
                                        sx={{
                                            background: "grey.500",
                                            width: "100%",
                                            aspectRatio: {xs: 1.5, sm: 2, lg: 2},
                                            height: "100%"
                                        }}
                                        variant="rectangular"
                                        animation="wave"
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={5} sx={{mt: {xs: 4, lg: 0}}}>
                            <Box sx={{display: "flex", flexDirection: "column", height: "100%"}}>
                                <Skeleton
                                    sx={{
                                        background: "grey.500",
                                        width: "100%",
                                        height: "100%",
                                        aspectRatio: {xs: 1.5, lg: 0}
                                    }}
                                    variant="rectangular"
                                    animation="wave"
                                />
                                <Skeleton
                                    sx={{
                                        background: "grey.500",
                                        width: "100%",
                                        height: "100%",
                                        mt: {xs: 3, md: 4},
                                    }}
                                    variant="rectangular"
                                    animation="wave"
                                />
                                <Skeleton
                                    sx={{
                                        background: "grey.500",
                                        width: "100%",
                                        height: "100%",
                                        mt: {xs: 3, md: 4},
                                    }}
                                    variant="rectangular"
                                    animation="wave"
                                />
                            </Box>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12} lg={7} sx={{overflow: "hidden"}}>
                            {selected === "AR" ? <ARView
                                    selectedVariant={selectedVariant}
                                    selectedDimension={selectedDimension}
                                    setSelectedDimension={setSelectedDimension}
                                    selectedGlb={selectedGlb}
                                    setSelectedGlb={setSelectedGlb}
                                    isLoading={isArLoading}
                                    setIsLoading={setIsArLoading}
                                /> :
                                <ProductGallerySection imageList={imageList}/>}
                        </Grid>
                        <Grid item xs={12} lg={5} sx={{mt: {xs: 4, lg: 0}}}>
                            <ProductBreadcrumbsSection data={data}/>
                            <Typography sx={{
                                mt: 1,
                                fontSize: {xs: "32px", lg: "36px"},
                                fontWeight: 300,
                            }}>{data?.name}</Typography>
                            <RevealAnimation open={selected === "AR"} duration={.2} size={0.1}>
                                {
                                    (!isArLoading && selected === "AR") &&
                                    <Box sx={{mt: 3}}>
                                        <Box sx={{
                                            display: "flex",
                                            gap: .5,
                                            p: 1,
                                            borderRadius: 2,
                                            boxShadow: "0px 0px 50px 2px rgba(0,0,0,0.1)",
                                            mb: 1,
                                            width: "100%"
                                        }}>
                                            {getButtons({
                                                data: data.variants,
                                                setSelected: setSelectedVariant,
                                                selected: selectedVariant,
                                                label: "name",
                                                selectedLabel: "id",
                                                key: "variant"
                                            })}
                                        </Box>
                                        <Box sx={{
                                            display: "flex",
                                            gap: .5,
                                            p: 1,
                                            borderRadius: 2,
                                            boxShadow: "0px 0px 50px 2px rgba(0,0,0,0.1)",
                                            mb: 1,
                                            width: "100%"
                                        }}>
                                            {getButtons({
                                                data: selectedVariant.dimensions,
                                                setSelected: setSelectedDimension,
                                                selected: selectedDimension,
                                                label: "dimension",
                                                selectedLabel: "id",
                                                key: "dimension"
                                            })}
                                        </Box>
                                        <Box sx={{
                                            display: "flex",
                                            gap: .5,
                                            p: 1,
                                            borderRadius: 2,
                                            boxShadow: "0px 0px 50px 2px rgba(0,0,0,0.1)",
                                            mb: 1,
                                            width: "100%"
                                        }}>
                                            {getButtons({
                                                data: glbList,
                                                setSelected: setSelectedGlb,
                                                selected: selectedGlb,
                                                label: "color",
                                                selectedLabel: "id",
                                                key: "colors"
                                            })}
                                        </Box>
                                    </Box>
                                }
                            </RevealAnimation>

                            <RevealAnimation open={selected !== "AR"} duration={.2} size={0.1}>
                                <Typography sx={{
                                    mt: 2,
                                    fontSize: {xs: "13px", lg: "14px"},
                                    fontWeight: 300,
                                    color: "rgba(0,0,0,.75)",
                                    lineHeight: 1.6
                                }}>
                                    {data?.description}
                                </Typography>
                                <ProductDetails/>
                                <StyledDarkButton
                                    fullWidth
                                    sx={{
                                        mt: {xs: 3, md: 4},
                                        borderRadius: 1.5,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.75,
                                        py: 1.75,
                                        transition: ".3s all",
                                        ":hover": {
                                            boxShadow: "0 0 50px 10px rgba(0,0,0,0.1);"
                                        }
                                    }}>
                                    <DesignServices sx={{transform: "scale(1.25)"}}/>
                                    <Typography sx={{letterSpacing: 3.5, fontWeight: 300}}>Tasarım
                                        Randevusu</Typography>
                                </StyledDarkButton>
                            </RevealAnimation>

                        </Grid>
                    </>
            }
        </Grid>
        <Divider sx={{mt: {xs: 6, md: 8}}}/>
        <TechnicDetail/>
        <Divider sx={{mt: {xs: 6, md: 8}}}/>
        <RecommendedProducts/>
    </>)
}

const getButtons = ({data, setSelected, selected, label, selectedLabel, key}) => {
    return <Box sx={{width: "100%", maxHeight: "72px", overflow: "hidden"}}>
        {
            data?.map((tab, index) => (
                <Button
                    key={index}
                    onClick={
                        () => setSelected(tab)
                    }
                    sx={{
                        WebkitTapHighlightColor: "transparent",
                        ":hover": {
                            color: (selected && selected[selectedLabel] === tab[selectedLabel]) ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.8)",
                            backgroundColor: "transparent"
                        },
                        color: (selected && selected[selectedLabel] === tab[selectedLabel]) ? "white" : "black",
                        position: "relative",
                        py: 1.5,
                        px: 1.6,
                        height: "100%",
                        width: `calc(${100 / data.length}%)`,
                        zIndex: "20",
                        transition: ".5s all",
                        textTransform: "none",
                        "&& .MuiTouchRipple-child": {
                            backgroundColor: "transparent"
                        },
                    }}
                >
                    {
                        (selected && selected[selectedLabel] === tab[selectedLabel]) && (
                            <motion.span
                                layoutId={key}
                                style={{
                                    borderRadius: 8,
                                    position: "absolute",
                                    inset: 0,
                                    zIndex: 10,
                                    background: "rgb(40,40,40)"
                                }}
                                transition={{type: "spring", duration: 0.425}}
                            />
                        )
                    }
                    <Box sx={{display: "flex", gap: .75, zIndex: 11}}>
                        <Typography sx={{
                            zIndex: 30,
                            fontSize: "16px",
                            letterSpacing: 1.75,
                            fontWeight: "300"
                        }}>

                            {fuckingLabels[tab[label]] ? fuckingLabels[tab[label]] : tab[label]}
                        </Typography>
                    </Box>
                </Button>
            ))
        }
    </Box>
}

const fuckingLabels = {
    "Atlantik Cam": "Atlantik Çam",
    "beyaz": "Beyaz",
    "barok": "Barok",
    "antrasit gri": "Antrasit Gri",
    "Marbella Kirazi": "Marb. Kirazı"
}
