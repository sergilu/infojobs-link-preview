'use client'
import { Button } from '@/components/button/Button'
import { useState } from 'react';

export interface CopyToClipboardProps {
    value: string;
}

export function CopyToClipboardButton({value}:CopyToClipboardProps) {
    const [isCopied, setIsCopied] = useState(false);

    function handleOnClick() {
        copyToClipboard(value)
            .then(() => {
            // If successful, update the isCopied state value
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        })
    }
    return (
        <Button onClick={handleOnClick}>
            {isCopied ? 'Copied!' : 'Copy'}
        </Button>
    )
}

async function copyToClipboard(value: string): Promise<void> {
    return await navigator.clipboard.writeText(value);
}