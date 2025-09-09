import React from 'react';
import {Box, Breadcrumbs, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function ProductBreadcrumbsSection({data}) {

    function handleClick(event) {
        event.preventDefault()
    }

    const StyledLink = ({title, route, sx}) => <Box
        component={Link}
        to={route}
        sx={{textDecoration: "none"}}
    >
        <Typography sx={{
            color: "rgba(0,0,0,.7)",
            fontWeight: 300,
            fontSize: {xs: "14px", lg: "15px"},
            transition: ".2s all",
            ":hover": {
                color: "rgba(0,0,0,.9)",
            }, ...sx
        }}>
            {title}
        </Typography>
    </Box>

    return (<Box role="presentation" onClick={handleClick} sx={{
        ".MuiBreadcrumbs-separator": {
            transform: "scale(.9)", color: "rgba(0,0,0,.75)"
        }
    }}>
        <Breadcrumbs separator=">" aria-label="breadcrumb">
            <StyledLink route={"/urunler/tum-urunler"} title={"Ürünler"}/>
            {data?.category.parent &&
                <StyledLink route={`/urunler/${data.category.parent.code}`}
                            title={data.category.parent?.name || ""}/>
            }
            <StyledLink route={`/urunler/${data.category.code}`} title={data?.category.name} sx={{
                color: "rgba(0,0,0,.85)", fontWeight: 400, fontSize: {xs: "14px", lg: "15px"}
            }}/>
        </Breadcrumbs>
    </Box>);
}

export default ProductBreadcrumbsSection;
