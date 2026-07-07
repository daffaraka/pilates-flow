import React from 'react';

export default function Card({ children, className = '', ...props }) {
    return (
        <div 
            className={`bg-surface rounded-2xl shadow-sm border border-[#F0EBE1] overflow-hidden ${className}`} 
            {...props}
        >
            {children}
        </div>
    );
}

Card.Header = function CardHeader({ children, className = '' }) {
    return (
        <div className={`px-6 py-4 border-b border-[#F0EBE1] ${className}`}>
            {children}
        </div>
    );
};

Card.Body = function CardBody({ children, className = '' }) {
    return (
        <div className={`px-6 py-4 ${className}`}>
            {children}
        </div>
    );
};

Card.Footer = function CardFooter({ children, className = '' }) {
    return (
        <div className={`px-6 py-4 bg-background/50 border-t border-[#F0EBE1] ${className}`}>
            {children}
        </div>
    );
};
