import { Redirect } from "@/components/redirect/Redirect";
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

export default async function Offer({params}: {params: {offerId: string}}) {
    const offerId = params.offerId;
    return <div>
        Nothing
        <Redirect url={`https://www.infojobs.net/madrid/instalador-cocinas/of-i${offerId}`}/>
    </div>
}