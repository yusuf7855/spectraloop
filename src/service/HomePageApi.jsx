import {get} from "./Api.jsx";

export const postStoreNote = async (value) => {
    const {data} = await get("/api/homepage", value)
    return data
}
