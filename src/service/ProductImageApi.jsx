import {del, get, put} from "./Api.jsx";

export const getAllImages = async () => {
    const {data} = await get("/api/image/all")
    return data
}

export const getImage = async (type) => {
    const {data} = await get("/api/image/" + type)
    return data
}

/**
 * _Updates or creates_ an image
 */
export const updateImage = async (value) => {
    const {data} = await put("/api/image", value)
    return data
}

export const deleteImage = async (type) => {
    const {data} = await del("/api/image/" + type)
    return data
}