import {Box, Grid, styled, Typography} from "@mui/material";
import {Handyman, Straighten} from "@mui/icons-material";

function ProductDetails() {
    return (
        <Grid container spacing={3} sx={{display: "flex", mt: {xs: 0, md: 1}}}>
            <Grid item xs={12} sm={6} lg={12} lgx={6}>
                <StyledBox>
                    <Box sx={{display: "flex", gap: 1}}>
                        <Straighten sx={{transform: "rotate(-45deg)"}}/>
                        <Typography>Boyut</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between", mt: 3}}>
                        <Typography sx={{color: "rgba(0,0,0,.6)"}}>Uzunluk</Typography>
                        <Typography>180 cm</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography sx={{color: "rgba(0,0,0,.6)"}}>Genişlik</Typography>
                        <Typography>180 cm</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography sx={{color: "rgba(0,0,0,.6)"}}>Yükseklik</Typography>
                        <Typography>180 cm</Typography>
                    </Box>
                </StyledBox>
            </Grid>
            <Grid item xs={12} sm={6} lg={12} lgx={6}>
                <StyledBox>
                    <Box sx={{display: "flex", gap: 1}}>
                        <Handyman/>
                        <Typography>Malzeme</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between", mt: 3}}>
                        <Typography sx={{color: "rgba(0,0,0,.6)"}}>Ayak</Typography>
                        <Typography>Metal</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography sx={{color: "rgba(0,0,0,.6)"}}>Tahta</Typography>
                        <Typography>MDF</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography sx={{color: "rgba(0,0,0,.6)"}}>Renk</Typography>
                        <Typography>Beyaz</Typography>
                    </Box>
                </StyledBox>
            </Grid>
        </Grid>
    );
}

const StyledBox = styled(Box)(() => ({
    flex: 1,
    border: "1px solid rgba(0,0,0,.075)",
    padding: 12,
    borderRadius: "8px"
}))
export default ProductDetails;