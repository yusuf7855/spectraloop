import {StyledContainer} from "../../components/styled/StyledComponents.jsx";
import {useState} from "react";
import {ProductView} from "./components/ProductView.jsx";
import ChangeModeTabs from "./components/ChangeModeTabs.jsx";
import AnimateChangeInHeight from "../../animations/AnimateChangeInHeight.jsx";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getProduct} from "../../service/ProductApi.jsx";

function ProductDetailPage() {
    const [selected, setSelected] = useState("GALERİ")
    const {productCode} = useParams()

    const {data, isLoading} = useQuery(["product", productCode], getProduct)

    return (
        <StyledContainer sx={{py: {xs: 2, md: 4}}}>
            <AnimateChangeInHeight duration={.3}>
                <ChangeModeTabs isArDisabled={data?.variants.length === 0} selected={selected} setSelected={setSelected}
                                isLoading={isLoading}/>
                <ProductView selected={selected} data={data} isLoading={isLoading}/>
            </AnimateChangeInHeight>
        </StyledContainer>
    );
}

export default ProductDetailPage;
