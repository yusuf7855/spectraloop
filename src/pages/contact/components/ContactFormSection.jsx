import React from 'react';
import RevealInViewAnimation from "../../../animations/RevealInViewAnimation.jsx";
import {StyledContainer} from "../../../components/styled/StyledComponents.jsx";
import {Box, Grid, TextField, Typography} from "@mui/material";
import ContactUs from "../../../components/footer/ContactUs.jsx";
import SocialMedia from "../../../components/footer/SocialMedia.jsx";
import AnimateChangeInHeight from "../../../animations/AnimateChangeInHeight.jsx";
import {Formik} from "formik";
import {StyledDarkButton} from "../../../components/styled/StyledButtons.jsx";
import {motion} from "framer-motion";
import * as yup from "yup";

function ContactFormSection() {
    const handleSubmit = (values) => console.log(values)

    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required("Zorunlu alan"),
        surname: yup
            .string()
            .required("Zorunlu alan"),
        email: yup
            .string()
            .email('Lütfen geçerli bir mail adresi giriniz.')
            .required('Zorunlu alan'),
        subject: yup
            .string()
            .required("Zorunlu alan"),
        message: yup
            .string()
            .required("Zorunlu alan")
            .min(50, "En az 50 harf içermeli."),
    })

    return (
        <StyledContainer sx={{
            minHeight: {md: "calc(80vh - 73px)"},
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 3
        }}>
            <Grid container sx={{
                mt: {xs: 2, md: 0},
                borderRadius: "4px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                p: 1,
            }}>
                <Grid item xs={12} md={4}>
                    <Box sx={{
                        height: "100%",
                        background: (theme) => theme.palette.primary.darkMain,
                        borderRadius: "4px",
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{mb: 3}}>
                            <Typography sx={{
                                color: "white",
                                letterSpacing: 3,
                                fontWeight: "600",
                                fontSize: "18px",
                                mb: 1
                            }}>
                                BİZE ULAŞIN
                            </Typography>

                        </Box>
                        <SocialMedia disableYoutube={true}/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <AnimateChangeInHeight>
                        <Box p={3}>
                            <Typography sx={{
                                color: "black",
                                letterSpacing: 3,
                                fontWeight: "600",
                                fontSize: "18px",
                                mb: 1
                            }}>
                                İLETİŞİM FORMU
                            </Typography>
                            <Formik
                                initialValues={{
                                    name: "",
                                    surname: "",
                                    email: "",
                                    subject: "",
                                    message: "",
                                }}
                                onSubmit={handleSubmit}
                                validationSchema={validationSchema}
                            >
                                {
                                    ({
                                         errors,
                                         touched,
                                         handleChange,
                                         handleSubmit,
                                         handleBlur,
                                         values,
                                     }) => (
                                        <form onSubmit={handleSubmit}>
                                            <Grid container spacing={4} sx={{mt: 1}}>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        variant={"standard"}
                                                        required
                                                        fullWidth
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                borderRadius: "8px",
                                                            }
                                                        }}
                                                        helperText={errors.name && touched.name && errors.name}
                                                        error={touched.name && Boolean(errors.name)}
                                                        type="text"
                                                        placeholder={"İsim"}
                                                        id="name"
                                                        name="name"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        variant={"standard"}
                                                        required
                                                        fullWidth
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                borderRadius: "8px",
                                                            }
                                                        }}
                                                        helperText={errors.surname && touched.surname && errors.surname}
                                                        error={touched.surname && Boolean(errors.surname)}
                                                        type="text"
                                                        placeholder={"Soyisim"}
                                                        id="surname"
                                                        name="surname"
                                                        value={values.surname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        variant={"standard"}
                                                        required
                                                        fullWidth
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                borderRadius: "8px",
                                                            }
                                                        }}
                                                        helperText={errors.email && touched.email && errors.email}
                                                        error={touched.email && Boolean(errors.email)}
                                                        type="text"
                                                        placeholder={"Email"}
                                                        id="email"
                                                        name="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        variant={"standard"}
                                                        required
                                                        fullWidth
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                borderRadius: "8px",
                                                            }
                                                        }}
                                                        helperText={errors.subject && touched.subject && errors.subject}
                                                        error={touched.subject && Boolean(errors.subject)}
                                                        type="text"
                                                        placeholder={"Konu"}
                                                        id="subject"
                                                        name="subject"
                                                        value={values.subject}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        variant={"standard"}
                                                        required
                                                        fullWidth
                                                        multiline={true}
                                                        minRows={3}
                                                        maxRows={5}
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                borderRadius: "8px",
                                                            }
                                                        }}
                                                        helperText={errors.message && touched.message && errors.message}
                                                        error={touched.message && Boolean(errors.message)}
                                                        type="text"
                                                        placeholder={"Mesaj"}
                                                        id="message"
                                                        name="message"
                                                        value={values.message}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sx={{mt: {xs: 1, md: 2, lg: 3}}}>
                                                    <StyledDarkButton
                                                        aria-label="submit-contact"
                                                        type={"submit"}
                                                        component={motion.button}
                                                        whileHover={{scale: .95}}
                                                        sx={{
                                                            textTransform: "none",
                                                            color: "white",
                                                            px: 4,
                                                            borderRadius: 2,
                                                            fontWeight: 300,
                                                            width: {xs: "100%", sm: "auto"}
                                                        }} size={"large"}>Gönder</StyledDarkButton>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    )
                                }
                            </Formik>
                        </Box>
                    </AnimateChangeInHeight>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}

export default ContactFormSection;