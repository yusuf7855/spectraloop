import React, {useMemo, useState} from 'react';
import {Box, Collapse, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {ExpandMore} from "@mui/icons-material";
import {useQuery} from "react-query";
import {getAllProductCategories} from "../../../service/ProductCategoryApi.jsx";

const CategoryItem = (setCategory, category, index, isSub, categoryName, handleClose) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true)
    const handleClick = () => setOpen(!open)

    return <Box key={index} sx={{
        display: isSub && "flex",
        gap: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    }}>
        <Box sx={{
            display: "flex",
            gap: 1,
        }}>
            <Typography onClick={() => {
                setCategory(category)
                navigate(`/urunler/${category.code}`)
                handleClose && handleClose()
            }} sx={{
                fontWeight: categoryName === category.code ? 500 : 300,
                fontSize: "16px",
                cursor: "pointer",
                transition: ".4s color",
                color: categoryName === category.code ? "black" : "rgba(0,0,0,.75)",
                ":hover": {
                    color: categoryName !== category.code && "black"
                }
            }}>{category.name}</Typography>
            {(category.subCategories !== undefined && category.subCategories?.length !== 0) &&
                <ExpandMore sx={{
                    cursor: "pointer",
                    transition: ".45s all",
                    transform: open && "rotate(-180deg)",
                    stroke: "white",
                    strokeWidth: .2
                }} onClick={handleClick}/>}
        </Box>
        {
            (category.subCategories !== undefined && category.subCategories?.length !== 0) && <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{
                    mt: 1,
                    mb: .5,
                    pl: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1
                }}>
                    {category?.subCategories?.map((subCategory, index) => CategoryItem(setCategory, subCategory, index, true, categoryName, handleClose))}
                </Box>
            </Collapse>
        }
    </Box>
}

function CategorySection({handleClose, setCategory}) {
    const {categoryName} = useParams()
    const {data} = useQuery("categories-dto", getAllProductCategories,)

    const mockCategories = useMemo(() => data?.map((category) => {
        return {
            id: category.parent.id,
            name: category.parent.name,
            subCategories: category.children,
            code: category.parent.code
        }
    })
        ?.map((category) => ({
            ...category,
            code: category.code,
            subCategories: category.subCategories !== null ?
                category.subCategories.map((subCategory) => ({...subCategory, code: subCategory.code}))
                : null
        })) || [], [data])

    return (
        <Box>
            <Box sx={{mt: 2, display: "flex", gap: 1, flexDirection: "column"}}>
                {[{
                    code: "tum-urunler",
                    name: "Tüm Ürünler",
                    subCategories: undefined
                }, ...mockCategories]?.map((category, index) => CategoryItem(setCategory, category, index, false, categoryName, handleClose))}
            </Box>
        </Box>
    );
}

export default CategorySection;
