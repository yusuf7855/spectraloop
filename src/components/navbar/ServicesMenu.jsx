import {Box, Grid, Typography} from "@mui/material";
import {services} from "../../utils/services.jsx";
import {Image} from "../common/Image.jsx";
import {Link} from "react-router-dom";
import {StyledDarkButton} from "../styled/StyledButtons.jsx";

function ServicesMenu({handleClose}) {
    return (
        <Box sx={{p: 3, width: "100%"}}>
            <Grid container spacing={2.5}>
                {services.slice(1, 10).map((item, index) => <Grid item key={index} xs={4}>
                    <Box
                        component={Link}
                        to={`odalar/${item.route}`}
                        onClick={handleClose}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: .5,
                            boxShadow: "0px 0px 50px 0px rgba(0,0,0,0.1)",
                            borderRadius: 3,
                            cursor: "pointer",
                            transition: ".3s all",
                            overflow: "hidden",
                            textDecoration: "none",
                            color: "black",
                            height: "100%",
                            ":hover": {
                                boxShadow: "0px 0px 50px 5px rgba(0,0,0,0.2)",
                                ".service-image": {
                                    transform: "scale(1.1)"
                                }
                            }
                        }}>
                        <Box sx={{
                            borderRadius: 3,
                            overflow: "hidden"
                        }}>
                            <Image
                                skeleton={true}
                                className={"service-image"}
                                sx={{
                                    userDrag: "none",
                                    userSelect: "none",
                                    width: "100%",
                                    aspectRatio: 2,
                                    borderRadius: 3,
                                    transition: ".3s transform"
                                }}
                                objectFit={"cover"}
                                skeletonBorderRadius={3}
                                src={item.images[0]}/>
                        </Box>
                        <Typography sx={{
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: ".95rem",
                            textAlign: "center",
                            color: "black",
                            p: 1
                        }}>{item.title}</Typography>
                    </Box>
                </Grid>)
                }
            </Grid>
            <Grid item xs={12}>
                <StyledDarkButton component={Link} to={"odalar"} onClick={handleClose} sx={{
                    mt: 2.5,
                    width: "100%",
                    py: 2,
                    textTransform: "none",
                }}>
                    Tüm Odaları Görüntüle
                </StyledDarkButton>
            </Grid>
        </Box>
    );
}

export default ServicesMenu;
