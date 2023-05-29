import { Logo } from "@/components/logo/Logo";
import { OfferPreview } from "@/components/offer-preview/OfferPreview";
import { getOffer } from "@/services/getOffer";
import { ImageResponse } from "next/server";
import { off } from "process";
//import IjLogo from "@/assets/ij-logo.svg"



export async function GET(request: Request,{params}: {params: {offerId: string}}) {
    const offerId = params.offerId;
    const offer = await getOffer(offerId)
    return new ImageResponse(
        <OfferPreview offer={offer} />
    )
}