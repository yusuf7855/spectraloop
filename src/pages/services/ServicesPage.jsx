import {Box} from "@mui/material";
import PageHero from "../../components/common/PageHero.jsx";
import ServicesPageList from "./components/ServicesPageList.jsx";

function ServicesPage() {
    return (
        <Box>
            <PageHero
                subTitle={"DÖNÜŞÜMÜNÜZ BAŞLASIN"}
                title={"Tüm Odalar"}
                size={"medium"}
            />
            <ServicesPageList />
        </Box>
    );
}

export default ServicesPage;