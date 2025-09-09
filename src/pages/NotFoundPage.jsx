import {Box, Button, Stack, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import Layout from "../components/layout/Layout.jsx";
import {StyledDarkButton} from "../components/styled/StyledButtons.jsx";
import React from "react";

export default function NotFoundPage() {
    return (
        <Layout freeLayout={true}>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        background: (theme) => theme.palette.primary.darkMain,
                    }}
                >
                    {
                        <Stack alignItems="center" justifyContent="center">
                            <Typography variant='h1' sx={{
                                color: "rgba(255,255,255,.2)",
                                fontWeight: "bold",
                                fontSize: {xs: "10rem", sm: "16rem", md: "20rem", lg: "25rem", xl: "30rem"},
                                userSelect: "none",
                                position: "absolute",
                            }}>404</Typography>
                            <Typography variant='subtitle2' sx={{
                                color: "rgba(255,255,255,.8)",
                                fontWeight: "600",
                                letterSpacing: 4,
                                fontSize: {xs: "1.15rem", sm: "1.75rem", md: "2rem", lg: "2.5rem", xl: "3rem"},
                                userSelect: "none",
                            }}>SAYFA BULUNAMADI</Typography>
                            <Box component={Link} to={"/"}>
                                <Button sx={{
                                    borderRadius: "400px",
                                    backgroundColor: "white",
                                    color: "black",
                                    px: 4,
                                    py: 1.5,
                                    mt: 3,
                                    transition: ".3s all",
                                    ":hover": {
                                        background: "white",
                                        boxShadow: "0px 0px 50px 10px rgba(255,255,255,0.2)",
                                    }
                                }}>
                                    <Typography sx={{
                                        fontWeight: 500,
                                        textTransform: "none"
                                    }}>Ana Sayfa</Typography>
                                </Button>
                            </Box>
                        </Stack>
                    }
                </Box>
            </Box>
        </Layout>

    )
}