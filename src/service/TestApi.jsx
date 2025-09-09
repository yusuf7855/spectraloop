import {get} from "./Api.jsx";

export const getTest = async ({queryKey}) => {


    const category = queryKey[2].id === 1 ? "laptops" : null
    const link = category === null ? "https://dummyjson.com/products?limit=6" : `https://dummyjson.com/products/category/${category}?limit=4`
    const {data} = await get(link)
    return data
}
