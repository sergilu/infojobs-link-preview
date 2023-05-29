import { ImageResponse } from "next/server";
import { getOffer } from "@/services/getOffer"
import { OfferPreview } from "@/components/offer-preview/OfferPreview";

export async function getOfferPreviewImage(offerId: string): Promise<ImageResponse> {
    const offer = await getOffer(offerId)
    return new ImageResponse(
        <OfferPreview offer={offer} />
    )
}