import {useState} from 'react';
import {Box, Collapse, Grid, List, Pagination, PaginationItem, Typography} from "@mui/material";
import {StyledContainer} from "../../components/styled/StyledComponents.jsx";
import CollectionItem from "./components/CollectionItem.jsx";
import {Image} from "../../components/common/Image.jsx";
import {ExpandMore, SentimentVeryDissatisfied, Tune} from "@mui/icons-material";
import CategorySection from "./components/CategorySection.jsx";
import {AnimatePresence, motion} from "framer-motion";
import FilterSection from "./components/FilterSection.jsx";
import AnimateChangeInHeight from "../../animations/AnimateChangeInHeight.jsx";
import {useQuery} from "react-query";
import {GridListSkeleton, ListSkeleton} from "../../utils/utils.jsx";
import StyledSelectMenu from "../../components/styled/StyledSelectMenu.jsx";
import MobileFilteringDrawer from "./components/MobileFilteringDrawer.jsx";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import ChangeView from "./components/ChangeView.jsx";
import {getAllProductCategories} from "../../service/ProductCategoryApi.jsx";
import {getAllProducts, getProductByCategory} from "../../service/ProductApi.jsx";

function CollectionsPage() {
    const location = useLocation()
    const {categoryName} = useParams()
    const navigate = useNavigate()

    const query = new URLSearchParams(location.search)
    const page = parseInt(query.get('sayfa') || '1', 10)

    const [categoryImage, setCategoryImage] = useState("https://www.dovi.com.tr/Banner/www.dovi.com.tr_1_KJ0X43HZBUIA_grado__wood_vip_grubu.jpg")

    const [sort, setSort] = useState("")

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [catOpen, setCatOpen] = useState(true)
    const [filterOpen, setFilterOpen] = useState(true)
    const [isGrid, setIsGrid] = useState(true)
    const [searchFilter, setSearchFilter] = useState("")
    const [filters, setFilters] = useState([])

    const {data, isLoading, isFetched} = useQuery("categories-dto", getAllProductCategories, {
        onSuccess: (data) => {
            setCategory(checkParams(data))
        }
    })

    const {
        data: products,
        isLoading: productsLoading
    } = useQuery(["products", categoryName, sort, searchFilter, filters, page],
        categoryName === "tum-urunler" ? getAllProducts : getProductByCategory)

    const [category, setCategory] = useState(isFetched ? checkParams(data) : null)

    if (category) {
        document.title = `${category?.name || category?.parent?.name} ${categoryName && "-"} Dovi Mobilya`
    }

    console.log(category)

    function checkParams(data) {
        let tempCategory = null
        if (categoryName === "tum-urunler") return {name: "Tüm Ürünler"}
        for (let i = 0; i < data.length; i++) {
            const datum = data[i];

            if (datum.parent.code === categoryName) {
                tempCategory = datum
                break
            }
            for (let j = 0; j < datum.children.length; j++) {
                const child = datum.children[j];
                if (child.code === categoryName) {
                    tempCategory = child
                    break
                }
            }
        }

        if (tempCategory === null && categoryName !== "tum-urunler") {
            navigate("/*")
        }
        return tempCategory
    }

    const handleCatClick = () => setCatOpen(!catOpen)
    const handleFilterClick = () => setFilterOpen(!filterOpen)

    return (
        <AnimateChangeInHeight disabled={products?.length < 6}>
            <Box sx={{position: "relative"}}>
                <Image alt={"collection-image"}
                       sx={{
                           filter: "brightness(75%)",
                           userDrag: "none",
                           userSelect: "none",
                       }}
                       objectFit={"cover"}
                       skeleton={true}
                       height={{xs: "20vh", sm: "25vh", md: "30vh", lg: "35vh", xl: "40vh"}}
                       src={categoryImage}/>
                <Typography variant="h2" sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    color: "white",
                    fontSize: {xs: "28px", sm: "36px", md: "48px"},
                    letterSpacing: 5,
                    wordSpacing: 5,
                    fontWeight: 300,
                    textAlign: "center",
                    userSelect: "none",
                    lineHeight: 1.425
                }}>{category?.name?.toUpperCase() || category?.parent?.name?.toUpperCase()}</Typography>
            </Box>
            <StyledContainer py={{xs: 3, md: 4}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} lg={2.4} display={{xs: "none", lg: "block"}}>
                        <Box sx={{
                            position: {xs: "relative", lg: "sticky"},
                            top: {lg: "96px"},
                        }}>
                            <Box onClick={handleCatClick} sx={{
                                display: "flex",
                                gap: 1,
                                cursor: "pointer",
                                justifyContent: {lg: "space-between"},
                            }}>
                                <Typography sx={{
                                    fontWeight: "400",
                                    fontSize: "17px",
                                    letterSpacing: 3,
                                }}>KATEGORİLER</Typography>
                                <ExpandMore sx={{
                                    cursor: "pointer",
                                    transition: ".45s all",
                                    transform: catOpen && "rotate(-180deg)",
                                    stroke: "white",
                                    strokeWidth: .6
                                }}/>
                            </Box>
                            <Collapse in={catOpen} timeout="auto" unmountOnExit>
                                <List component="div">
                                    {!isLoading && <CategorySection setCategory={setCategory}/>}
                                </List>
                            </Collapse>
                            <Box onClick={handleFilterClick} sx={{
                                display: "flex",
                                gap: 1,
                                cursor: "pointer",
                                justifyContent: {lg: "space-between"},
                                mt: 6
                            }}>
                                <Typography sx={{
                                    fontWeight: "400",
                                    fontSize: "17px",
                                    letterSpacing: 3,
                                }}>FİLTRELER</Typography>
                                <ExpandMore sx={{
                                    cursor: "pointer",
                                    transition: ".45s all",
                                    transform: filterOpen && "rotate(-180deg)",
                                    stroke: "white",
                                    strokeWidth: .6
                                }}/>
                            </Box>
                            <Collapse in={filterOpen} timeout="auto" unmountOnExit>
                                <FilterSection setParentFilters={setFilters} searchFilter={searchFilter}
                                               setSearchFilter={setSearchFilter} category={category}/>
                            </Collapse>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={9.6}>
                        <Grid container alignItems={"stretch"} justifyContent={{xs: "stretch", md: "space-between"}}
                              sx={{mb: {xs: 3, md: 4}}} spacing={{xs: 3, md: 0, lg: 0}}>
                            <Grid item display={{xs: "none", md: "block", lg: "block"}}>
                                <Box sx={{
                                    display: {xs: "none", md: "flex"},
                                    gap: 1,
                                    color: "rgba(0,0,0,.8)",
                                }}>
                                    <ChangeView isGrid={isGrid} setIsGrid={setIsGrid}/>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={5} display={{xs: "block", lg: "none"}}>
                                <Box onClick={() => setDrawerOpen(true)} sx={{
                                    display: "flex",
                                    background: "white",
                                    zIndex: 5,
                                    width: "100%",
                                    top: 64,
                                    borderRadius: "8px",
                                    padding: 1,
                                    p: 1.5,
                                    py: 2,
                                    cursor: "pointer",
                                    border: "0!important",
                                    boxShadow: "0px 0px 50px 10px rgba(0,0,0,0.1)",
                                    transition: ".4s all",
                                    ":hover": {
                                        boxShadow: "0px 0px 50px 20px rgba(0,0,0,0.1)",
                                    },
                                    gap: 1.5
                                }}>
                                    <Tune sx={{
                                        color: "rgba(0,0,0,.8)",
                                        stroke: "#ffffff",
                                        strokeWidth: .9,
                                        transition: ".4s all",
                                        ":hover": {
                                            strokeWidth: .7
                                        }
                                    }}/>
                                    <Typography sx={{fontWeight: "300"}}>Filtrele</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={5} lg={3}>
                                <StyledSelectMenu defaultOption={"en-son"} setValue={setSort} options={
                                    [
                                        {value: "a-z", name: "Alfabetik A-Z"},
                                        {value: "z-a", name: "Alfabetik Z-A"},
                                        {value: "en-son", name: "En Son Eklenen"},
                                    ]
                                }/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={4} sx={{height: "100%"}}>
                            {
                                productsLoading
                                    ?
                                    <>
                                        <GridListSkeleton
                                            xs={12}
                                            md={6}
                                            lg={6}
                                            text={true}
                                            textSx={{height: "24px", mt: 1, mx: "auto"}}
                                            sx={{
                                                aspectRatio: isGrid ? 1.5 : 2.5,
                                                width: "100%",
                                                height: "calc(100% - 32px)"
                                            }}
                                            listsToRender={6}/>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            width: "100%",
                                            mt: 4,
                                            ml: 4,
                                            gap: 1
                                        }}>
                                            <ListSkeleton listsToRender={6} sx={{height: "32px", width: "32px"}}
                                                          variant={"circular"} animation={"pulse"}/>
                                        </Box>
                                    </>
                                    :
                                    <AnimatePresence>
                                        {products?.map((product) => (
                                            <Grid
                                                item
                                                component={motion.div}
                                                xs={12}
                                                md={isGrid ? 6 : 12}
                                                lg={isGrid ? 6 : 12}
                                                key={product.id}
                                                layout
                                                animate={{opacity: 1}}
                                                initial={{opacity: 0}}
                                                exit={{opacity: 0}}
                                                transition={{duration: 0.4, delay: 0}}
                                            >
                                                <CollectionItem
                                                    id={product.id}
                                                    isGrid={isGrid}
                                                    route={product.code}
                                                    key={product.id}
                                                    title={product.name}
                                                    img={product.images[0]}
                                                    imgHover={product.images[1]}/>
                                            </Grid>
                                        ))}
                                        {
                                            products?.length === 0 ?
                                                <Box sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: "100%",
                                                    height: "100%",
                                                    minHeight: {xs: "50vh", lg: "20vh"},
                                                    flexDirection: "column",
                                                    ml: 4,
                                                    mt: -2
                                                }}>
                                                    <SentimentVeryDissatisfied sx={{
                                                        color: "rgba(0,0,0,.1)",
                                                        fontSize: "36px"
                                                    }}/>
                                                    <Typography sx={{
                                                        color: "rgba(0,0,0,.2)",
                                                        fontSize: "18px"
                                                    }}>Aradığınız Ürünü Bulamadık.</Typography>
                                                </Box>
                                                :
                                                <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                                    <Pagination
                                                        page={page}
                                                        count={10}
                                                        sx={{mt: "auto", mb: 7}}
                                                        renderItem={(item) => (
                                                            <PaginationItem
                                                                component={Link}
                                                                to={`/urunler/${category?.code}/${item.page === 1 ? '' : `?sayfa=${item.page}`}`}
                                                                {...item}
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                        }
                                    </AnimatePresence>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </StyledContainer>
            <MobileFilteringDrawer
                setCategory={setCategory}
                open={drawerOpen}
                handleClose={() => setDrawerOpen(false)}
                setFilters={setFilters}
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                category={category}
            />
        </AnimateChangeInHeight>
    );
}

export default CollectionsPage;
