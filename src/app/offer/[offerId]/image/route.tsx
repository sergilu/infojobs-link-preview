import { getOfferPreviewImage } from "@/services/getOfferPreviewImage";

export async function GET(_: Request,{params}: {params: {offerId: string}}) {
    const offerId = params.offerId;
    return getOfferPreviewImage(offerId)
}