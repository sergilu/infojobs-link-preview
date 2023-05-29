'use client'
import { useEffect } from "react";

export interface RedirectProps {
    url: string;
}

export function Redirect({
    url
}: RedirectProps) {
    useEffect(() => {
        window.location.href = url
    }, [url])
    return null;
}