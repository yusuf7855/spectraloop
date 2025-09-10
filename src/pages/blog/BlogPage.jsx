import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Card, CardContent, Button, Chip, CircularProgress, CardMedia } from "@mui/material";
import { StyledContainer } from "../../components/styled/StyledComponents.jsx";
import { Link } from "react-router-dom";
import RevealInViewAnimation from "../../animations/RevealInViewAnimation.jsx";
import {Engineering, Speed, Science, EmojiEvents, Image as ImageIcon} from "@mui/icons-material";

// Blog API Service
class BlogApiService {
    static baseURL = 'https://backendspectraloop.com.tr/api';

    static async getBlogs() {
        try {
            const response = await fetch(`${this.baseURL}/blogs`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch blogs');
            }

            return data;
        } catch (error) {
            console.error('Blog fetch error:', error);
            throw error;
        }
    }

    static async getBlogBySlug(slug) {
        try {
            const response = await fetch(`${this.baseURL}/blogs/${slug}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Blog not found');
            }

            return data;
        } catch (error) {
            console.error('Blog fetch error:', error);
            throw error;
        }
    }
}

// Default fallback blogs (if API fails) - Updated with sample images
const fallbackBlogs = [
    {
        _id: '1',
        title: "Hyperloop Teknolojisi: Geleceğin Ulaşım Sistemi",
        excerpt: "Hyperloop teknolojisinin temellerini, çalışma prensiplerini ve dünya üzerindeki gelişmeleri keşfedin. Vakum tüp sistemlerinden manyetik levitasyona...",
        category: "Teknoloji",
        createdAt: "2024-12-20",
        readTime: "8 dk",
        slug: "hyperloop-teknolojisi",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
        image: "hyperloop-tech.jpg"
    },
    {
        _id: '2',
        title: "Teknofest 2024: SpectraLoop'un Başarı Hikayesi",
        excerpt: "Teknofest Hyperloop yarışmasındaki deneyimlerimiz, karşılaştığımız zorluklar ve elde ettiğimiz başarılar. Tasarım sürecinden test aşamalarına...",
        category: "Yarışma",
        createdAt: "2024-12-15",
        readTime: "6 dk",
        slug: "teknofest-2024-basari-hikayesi",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
        image: "teknofest-2024.jpg"
    },
    {
        _id: '3',
        title: "Takım Dinamikleri ve İnovasyon Süreci",
        excerpt: "Multidisipliner takım çalışmasının önemi ve inovatif çözümler geliştirme sürecimiz. Mühendislik takımlarında etkili iş birliği...",
        category: "Takım",
        createdAt: "2024-12-10",
        readTime: "5 dk",
        slug: "takim-dinamikleri-innovasyon",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
        image: "team-dynamics.jpg"
    },
    {
        _id: '4',
        title: "2030'da Ulaşım: Hyperloop'un Geleceği",
        excerpt: "Hyperloop teknolojisinin gelecekteki potansiyeli ve dünya çapında ulaşım sistemlerini nasıl değiştireceği üzerine projeksiyonlar...",
        category: "Gelecek",
        createdAt: "2024-12-05",
        readTime: "7 dk",
        slug: "2030-ulasim-hyperloop-gelecegi",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
        image: "future-transport.jpg"
    }
];

function BlogPage() {
    document.title = "Blog - SpectraLoop Hyperloop Takımı";

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Tümü');

    const categories = ['Tümü', 'Teknoloji', 'Yarışma', 'Takım', 'Gelecek'];

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Teknoloji': return <Engineering sx={{fontSize: 24, color: "#0054ab"}} />;
            case 'Yarışma': return <EmojiEvents sx={{fontSize: 24, color: "#0054ab"}} />;
            case 'Takım': return <Science sx={{fontSize: 24, color: "#0054ab"}} />;
            case 'Gelecek': return <Speed sx={{fontSize: 24, color: "#0054ab"}} />;
            default: return <Engineering sx={{fontSize: 24, color: "#0054ab"}} />;
        }
    };

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await BlogApiService.getBlogs();

            if (response.success && response.data.length > 0) {
                setBlogs(response.data);
            } else {
                // If no blogs from API, use fallback
                setBlogs(fallbackBlogs);
            }
        } catch (blogError) {
            console.error('Failed to load blogs:', blogError);
            setError('Blog yazıları yüklenirken hata oluştu');
            // Use fallback blogs on error
            setBlogs(fallbackBlogs);
        } finally {
            setLoading(false);
        }
    };

    const filteredBlogs = selectedCategory === 'Tümü'
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getImageUrl = (blog) => {
        // Priority: imageUrl from database, then fallback image, then default
        if (blog.imageUrl) {
            return blog.imageUrl;
        }
        if (blog.image && !blog.image.startsWith('/src/')) {
            return `https://backendspectraloop.com.tr/uploads/${blog.image}`;
        }
        return "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop";
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <CircularProgress size={60} sx={{ color: '#0054ab' }} />
            </Box>
        );
    }

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                background: "linear-gradient(135deg, #0054ab 0%, #0066cc 100%)",
                color: "white",
                py: { xs: 8, md: 12 },
                textAlign: "center",
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Background Pattern */}
                <Box sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
                    `,
                    zIndex: 0
                }} />

                <StyledContainer sx={{position: "relative", zIndex: 1}}>
                    <RevealInViewAnimation>
                        <Typography sx={{
                            letterSpacing: 2,
                            fontWeight: 700,
                            fontSize: {xs: "14px", md: "16px"},
                            color: "rgba(255,255,255,0.8)",
                            textTransform: "uppercase",
                            mb: 2
                        }}>SPECTRALOOP BLOG</Typography>

                        <Typography sx={{
                            fontSize: {xs: "32px", md: "48px", lg: "56px"},
                            fontWeight: 800,
                            letterSpacing: -1,
                            lineHeight: 1.1,
                            mb: 4
                        }}>
                            Hyperloop Dünyası
                        </Typography>

                        <Typography sx={{
                            fontSize: {xs: "16px", md: "20px"},
                            fontWeight: 300,
                            opacity: 0.9,
                            maxWidth: "700px",
                            mx: "auto",
                            lineHeight: 1.7
                        }}>
                            Hyperloop teknolojisi, takım deneyimlerimiz ve geleceğin ulaşım sistemleri hakkında güncel yazılar
                        </Typography>

                        {/* Decorative Line */}
                        <Box sx={{
                            width: "100px",
                            height: "4px",
                            backgroundColor: "white",
                            mx: "auto",
                            borderRadius: "2px",
                            mt: 4
                        }} />
                    </RevealInViewAnimation>
                </StyledContainer>
            </Box>

            {/* Blog Categories */}
            <StyledContainer sx={{ py: 4 }}>
                <RevealInViewAnimation>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 2,
                        mb: 4
                    }}>
                        {categories.map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                variant={category === selectedCategory ? "filled" : "outlined"}
                                onClick={() => setSelectedCategory(category)}
                                sx={{
                                    bgcolor: category === selectedCategory ? "#0054ab" : "transparent",
                                    color: category === selectedCategory ? "white" : "#0054ab",
                                    borderColor: "#0054ab",
                                    fontWeight: 600,
                                    px: 2,
                                    py: 1,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: "#0054ab",
                                        color: "white"
                                    }
                                }}
                            />
                        ))}
                    </Box>
                </RevealInViewAnimation>
            </StyledContainer>

            {/* Error Message */}
            {error && (
                <StyledContainer>
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                        <Typography color="error" sx={{ mb: 2 }}>
                            {error}
                        </Typography>
                        <Button
                            onClick={loadBlogs}
                            variant="outlined"
                            sx={{ borderColor: '#0054ab', color: '#0054ab' }}
                        >
                            Tekrar Dene
                        </Button>
                    </Box>
                </StyledContainer>
            )}

            {/* Blog Posts */}
            <StyledContainer sx={{ py: { xs: 4, md: 6 } }}>
                {filteredBlogs.length === 0 ? (
                    <Box sx={{ textAlign: 'center', py: 8 }}>
                        <ImageIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                        <Typography variant="h6" color="text.secondary">
                            {selectedCategory === 'Tümü'
                                ? 'Henüz blog yazısı bulunmuyor.'
                                : `${selectedCategory} kategorisinde blog yazısı bulunmuyor.`
                            }
                        </Typography>
                    </Box>
                ) : (
                    <Grid container spacing={4}>
                        {filteredBlogs.map((post, index) => (
                            <Grid item xs={12} md={6} key={post._id}>
                                <RevealInViewAnimation delay={index * 0.1}>
                                    <Card sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        boxShadow: "0px 8px 30px rgba(0,84,171,0.1)",
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                        border: "1px solid rgba(0,84,171,0.1)",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: "0px 20px 50px rgba(0,84,171,0.2)",
                                            ".blog-image": {
                                                transform: "scale(1.05)"
                                            }
                                        }
                                    }}>
                                        <Box sx={{ position: "relative", overflow: "hidden", height: 250 }}>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={getImageUrl(post)}
                                                alt={post.title}
                                                className="blog-image"
                                                sx={{
                                                    transition: "transform 0.4s ease",
                                                    filter: "brightness(90%)",
                                                    objectFit: "cover"
                                                }}
                                                onError={(e) => {
                                                    // Fallback to default image on error
                                                    e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop";
                                                }}
                                            />

                                            {/* Category Chip */}
                                            <Chip
                                                icon={getCategoryIcon(post.category)}
                                                label={post.category}
                                                sx={{
                                                    position: "absolute",
                                                    top: 16,
                                                    left: 16,
                                                    bgcolor: "rgba(0,84,171,0.9)",
                                                    color: "white",
                                                    fontWeight: 600,
                                                    backdropFilter: "blur(10px)",
                                                    border: "1px solid rgba(255,255,255,0.2)"
                                                }}
                                            />

                                            {/* Gradient Overlay */}
                                            <Box sx={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: "50%",
                                                background: "linear-gradient(transparent, rgba(0,84,171,0.7))",
                                                zIndex: 1
                                            }} />
                                        </Box>

                                        <CardContent sx={{
                                            flexGrow: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            p: 4
                                        }}>
                                            <Typography variant="h5" sx={{
                                                fontWeight: 700,
                                                mb: 2,
                                                color: "#1a1a1a",
                                                lineHeight: 1.3,
                                                fontSize: "20px"
                                            }}>
                                                {post.title}
                                            </Typography>

                                            <Typography variant="body1" sx={{
                                                color: "rgba(0,0,0,0.7)",
                                                mb: 3,
                                                flexGrow: 1,
                                                lineHeight: 1.6,
                                                fontSize: "15px"
                                            }}>
                                                {post.excerpt}
                                            </Typography>

                                            <Box sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                mb: 3,
                                                pt: 2,
                                                borderTop: "1px solid rgba(0,84,171,0.1)"
                                            }}>
                                                <Typography variant="body2" sx={{
                                                    color: "#0054ab",
                                                    fontWeight: 600,
                                                    fontSize: "13px"
                                                }}>
                                                    {formatDate(post.createdAt)}
                                                </Typography>
                                                <Typography variant="body2" sx={{
                                                    color: "rgba(0,0,0,0.6)",
                                                    fontSize: "13px"
                                                }}>
                                                    {post.readTime} okuma
                                                </Typography>
                                            </Box>

                                            <Button
                                                component={Link}
                                                to={`/blog/${post.slug}`}
                                                variant="contained"
                                                sx={{
                                                    bgcolor: "#0054ab",
                                                    color: "white",
                                                    textTransform: "none",
                                                    fontWeight: 600,
                                                    py: 1.5,
                                                    borderRadius: 2,
                                                    boxShadow: "0 4px 15px rgba(0,84,171,0.3)",
                                                    "&:hover": {
                                                        bgcolor: "#003d7a",
                                                        transform: "translateY(-2px)",
                                                        boxShadow: "0 6px 20px rgba(0,84,171,0.4)"
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
                )}
            </StyledContainer>

            {/* Newsletter Section */}
            <Box sx={{
                background: "linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #f0f4ff 100%)",
                py: 8
            }}>
                <StyledContainer>
                    <RevealInViewAnimation>
                        <Box sx={{
                            textAlign: "center",
                            maxWidth: "600px",
                            mx: "auto"
                        }}>
                            <Typography sx={{
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#0054ab",
                                textTransform: "uppercase",
                                letterSpacing: 2,
                                mb: 2
                            }}>
                                GÜNCEL KALÍN
                            </Typography>

                            <Typography sx={{
                                fontSize: {xs: "24px", md: "32px"},
                                fontWeight: 800,
                                color: "#1a1a1a",
                                mb: 3
                            }}>
                                Hyperloop Dünyasından Haberler
                            </Typography>

                            <Typography sx={{
                                color: "rgba(0,0,0,0.7)",
                                lineHeight: 1.7,
                                mb: 4
                            }}>
                                SpectraLoop'un yeni blog yazıları, Teknofest güncellemeleri ve Hyperloop teknolojisindeki gelişmeler hakkında bilgi almak için takip edin.
                            </Typography>

                            <Button
                                component="a"
                                href="https://www.instagram.com/spectraloop"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                sx={{
                                    bgcolor: "#0054ab",
                                    color: "white",
                                    py: 2,
                                    px: 4,
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    borderRadius: 3,
                                    "&:hover": {
                                        bgcolor: "#003d7a"
                                    }
                                }}
                            >
                                Sosyal Medyada Takip Et
                            </Button>
                        </Box>
                    </RevealInViewAnimation>
                </StyledContainer>
            </Box>
        </Box>
    );
}

export default BlogPage;