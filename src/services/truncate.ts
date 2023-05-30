export function truncate(text: string, maxCharacters: number) {
    const regex = new RegExp(`^(.{${maxCharacters}}[^\s]*).*`)
    return text.replace(regex, "$1"); 
}