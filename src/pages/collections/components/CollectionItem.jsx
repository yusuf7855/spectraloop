import {Box, Typography} from "@mui/material";
import {Image} from "../../../components/common/Image.jsx";
import {Link} from "react-router-dom";
import {getProductImage} from "../../../service/ProductApi.jsx";

function CollectionItem({img, imgHover, title, isGrid, id, route}) {
    return (<Box sx={{cursor: "pointer"}}>
        <Box
            component={Link}
            to={`/urun/${route}`}
            sx={{
                position: "relative",
                maxWidth: "100%",
                "&:hover": {
                    "& .image-hover": {
                        opacity: {lg: "1!important"}
                    }
                }
            }}>
            <Image
                alt={`product-${id}`}
                src={img && getProductImage(img)}
                sx={{
                    filter: "brightness(85%)",
                    userDrag: "none",
                    aspectRatio: isGrid ? 1.5 : 2.5,
                    userSelect: "none"
                }}
                width={"100%"}
                skeleton={true}
                objectFit={"cover"}
            />
            <Box className="image-hover" sx={{
                position: "absolute",
                top: "0",
                right: "0",
                left: "0",
                bottom: "0",
                objectFit: "contain",
                opacity: "0",
                transition: "opacity .3s",
            }}>
                <Image
                    alt={`product-hover-${id}`}
                    src={imgHover && getProductImage(imgHover)}
                    skeleton={true}
                    sx={{
                        filter: "brightness(85%)",
                        userDrag: "none",
                        aspectRatio: isGrid ? 1.5 : 2.5,
                        userSelect: "none"
                    }}
                    width={"100%"}
                    objectFit={"cover"}
                />
            </Box>
        </Box>
        <Box sx={{display: "flex"}}>
            <Typography component={Link} to={"/"} sx={{
                color: "black",
                fontSize: "16px",
                width: "100%",
                mt: 1,
                textAlign: "center",
                fontWeight: "300",
                textDecoration: "none"
            }}>{title}</Typography>
        </Box>

    </Box>);
}

export default CollectionItem;
