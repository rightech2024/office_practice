export function splitString(str: string) {
    const characters: string[] = [];
    const regex = /[\s\S]/g;

    let match;

    while ((match = regex.exec(str)) !== null) {
        characters.push(match[0]);
    }

    return characters;
}