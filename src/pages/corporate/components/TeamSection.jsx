import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {Box, Typography} from "@mui/material";
import {StyledCard, StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import {StyledDarkSliderButton} from "../../../components/styled/StyledButtons.jsx";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {Image} from "../../../components/common/Image.jsx";
import ismetImage from "/src/assets/images/team/null.jpg"


function TeamSection() {
    const [slideConfig, setSlideConfig] = React.useState({
        isBeginning: true,
        isEnd: false,
    })
    const swiperRef = React.useRef()
    const teamList = [
        {
            name: "Samet Şahin",
            img: ismetImage,
            role: "Yönetici Ortak / İş Geliştirme"
        },
        {
            name: "Abdulkadir Elaldı",
            img: ismetImage,
            role: "Yönetici Ortak / Operasyon"
        },
        {
            name: "Ömer Faruk Çelik",
            img: ismetImage,
            role: "Yönetici Ortak / Grafik Tasarım"
        },
        {
            name: "Yusuf Kerim Sarıtaş",
            img: ismetImage,
            role: "Yazılım Geliştirme Lideri"
        },
        {
            name: "Emir Süğümlü",
            img: ismetImage,
            role: "Video Prodiksiyon Uzmanı"
        },
    ];

    return (
        <Box sx={{
            py: {xs: 5, md: 10},
            backgroundImage: "linear-gradient(90deg, #f8f8f8 0%, #fafafa 99%)",
        }}>
            <StyledContainer>
                <RevealInViewAnimation size={20} transition={{duration: 0.6}}>
                    <Box mb={{xs: 3, lg: 6}} sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: {md: "flex-end"},
                        flexDirection: {xs: "column", md: "row"},
                        gap: 4
                    }}>
                        <Box>
                            <Typography variant={"h2"} sx={{
                                letterSpacing: 3,
                                fontWeight: 600,
                                fontSize: {xs: "14px", md: "16px"},
                                color: "orange"
                            }}>EKİBİMİZ</Typography>
                            <Typography variant={"h3"} sx={{
                                mt: 2,
                                fontSize: {xs: "24px", md: "32px"},
                                fontWeight: 800,
                                letterSpacing: 1.5,
                            }}>
                                BAŞARIYA GİDEN YOLDA EKİBİMİZLE KEŞFE ÇIKIN
                            </Typography>
                        </Box>
                        <Box sx={{display: "flex", gap: 1, justifyContent: "flex-end"}}>
                            <StyledDarkSliderButton aria-label="team-before" disabled={slideConfig.isBeginning}
                                                    onClick={() => swiperRef.current?.slidePrev()}><NavigateBefore
                                sx={{scale: {md: "1.2"}}}/></StyledDarkSliderButton>
                            <StyledDarkSliderButton aria-label="team-next" disabled={slideConfig.isEnd}
                                                    onClick={() => swiperRef.current?.slideNext()}><NavigateNext
                                sx={{scale: {md: "1.2"}}}/></StyledDarkSliderButton>
                        </Box>
                    </Box>
                </RevealInViewAnimation>
                <RevealInViewAnimation size={20} transition={{duration: 0.6, delay: .3}}>
                    <Box sx={{
                        ".swiper": {
                            borderRadius: 2,
                            py: "8px",
                            px: "3px"
                        },
                        ".swiper-slide": {
                            height: "auto",
                            overflow: "hidden",
                            borderRadius: 2,
                        }
                    }}>
                        <Swiper
                            onBeforeInit={(swiper) => {
                                setSlideConfig({isBeginning: swiper.isBeginning, isEnd: swiper.isEnd})
                                swiperRef.current = swiper;
                            }}
                            onAfterInit={(swiper) => {
                                setSlideConfig({isBeginning: swiper.isBeginning, isEnd: swiper.isEnd})
                            }}
                            spaceBetween={16}
                            grabCursor={true}
                            modules={[Navigation]}
                            onSlideChange={(params) => {
                                setSlideConfig({isBeginning: params.isBeginning, isEnd: params.isEnd})
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                600: {
                                    slidesPerView: 3,
                                },
                                900: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {
                                teamList.map((member, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            alt={`team-${index}`}
                                            sx={{borderRadius: 2}}
                                            skeleton={true} skeletonBorderRadius={2}
                                            height={{xs: "240px", md: "280px", lg: "400px"}}
                                            objectFit={"cover"}
                                            src={member.img}/>
                                        <Box sx={{
                                            borderRadius: 4,
                                            height: "100%",
                                            py: 1,
                                            pl: .5
                                        }}>
                                            <Typography sx={{
                                                fontWeight: "600",
                                                fontSize: "18px",
                                            }}>{member.name}</Typography>
                                            <Typography sx={{
                                                letterSpacing: 1.5,
                                                fontWeight: 600,
                                                fontSize: "12px",
                                                color: "rgba(0,0,0,.6)",
                                                mt: .5,
                                            }}>{member.role}</Typography>
                                        </Box>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Box>
                </RevealInViewAnimation>
            </StyledContainer>
        </Box>
    );
}

export default TeamSection;