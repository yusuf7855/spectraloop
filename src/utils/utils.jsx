import {Grid, Skeleton} from "@mui/material";

export const trToLatinText = (text) => {
    const trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o'
    };
    for (const key in trMap) {
        text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key])
    }

    return text.replace(/[^-a-zA-Z0-9\s]+/ig, '')
        .replace(/\s/gi, "-")
        .replace(/[-]+/gi, "-")
        .toLowerCase()
}

export const flattenArray = (arr, param) => {
    return arr ? arr.reduce((r, i) => [...r, i, ...flattenArray(i[param])], []) : []
}

export const ListSkeleton = ({listsToRender, sx, variant, animation}) => {
    return (
        <>
            {Array(listsToRender)
                .fill(1)
                .map((card, index) => (
                    <Skeleton key={index} variant={variant} animation={animation} sx={{...sx}}/>
                ))}
        </>
    )
}

export const GridListSkeleton = ({listsToRender, sx, xs, sm, md, lg, mlg, xl, text, textSx}) => {
    return (
        <>
            {Array(listsToRender)
                .fill(1)
                .map((card, index) => (
                    <Grid item key={index} xs={xs} sm={sm} md={md} lg={lg} mlg={mlg} xl={xl} >
                        <Skeleton variant="rectangular" animation="wave" sx={{...sx}}/>
                        {text && <Skeleton variant="rectangular" animation="wave" sx={{...textSx}}/>}
                    </Grid>
                ))}
        </>
    )
}