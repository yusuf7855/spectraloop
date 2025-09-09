import React, { useState, useEffect } from 'react';
import { Fab, Tooltip, Zoom, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { keyframes } from '@mui/system';

// WhatsApp butonu için animasyon tanımları
const pulse = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
    }
    70% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
`;

const float = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
`;

function WhatsAppFloatingButton() {
    const [isVisible, setIsVisible] = useState(true); // Başlangıçta görünür
    const theme = useTheme();

    // WhatsApp telefon numarası - projedeki mevcut numara
    const phoneNumber = "905396385955";
    const message = "Merhaba! De Perlas Hotel hakkında bilgi almak istiyorum.";

    // Scroll event listener - butonu her zaman göster
    useEffect(() => {
        const handleScroll = () => {
            // Her zaman görünür olsun, scroll pozisyonuna bakmasın
            setIsVisible(true);
        };

        window.addEventListener('scroll', handleScroll);

        // Sayfa yüklendiğinde de kontrol et
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // WhatsApp linkini aç
    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Zoom in={isVisible} timeout={300}>
            <Tooltip
                title="WhatsApp ile İletişime Geçin"
                placement="left"
                arrow
                sx={{
                    '& .MuiTooltip-tooltip': {
                        backgroundColor: '#25D366',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 500,
                        borderRadius: '8px',
                        padding: '8px 12px'
                    },
                    '& .MuiTooltip-arrow': {
                        color: '#25D366'
                    }
                }}
            >
                <Fab
                    onClick={handleWhatsAppClick}
                    sx={{
                        position: 'fixed',
                        bottom: { xs: 20, md: 30 },
                        right: { xs: 20, md: 30 },
                        zIndex: 1300,
                        width: { xs: 56, md: 64 },
                        height: { xs: 56, md: 64 },
                        backgroundColor: '#25D366',
                        color: 'white',
                        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                        animation: `${pulse} 2s infinite, ${float} 3s ease-in-out infinite`,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

                        '&:hover': {
                            backgroundColor: '#1aab4c',
                            transform: 'scale(1.1)',
                            boxShadow: '0 6px 25px rgba(37, 211, 102, 0.6)',
                            animation: 'none' // Hover'da animasyonu durdur
                        },

                        '&:active': {
                            transform: 'scale(0.95)',
                        },

                        // Responsive boyut ayarları
                        [theme.breakpoints.down('sm')]: {
                            '&:hover': {
                                transform: 'scale(1.05)', // Mobilde daha az büyüme
                            }
                        }
                    }}
                    aria-label="WhatsApp ile iletişime geç"
                >
                    <WhatsAppIcon
                        sx={{
                            fontSize: { xs: 28, md: 32 },
                            transition: 'all 0.3s ease'
                        }}
                    />
                </Fab>
            </Tooltip>
        </Zoom>
    );
}


export default WhatsAppFloatingButton;