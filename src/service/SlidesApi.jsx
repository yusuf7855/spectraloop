import {BASE_URL, get} from "./Api.jsx";


export async function fetchLandingSlides() {
    const {data} = await get("/api/slider/landing")
    return data
}

export async function fetchComparisonSlider() {
    const {data} = await get("/api/slider/comparison")
    return data
}

export function getLandingSliderImage(slide) {
    return BASE_URL + "api/slider/landing/" + slide.image.id
}

export function getComparisonSliderImage(slide) {
    return BASE_URL + "api/slider/comparison/" + slide.image.id
}

export async function fetchTopBannerSlides() {
    const {data} = await get("/api/slider/top-banner")
    return data
}
