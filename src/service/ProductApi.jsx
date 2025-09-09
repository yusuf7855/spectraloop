import {BASE_URL, del, get, put} from "./Api.jsx";

export const getAllProducts = async () => {
    const {data} = await get("/api/product/all")
    return data
}

export const getProduct = async ({queryKey}) => {
    const {data} = await get("/api/product/" + queryKey[1])
    return data
}

export const getProductByCategory = async ({queryKey}) => {
    const {data} = await get("/api/product/category/" + queryKey[1])
    return data
}

export const getProductImage = (image) => {
    return BASE_URL + "api/product/file/" + image.id
}

/**
 * _Updates or creates_ a product
 */
export const updateProduct = async (value) => {
    const {data} = await put("/api/product", value)
    return data
}

export const deleteProduct = async (type) => {
    const {data} = await del("/api/product/" + type)
    return data
}
