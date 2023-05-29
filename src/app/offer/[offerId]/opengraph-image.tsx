import { OfferPreview } from "@/components/offer-preview/OfferPreview";
import { ImageResponse } from "next/server";

export default async function og(props: any) {
    return new ImageResponse(
        <OfferPreview />
    )
}