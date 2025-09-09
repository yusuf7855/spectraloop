import {Box, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Image} from "../../../components/common/Image.jsx";
import {StyledDarkSliderButton} from "../../../components/styled/StyledButtons.jsx";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";
import {mockProducts} from "../../../utils/mockProducts.jsx";

function RecommendedProducts() {
    const [slideConfig, setSlideConfig] = React.useState({
        isBeginning: true,
        isEnd: false,
    })
    const swiperRef = React.useRef()
    const navigate = useNavigate()

    return (
        <Box sx={{my: {xs: 6, md: 8}}}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography sx={{
                    fontSize: {xs: "22px", md: "24px"},
                    fontWeight: "400"
                }}>Önerilen Ürünler</Typography>
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
                            slidesPerView: 3,
                        },
                    }}
                >
                    {
                        mockProducts.map((product, index) => (
                            <SwiperSlide key={index}
                            >
                                <Box sx={{cursor: "pointer"}}
                                     onClick={() => {
                                         navigate(product.link)
                                         //swipe to beginning of page smoothly
                                         window.scrollTo({top: 0, behavior: "smooth"})
                                     }}
                                >
                                    <Image
                                        alt={`recommended-product-image-${index}`}
                                        skeleton={true}
                                        width={"100%"}
                                        sx={{
                                            userDrag: "none",
                                            userSelect: "none",
                                            aspectRatio: "1.5",
                                            mb: 1
                                        }}
                                        objectFit={"cover"}
                                        src={product.img}/>
                                    <Typography
                                        sx={{
                                            mt: 1.5, fontWeight: "300", fontSize: "18px",
                                            textDecoration: "none!important",
                                            color: "black"
                                        }}>{product.title}</Typography>
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Box>
    );
}

export default RecommendedProducts;
