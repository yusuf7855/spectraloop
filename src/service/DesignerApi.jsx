import {del, get, put} from "./Api.jsx";

export const getDesigner = async (id) => {
    const {data} = await get("/api/designer/" + id)
    return data
}

export const getAllDesigners = async () => {
    const {data} = await get("/api/designer/all")
    return data
}

/**
 * _Updates or creates_ a designer
 */
export const updateDesigner = async (designer) => {
    const {data} = await put("/api/designer", designer)
    return data
}

export const deleteSocial = async (id) => {
    const {data} = await del("/api/designer/" + id)
    return data
}