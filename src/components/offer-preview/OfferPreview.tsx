import { Offer } from "@/models/Offer";
import { Logo } from "@/components/logo/Logo";
import { CSSProperties } from "react";

const previewStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    padding: '5vh',
}

const headerStyle: CSSProperties = {
    display: 'flex',
    height: '40%'
}


const offerLogoStyle: CSSProperties = {
    height: '100%',
    aspectRatio: '1',
    marginRight: '1em'
}



const titleStyle: CSSProperties = {
    fontSize: '60px',
    lineHeight: '70px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: '160px',
    maxWidth: '100%',
}

const companyNameStyle: CSSProperties = {
    fontSize: '30px',
}

const infoStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
}

const infoItemStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '40px'
}

const logoStyle: CSSProperties = {
    marginLeft: 'auto',
}

const headingsStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
            
            <div style={headerStyle}>
                {offer.logo && <img style={offerLogoStyle} src={offer.logo} />}
                <div style={headingsStyles}>
                    <div style={titleStyle}>
                        {offer.title}
                    </div>
                    <div style={companyNameStyle}>
                        {offer.company}
                    </div>
                </div>
            </div>
            <div style={infoStyle}>
                <div style={infoItemStyle}>
                    {`${offer.city},${offer.province}(${offer.country})`}
                </div>
                <div style={infoItemStyle}>
                    Contrato {offer.contractType}
                </div>
                <div style={infoItemStyle}>
                    Jornada {offer.workingHours}
                </div>
                <div style={infoItemStyle}>
                    {offer.salaryDescription}
                </div>
            </div>

            <Logo height={50} style={logoStyle} />
        </div>
    )
}