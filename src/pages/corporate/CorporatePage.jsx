import { Box } from "@mui/material";
import AboutUsWithNumbers from "./components/AboutUsWithNumbers.jsx";
import OurFeatures from "./components/OurFeatures.jsx";
import AboutUs from "./components/AboutUs.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import TeamSection from "./components/TeamSection.jsx";
import ContactUsSection from "../../components/common/ContactUsSection.jsx";
import PageHero from "../../components/common/PageHero.jsx";

function CorporatePage() {
    document.title = "Kurumsal - Perlas Otel";

    return (
        <Box>
            <PageHero
                subTitle={"SAMSUN ATAKUM'DA KONFORUN VE LÜKSÜN BİRLEŞTİĞİ NOKTA"}
                title={"KURUMSAL"}
                description={"Perlas Otel; modern konaklama anlayışı, özel hizmet kalitesi, konforlu odalar ve eşsiz deniz manzarası ile unutulmaz konaklama deneyimi sunar."}
                size={"medium"}
            />
            <AboutUs />
            <OurFeatures />
            <ContactUsSection
                subTitle={"REZERVASYON VE BİLGİ"}
                title={"UNUTULMAZ KONAKLAMA DENEYİMİNİZ İÇİN BİZİMLE İLETİŞİME GEÇİN"}
                descTop={
                    "Perlas Otel olarak her misafirimizin kendine özgü ihtiyaçları olduğuna inanıyoruz. Bu yüzden hizmetlerimizi sizin konfor beklentilerinize göre kişiselleştiriyoruz."
                }
                descBottom={
                    "Lüks odalar, 24 saat room service, spa hizmetleri, ücretsiz Wi-Fi ve otopark gibi olanaklarımızla Samsun'daki konaklama deneyiminizi unutulmaz kılıyoruz."
                }
            />
            <AboutUsWithNumbers />
            <WhyChooseUs />

        </Box>
    );
}

export default CorporatePage;