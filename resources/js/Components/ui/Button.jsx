import React from 'react';

export default function Button({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    disabled, 
    ...props 
}) {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
        primary: 'bg-primary hover:bg-primary-dark text-surface focus:ring-primary',
        secondary: 'bg-secondary hover:bg-[#d69f8a] text-text-primary focus:ring-secondary',
        outline: 'border border-primary text-primary hover:bg-background focus:ring-primary',
        danger: 'bg-error hover:bg-[#b06666] text-surface focus:ring-error',
        ghost: 'hover:bg-background text-text-primary',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={classes} disabled={disabled} {...props}>
            {children}
        </button>
    );
}
