export const getNormalizedUrl = (url: string) => {
    // get an url and return domain/path
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    const path = urlObj.pathname;
    return `${domain}${path}`.replace(/\/$/, '');
}

