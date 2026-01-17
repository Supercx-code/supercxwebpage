import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000', // Pitch Black
                primary: '#2563EB', // Royal Metallic Blue
                secondary: '#94A3B8', // Metallic Silver
                tertiary: '#D97706', // Burnished Gold
                highlight: '#E11D48', // Metallic Rose
                surface: '#0A0A0A', // Near Black Surface
            },
            fontFamily: {
                sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'diffusion': 'radial-gradient(circle, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'glow': '0 0 60px -15px rgba(37, 99, 235, 0.4)', // Refined Blue glow
                'glow-lg': '0 0 100px -25px rgba(37, 99, 235, 0.5)',
            },
        },
    },
    plugins: [],
};

export default config;
