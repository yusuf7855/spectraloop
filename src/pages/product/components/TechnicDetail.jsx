import {Box, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import React, {useState} from "react";
import {Image} from "../../../components/common/Image.jsx";
import {StyledDarkSliderButton} from "../../../components/styled/StyledButtons.jsx";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";
import StyledLightbox from "../../../components/common/StyledLightbox.jsx";

function TechnicDetail() {
    const [fullSizePictureOpen, setFullSizePictureOpen] = useState(false)
    const [startIndex, setStartIndex] = useState(0)
    const [slideConfig, setSlideConfig] = React.useState({
        isBeginning: true,
        isEnd: false,
    })

    const swiperRef = React.useRef()

    const imageList = [
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    ]

    return (
        <Box sx={{my: {xs: 6, md: 8}}}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography sx={{
                    fontSize: {xs:"22px",md:"24px"},
                    fontWeight: "400"
                }}>Teknik Çizim</Typography>
                <Box sx={{display: "flex", gap: 1}}>
                    <StyledDarkSliderButton aria-label="technic-prev" sx={{scale: {xs: ".9", md: "1"}}}
                                            disabled={slideConfig.isBeginning}
                                            onClick={() => swiperRef.current?.slidePrev()}><NavigateBefore
                        sx={{scale: {md: "1.2"}}}/></StyledDarkSliderButton>
                    <StyledDarkSliderButton aria-label="technic-next" sx={{scale: {xs: ".9", md: "1"}}}
                                            disabled={slideConfig.isEnd}
                                            onClick={() => swiperRef.current?.slideNext()}><NavigateNext
                        sx={{scale: {md: "1.2"}}}/></StyledDarkSliderButton>
                </Box>
            </Box>

            <Box sx={{
                mt: 3,
                ".swiper": {
                    overflow: "hidden"
                },
            }}>
                <Swiper
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={20}
                    grabCursor={true}
                    initialSlide={0}
                    onSlideChange={(params) => {
                        setSlideConfig({isBeginning: params.isBeginning, isEnd: params.isEnd})
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        650: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        imageList.map((image, index) => (
                            <SwiperSlide onClick={() => {
                                setStartIndex(index)
                                setFullSizePictureOpen(true)
                            }} key={index}>
                                <Box sx={{cursor: "pointer"}}>
                                    <Image
                                        alt={`technical-image-${index}`}
                                        skeleton={true}
                                        width={"100%"}
                                        sx={{
                                            userDrag: "none",
                                            userSelect: "none",
                                            aspectRatio: "1.5"
                                        }}
                                        objectFit={"cover"}
                                        src={image}/>
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
            <StyledLightbox imageList={imageList} fullSizePictureOpen={fullSizePictureOpen}
                            setFullSizePictureOpen={setFullSizePictureOpen}
                            startIndex={startIndex} setStartIndex={setStartIndex}/>
        </Box>
    );
}

export default TechnicDetail;
