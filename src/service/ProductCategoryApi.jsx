import {BASE_URL, del, get, put} from "./Api.jsx";

export const getAllProductCategories = async () => {
    const {data} = await get("/api/category/all")
    return data
}

/**
 * Tüm alt kategorileri getirir.
 */
export const getChildProductCategories = async (parentId) => {
    const {data} = await get("/api/category/all/byParent/" + parentId)
    return data
}

/**
 * Tüm üst kategorileri getirir.
 *
 */
export const getParentProductCategories = async () => {
    const {data} = await get("/api/category/all/parent")
    return data
}


export function getCategoryImage(image) {
    return BASE_URL + "api/category/file/" + image.id
}

export const getProductCategory = async (type) => {
    const {data} = await get("/api/category/" + type)
    return data
}

/**
 * _Updates or creates_ a product CategorySection
 */
export const updateProductCategory = async (value) => {
    const {data} = await put("/api/category", value)
    return data
}

export const deleteProductCategory = async (type) => {
    const {data} = await del("/api/category/" + type)
    return data
}
