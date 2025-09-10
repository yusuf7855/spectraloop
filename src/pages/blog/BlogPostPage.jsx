import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Container,
    Chip,
    Button,
    CircularProgress,
    Breadcrumbs,
    Avatar,
    Divider,
    IconButton,
    Grid,
    Card,
    CardContent,
    CardMedia
} from '@mui/material';
import {
    ArrowBack,
    AccessTime,
    CalendarToday,
    Share,
    Engineering,
    Speed,
    Science,
    EmojiEvents
} from '@mui/icons-material';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { StyledContainer } from '../../components/styled/StyledComponents.jsx';
import RevealInViewAnimation from '../../animations/RevealInViewAnimation.jsx';

// Blog API Service
class BlogApiService {
    static baseURL = 'https://backendspectraloop.com.tr/api';

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
}

// Fallback blog data in case API fails
const fallbackBlogData = {
    title: "Blog Yazısı Bulunamadı",
    content: "Aradığınız blog yazısı bulunamadı. Lütfen blog sayfasına geri dönerek diğer yazıları inceleyin.",
    excerpt: "Blog yazısı bulunamadı",
    category: "Genel",
    createdAt: new Date().toISOString(),
    readTime: "1 dk",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
};

function BlogPostPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Teknoloji': return <Engineering sx={{ fontSize: 20, color: "#0054ab" }} />;
            case 'Yarışma': return <EmojiEvents sx={{ fontSize: 20, color: "#0054ab" }} />;
            case 'Takım': return <Science sx={{ fontSize: 20, color: "#0054ab" }} />;
            case 'Gelecek': return <Speed sx={{ fontSize: 20, color: "#0054ab" }} />;
            default: return <Engineering sx={{ fontSize: 20, color: "#0054ab" }} />;
        }
    };

    const getImageUrl = (blog) => {
        if (blog?.imageUrl) {
            return blog.imageUrl;
        }
        if (blog?.image && !blog.image.startsWith('/src/')) {
            return `https://backendspectraloop.com.tr/uploads/${blog.image}`;
        }
        return "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop";
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    useEffect(() => {
        if (slug) {
            loadBlog();
            loadRelatedBlogs();
        }
    }, [slug]);

    useEffect(() => {
        if (blog) {
            document.title = `${blog.title} - SpectraLoop Blog`;
        }
    }, [blog]);

    const loadBlog = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await BlogApiService.getBlogBySlug(slug);

            if (response.success && response.data) {
                setBlog(response.data);
            } else {
                // Blog not found, use fallback
                setBlog({ ...fallbackBlogData, slug });
            }
        } catch (blogError) {
            console.error('Failed to load blog:', blogError);
            setError('Blog yazısı yüklenirken hata oluştu');
            // Use fallback blog data
            setBlog({ ...fallbackBlogData, slug });
        } finally {
            setLoading(false);
        }
    };

    const loadRelatedBlogs = async () => {
        try {
            const response = await BlogApiService.getBlogs();
            if (response.success && response.data) {
                // Filter out current blog and limit to 3 related blogs
                const filtered = response.data
                    .filter(b => b.slug !== slug)
                    .slice(0, 3);
                setRelatedBlogs(filtered);
            }
        } catch (relatedError) {
            console.error('Failed to load related blogs:', relatedError);
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: blog.title,
                text: blog.excerpt,
                url: window.location.href,
            });
        } else {
            // Fallback to copying URL to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Blog linki panoya kopyalandı!');
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <CircularProgress size={60} sx={{ color: '#0054ab' }} />
            </Box>
        );
    }

    if (error && !blog) {
        return (
            <StyledContainer sx={{ py: 8 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 2, color: 'error.main' }}>
                        Hata Oluştu
                    </Typography>
                    <Typography sx={{ mb: 4 }}>
                        {error}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/blog')}
                        sx={{ bgcolor: '#0054ab' }}
                    >
                        Blog Sayfasına Dön
                    </Button>
                </Box>
            </StyledContainer>
        );
    }

    return (
        <Box>
            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                height: { xs: '60vh', md: '70vh' },
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end'
            }}>
                {/* Background Image */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${getImageUrl(blog)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)'
                        }
                    }}
                />

                {/* Back Button */}
                <IconButton
                    onClick={() => navigate('/blog')}
                    sx={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        color: '#0054ab',
                        '&:hover': {
                            bgcolor: 'white'
                        }
                    }}
                >
                    <ArrowBack />
                </IconButton>

                {/* Share Button */}
                <IconButton
                    onClick={handleShare}
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        color: '#0054ab',
                        '&:hover': {
                            bgcolor: 'white'
                        }
                    }}
                >
                    <Share />
                </IconButton>

                {/* Content */}
                <StyledContainer sx={{ position: 'relative', zIndex: 2, pb: 6 }}>
                    <RevealInViewAnimation>
                        {/* Breadcrumbs */}
                        <Breadcrumbs sx={{ mb: 3, color: 'white' }}>
                            <Link to="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                                Ana Sayfa
                            </Link>
                            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                                Blog
                            </Link>
                            <Typography sx={{ color: 'white' }}>
                                {blog?.title}
                            </Typography>
                        </Breadcrumbs>

                        {/* Category */}
                        <Chip
                            icon={getCategoryIcon(blog?.category)}
                            label={blog?.category}
                            sx={{
                                bgcolor: 'rgba(0,84,171,0.9)',
                                color: 'white',
                                fontWeight: 600,
                                mb: 3,
                                backdropFilter: 'blur(10px)'
                            }}
                        />

                        {/* Title */}
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                                fontWeight: 800,
                                color: 'white',
                                mb: 3,
                                lineHeight: 1.2
                            }}
                        >
                            {blog?.title}
                        </Typography>

                        {/* Meta Information */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CalendarToday sx={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }} />
                                <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                                    {formatDate(blog?.createdAt)}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <AccessTime sx={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }} />
                                <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                                    {blog?.readTime} okuma
                                </Typography>
                            </Box>
                        </Box>
                    </RevealInViewAnimation>
                </StyledContainer>
            </Box>

            {/* Article Content */}
            <StyledContainer sx={{ py: { xs: 6, md: 8 } }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <RevealInViewAnimation>
                            {/* Excerpt */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,0.7)',
                                    lineHeight: 1.6,
                                    mb: 4,
                                    fontStyle: 'italic',
                                    borderLeft: '4px solid #0054ab',
                                    pl: 3,
                                    bgcolor: 'rgba(0,84,171,0.05)',
                                    py: 2,
                                    borderRadius: '0 8px 8px 0'
                                }}
                            >
                                {blog?.excerpt}
                            </Typography>

                            <Divider sx={{ mb: 4 }} />

                            {/* Main Content */}
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: 'rgba(0,0,0,0.8)',
                                    '& p': {
                                        mb: 3
                                    },
                                    '& h2': {
                                        fontSize: '1.8rem',
                                        fontWeight: 700,
                                        color: '#0054ab',
                                        mt: 4,
                                        mb: 2
                                    },
                                    '& h3': {
                                        fontSize: '1.4rem',
                                        fontWeight: 600,
                                        color: '#333',
                                        mt: 3,
                                        mb: 2
                                    }
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: blog?.content?.replace(/\n/g, '<br>') || ''
                                }}
                            />
                        </RevealInViewAnimation>
                    </Grid>

                    {/* Sidebar */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'sticky', top: 20 }}>
                            {/* Author Info */}
                            <Card sx={{ mb: 4, borderRadius: 3 }}>
                                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                    <Avatar
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            mx: 'auto',
                                            mb: 2,
                                            bgcolor: '#0054ab'
                                        }}
                                    >
                                        SL
                                    </Avatar>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                        SpectraLoop Takımı
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        Samsun Üniversitesi Hyperloop Takımı
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: '14px', lineHeight: 1.5 }}>
                                        Geleceğin ulaşım teknolojisi Hyperloop üzerine araştırma ve geliştirme yapan öğrenci takımı.
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* Related Articles */}
                            {relatedBlogs.length > 0 && (
                                <Card sx={{ borderRadius: 3 }}>
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                                            İlgili Yazılar
                                        </Typography>
                                        {relatedBlogs.map((relatedBlog) => (
                                            <Box key={relatedBlog._id} sx={{ mb: 3, '&:last-child': { mb: 0 } }}>
                                                <Link
                                                    to={`/blog/${relatedBlog.slug}`}
                                                    style={{ textDecoration: 'none' }}
                                                >
                                                    <Box sx={{ display: 'flex', gap: 2, '&:hover img': { transform: 'scale(1.05)' } }}>
                                                        <img
                                                            src={getImageUrl(relatedBlog)}
                                                            alt={relatedBlog.title}
                                                            style={{
                                                                width: '80px',
                                                                height: '60px',
                                                                objectFit: 'cover',
                                                                borderRadius: '8px',
                                                                transition: 'transform 0.3s ease'
                                                            }}
                                                        />
                                                        <Box sx={{ flex: 1 }}>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    fontWeight: 600,
                                                                    fontSize: '14px',
                                                                    lineHeight: 1.3,
                                                                    color: '#333',
                                                                    mb: 0.5
                                                                }}
                                                            >
                                                                {relatedBlog.title}
                                                            </Typography>
                                                            <Typography
                                                                variant="caption"
                                                                sx={{ color: 'text.secondary' }}
                                                            >
                                                                {relatedBlog.readTime} • {relatedBlog.category}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        ))}
                                    </CardContent>
                                </Card>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </StyledContainer>

            {/* Bottom Navigation */}
            <Box sx={{ bgcolor: 'rgba(0,84,171,0.05)', py: 4 }}>
                <StyledContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={() => navigate('/blog')}
                            sx={{
                                borderColor: '#0054ab',
                                color: '#0054ab',
                                '&:hover': {
                                    bgcolor: '#0054ab',
                                    color: 'white'
                                }
                            }}
                        >
                            Tüm Blog Yazıları
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleShare}
                            sx={{ bgcolor: '#0054ab' }}
                        >
                            Paylaş
                        </Button>
                    </Box>
                </StyledContainer>
            </Box>
        </Box>
    );
}

export default BlogPostPage;