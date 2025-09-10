import {Box, Grid, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {services} from "../../utils/services.jsx";
import {rooms} from "../../utils/rooms.jsx";
import {StyledContainer} from "../../components/styled/StyledComponents.jsx";
import ServiceImageGallery from "./components/ServiceImageGallery.jsx";
import ServicePageDescription from "./components/ServicePageDescription.jsx";

function ServicePage() {
    const {serviceRoute} = useParams();

    // Önce services'ten, sonra rooms'tan ara (rooms detaylı resimlere sahip)
    let service = services.find((item) => item.route === serviceRoute);

    // Eğer services'te bulunamazsa rooms'tan kontrol et
    if (!service) {
        service = rooms.find((item) => item.route === serviceRoute);
    }

    // Oda bulunamadıysa varsayılan değerler
    if (!service) {
        return (
            <StyledContainer sx={{py: 4, textAlign: "center"}}>
                <Typography variant="h4">Oda bulunamadı</Typography>
            </StyledContainer>
        );
    }

    document.title = `${service.title} - Spectraloop`

    return (
        <Box>
            <StyledContainer sx={{py: {xs: 2, md: 4}, mb: {xs: 4, md: 6}}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} mlg={6}>
                        <Box sx={{
                            boxShadow: "0px 0px 16px 0 rgba(0,0,0,0.1)",
                            borderRadius: 2,
                            p: 2,
                            width: '100%',
                            height: {
                                xs: "400px",
                                sm: "500px",
                                md: "600px",
                                mlg: "70vh",
                            },
                            display: 'flex'
                        }}>
                            <ServiceImageGallery imageList={service.images} id={service.id}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} mlg={6}>
                        <Box sx={{
                            boxShadow: "0px 0px 16px 0 rgba(0,0,0,0.1)",
                            borderRadius: 2,
                            p: 2,
                            width: '100%',
                            height: {
                                xs: "auto",
                                mlg: "70vh",
                            },
                            maxHeight: {
                                mlg: "70vh"
                            },
                            overflowY: "auto"
                        }}>
                            <ServicePageDescription item={service}/>
                        </Box>
                    </Grid>
                </Grid>
            </StyledContainer>
        </Box>
    );
}

export default ServicePage;