import { Redirect } from "@/components/redirect/Redirect";
import { getOffer } from "@/services/getOffer"
import { truncate } from "@/services/truncate";
import type { Metadata } from "next/types"
import styles from "./redirect-page.module.scss";

export async function generateMetadata({params}: {params: {offerId: string}}): Promise<Metadata> {
    const offerId = params.offerId;
    const offer = await getOffer(offerId);
    return {
        openGraph: {
            title: offer.title,
            siteName: 'InfoJobs',
            description: truncate(offer.description, 160),
        },
        twitter: {
            card: 'summary_large_image',
            title: offer.title,
            description: truncate(offer.description, 160),
        },
    }
}

export default async function Offer({params}: {params: {offerId: string}}) {
    const offerId = params.offerId;
    const url = `https://www.infojobs.net/madrid/instalador-cocinas/of-i${offerId}`
    return (
        <>
        <div className={styles.page}>
            <div className={styles.content}>
            Redirecting  &nbsp; <a className={styles.link} href="url">{url}</a>  
            </div>
        </div>
        <Redirect url={url}/>
        </>
    )
    
}

