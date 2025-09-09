import React from 'react';
import { Box, Typography, Chip, Breadcrumbs, Button, Grid, Card, CardContent } from "@mui/material";
import { StyledContainer } from "../../components/styled/StyledComponents.jsx";
import { Link, useParams } from "react-router-dom";
import RevealInViewAnimation from "../../animations/RevealInViewAnimation.jsx";
import { ArrowBack, AccessTime, Category } from "@mui/icons-material";

// Blog yazıları verisi (BlogPage.jsx ile aynı)
const blogPosts = [
    {
        id: 1,
        title: "Samsun'un En Güzel Gezilecek Yerleri",
        excerpt: "Samsun'da mutlaka görmeniz gereken tarihi ve doğal güzellikleri keşfedin. Amisos Tepesi'nden Ladik Gölü'ne kadar...",
        content: `Samsun, Karadeniz'in incisi olarak bilinen ve hem tarihi hem de doğal güzellikleriyle ziyaretçilerini büyüleyen bir şehirdir. 

**Amisos Tepesi ve Arkeoloji Müzesi**

Şehrin en önemli simgelerinden biri olan Amisos Tepesi, antik dönemden kalma izleri barındırır. Tepenin zirvesinde yer alan Arkeoloji Müzesi, bölgenin zengin tarihini gözler önüne serer. Müzede sergilenen eserler arasında antik dönemden kalma sikkeler, seramikler ve günlük yaşam eşyaları bulunmaktadır.

**Bandırma Vapuru Müzesi**

Mustafa Kemal Atatürk'ün 19 Mayıs 1919'da Samsun'a geldiği tarihi gemi olan Bandırma Vapuru, artık bir müze olarak hizmet vermektedir. Vapur içerisinde o dönemki yaşam koşulları ve Kurtuluş Savaşı'nın başlangıcına dair önemli belgeler sergilenmektedir.

**Atakum Sahili**

Kilometrelerce uzanan kumsalı ve modern tesisleriyle Atakum, hem yerel halk hem de turistlerin vazgeçilmez adresidir. Sahil boyunca uzanan yürüyüş yolları, bisiklet parkurları ve dinlenme alanları ile ideal bir rekreasyon bölgesidir.

**Ladik Gölü**

Samsun merkezine yaklaşık 100 km uzaklıkta bulunan Ladik Gölü, doğa severlerin favorisidir. Özellikle nilüfer çiçekleri açtığında büyüleyici bir manzara sunar. Göl çevresinde piknik alanları ve yürüyüş parkurları bulunmaktadır.

**Amazon Köyü (Terme)**

Efsanevi Amazon kadın savaşçılarının yaşadığı söylenen bu bölge, tarihi ve mitolojik açıdan büyük önem taşır. Terme ilçesinde bulunan bu alan, arkeolojik kazılarla gün yüzüne çıkarılan buluntularıyla ziyaretçileri büyüler.

**Kızılırmak Delta Kuş Cenneti**

Doğa fotoğrafçılığı meraklıları için ideal olan bu alan, birçok kuş türüne ev sahipliği yapar. Özellikle göç mevsimlerinde binlerce kuşun uğrak yeri olan delta, eşsiz doğa manzaraları sunar.`,
        image: "/src/assets/images/blog/samsun-gezilecek-yerler.jpg",
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

Şehir, antik çağda Amisos adıyla biliniyordu. Grek kolonistler tarafından M.Ö. 8. yüzyılda kurulmuş olan bu antik kent, önemli bir ticaret merkeziydi. Karadeniz'in stratejik konumunda yer alan Amisos, dönemin en gelişmiş limanlarından biriydi.

**Roma ve Bizans Dönemi**

Roma İmparatorluğu döneminde Amisos, bölgenin en önemli limanlarından biri haline geldi. Pontus Krallığı'nın başkenti olan şehir, Romalılar tarafından ele geçirildikten sonra da önemini korudu. Bizans döneminde de stratejik önemini sürdüren şehir, İpek Yolu'nun önemli duraklarından biriydi.

**Selçuklu ve Beylikler Dönemi**

11. yüzyılda Türklerin Anadolu'ya gelişiyle birlikte Samsun da Türk egemenliğine girdi. Danişmendliler ve ardından İlhanlılar tarafından yönetilen şehir, bu dönemde de ticari önemini korudu.

**Osmanlı Dönemi**

Osmanlı İmparatorluğu döneminde Samsun, Karadeniz ticaretinin merkezi konumundaydı. Tütün ve tahıl ihracatında önemli rol oynadı. 19. yüzyılda Rus savaşları sırasında stratejik önem kazanan şehir, önemli bir liman kenti olarak gelişmeye devam etti.

**Kurtuluş Savaşı ve Cumhuriyet**

19 Mayıs 1919'da Mustafa Kemal Atatürk'ün Samsun'a çıkışı, Türk Kurtuluş Savaşı'nın başlangıcı olarak kabul edilir. Bu nedenle şehir, "Kurtuluş'un Başladığı Şehir" olarak anılır. Atatürk'ün burada başlattığı milli mücadele, Türkiye Cumhuriyeti'nin kurulmasına giden yolu açmıştır.

**Modern Samsun**

Cumhuriyet döneminde hızla gelişen Samsun, günümüzde Karadeniz'in en önemli şehirlerinden biri haline gelmiştir. Sanayi, ticaret ve turizm açısından önem taşıyan şehir, modern Türkiye'nin gelişiminde önemli rol oynamaktadır.`,
        image: "/src/assets/images/blog/samsun-tarihi.jpg",
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

Denize yakın konumu ve modern tesisleriyle Atakum, en popüler konaklama bölgesidir. Perlas Otel de bu bölgede yer almaktadır. Bölge, yürüyüş yolları, restoranlar ve cafeler ile canlı bir atmosfere sahiptir.

**Şehir Merkezi**

İş seyahatleri için ideal olan şehir merkezi, ulaşım açısından avantajlıdır. Banka, hastane ve resmi kurumlar bu bölgede yoğunlaşmıştır.

**Sahil Şeridi**

Deniz manzaralı odalar ve yürüyüş imkanları sunan sahil şeridindeki oteller, tatil için mükemmeldir. Gündoğumu ve günbatımı manzaralarını odanızdan izleyebilirsiniz.

**Perlas Otel Avantajları**

- Denize yürüme mesafesi (sadece 200 metre)
- Modern ve konforlu odalar
- 24 saat room service hizmeti
- Ücretsiz Wi-Fi ve otopark imkanı
- Profesyonel güvenlik hizmetleri
- Şehir merkezine kolay ulaşım
- Resepsiyon concierge desteği

**Konaklama İpuçları**

Samsun'da konaklama yaparken dikkat edilmesi gereken noktalar arasında rezervasyon öncesi otel konumu, ulaşım imkanları ve sunduğu hizmetlerin araştırılması yer alır. Özellikle yaz aylarında erken rezervasyon yapılması önerilir.`,
        image: "/src/assets/images/blog/samsun-konaklama.jpg",
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

Türkiye'nin en ünlü pidelerinden biri olan Samsun pidesi, ince hamuru ve özel tereyağıyla meşhurdur. Üzerine eklenen taze peynir, yumurta ve sucuk ile nefis bir lezzet ortaya çıkar.

**Terme Fasulyesi**

Terme ilçesinde yetiştirilen bu özel fasulye çeşidi, lezzeti ve kalitesiyle ünlüdür. Et suyu ile pişirilen Terme fasulyesi, Türkiye'nin en kaliteli kuru baklagilleri arasında yer alır.

**Karadeniz Balıkları**

Hamsi, palamut, kalkan gibi taze balıklar Samsun mutfağının vazgeçilmezleridir. Özellikle hamsi, çeşitli şekillerde pişirilerek sofralarda yer alır.

**Mısır Ekmeği**

Yöresel mısır unundan yapılan bu ekmek, özellikle balık yemekleriyle mükemmel uyum sağlar. Geleneksel taş fırınlarda pişirilen mısır ekmeği, Karadeniz sofralarının olmazsa olmazıdır.

**Laz Böreği**

Muhallebili ve çıtır hamurlu bu tatlı, Samsun'un en sevilen tatlılarından biridir. Kat kat açılan yufka arasına konulan muhallebi ile enfes bir tat ortaya çıkar.

**Kaygana**

Yumurta ve un ile yapılan bu basit ama lezzetli yemek, özellikle kahvaltılarda tercih edilir. Üzerine eklenen taze otlar ile daha da lezzetli hale gelir.`,
        image: "/src/assets/images/blog/samsun-mutfagi.jpg",
        category: "Gastronomi",
        date: "1 Mart 2024",
        readTime: "4 dk",
        slug: "samsun-mutfagi"
    }
];

function BlogPostPage() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <StyledContainer sx={{ py: 8, textAlign: "center" }}>
                <Typography variant="h4" sx={{ mb: 2 }}>Blog yazısı bulunamadı</Typography>
                <Button component={Link} to="/blog" variant="contained">
                    Blog'a Geri Dön
                </Button>
            </StyledContainer>
        );
    }

    document.title = `${post.title} - Perlas Otel Blog`;

    // Diğer blog yazıları (mevcut yazı hariç)
    const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

    return (
        <Box>
            {/* Breadcrumbs */}
            <StyledContainer sx={{ pt: 3, pb: 1 }}>
                <Breadcrumbs separator=">" sx={{ mb: 2 }}>
                    <Link to="/" style={{ textDecoration: "none", color: "#666" }}>
                        Anasayfa
                    </Link>
                    <Link to="/blog" style={{ textDecoration: "none", color: "#666" }}>
                        Blog
                    </Link>
                    <Typography color="text.primary">{post.title}</Typography>
                </Breadcrumbs>
            </StyledContainer>

            {/* Hero Image */}
            <Box sx={{
                height: { xs: 300, md: 400 },
                background: `linear-gradient(rgba(199,122,99,0.3), rgba(199,122,99,0.3)), url('https://via.placeholder.com/1200x400/edb472/ffffff?text=${encodeURIComponent(post.category)}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                mb: 4
            }}>
                <RevealInViewAnimation>
                    <Box>
                        <Chip
                            label={post.category}
                            sx={{
                                bgcolor: "rgba(255,255,255,0.2)",
                                color: "white",
                                mb: 2,
                                fontWeight: 500
                            }}
                        />
                        <Typography variant="h2" sx={{
                            fontSize: { xs: "1.8rem", md: "2.5rem" },
                            fontWeight: 700,
                            mb: 2,
                            maxWidth: "800px",
                            mx: "auto"
                        }}>
                            {post.title}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <AccessTime sx={{ fontSize: 18 }} />
                                <Typography variant="body2">{post.readTime} okuma</Typography>
                            </Box>
                            <Typography variant="body2">{post.date}</Typography>
                        </Box>
                    </Box>
                </RevealInViewAnimation>
            </Box>

            {/* Content */}
            <StyledContainer sx={{ pb: 6 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        {/* Back Button */}
                        <Button
                            component={Link}
                            to="/blog"
                            startIcon={<ArrowBack />}
                            sx={{
                                mb: 3,
                                color: "#edb472",
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "rgba(199,122,99,0.1)"
                                }
                            }}
                        >
                            Blog'a Geri Dön
                        </Button>

                        {/* Article Content */}
                        <RevealInViewAnimation>
                            <Box sx={{
                                "& h1, & h2, & h3, & h4, & h5, & h6": {
                                    color: "#333",
                                    fontWeight: 600,
                                    mt: 3,
                                    mb: 2
                                },
                                "& p": {
                                    lineHeight: 1.8,
                                    mb: 2,
                                    color: "#555"
                                },
                                "& strong": {
                                    color: "#edb472",
                                    fontWeight: 600,
                                    display: "block",
                                    fontSize: "1.1rem",
                                    mt: 3,
                                    mb: 1
                                }
                            }}>
                                {post.content.split('\n\n').map((paragraph, index) => {
                                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                        return (
                                            <Typography key={index} component="h3" sx={{
                                                color: "#edb472",
                                                fontWeight: 600,
                                                fontSize: "1.3rem",
                                                mt: 4,
                                                mb: 2
                                            }}>
                                                {paragraph.slice(2, -2)}
                                            </Typography>
                                        );
                                    }
                                    return (
                                        <Typography key={index} paragraph sx={{
                                            lineHeight: 1.8,
                                            color: "#555",
                                            textAlign: "justify"
                                        }}>
                                            {paragraph}
                                        </Typography>
                                    );
                                })}
                            </Box>
                        </RevealInViewAnimation>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: "sticky", top: 100 }}>
                            {/* Other Posts */}
                            <RevealInViewAnimation delay={0.3}>
                                <Typography variant="h5" sx={{
                                    fontWeight: 600,
                                    mb: 3,
                                    color: "#333"
                                }}>
                                    Diğer Yazılar
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                    {otherPosts.map((otherPost) => (
                                        <Card key={otherPost.id} sx={{
                                            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                                            borderRadius: 2,
                                            transition: "transform 0.2s ease",
                                            "&:hover": {
                                                transform: "translateY(-2px)"
                                            }
                                        }}>
                                            <CardContent sx={{ p: 2 }}>
                                                <Chip
                                                    label={otherPost.category}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: "rgba(199,122,99,0.1)",
                                                        color: "#edb472",
                                                        mb: 1,
                                                        fontSize: "0.75rem"
                                                    }}
                                                />
                                                <Typography
                                                    component={Link}
                                                    to={`/blog/${otherPost.slug}`}
                                                    variant="h6"
                                                    sx={{
                                                        fontSize: "1rem",
                                                        fontWeight: 600,
                                                        color: "#333",
                                                        textDecoration: "none",
                                                        display: "block",
                                                        mb: 1,
                                                        "&:hover": {
                                                            color: "#edb472"
                                                        }
                                                    }}
                                                >
                                                    {otherPost.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{
                                                    color: "text.secondary",
                                                    fontSize: "0.85rem"
                                                }}>
                                                    {otherPost.date} • {otherPost.readTime}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Box>

                                {/* Call to Action */}
                                <Box sx={{
                                    mt: 4,
                                    p: 3,
                                    bgcolor: "rgba(199,122,99,0.05)",
                                    borderRadius: 2,
                                    textAlign: "center",
                                    border: "1px solid rgba(199,122,99,0.1)"
                                }}>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 600,
                                        mb: 2,
                                        color: "#edb472"
                                    }}>
                                        Samsun'da Konaklama
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        mb: 3,
                                        color: "#666",
                                        lineHeight: 1.6
                                    }}>
                                        Perlas Otel'de konforlu bir konaklama deneyimi yaşayın.
                                        Denize yürüme mesafesinde, modern odalarımızla hizmetinizdeyiz.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/odalar"
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#edb472",
                                            textTransform: "none",
                                            fontWeight: 500,
                                            "&:hover": {
                                                bgcolor: "#B66952"
                                            }
                                        }}
                                    >
                                        Odalarımızı İnceleyin
                                    </Button>
                                </Box>
                            </RevealInViewAnimation>
                        </Box>
                    </Grid>
                </Grid>
            </StyledContainer>
        </Box>
    );
}

export default BlogPostPage;