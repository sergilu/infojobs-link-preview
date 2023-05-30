'use client'
import { useEffect } from "react";

export interface RedirectProps {
    url: string;
}

export function Redirect({
    url
}: RedirectProps) {
    useEffect(() => {
        window.location.replace(url);
    }, [url])
    return null;
}