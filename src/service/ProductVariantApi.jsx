import {del, get, put} from "./Api.jsx";

export const getAllVariants = async () => {
    const {data} = await get("/api/variant/all")
    return data
}

export const getVariant = async (type) => {
    const {data} = await get("/api/variant/" + type)
    return data
}

/**
 * _Updates or creates_ a variant
 */
export const updateVariant = async (value) => {
    const {data} = await put("/api/variant", value)
    return data
}

export const deleteVariant = async (type) => {
    const {data} = await del("/api/variant/" + type)
    return data
}