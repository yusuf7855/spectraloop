import {del, get, put} from "./Api.jsx";

export const getAllProjects = async () => {
    const {data} = await get("/api/project/all")
    return data
}

export const getProject = async (type) => {
    const {data} = await get("/api/project/" + type)
    return data
}

/**
 * _Updates or creates_ a project
 */
export const updateProject = async (value) => {
    const {data} = await put("/api/project", value)
    return data
}

export const deleteProject = async (type) => {
    const {data} = await del("/api/project/" + type)
    return data
}