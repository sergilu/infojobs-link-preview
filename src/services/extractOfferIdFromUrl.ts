export function extractOfferIdFromUrl(url: string) {
    const re = /(?<=of-i)[a-f0-9]+/;
    return url.match(re);
}