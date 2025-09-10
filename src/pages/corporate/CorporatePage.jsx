import React, {useState} from "react";
import {
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    Checkbox,
    Grid,
    Alert
} from "@mui/material";
import {StyledContainer} from "../../components/styled/StyledComponents.jsx";
import {StyledColoredButton} from "../../components/styled/StyledButtons.jsx";
import PageHero from "../../components/common/PageHero.jsx";
import RevealInViewAnimation from "../../animations/RevealInViewAnimation.jsx";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import {Engineering, RocketLaunch, School, Group} from "@mui/icons-material";

function TeamApplicationPage() {
    document.title = "Takım Başvurusu - SpectraLoop Hyperloop Takımı";
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const validationSchema = yup.object().shape({
        firstName: yup.string().required("Ad zorunludur"),
        lastName: yup.string().required("Soyad zorunludur"),
        department: yup.string().required("Bölüm seçimi zorunludur"),
        grade: yup.string().required("Sınıf seçimi zorunludur"),
        workArea: yup.string().required("Çalışmak istediğiniz alan zorunludur"),
        whyJoin: yup.string()
            .min(20, "En az 20 karakter yazmanız gerekiyor")
            .required("Bu alan zorunludur"),
        previousExperience: yup.string()
            .min(20, "En az 20 karakter yazmanız gerekiyor")
            .required("Bu alan zorunludur"),
        timeCommitment: yup.string().required("Zaman ayırma durumu zorunludur"),
        attendMeetings: yup.string().required("Toplantı katılım durumu zorunludur"),
        careerGoals: yup.string()
            .min(20, "En az 20 karakter yazmanız gerekiyor")
            .required("Bu alan zorunludur"),
        additionalInfo: yup.string(),
        softwareKnowledge: yup.array().min(1, "En az bir yazılım seçmelisiniz"),
        email: yup.string().email("Geçerli email adresi giriniz").required("Email zorunludur"),
        phone: yup.string().required("Telefon numarası zorunludur")
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        grade: "",
        workArea: "",
        whyJoin: "",
        previousExperience: "",
        timeCommitment: "",
        attendMeetings: "",
        careerGoals: "",
        additionalInfo: "",
        softwareKnowledge: []
    };

    // API call function
    const submitApplication = async (applicationData) => {
        try {
            const response = await fetch('https://backendspectraloop.com.tr/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Başvuru gönderilirken hata oluştu');
            }

            return data;
        } catch (error) {
            throw error;
        }
    };

    const handleSubmit = async (values, {setSubmitting, resetForm}) => {
        try {
            setSubmitError(null);
            console.log("Submitting form values:", values);

            // API call
            const response = await submitApplication(values);

            if (response.success) {
                setSubmitted(true);
                resetForm();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitError(error.message || 'Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setSubmitting(false);
        }
    };

    const departments = [
        "Makine Mühendisliği",
        "Elektrik-Elektronik Mühendisliği",
        "Yazılım Mühendisliği",
        "Endüstri Mühendisliği",
        "Uçak Ve Uzay Mühendisliği",
        "Diğer"
    ];

    const workAreas = [
        "Yazılım Geliştirme",
        "Makine Tasarımı",
        "Elektrik-Elektronik",
        "Tasarım & UI/UX",
        "Sosyal Medya",
        "Sponsorluk"
    ];

    const softwareOptions = [
        "SolidWorks",
        "AutoCAD",
        "ANSYS",
        "MATLAB",
        "Python",
        "C++",
        "JavaScript",
        "Figma",
        "Adobe Creative Suite",
        "Hiçbiri"
    ];

    if (submitted) {
        return (
            <Box>
                <PageHero
                    subTitle={"BAŞVURUNUZ BAŞARIYLA TAMAMLANDI"}
                    title={"TEŞEKKÜRLER"}
                    description={"Başvurunuz incelendikten sonra en kısa sürede sizinle iletişime geçeceğiz."}
                    size={"medium"}
                />
                <StyledContainer sx={{py: 8, textAlign: "center"}}>
                    <RevealInViewAnimation>
                        <RocketLaunch sx={{fontSize: "80px", color: "#0054ab", mb: 3}} />
                        <Typography variant="h4" sx={{mb: 2, color: "#0054ab", fontWeight: 700}}>
                            Geleceğe Hoş Geldiniz!
                        </Typography>
                        <Typography sx={{color: "rgba(0,0,0,0.7)", maxWidth: "600px", mx: "auto"}}>
                            SpectraLoop takımına olan ilginiz için teşekkür ederiz. Başvurunuz titizlikle değerlendirilecek ve
                            uygun görülmeniz durumunda sizinle iletişime geçeceğiz.
                        </Typography>
                    </RevealInViewAnimation>
                </StyledContainer>
            </Box>
        );
    }

    return (
        <Box>
            {/* Application Form */}
            <StyledContainer sx={{py: 8}}>
                <RevealInViewAnimation>
                    <Box sx={{textAlign: "center", mb: 6}}>
                        <Typography sx={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#0054ab",
                            textTransform: "uppercase",
                            letterSpacing: 2,
                            mb: 2
                        }}>
                            BAŞVURU FORMU
                        </Typography>
                        <Typography sx={{
                            fontSize: {xs: "28px", md: "36px"},
                            fontWeight: 800,
                            color: "#1a1a1a",
                            mb: 3
                        }}>
                            Takımımıza Katılın
                        </Typography>
                        <Typography sx={{
                            color: "rgba(0,0,0,0.7)",
                            maxWidth: "600px",
                            mx: "auto",
                            lineHeight: 1.7
                        }}>
                            Aşağıdaki formu doldurarak SpectraLoop takımına başvurabilirsiniz.
                            Tüm alanları eksiksiz doldurmaya özen gösteriniz.
                        </Typography>
                    </Box>
                </RevealInViewAnimation>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({values, errors, touched, setFieldValue, isSubmitting}) => (
                        <Form>
                            <Box sx={{
                                maxWidth: "800px",
                                mx: "auto",
                                p: 4,
                                backgroundColor: "white",
                                borderRadius: 3,
                                boxShadow: "0 10px 40px rgba(0,84,171,0.1)"
                            }}>
                                {/* Error Alert */}
                                {submitError && (
                                    <Alert severity="error" sx={{mb: 3}} onClose={() => setSubmitError(null)}>
                                        {submitError}
                                    </Alert>
                                )}

                                {/* Personal Information */}
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    mb: 3,
                                    color: "#0054ab",
                                    borderBottom: "2px solid #0054ab",
                                    pb: 1
                                }}>
                                    Kişisel Bilgiler
                                </Typography>

                                <Grid container spacing={3} sx={{mb: 4}}>
                                    <Grid item xs={12} md={6}>
                                        <Field
                                            as={TextField}
                                            name="firstName"
                                            label="Ad *"
                                            fullWidth
                                            error={touched.firstName && !!errors.firstName}
                                            helperText={touched.firstName && errors.firstName}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Field
                                            as={TextField}
                                            name="lastName"
                                            label="Soyad *"
                                            fullWidth
                                            error={touched.lastName && !!errors.lastName}
                                            helperText={touched.lastName && errors.lastName}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Field
                                            as={TextField}
                                            name="email"
                                            label="E-mail *"
                                            type="email"
                                            fullWidth
                                            error={touched.email && !!errors.email}
                                            helperText={touched.email && errors.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Field
                                            as={TextField}
                                            name="phone"
                                            label="Telefon Numarası *"
                                            fullWidth
                                            error={touched.phone && !!errors.phone}
                                            helperText={touched.phone && errors.phone}
                                        />
                                    </Grid>
                                </Grid>

                                {/* Academic Information */}
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    mb: 3,
                                    color: "#0054ab",
                                    borderBottom: "2px solid #0054ab",
                                    pb: 1
                                }}>
                                    Akademik Bilgiler
                                </Typography>

                                <Grid container spacing={3} sx={{mb: 4}}>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth error={touched.department && !!errors.department}>
                                            <InputLabel>Bölüm *</InputLabel>
                                            <Field
                                                as={Select}
                                                name="department"
                                                label="Bölüm"
                                                sx={{
                                                    minWidth: "100%",
                                                    "& .MuiSelect-select": {
                                                        minWidth: "200px"
                                                    }
                                                }}
                                            >
                                                {departments.map((dept) => (
                                                    <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                                                ))}
                                            </Field>
                                            <ErrorMessage name="department" component="div" style={{color: 'red', fontSize: '12px'}} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth error={touched.grade && !!errors.grade}>
                                            <InputLabel>Sınıf *</InputLabel>
                                            <Field
                                                as={Select}
                                                name="grade"
                                                label="Sınıf"
                                                sx={{
                                                    minWidth: "100%",
                                                    "& .MuiSelect-select": {
                                                        minWidth: "200px"
                                                    }
                                                }}
                                            >
                                                <MenuItem value="1">1. Sınıf</MenuItem>
                                                <MenuItem value="2">2. Sınıf</MenuItem>
                                                <MenuItem value="3">3. Sınıf</MenuItem>
                                                <MenuItem value="4">4. Sınıf</MenuItem>
                                                <MenuItem value="graduate">Lisansüstü</MenuItem>
                                            </Field>
                                            <ErrorMessage name="grade" component="div" style={{color: 'red', fontSize: '12px'}} />
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                {/* Work Area Preference */}
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    mb: 3,
                                    color: "#0054ab",
                                    borderBottom: "2px solid #0054ab",
                                    pb: 1
                                }}>
                                    Çalışma Alanı Tercihi
                                </Typography>

                                <FormControl fullWidth sx={{mb: 4}} error={touched.workArea && !!errors.workArea}>
                                    <InputLabel>Hangi alanda çalışmak istersiniz? *</InputLabel>
                                    <Field
                                        as={Select}
                                        name="workArea"
                                        label="Hangi alanda çalışmak istersiniz?"
                                    >
                                        {workAreas.map((area) => (
                                            <MenuItem key={area} value={area}>{area}</MenuItem>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="workArea" component="div" style={{color: 'red', fontSize: '12px'}} />
                                </FormControl>

                                {/* Technical Skills */}
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    mb: 3,
                                    color: "#0054ab",
                                    borderBottom: "2px solid #0054ab",
                                    pb: 1
                                }}>
                                    Teknik Yetenekler
                                </Typography>

                                <FormControl component="fieldset" sx={{mb: 4}}>
                                    <FormLabel component="legend" sx={{mb: 2, color: "#333"}}>
                                        Bildiğiniz çizim/analiz programları: *
                                    </FormLabel>
                                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 1}}>
                                        {softwareOptions.map((software) => (
                                            <FormControlLabel
                                                key={software}
                                                control={
                                                    <Checkbox
                                                        checked={values.softwareKnowledge.includes(software)}
                                                        onChange={(e) => {
                                                            const newValue = e.target.checked
                                                                ? [...values.softwareKnowledge, software]
                                                                : values.softwareKnowledge.filter(item => item !== software);
                                                            setFieldValue('softwareKnowledge', newValue);
                                                        }}
                                                        sx={{
                                                            color: "#0054ab",
                                                            '&.Mui-checked': {
                                                                color: "#0054ab"
                                                            }
                                                        }}
                                                    />
                                                }
                                                label={software}
                                                sx={{mr: 2, mb: 1}}
                                            />
                                        ))}
                                    </Box>
                                    <ErrorMessage name="softwareKnowledge" component="div" style={{color: 'red', fontSize: '12px'}} />
                                </FormControl>

                                {/* Detailed Questions */}
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    mb: 3,
                                    color: "#0054ab",
                                    borderBottom: "2px solid #0054ab",
                                    pb: 1
                                }}>
                                    Detaylı Sorular
                                </Typography>

                                <Box sx={{mb: 3}}>
                                    <Field
                                        as={TextField}
                                        name="whyJoin"
                                        label="Neden SpectraLoop takımına katılmak istiyorsunuz? *"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        error={touched.whyJoin && !!errors.whyJoin}
                                        helperText={touched.whyJoin && errors.whyJoin}
                                    />
                                </Box>

                                <Box sx={{mb: 3}}>
                                    <Field
                                        as={TextField}
                                        name="previousExperience"
                                        label="Daha önce bir takımda çalıştınız mı? Deneyiminizi anlatın. *"
                                        multiline
                                        rows={3}
                                        fullWidth
                                        error={touched.previousExperience && !!errors.previousExperience}
                                        helperText={touched.previousExperience && errors.previousExperience}
                                    />
                                </Box>

                                <Box sx={{mb: 3}}>
                                    <FormControl fullWidth error={touched.timeCommitment && !!errors.timeCommitment}>
                                        <FormLabel component="legend" sx={{mb: 1, color: "#333"}}>
                                            Haftada ne kadar zaman ayırabilirsiniz? *
                                        </FormLabel>
                                        <Field
                                            as={RadioGroup}
                                            name="timeCommitment"
                                        >
                                            <FormControlLabel value="5-10" control={<Radio sx={{color: "#0054ab", '&.Mui-checked': {color: "#0054ab"}}} />} label="5-10 saat" />
                                            <FormControlLabel value="10-15" control={<Radio sx={{color: "#0054ab", '&.Mui-checked': {color: "#0054ab"}}} />} label="10-15 saat" />
                                            <FormControlLabel value="15-20" control={<Radio sx={{color: "#0054ab", '&.Mui-checked': {color: "#0054ab"}}} />} label="15-20 saat" />
                                            <FormControlLabel value="20+" control={<Radio sx={{color: "#0054ab", '&.Mui-checked': {color: "#0054ab"}}} />} label="20+ saat" />
                                        </Field>
                                        <ErrorMessage name="timeCommitment" component="div" style={{color: 'red', fontSize: '12px'}} />
                                    </FormControl>
                                </Box>

                                <Box sx={{mb: 3}}>
                                    <FormControl fullWidth error={touched.attendMeetings && !!errors.attendMeetings}>
                                        <FormLabel component="legend" sx={{mb: 1, color: "#333"}}>
                                            Düzenli toplantılara katılmaya istekli misiniz? *
                                        </FormLabel>
                                        <Field
                                            as={RadioGroup}
                                            name="attendMeetings"
                                        >
                                            <FormControlLabel value="yes" control={<Radio sx={{color: "#0054ab", '&.Mui-checked': {color: "#0054ab"}}} />} label="Evet, hem online hem yüz yüze" />
                                            <FormControlLabel value="online" control={<Radio sx={{color: "#0054ab", '&.Mui-checked': {color: "#0054ab"}}} />} label="Sadece online toplantılara" />
                                            <FormControlLabel value="limited" control={<Radio sx={{color: "#0054ab", '&.Mui-checked': {color: "#0054ab"}}} />} label="Sınırlı katılım sağlayabilirim" />
                                        </Field>
                                        <ErrorMessage name="attendMeetings" component="div" style={{color: 'red', fontSize: '12px'}} />
                                    </FormControl>
                                </Box>

                                <Box sx={{mb: 3}}>
                                    <Field
                                        as={TextField}
                                        name="careerGoals"
                                        label="Kariyer hedefleriniz ve SpectraLoop ile ilişkisi *"
                                        multiline
                                        rows={3}
                                        fullWidth
                                        error={touched.careerGoals && !!errors.careerGoals}
                                        helperText={touched.careerGoals && errors.careerGoals}
                                    />
                                </Box>

                                <Box sx={{mb: 4}}>
                                    <Field
                                        as={TextField}
                                        name="additionalInfo"
                                        label="Paylaşmak istediğiniz başka bilgi"
                                        multiline
                                        rows={2}
                                        fullWidth
                                    />
                                </Box>

                                <Alert severity="info" sx={{mb: 3}}>
                                    Başvurunuz incelendikten sonra 1-2 hafta içinde sizinle iletişime geçeceğiz.
                                </Alert>

                                <Box sx={{textAlign: "center"}}>
                                    <StyledColoredButton
                                        type="submit"
                                        disabled={isSubmitting}
                                        sx={{
                                            py: 2,
                                            px: 6,
                                            fontSize: "16px",
                                            backgroundColor: "#0054ab",
                                            ":hover": {
                                                backgroundColor: "#003d7a"
                                            }
                                        }}
                                    >
                                        {isSubmitting ? "Gönderiliyor..." : "Başvuruyu Gönder"}
                                    </StyledColoredButton>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </StyledContainer>
        </Box>
    );
}

export default TeamApplicationPage;