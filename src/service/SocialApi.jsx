import {del, get, put} from "./Api.jsx";

export const getSocial = async (type) => {
    const {data} = await get("/api/social/" + type)
    return data
}

/**
 * _Updates or creates_ a social
 */
export const updateSocial = async (value) => {
    const {data} = await put("/api/social", value)
    return data
}

export const deleteSocial = async (type) => {
    const {data} = await del("/api/social/" + type)
    return data
}