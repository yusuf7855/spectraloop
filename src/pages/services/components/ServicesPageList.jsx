import {Grid} from "@mui/material";
import {services} from "../../../utils/services.jsx";
import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import ServicesPageItem from "./ServicesPageItem.jsx";

function ServicesPageList() {
    return (
        <StyledContainer sx={{pb: {xs: 5, md: 10}}}>
            <Grid container spacing={{xs: 2, lg: 3}} alignItems={"stretch"}>
                {services?.slice(1, services.length).map((service, index) => <ServicesPageItem key={index} service={service} index={index}/>)}
            </Grid>
        </StyledContainer>
    );
}

export default ServicesPageList;