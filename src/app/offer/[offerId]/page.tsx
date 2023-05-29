import { getOffer } from "@/services/getOffer"
import type { Metadata } from "next/types"

export async function generateMetadata({params}: {params: {offerId: string}}): Promise<Metadata> {
    const offerId = params.offerId;
    const offer = await getOffer(offerId);
    return {
        openGraph: {
            type: 'website',
            title: offer.title,
            siteName: 'InfoJobs'
        }
    }
}

export default async function Offer() {

    return <div>
        Nothing
    </div>
}