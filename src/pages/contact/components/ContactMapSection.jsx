import {Box} from "@mui/material";

function ContactMapSection() {
    return (
        <Box
            component="iframe"
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3054493640793!2d36.2516128504485!3d41.345714139309386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088792792426efd%3A0xfbb6da36fe1b311e!2sSamsun%20De%20Perlas%20Otel!5e0!3m2!1str!2str!4v1752287307392!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
            style={{
                border: 'none',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                userSelect: 'none',
            }}
            sx={{
                display: 'block',
                borderColor: 'rgba(0, 0, 0, 0.1)',
                height: { xs: '200px', sm: '250px', md: '50vh' },
                width: '100%',
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
        />

    );
}

export default ContactMapSection;