import React, {useEffect, useRef, useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import {Button, Skeleton, Typography} from "@mui/material";
import infoFile from "../../../assets/pdf/1.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFView = () => {
    const [numPages, setNumPages] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(true)
    const pdfViewerRef = useRef(null)
    const testRef = useRef()

    const onDocumentLoadSuccess = ({numPages: nextNumPages}) => setNumPages(nextNumPages)
    const onPageLoadSuccess = () => setLoading(false)
    const goToNextPage = () => setPageNumber((prevPageNumber) => prevPageNumber + 1)
    const goToPreviousPage = () => setPageNumber((prevPageNumber) => prevPageNumber - 1)


    useEffect(() => {
        if (pdfViewerRef.current) pdfViewerRef.current.setAttribute("src", infoFile)
    }, [])

    const placeholder = () => (
        <Skeleton
            sx={{
                background: "grey.500",
                width: "100%",
                height: {
                    xs: "425px",
                    sm: "500px",
                    md: "600px",
                    lg: "625px",
                    xl: "664px",
                },
            }}
            variant="rectangular"
            animation="wave"
        />
    )

    return (
        <Box
            sx={{
                height: {
                    xs: "425px",
                    sm: "500px",
                    md: "600px",
                    lg: "625px",
                    xl: "664px",
                },
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                ref={testRef}
                sx={{
                    flex: "1",
                    position: "relative",
                    background: "rgba(38, 38, 38, .1)",
                    boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
                    overflow: "auto",
                }}
            >
                <Box
                    sx={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <Document
                        file={infoFile}
                        onLoadSuccess={onDocumentLoadSuccess}
                        renderMode="canvas"
                    >
                        <Page
                            key={`page-${pageNumber}`}
                            pageNumber={pageNumber}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            loading={placeholder}
                            onLoadSuccess={onPageLoadSuccess}
                            onRenderError={() => setLoading(false)}
                        />
                    </Document>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    px: 2,
                    py: 1,
                    background: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 50px 0 rgba(0, 0, 0, 0.1)",
                    zIndex: 2,
                    gap: 3
                }}
            >
                <Button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
                    <ChevronLeftIcon sx={{width: 40, height: 40, color: "gray.400"}}/>
                </Button>
                <Typography sx={{fontWeight: 500}}>
                    {pageNumber}/{numPages}
                </Typography>
                <Button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                    <ChevronRightIcon sx={{width: 40, height: 40, color: "gray.400"}}/>
                </Button>
            </Box>
        </Box>
    );
};

export default PDFView;