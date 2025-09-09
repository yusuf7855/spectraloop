import {del, get, put} from "./Api.jsx";

export const getAllProductCategories = async () => {
    const {data} = await get("/api/dimension/all")
    return data
}

export const getProductDimension = async (type) => {
    const {data} = await get("/api/dimension/" + type)
    return data
}

/**
 * _Updates or creates_ a product Dimension
 */
export const updateProductDimension = async (value) => {
    const {data} = await put("/api/dimension", value)
    return data
}

export const deleteProductDimension = async (type) => {
    const {data} = await del("/api/dimension/" + type)
    return data
}