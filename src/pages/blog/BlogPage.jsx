import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button, Chip } from "@mui/material";
import { StyledContainer } from "../../components/styled/StyledComponents.jsx";
import { Link } from "react-router-dom";
import { Image } from "../../components/common/Image.jsx";
import RevealInViewAnimation from "../../animations/RevealInViewAnimation.jsx";

// Blog görselleri import
import samsunGezilecekYerler from "../../assets/images/blog/samsun.webp";
import samsunTarihi from "../../assets/images/blog/tarih.webp";
import samsunKonaklama from "../../assets/images/blog/otel.jpg";
import samsunMutfagi from "../../assets/images/blog/yemek.jpg";

// Blog yazıları için örnek veri
const blogPosts = [
    {
        id: 1,
        title: "Samsun'un En Güzel Gezilecek Yerleri",
        excerpt: "Samsun'da mutlaka görmeniz gereken tarihi ve doğal güzellikleri keşfedin. Amisos Tepesi'nden Ladik Gölü'ne kadar...",
        content: `Samsun, Karadeniz'in incisi olarak bilinen ve hem tarihi hem de doğal güzellikleriyle ziyaretçilerini büyüleyen bir şehirdir. 

**Amisos Tepesi ve Arkeoloji Müzesi**
Şehrin en önemli simgelerinden biri olan Amisos Tepesi, antik dönemden kalma izleri barındırır. Tepenin zirvesinde yer alan Arkeoloji Müzesi, bölgenin zengin tarihini gözler önüne serer.

**Bandırma Vapuru Müzesi**
Mustafa Kemal Atatürk'ün 19 Mayıs 1919'da Samsun'a geldiği tarihi gemi olan Bandırma Vapuru, artık bir müze olarak hizmet vermektedir.

**Atakum Sahili**
Kilometrelerce uzanan kumsalı ve modern tesisleriyle Atakum, hem yerel halk hem de turistlerin vazgeçilmez adresidir.

**Ladik Gölü**
Samsun merkezine yaklaşık 100 km uzaklıkta bulunan Ladik Gölü, doğa severlerin favorisidir. Özellikle nilüfer çiçekleri açtığında büyüleyici bir manzara sunar.

**Amazon Köyü (Terme)**
Efsanevi Amazon kadın savaşçılarının yaşadığı söylenen bu bölge, tarihi ve mitolojik açıdan büyük önem taşır.`,
        image: samsunGezilecekYerler,
        category: "Gezilecek Yerler",
        date: "15 Mart 2024",
        readTime: "5 dk",
        slug: "samsun-gezilecek-yerler"
    },
    {
        id: 2,
        title: "Samsun'un Tarihi: Antik Çağlardan Günümüze",
        excerpt: "Binlerce yıllık geçmişe sahip Samsun'un tarihi yolculuğu. Amisos'tan günümüze kadar yaşanan önemli olaylar...",
        content: `Samsun, tarihi M.Ö. 8. yüzyıla kadar uzanan köklü bir geçmişe sahiptir.

**Antik Dönem - Amisos**
Şehir, antik çağda Amisos adıyla biliniyordu. Grek kolonistler tarafından kurulmuş olan bu antik kent, önemli bir ticaret merkeziydi.

**Roma ve Bizans Dönemi**
Roma İmparatorluğu döneminde Amisos, bölgenin en önemli limanlarından biri haline geldi. Bizans döneminde de stratejik önemini korudu.

**Osmanlı Dönemi**
Osmanlı İmparatorluğu döneminde Samsun, Karadeniz ticaretinin merkezi konumundaydı. Tütün ve tahıl ihracatında önemli rol oynadı.

**Kurtuluş Savaşı ve Cumhuriyet**
19 Mayıs 1919'da Mustafa Kemal Atatürk'ün Samsun'a çıkışı, Türk Kurtuluş Savaşı'nın başlangıcı olarak kabul edilir. Bu nedenle şehir, "Kurtuluş'un Başladığı Şehir" olarak anılır.

**Modern Samsun**
Cumhuriyet döneminde hızla gelişen Samsun, günümüzde Karadeniz'in en önemli şehirlerinden biri haline gelmiştir.`,
        image: samsunTarihi,
        category: "Tarih",
        date: "10 Mart 2024",
        readTime: "8 dk",
        slug: "samsun-tarihi"
    },
    {
        id: 3,
        title: "Samsun'da Nerede Kalınır? Konaklama Rehberi",
        excerpt: "Samsun'da konaklama seçenekleri ve en iyi otel önerileri. Perlas Otel'in konforlu odalarından butik otellere...",
        content: `Samsun'da konaklama konusunda birçok seçeneğiniz bulunmaktadır.

**Atakum Bölgesi**
Denize yakın konumu ve modern tesisleriyle Atakum, en popüler konaklama bölgesidir. Perlas Otel de bu bölgede yer almaktadır.

**Şehir Merkezi**
İş seyahatleri için ideal olan şehir merkezi, ulaşım açısından avantajlıdır.

**Sahil Şeridi**
Deniz manzaralı odalar ve yürüyüş imkanları sunan sahil şeridindeki oteller, tatil için mükemmeldir.

**Perlas Otel Avantajları**
- Denize yürüme mesafesi
- Modern ve konforlu odalar
- 24 saat room service
- Ücretsiz Wi-Fi ve otopark
- Profesyonel güvenlik hizmetleri`,
        image: samsunKonaklama,
        category: "Konaklama",
        date: "5 Mart 2024",
        readTime: "6 dk",
        slug: "samsun-konaklama-rehberi"
    },
    {
        id: 4,
        title: "Samsun Mutfağı: Yöresel Lezzetler",
        excerpt: "Karadeniz mutfağının önemli temsilcisi Samsun'un benzersiz yemekleri. Pideden Terme fasulyesine...",
        content: `Samsun mutfağı, Karadeniz'in zengin lezzetlerini en iyi şekilde yansıtır.

**Samsun Pidesi**
Türkiye'nin en ünlü pidelerinden biri olan Samsun pidesi, ince hamuru ve özel tereyağıyla meşhurdur.

**Terme Fasulyesi**
Terme ilçesinde yetiştirilen bu özel fasulye çeşidi, lezzeti ve kalitesiyle ünlüdür.

**Karadeniz Balıkları**
Hamsi, palamut, kalkan gibi taze balıklar Samsun mutfağının vazgeçilmezleridir.

**Mısır Ekmeği**
Yöresel mısır unundan yapılan bu ekmek, özellikle balık yemekleriyle mükemmel uyum sağlar.

**Laz Böreği**
Muhallebili ve çıtır hamurlu bu tatlı, Samsun'un en sevilen tatlılarından biridir.`,
        image: samsunMutfagi,
        category: "Gastronomi",
        date: "1 Mart 2024",
        readTime: "4 dk",
        slug: "samsun-mutfagi"
    }
];

function BlogPage() {
    document.title = "Blog - Perlas Otel";

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                background: "linear-gradient(135deg, #edb472 0%, #B8695A 100%)",
                color: "white",
                py: { xs: 6, md: 8 },
                textAlign: "center"
            }}>
                <StyledContainer>
                    <RevealInViewAnimation>
                        <Typography variant="h2" sx={{
                            fontSize: { xs: "2rem", md: "3rem" },
                            fontWeight: 700,
                            mb: 2
                        }}>
                            Blog
                        </Typography>
                        <Typography variant="h6" sx={{
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            fontWeight: 300,
                            opacity: 0.9,
                            maxWidth: "600px",
                            mx: "auto"
                        }}>
                            Samsun'un güzelliklerini keşfedin, tarihi öğrenin ve seyahat deneyiminizi zenginleştirin
                        </Typography>
                    </RevealInViewAnimation>
                </StyledContainer>
            </Box>

            {/* Blog Posts */}
            <StyledContainer sx={{ py: { xs: 4, md: 6 } }}>
                <Grid container spacing={4}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} md={6} lg={4} key={post.id}>
                            <RevealInViewAnimation delay={index * 0.1}>
                                <Card sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0px 8px 30px rgba(0,0,0,0.15)"
                                    }
                                }}>
                                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                                        <Image
                                            sx={{
                                                height: 200,
                                                width: "100%",
                                                objectFit: "cover",
                                                transition: "transform 0.3s ease",
                                                "&:hover": {
                                                    transform: "scale(1.05)"
                                                }
                                            }}
                                            src={post.image}
                                            alt={post.title}
                                            skeleton={true}
                                            skeletonHeight={200}
                                        />
                                        <Chip
                                            label={post.category}
                                            sx={{
                                                position: "absolute",
                                                top: 12,
                                                right: 12,
                                                bgcolor: "#edb472",
                                                color: "white",
                                                fontWeight: 500
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        p: 3
                                    }}>
                                        <Typography variant="h6" sx={{
                                            fontWeight: 600,
                                            mb: 1,
                                            color: "#333",
                                            lineHeight: 1.3
                                        }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{
                                            color: "text.secondary",
                                            mb: 2,
                                            flexGrow: 1,
                                            lineHeight: 1.6
                                        }}>
                                            {post.excerpt}
                                        </Typography>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            mb: 2
                                        }}>
                                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                                {post.date}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                                {post.readTime} okuma
                                            </Typography>
                                        </Box>
                                        <Button
                                            component={Link}
                                            to={`/blog/${post.slug}`}
                                            variant="outlined"
                                            sx={{
                                                borderColor: "#edb472",
                                                color: "#edb472",
                                                textTransform: "none",
                                                fontWeight: 500,
                                                "&:hover": {
                                                    bgcolor: "#edb472",
                                                    color: "white"
                                                }
                                            }}
                                        >
                                            Devamını Oku
                                        </Button>
                                    </CardContent>
                                </Card>
                            </RevealInViewAnimation>
                        </Grid>
                    ))}
                </Grid>
            </StyledContainer>
        </Box>
    );
}

export default BlogPage;