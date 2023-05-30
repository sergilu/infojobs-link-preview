'use client'
import { Button } from '@/components/button/Button'

export interface LinkShareProps {
    link: string;
}

export function LinkShare({link}: LinkShareProps) {
    function share() {
        window.navigator.share({
            url: link
        })
    }
    return <Button onClick={() => share()}>
        Share
    </Button>
}