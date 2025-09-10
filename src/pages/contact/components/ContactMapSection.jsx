import {Box, Container} from "@mui/material";

function ContactMapSection() {
    return (
        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
            <Box
                component="iframe"
                title="Samsun Üniversitesi Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11950.449985421825!2d36.10779411116054!3d41.51267149939725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4087df5a9652e01b%3A0xd8b189e80530c991!2sSamsun%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1757434523471!5m2!1str!2str"
                sx={{
                    display: 'block',
                    border: 'none',
                    borderRadius: 3,
                    boxShadow: '0px 8px 30px rgba(0, 84, 171, 0.15)',
                    height: { xs: '300px', sm: '400px', md: '400px' },
                    width: '100%',
                    userSelect: 'none',
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Container>
    );
}

export default ContactMapSection;