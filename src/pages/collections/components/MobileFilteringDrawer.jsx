import {Box, Divider, Drawer, IconButton, Typography} from "@mui/material";
import CategorySection from "./CategorySection.jsx";
import FilterSection from "./FilterSection.jsx";
import {Close} from "@mui/icons-material";
import {useEffect} from "react";

function MobileFilteringDrawer({
                                   setCategory,
                                   open,
                                   handleClose,
                                   category,
                                   searchFilter,
                                   setFilters,
                                   setSearchFilter
                               }) {

    useEffect(() => {
        if (open) {
            document.getElementsByTagName('html')[0].style.overflowY = "hidden"
        } else document.getElementsByTagName('html')[0].style.overflowY = "unset"
    }, [open])

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            transitionDuration={400}
            anchor={"left"}
            sx={{zIndex: 1500}}
            PaperProps={{
                sx: {
                    px: {xs: 3, md: 6},
                    py: 2,
                    maxWidth: "80%",
                },
            }}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
            }}>
                <Box>
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                        <Typography sx={{
                            fontWeight: "400",
                            fontSize: "18px",
                            letterSpacing: 3,
                            mb: 1
                        }}>FİLTRELE</Typography>
                        <IconButton aria-label="close-filter-drawer" onClick={handleClose}><Close/></IconButton>
                    </Box>
                    <Divider sx={{mt: 2}}/>
                </Box>
                <Box>
                    <Typography sx={{
                        fontWeight: "400",
                        fontSize: "17px",
                        letterSpacing: 3,
                        mb: 1
                    }}>KATEGORİLER</Typography>
                    <CategorySection setCategory={setCategory} handleClose={handleClose}/>
                </Box>
                <Box>
                    <Typography sx={{
                        fontWeight: "400",
                        fontSize: "17px",
                        letterSpacing: 3,
                    }}>FİLTRELER</Typography>
                    <FilterSection isMobile={true} handleClose={handleClose} setParentFilters={setFilters}
                                   searchFilter={searchFilter}
                                   setSearchFilter={setSearchFilter} category={category}/>
                </Box>
            </Box>
        </Drawer>
    );
}

export default MobileFilteringDrawer;
