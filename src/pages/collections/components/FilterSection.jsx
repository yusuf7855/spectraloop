import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import {East} from "@mui/icons-material";
import {StyledInput} from "../../../components/styled/StyledComponents.jsx";
import {StyledDarkButton} from "../../../components/styled/StyledButtons.jsx";
import StyledCheckbox from "../../../components/styled/StyledCheckbox.jsx";

function FilterSection({category, setSearchFilter, setParentFilters, isMobile, handleClose}) {
    const [innerSearchFilter, setInnerSearchFilter] = React.useState("")
    const mockFilters = [
        {id: 1, name: "Filtre1"},
        {id: 2, name: "Filtre2"},
        {id: 3, name: "Filtre3"},
        {id: 4, name: "Filtre4"},
        {id: 5, name: "Filtre5"},
    ]

    //Checked cannot be always false need to implement a solution
    //Will get checked info comparing route and filter data
    const [filters, setFilters] = useState(mockFilters.map((filter) => ({...filter, checked: false})))
    const handleFilterChange = (filter) => {
        const temp = filters.map((element) => {
            if (element.id === filter.id) return {...element, checked: !element.checked}
            else return element
        })

        setFilters(temp)
        !isMobile && setParentFilters(temp.flatMap(o => o.checked ? [o.name] : []))
    }

    const handleFilterSubmit = () => setParentFilters(filters.flatMap(o => o.checked ? [o.name] : []))

    return (
        <Box sx={{mt: 3, display: "flex", flexDirection: "column"}}>
            {
                mockFilters.map((filter, index) => (
                    <Box key={index} sx={{display: "flex", alignItems: "center", gap: 1}}>
                        <StyledCheckbox index={index} onChange={() => handleFilterChange(filter)}/>
                        <Typography sx={{
                            color: "rgba(0,0,0,.75)",
                            fontWeight: 300,
                            mb: .6,
                        }}>{filter.name}</Typography>
                    </Box>
                ))
            }
            {
                isMobile && <StyledDarkButton aria-label="submit-filter" onClick={() => {
                    handleFilterSubmit()
                    handleClose()
                }} sx={{borderRadius: 2, mt: 2, py: 1.25}}>
                    <Typography sx={{
                        fontWeight: "300",
                        letterSpacing: 2.5,
                    }}>FİLTRELE</Typography>
                </StyledDarkButton>
            }
            <Box sx={{mt: 6}}>
                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "17px",
                    letterSpacing: 3,
                }}>KELİMEYLE FİLTRELE</Typography>
                <Box sx={{display: "flex", mt: 2}}>
                    <StyledInput
                        fullWidth
                        type="text"
                        id="search"
                        name="search"
                        size={"small"}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderBottomLeftRadius: "6px!important",
                                borderTopLeftRadius: "6px!important",
                            },

                        }}
                        placeholder={"Aklınızda ne var?"}
                        value={innerSearchFilter}
                        onChange={(e) => setInnerSearchFilter(e.target.value)}
                    />
                    <StyledDarkButton aria-label="submit-search-filter" onClick={() => setSearchFilter(innerSearchFilter)} sx={{
                        borderRadius: "0px",
                        borderTopRightRadius: "6px",
                        borderBottomRightRadius: "6px",
                        ":hover, :active": {
                            paddingLeft: 2
                        }
                    }}><East/></StyledDarkButton>
                </Box>

            </Box>
        </Box>
    );
}

export default FilterSection;