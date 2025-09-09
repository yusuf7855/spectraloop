import {del, get, put} from "./Api.jsx";

export const getExpo = async (id) => {
    const {data} = await get("/api/expo/" + id)
    return data
}

export const getAllExpos = async () => {
    const {data} = await get("/api/expo/all")
    return data
}

/**
 * _Updates or creates_ an expo. If the expo has an id, it will be updated, otherwise a new expo will be created.
 */
export const updateExpo = async (expo) => {
    const {data} = await put("/api/expo", expo)
    return data
}

export const deleteExpo = async (id) => {
    const {data} = await del("/api/expo/" + id)
    return data
}