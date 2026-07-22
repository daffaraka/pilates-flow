import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Fraunces', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                sage: {
                    50: '#F3F6F3',
                    100: '#E3EAE4',
                    300: '#B8C9BC',
                    500: '#7C9885',
                    700: '#4A5D4E',
                    900: '#2B362D',
                },
                blush: {
                    100: '#F7E6DF',
                    300: '#EFC9B8',
                    500: '#E8B4A0',
                },
                ivory: {
                    DEFAULT: '#FAF7F2',
                    dark: '#F0EBE2',
                },
                charcoal: {
                    DEFAULT: '#2E2E2E',
                    soft: '#8A8378',
                },
                studio: {
                    bg: '#1C1F1C',
                },
                // Semantic mapping to support existing code
                primary: '#7C9885',
                'primary-dark': '#4A5D4E',
                secondary: '#E8B4A0',
                background: '#FAF7F2',
                surface: '#FFFFFF',
                'text-primary': '#2E2E2E',
                'text-secondary': '#8A8378',
                success: '#9CAF8B',
                error: '#E8B4A0',
            },
        },
    },

    plugins: [forms],
};
