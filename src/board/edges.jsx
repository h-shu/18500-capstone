import React from "react";

export function TopLeft() {
    return (
        <svg width='100%' height='100%'>
            <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="black"/>
            <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="black"/>
        </svg>
    );
}

export function BottomLeft() {
    return (
        <svg width='100%' height='100%'>
            <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="black"/>
            <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="black"/>
        </svg>
    );
}

export function BottomRight() {
    return (
        <svg width='100%' height='100%'>
            <line x1="50%" y1="50%" x2="0%" y2="50%" stroke="black"/>
            <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="black"/>
        </svg>
    );
}

export function TopRight() {
    return (
        <svg width='100%' height='100%'>
            <line x1="50%" y1="50%" x2="0%" y2="50%" stroke="black"/>
            <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="black"/>
        </svg>
    );
}

export function Left() {
    return (
        <svg width='100%' height='100%'>
            <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black"/>
            <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="black"/>
        </svg>
    );
}

export function Right() {
    return (
        <svg width='100%' height='100%'>
            <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black"/>
            <line x1="50%" y1="50%" x2="0%" y2="50%" stroke="black"/>
        </svg>
    );
}

export function Top() {
    return (
        <svg width='100%' height='100%'>
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black"/>
            <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="black"/>
        </svg>
    );
}

export function Bottom() {
    return (
        <svg width='100%' height='100%'>
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black"/>
            <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="black"/>
        </svg>
    );
}

export function Middle() {
    return (
        <svg width='100%' height='100%'>
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black"/>
            <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="black"/>
        </svg>
    );
}