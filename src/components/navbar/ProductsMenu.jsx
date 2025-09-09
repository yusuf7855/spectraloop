import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import RevealInViewAnimation from "../../animations/RevealInViewAnimation.jsx";
import {Link} from "react-router-dom";

function ProductsMenu(props) {
    const menuItems = [
        {
            title: "Tüm Ürünler",
            route: "/urunler/tum-urunler",
        },
        {
            title: "3D Yazıcı",
            route: "/urunler/3d-yazici"
        },
        {
            title: "Filament",
            route: "/urunler/filament"
        },
        {
            title: "Reçine",
            route: "/urunler/recine"
        },
        {
            title: "3D Yazıcı Aksesuarları",
            route: "/urunler/3d-yazici-aksesuarlari"
        }
    ]

    return (
        <Box sx={{p: 3}}>
            <Grid container spacing={2}>
                {
                    menuItems.map((item, index) => <Grid item key={index} xs={6}>
                        <Button component={Link} to={item.route} sx={{
                            width: "100%",
                            boxShadow: "0px 0px 50px 0px rgba(0,0,0,0.1)",
                            py: 3,
                            borderRadius: 3,
                            color: "black",
                            ":hover": {
                                backgroundColor: (theme) => theme.palette.primary.main,
                                color: "white"
                            }
                        }}>
                            <Typography sx={{
                                textTransform: "none",
                                fontWeight: 500,
                                fontSize: ".95rem"
                            }}>{item.title}</Typography>
                        </Button>

                    </Grid>)
                }
            </Grid>
        </Box>
    );
}

export default ProductsMenu;