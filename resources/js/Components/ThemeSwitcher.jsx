import React, { useState, useEffect } from 'react';

const themes = [
    {
        name: 'Sage Green (Asli)',
        colors: {
            primary: '124 152 133',
            'primary-dark': '74 93 78',
            secondary: '232 180 160',
            background: '250 247 242',
            surface: '255 255 255',
            'text-primary': '46 46 46',
            'text-secondary': '138 131 120',
            success: '143 174 155',
            error: '201 123 123',
        }
    },
    {
        name: 'Millennial Blush',
        colors: {
            primary: '232 169 160',
            'primary-dark': '140 91 87',
            secondary: '201 172 148',
            background: '251 246 243',
            surface: '255 255 255',
            'text-primary': '58 46 43',
            'text-secondary': '156 140 134',
            success: '156 175 139',
            error: '201 115 85',
        }
    },
    {
        name: 'Digital Lavender',
        colors: {
            primary: '184 169 232',
            'primary-dark': '91 74 138',
            secondary: '168 213 232',
            background: '247 245 252',
            surface: '255 255 255',
            'text-primary': '46 36 56',
            'text-secondary': '139 132 156',
            success: '168 232 201',
            error: '232 154 154',
        }
    },
    {
        name: 'Sunwashed Pastel',
        colors: {
            primary: '229 184 176',
            'primary-dark': '122 74 82',
            secondary: '176 196 212',
            background: '245 239 228',
            surface: '253 251 247',
            'text-primary': '61 57 54',
            'text-secondary': '163 154 140',
            success: '163 184 150',
            error: '201 127 127',
        }
    },
    {
        name: 'Mocha Retro',
        colors: {
            primary: '139 111 92',
            'primary-dark': '74 56 46',
            secondary: '240 217 168',
            background: '250 245 238',
            surface: '255 255 255',
            'text-primary': '46 36 28',
            'text-secondary': '156 141 125',
            success: '138 155 114',
            error: '181 101 74',
        }
    },
    {
        name: 'Bold Accent',
        colors: {
            primary: '155 127 224',
            'primary-dark': '91 74 138',
            secondary: '244 197 66',
            background: '250 247 242',
            surface: '255 255 255',
            'text-primary': '46 46 46',
            'text-secondary': '138 131 120',
            success: '79 191 160',
            error: '240 112 90',
        }
    }
];

export default function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem('pilates-theme-idx');
        if (saved !== null) {
            setActiveTheme(parseInt(saved, 10));
        }
    }, []);

    useEffect(() => {
        const theme = themes[activeTheme].colors;
        const root = document.documentElement;
        
        Object.keys(theme).forEach(key => {
            root.style.setProperty(`--color-${key}`, theme[key]);
        });
        
        localStorage.setItem('pilates-theme-idx', activeTheme);
    }, [activeTheme]);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-64 bg-surface rounded-2xl shadow-xl border border-[#E0E0E0] p-4 flex flex-col gap-2">
                    <h4 className="text-sm font-bold text-text-primary mb-2">Dev Theme Switcher</h4>
                    {themes.map((t, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTheme(idx)}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition ${
                                activeTheme === idx ? 'bg-primary/10 text-primary-dark font-bold' : 'hover:bg-background text-text-secondary'
                            }`}
                        >
                            <span 
                                className="w-4 h-4 rounded-full border border-black/10"
                                style={{ backgroundColor: `rgb(${t.colors.primary})` }}
                            />
                            {t.name}
                        </button>
                    ))}
                </div>
            )}
            
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-primary text-surface rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
                title="Ganti Tema"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            </button>
        </div>
    );
}
