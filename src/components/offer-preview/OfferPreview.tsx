import { Offer } from "@/models/Offer";
import { Logo } from "@/components/logo/Logo";
import { CSSProperties } from "react";

const previewStyle: CSSProperties = {
    display: 'flex',
}

const titleStyle: CSSProperties = {

}

const offerLogoStyle: CSSProperties = {
    height: '100px',
    width: '100px',
}

const headerStyle: CSSProperties = {
    display: 'flex'
}

export interface OfferPreviewProps {
    offer: Offer;
    className?: string 
}

export function OfferPreview({
    offer,
    className,
}: OfferPreviewProps) {
    return (
        <div style={previewStyle} className={className}>
            <Logo />
            <div style={headerStyle}>
                <img style={offerLogoStyle} src={offer.logo} />
               
                 <div style={titleStyle}>
                    {offer.title}
                </div>
            </div>
           
        </div>
    )
}