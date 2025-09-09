import {del, get, put} from "./Api.jsx";

export const getAllStores = async () => {
    const {data} = await get("/api/store/all")
    return data
}

export const getStore = async (type) => {
    const {data} = await get("/api/store/" + type)
    return data
}

/**
 * _Updates or creates_ a store
 */
export const updateStore = async (value) => {
    const {data} = await put("/api/store", value)
    return data
}

export const deleteStore = async (type) => {
    const {data} = await del("/api/store/" + type)
    return data
}