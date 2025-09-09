import {del, get, post, put} from "./Api.jsx";

export const getAllVendorRequests = async () => {
    const {data} = await get("/api/vendor-request/all")
    return data
}

export const getVendorRequest = async (type) => {
    const {data} = await get("/api/vendor-request/" + type)
    return data
}

/**
 * _Updates vendor-request
 */
export const updateVendorRequest = async (value) => {
    const {data} = await put("/api/vendor-request", value)
    return data
}

export const createVendorRequest = async (value) => {
    const {data} = await post("/api/vendor-request", value)
    return data
}

export const deleteVendorRequest = async (type) => {
    const {data} = await del("/api/vendor-request/" + type)
    return data
}