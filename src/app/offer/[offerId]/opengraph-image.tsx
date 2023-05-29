import { getOfferPreviewImage } from "@/services/getOfferPreviewImage";


export default async function OfferOpenGraphImage({params}: {params: {offerId: string}}) {
    const offerId = params.offerId;
    return getOfferPreviewImage(offerId);
}