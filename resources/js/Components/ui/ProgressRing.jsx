import React, { useEffect, useState } from 'react';

export default function ProgressRing({ radius = 40, stroke = 8, progress = 0, total = 100 }) {
    const [offset, setOffset] = useState(0);
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    useEffect(() => {
        const percent = Math.min(Math.max(progress / total, 0), 1);
        const strokeDashoffset = circumference - percent * circumference;
        
        // Timeout to allow the CSS transition to trigger after mount
        const timer = setTimeout(() => setOffset(strokeDashoffset), 100);
        return () => clearTimeout(timer);
    }, [progress, total, circumference]);

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg
                height={radius * 2}
                width={radius * 2}
                className="transform -rotate-90"
            >
                {/* Background ring */}
                <circle
                    stroke="var(--color-primary)"
                    strokeOpacity="0.15"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                {/* Progress ring */}
                <circle
                    stroke="var(--color-primary)"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset: offset }}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    className="transition-all duration-1000 ease-out"
                />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-primary tabular-nums">{progress}</span>
                <span className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Sesi</span>
            </div>
        </div>
    );
}
