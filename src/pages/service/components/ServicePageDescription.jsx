import {Box, Typography, Chip, Divider, Button} from "@mui/material";
import {People, SquareFoot, Wifi, LocalOffer, Phone} from "@mui/icons-material";

function ServicePageDescription({item}) {
    // Fiyatı formatla
    const formatPrice = (price) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <Box sx={{height: "100%", display: "flex", flexDirection: "column"}}>
            <Typography sx={{
                color: "black",
                fontSize: "24px",
                fontWeight: 600
            }}>
                {item.title}
            </Typography>

            {/* Temel Bilgiler */}
            <Box sx={{
                display: "flex",
                gap: 1.5,
                mt: 2,
                mb: 3,
                flexWrap: "wrap"
            }}>
                <Chip
                    icon={<People sx={{fontSize: "18px !important"}} />}
                    label={item.capacity}
                    sx={{
                        backgroundColor: "#F5E6E0",
                        color: "#edb472",
                        fontWeight: 600,
                        fontSize: "14px"
                    }}
                />
                <Chip
                    icon={<SquareFoot sx={{fontSize: "18px !important"}} />}
                    label={item.size}
                    sx={{
                        backgroundColor: "#F5E6E0",
                        color: "#edb472",
                        fontWeight: 600,
                        fontSize: "14px"
                    }}
                />
                <Chip
                    label={item.availability ? "Müsait" : "Dolu"}
                    sx={{
                        backgroundColor: item.availability ? "#E8F5E8" : "#FFE6E6",
                        color: item.availability ? "#2E7D2E" : "#D32F2F",
                        fontWeight: 600,
                        fontSize: "14px"
                    }}
                />
            </Box>

            {/* Fiyat Bilgileri */}
            {item.price && (
                <Box sx={{
                    backgroundColor: "#F8F9FA",
                    borderRadius: 2,
                    p: 2.5,
                    mb: 3,
                    border: "1px solid #E9ECEF"
                }}>
                    <Typography sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#edb472",
                        mb: 1.5
                    }}>
                        Fiyat Bilgileri
                    </Typography>
                    <Box sx={{display: "flex", gap: 3, flexWrap: "wrap"}}>
                        <Box>
                            <Typography sx={{fontSize: "14px", color: "rgba(0,0,0,0.6)"}}>
                                Günlük
                            </Typography>
                            <Typography sx={{fontSize: "18px", fontWeight: 600, color: "#edb472"}}>
                                {formatPrice(item.price.daily)}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{fontSize: "14px", color: "rgba(0,0,0,0.6)"}}>
                                Haftalık
                            </Typography>
                            <Typography sx={{fontSize: "18px", fontWeight: 600, color: "#edb472"}}>
                                {formatPrice(item.price.weekly)}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{fontSize: "14px", color: "rgba(0,0,0,0.6)"}}>
                                Aylık
                            </Typography>
                            <Typography sx={{fontSize: "18px", fontWeight: 600, color: "#edb472"}}>
                                {formatPrice(item.price.monthly)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}

            {/* Açıklama */}
            {item.descriptionLong.split("\n").map((p, i) => (
                <Typography key={i} sx={{
                    color: "rgba(0, 0, 0,.725)",
                    lineHeight: "28px",
                    mt: i === 0 ? 0 : 1.75,
                    mb: 2
                }}>
                    {p}
                </Typography>
            ))}

            <Divider sx={{my: 3}} />

            {/* Olanaklar */}
            {item.amenities && (
                <Box sx={{mb: 3}}>
                    <Typography sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#edb472",
                        mb: 2
                    }}>
                        Oda Olanakları
                    </Typography>
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: 1
                    }}>
                        {item.amenities.map((amenity, index) => (
                            <Box key={index} sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                py: 0.5
                            }}>
                                <Box sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    backgroundColor: "#edb472"
                                }} />
                                <Typography sx={{
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.8)"
                                }}>
                                    {amenity}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}

            {/* Rezervasyon Butonu */}
            <Box sx={{mt: "auto", pt: 3}}>
                <Button
                    variant="contained"
                    fullWidth
                    disabled={!item.availability}
                    startIcon={<Phone />}
                    sx={{
                        py: 2,
                        backgroundColor: "#edb472",
                        "&:hover": {
                            backgroundColor: "#B86A52"
                        },
                        "&:disabled": {
                            backgroundColor: "#E0E0E0",
                            color: "#9E9E9E"
                        },
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: 600
                    }}
                    onClick={() => {
                        // Telefon numarasını arayabilir veya rezervasyon formunu açabilir
                        window.open("tel:+905396385955", "_self");
                    }}
                >
                    {item.availability ? "Rezervasyon Yap" : "Bu Oda Şu Anda Dolu"}
                </Button>

                {item.availability && (
                    <Typography sx={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "rgba(0,0,0,0.6)",
                        mt: 1
                    }}>
                        Rezervasyon için bizi arayın: +90 539 638 59 55
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default ServicePageDescription;