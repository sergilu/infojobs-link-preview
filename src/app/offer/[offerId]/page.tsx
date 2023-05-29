import { getOffer } from "@/services/getOffer"

const id = 'cc8923015d4b038a82708f346b1d76';

export default async function Offer() {
    const response = await getOffer(id)
    return <div>
        {JSON.stringify(response)}
    </div>
}