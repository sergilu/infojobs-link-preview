export function extractOfferIdFromUrl(url: string): string | null {
    const re = /(?<=of-i)[a-f0-9]+/;
    return url.match(re)![0];
}