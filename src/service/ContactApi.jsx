import {del, get, put} from "./Api.jsx";

export const getPrimaryContact = async (value) => {
    const {data} = await get("/api/contact/primary", value)
    return data
}

/**
 * _Updates or creates_ a primary contact
 */
export const updatePrimaryContact = async (value) => {
    const {data} = await put("/api/contact/primary", value)
    return data
}

export const deletePrimaryContact = async () => {
    const {data} = await del("/api/contact/primary")
    return data
}