export const checkIfAreSameDomain = (url1: string, url2: string) => {
    const urlObj1 = new URL(url1);
    const urlObj2 = new URL(url2);
    return urlObj1.hostname === urlObj2.hostname;
};