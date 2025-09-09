import {BASE_URL, get} from "./Api.jsx";

export const getAllLayoutPlan = async () => {
    const {data} = await get("/api/settlement-plan")
    return data
}

export const getLayoutPlanImage = (file) => {
    return BASE_URL + "api/settlement-plan/image/" + file.id
}