import {JSDOM} from 'jsdom';
export const getURLsFromHTML = (html: string, baseUrl: string) => {
    const urls: string[] = []
    try {
        const element = new JSDOM(html).window.document;
        const links = element.querySelectorAll('a');
        links.forEach((link) => {
            urls.push(new URL(link.getAttribute('href') ?? '', baseUrl).href);
        });
        return urls;
    } catch (error) {
        console.error('Error parsing HTML:', error);
        return [];
    }
};
