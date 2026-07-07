import React from 'react';

export default function Badge({ children, variant = 'default', className = '' }) {
    const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    
    const variants = {
        default: 'bg-background text-text-secondary',
        primary: 'bg-primary/10 text-primary-dark',
        success: 'bg-success/10 text-success',
        warning: 'bg-secondary/10 text-secondary',
        error: 'bg-error/10 text-error',
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
