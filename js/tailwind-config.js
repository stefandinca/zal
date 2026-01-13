/**
 * ZAL Website - Tailwind CSS Configuration
 * Custom theme configuration
 */

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                zal: {
                    dark: '#0f172a',    // Slate 900
                    primary: '#2563eb', // Blue 600
                    accent: '#f59e0b',  // Amber 500
                    green: '#10b981',   // Emerald 500
                    light: '#f8fafc'    // Slate 50
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
};
