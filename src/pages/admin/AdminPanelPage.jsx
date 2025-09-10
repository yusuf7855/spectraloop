import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    Alert,
    Tabs,
    Tab,
    IconButton,
    Snackbar,
    CircularProgress,
    CardMedia
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    People,
    Article,
    Add,
    Edit,
    Delete,
    Visibility,
    ExitToApp,
    CheckCircle,
    Pending,
    CloudUpload,
    Image as ImageIcon
} from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

// API Service
class AdminApiService {
    static baseURL = 'https://backendspectraloop.com.tr/api';

    static async request(endpoint, options = {}) {
        const token = localStorage.getItem('adminToken');
        const url = `${this.baseURL}${endpoint}`;

        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` })
            },
            ...options,
        };

        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Request failed');
        }

        return data;
    }

    static async uploadImage(file) {
        const token = localStorage.getItem('adminToken');
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`${this.baseURL}/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Image upload failed');
        }

        return data;
    }

    static async login(credentials) {
        return this.request('/admin/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    }

    static async verifyToken() {
        return this.request('/admin/verify');
    }

    static async getDashboardStats() {
        return this.request('/admin/stats');
    }

    static async getApplications() {
        return this.request('/applications');
    }

    static async updateApplicationStatus(id, status) {
        return this.request(`/applications/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({ status }),
        });
    }

    static async getBlogs() {
        return this.request('/blogs');
    }

    static async createBlog(blogData) {
        return this.request('/blogs', {
            method: 'POST',
            body: JSON.stringify(blogData),
        });
    }

    static async updateBlog(id, blogData) {
        return this.request(`/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify(blogData),
        });
    }

    static async deleteBlog(id) {
        return this.request(`/blogs/${id}`, {
            method: 'DELETE',
        });
    }
}

// Image Upload Component
function ImageUpload({ onImageUpload, currentImageUrl, isUploading }) {
    const [dragOver, setDragOver] = useState(false);

    const handleFileSelect = (file) => {
        if (file && file.type.startsWith('image/')) {
            onImageUpload(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files[0];
        handleFileSelect(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragOver(false);
    };

    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                Blog Görseli
            </Typography>

            {currentImageUrl && (
                <Box sx={{ mb: 2 }}>
                    <img
                        src={currentImageUrl}
                        alt="Blog görseli"
                        style={{
                            width: '100%',
                            maxHeight: '200px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}
                    />
                </Box>
            )}

            <Box
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                sx={{
                    border: `2px dashed ${dragOver ? '#0054ab' : '#ddd'}`,
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'center',
                    bgcolor: dragOver ? 'rgba(0,84,171,0.05)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                {isUploading ? (
                    <Box>
                        <CircularProgress size={40} sx={{ color: '#0054ab', mb: 2 }} />
                        <Typography>Resim yükleniyor...</Typography>
                    </Box>
                ) : (
                    <Box>
                        <CloudUpload sx={{ fontSize: 48, color: '#0054ab', mb: 2 }} />
                        <Typography sx={{ mb: 1, fontWeight: 600 }}>
                            Resim yüklemek için buraya sürükleyin
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            veya dosya seçmek için tıklayın
                        </Typography>
                        <Button
                            variant="contained"
                            component="label"
                            startIcon={<ImageIcon />}
                            sx={{ bgcolor: '#0054ab' }}
                        >
                            Dosya Seç
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={(e) => handleFileSelect(e.target.files[0])}
                            />
                        </Button>
                        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                            Maksimum dosya boyutu: 5MB
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

// Login Component
function AdminLogin({ onLogin }) {
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const loginSchema = yup.object().shape({
        username: yup.string().required('Kullanıcı adı gerekli'),
        password: yup.string().required('Şifre gerekli')
    });

    const handleSubmit = async (values) => {
        setIsLoading(true);
        setErrorMsg('');

        try {
            const response = await AdminApiService.login(values);
            localStorage.setItem('adminToken', response.token);
            onLogin(response.admin);
        } catch (submitError) {
            setErrorMsg(submitError.message || 'Giriş başarısız');
            console.error('Login error:', submitError);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0054ab 0%, #0066cc 100%)'
        }}>
            <Paper sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 3 }}>
                <Typography variant="h4" align="center" sx={{ mb: 3, color: '#0054ab', fontWeight: 700 }}>
                    SpectraLoop Admin
                </Typography>

                {errorMsg && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {errorMsg}
                    </Alert>
                )}

                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field
                                as={TextField}
                                name="username"
                                label="Kullanıcı Adı"
                                fullWidth
                                margin="normal"
                                error={touched.username && !!errors.username}
                                helperText={touched.username && errors.username}
                            />
                            <Field
                                as={TextField}
                                name="password"
                                label="Şifre"
                                type="password"
                                fullWidth
                                margin="normal"
                                error={touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={isLoading}
                                sx={{
                                    mt: 3,
                                    bgcolor: '#0054ab',
                                    py: 1.5,
                                    fontSize: '16px',
                                    fontWeight: 600
                                }}
                            >
                                {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Box>
    );
}

// Dashboard Component
function DashboardComponent({ stats }) {
    const StatCard = ({ title, value, icon, color }) => (
        <Card sx={{ height: '100%', borderRadius: 3, boxShadow: '0 4px 20px rgba(0,84,171,0.1)' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                <Box sx={{
                    bgcolor: `${color}.light`,
                    borderRadius: '50%',
                    p: 2,
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {icon}
                </Box>
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#0054ab' }}>
                        {value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {title}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#0054ab' }}>
                Dashboard
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Toplam Başvuru"
                        value={stats?.totalApplications || 0}
                        icon={<People sx={{ color: '#0054ab' }} />}
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Bekleyen Başvuru"
                        value={stats?.pendingApplications || 0}
                        icon={<Pending sx={{ color: '#ff9800' }} />}
                        color="warning"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Kabul Edilen"
                        value={stats?.acceptedApplications || 0}
                        icon={<CheckCircle sx={{ color: '#4caf50' }} />}
                        color="success"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <StatCard
                        title="Blog Yazısı"
                        value={stats?.totalBlogs || 0}
                        icon={<Article sx={{ color: '#9c27b0' }} />}
                        color="secondary"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

// Applications Management Component
function ApplicationsManagement() {
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {
        try {
            const response = await AdminApiService.getApplications();
            setApplications(response.data);
        } catch (loadError) {
            console.error('Failed to load applications:', loadError);
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            await AdminApiService.updateApplicationStatus(id, status);
            await loadApplications();
            setSnackbar({ open: true, message: 'Durum güncellendi', severity: 'success' });
        } catch (updateError) {
            setSnackbar({ open: true, message: 'Güncelleme başarısız', severity: 'error' });
            console.error('Status update error:', updateError);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'warning';
            case 'reviewed': return 'info';
            case 'accepted': return 'success';
            case 'rejected': return 'error';
            default: return 'default';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'pending': return 'Bekliyor';
            case 'reviewed': return 'İncelendi';
            case 'accepted': return 'Kabul';
            case 'rejected': return 'Red';
            default: return status;
        }
    };

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#0054ab' }}>
                Takım Başvuruları
            </Typography>

            <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                            <TableCell><strong>Ad Soyad</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                            <TableCell><strong>Bölüm</strong></TableCell>
                            <TableCell><strong>Çalışma Alanı</strong></TableCell>
                            <TableCell><strong>Durum</strong></TableCell>
                            <TableCell><strong>Tarih</strong></TableCell>
                            <TableCell><strong>İşlemler</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications.map((app) => (
                            <TableRow key={app._id} hover>
                                <TableCell>{app.firstName} {app.lastName}</TableCell>
                                <TableCell>{app.email}</TableCell>
                                <TableCell>{app.department}</TableCell>
                                <TableCell>{app.workArea}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={getStatusText(app.status)}
                                        color={getStatusColor(app.status)}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    {new Date(app.appliedAt).toLocaleDateString('tr-TR')}
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        onClick={() => {
                                            setSelectedApplication(app);
                                            setDialogOpen(true);
                                        }}
                                        color="primary"
                                    >
                                        <Visibility />
                                    </IconButton>
                                    <Select
                                        size="small"
                                        value={app.status}
                                        onChange={(e) => handleStatusUpdate(app._id, e.target.value)}
                                        sx={{ ml: 1, minWidth: 120 }}
                                    >
                                        <MenuItem value="pending">Bekliyor</MenuItem>
                                        <MenuItem value="reviewed">İncelendi</MenuItem>
                                        <MenuItem value="accepted">Kabul</MenuItem>
                                        <MenuItem value="rejected">Red</MenuItem>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>Başvuru Detayları</DialogTitle>
                <DialogContent>
                    {selectedApplication && (
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6">Kişisel Bilgiler</Typography>
                                <Typography><strong>Ad:</strong> {selectedApplication.firstName}</Typography>
                                <Typography><strong>Soyad:</strong> {selectedApplication.lastName}</Typography>
                                <Typography><strong>Email:</strong> {selectedApplication.email}</Typography>
                                <Typography><strong>Telefon:</strong> {selectedApplication.phone}</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6">Akademik Bilgiler</Typography>
                                <Typography><strong>Bölüm:</strong> {selectedApplication.department}</Typography>
                                <Typography><strong>Sınıf:</strong> {selectedApplication.grade}</Typography>
                                <Typography><strong>Çalışma Alanı:</strong> {selectedApplication.workArea}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Detaylı Cevaplar</Typography>
                                <Typography sx={{ mt: 1 }}><strong>Katılma Nedeni:</strong></Typography>
                                <Typography variant="body2">{selectedApplication.whyJoin}</Typography>

                                <Typography sx={{ mt: 2 }}><strong>Önceki Deneyim:</strong></Typography>
                                <Typography variant="body2">{selectedApplication.previousExperience}</Typography>

                                <Typography sx={{ mt: 2 }}><strong>Kariyer Hedefleri:</strong></Typography>
                                <Typography variant="body2">{selectedApplication.careerGoals}</Typography>
                            </Grid>
                        </Grid>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Kapat</Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
            </Snackbar>
        </Box>
    );
}

// Blog Management Component
function BlogManagement() {
    const [blogs, setBlogs] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [uploadingImage, setUploadingImage] = useState(false);
    const [currentImageUrl, setCurrentImageUrl] = useState('');

    const blogSchema = yup.object().shape({
        title: yup.string().required('Başlık gerekli'),
        excerpt: yup.string().required('Özet gerekli'),
        content: yup.string().required('İçerik gerekli'),
        category: yup.string().required('Kategori gerekli'),
        readTime: yup.string().required('Okuma süresi gerekli')
    });

    useEffect(() => {
        loadBlogs();
    }, []);

    useEffect(() => {
        if (editingBlog && editingBlog.imageUrl) {
            setCurrentImageUrl(editingBlog.imageUrl);
        } else {
            setCurrentImageUrl('');
        }
    }, [editingBlog]);

    const loadBlogs = async () => {
        try {
            const response = await AdminApiService.getBlogs();
            setBlogs(response.data);
        } catch (loadBlogError) {
            console.error('Failed to load blogs:', loadBlogError);
        }
    };

    const handleImageUpload = async (file) => {
        setUploadingImage(true);
        try {
            const response = await AdminApiService.uploadImage(file);
            setCurrentImageUrl(response.data.url);
            setSnackbar({ open: true, message: 'Resim başarıyla yüklendi', severity: 'success' });
        } catch (uploadError) {
            setSnackbar({ open: true, message: 'Resim yüklenirken hata oluştu', severity: 'error' });
            console.error('Image upload error:', uploadError);
        } finally {
            setUploadingImage(false);
        }
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const blogData = {
                ...values,
                imageUrl: currentImageUrl || null,
                image: currentImageUrl ? currentImageUrl.split('/').pop() : null
            };

            if (editingBlog) {
                await AdminApiService.updateBlog(editingBlog._id, blogData);
                setSnackbar({ open: true, message: 'Blog güncellendi', severity: 'success' });
            } else {
                await AdminApiService.createBlog(blogData);
                setSnackbar({ open: true, message: 'Blog oluşturuldu', severity: 'success' });
            }

            await loadBlogs();
            setDialogOpen(false);
            setEditingBlog(null);
            setCurrentImageUrl('');
            resetForm();
        } catch (submitBlogError) {
            setSnackbar({ open: true, message: 'İşlem başarısız', severity: 'error' });
            console.error('Blog submit error:', submitBlogError);
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
            try {
                await AdminApiService.deleteBlog(id);
                await loadBlogs();
                setSnackbar({ open: true, message: 'Blog silindi', severity: 'success' });
            } catch (deleteBlogError) {
                setSnackbar({ open: true, message: 'Silme işlemi başarısız', severity: 'error' });
                console.error('Blog delete error:', deleteBlogError);
            }
        }
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        setEditingBlog(null);
        setCurrentImageUrl('');
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#0054ab' }}>
                    Blog Yönetimi
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => {
                        setEditingBlog(null);
                        setCurrentImageUrl('');
                        setDialogOpen(true);
                    }}
                    sx={{ bgcolor: '#0054ab' }}
                >
                    Yeni Blog
                </Button>
            </Box>

            <Grid container spacing={3}>
                {blogs.map((blog) => (
                    <Grid item xs={12} md={6} lg={4} key={blog._id}>
                        <Card sx={{ height: '100%', borderRadius: 3, display: 'flex', flexDirection: 'column' }}>
                            {blog.imageUrl && (
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={blog.imageUrl}
                                    alt={blog.title}
                                    sx={{ objectFit: 'cover' }}
                                />
                            )}
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    {blog.title}
                                </Typography>
                                <Chip label={blog.category} size="small" sx={{ mb: 2, alignSelf: 'flex-start' }} />
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                                    {blog.excerpt.substring(0, 100)}...
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="caption">
                                        {new Date(blog.createdAt).toLocaleDateString('tr-TR')}
                                    </Typography>
                                    <Box>
                                        <IconButton
                                            onClick={() => {
                                                setEditingBlog(blog);
                                                setDialogOpen(true);
                                            }}
                                            color="primary"
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => handleDelete(blog._id)}
                                            color="error"
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    {editingBlog ? 'Blog Düzenle' : 'Yeni Blog Oluştur'}
                </DialogTitle>
                <Formik
                    initialValues={{
                        title: editingBlog?.title || '',
                        excerpt: editingBlog?.excerpt || '',
                        content: editingBlog?.content || '',
                        category: editingBlog?.category || '',
                        readTime: editingBlog?.readTime || '5 dk'
                    }}
                    validationSchema={blogSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <DialogContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <ImageUpload
                                            onImageUpload={handleImageUpload}
                                            currentImageUrl={currentImageUrl}
                                            isUploading={uploadingImage}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="title"
                                            label="Başlık"
                                            fullWidth
                                            error={touched.title && !!errors.title}
                                            helperText={touched.title && errors.title}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel>Kategori</InputLabel>
                                            <Field
                                                as={Select}
                                                name="category"
                                                label="Kategori"
                                            >
                                                <MenuItem value="Teknoloji">Teknoloji</MenuItem>
                                                <MenuItem value="Yarışma">Yarışma</MenuItem>
                                                <MenuItem value="Takım">Takım</MenuItem>
                                                <MenuItem value="Gelecek">Gelecek</MenuItem>
                                            </Field>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Field
                                            as={TextField}
                                            name="readTime"
                                            label="Okuma Süresi"
                                            fullWidth
                                            error={touched.readTime && !!errors.readTime}
                                            helperText={touched.readTime && errors.readTime}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="excerpt"
                                            label="Özet"
                                            multiline
                                            rows={3}
                                            fullWidth
                                            error={touched.excerpt && !!errors.excerpt}
                                            helperText={touched.excerpt && errors.excerpt}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field
                                            as={TextField}
                                            name="content"
                                            label="İçerik"
                                            multiline
                                            rows={10}
                                            fullWidth
                                            error={touched.content && !!errors.content}
                                            helperText={touched.content && errors.content}
                                        />
                                    </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDialogClose}>İptal</Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting || uploadingImage}
                                    sx={{ bgcolor: '#0054ab' }}
                                >
                                    {isSubmitting ? 'Kaydediliyor...' : 'Kaydet'}
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
            </Snackbar>
        </Box>
    );
}

// Main Admin Panel Component
function AdminPanelPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [admin, setAdmin] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentTab, setCurrentTab] = useState(0);
    const [dashboardStats, setDashboardStats] = useState(null);

    useEffect(() => {
        checkAuthentication();
    }, []);

    useEffect(() => {
        if (isAuthenticated && currentTab === 0) {
            loadDashboardStats();
        }
    }, [isAuthenticated, currentTab]);

    const checkAuthentication = async () => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            setIsLoading(false);
            return;
        }

        try {
            const response = await AdminApiService.verifyToken();
            setIsAuthenticated(true);
            setAdmin(response.admin);
        } catch (authError) {
            localStorage.removeItem('adminToken');
            console.error('Authentication failed:', authError);
        } finally {
            setIsLoading(false);
        }
    };

    const loadDashboardStats = async () => {
        try {
            const response = await AdminApiService.getDashboardStats();
            setDashboardStats(response.data);
        } catch (statsError) {
            console.error('Failed to load dashboard stats:', statsError);
        }
    };

    const handleLogin = (adminData) => {
        setAdmin(adminData);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
        setAdmin(null);
        setCurrentTab(0);
    };

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress size={60} sx={{ color: '#0054ab' }} />
            </Box>
        );
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    const tabs = [
        { label: 'Dashboard', icon: <DashboardIcon /> },
        { label: 'Başvurular', icon: <People /> },
        { label: 'Blog Yönetimi', icon: <Article /> }
    ];

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Box sx={{
                width: 280,
                bgcolor: '#0054ab',
                color: 'white',
                p: 3
            }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
                    SpectraLoop Admin
                </Typography>

                <Typography variant="body2" sx={{ mb: 4, opacity: 0.8 }}>
                    Hoş geldin, {admin?.username}
                </Typography>

                <Tabs
                    orientation="vertical"
                    value={currentTab}
                    onChange={(e, newValue) => setCurrentTab(newValue)}
                    sx={{
                        '& .MuiTab-root': {
                            color: 'rgba(255,255,255,0.7)',
                            alignItems: 'flex-start',
                            textAlign: 'left',
                            minHeight: 60
                        },
                        '& .Mui-selected': {
                            color: 'white !important',
                            bgcolor: 'rgba(255,255,255,0.1)',
                            borderRadius: 2
                        }
                    }}
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            icon={tab.icon}
                            label={tab.label}
                            iconPosition="start"
                        />
                    ))}
                </Tabs>

                <Button
                    onClick={handleLogout}
                    startIcon={<ExitToApp />}
                    sx={{
                        color: 'white',
                        mt: 4,
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                    }}
                >
                    Çıkış Yap
                </Button>
            </Box>

            <Box sx={{ flex: 1, p: 4, bgcolor: '#f5f5f5' }}>
                {currentTab === 0 && <DashboardComponent stats={dashboardStats?.stats} />}
                {currentTab === 1 && <ApplicationsManagement />}
                {currentTab === 2 && <BlogManagement />}
            </Box>
        </Box>
    );
}

export default AdminPanelPage;