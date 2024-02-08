import { checkIfAreSameDomain } from "./checkIfAreSameDomain";
import { getNormalizedUrl } from "./getNormalizedUrl";
import { getURLsFromHTML } from "./getURLsFromHTML";

export const crawlPage = async (baseUrl: string, currentUrl: string, pages: Record<string,number>) : Promise<Record<string,number>> => {
    if (!baseUrl || !currentUrl) {
       console.error('No base url provided');
        return {}
    }
    if (!checkIfAreSameDomain(baseUrl, currentUrl)) {
        return pages
    }
    const normalizedCurrentUrl = getNormalizedUrl(currentUrl);
    if (pages[normalizedCurrentUrl] > 0) {
        pages[normalizedCurrentUrl] += 1;
        return pages      
    }
    if (normalizedCurrentUrl !== baseUrl) {
        pages[normalizedCurrentUrl] = 1;
    } else {
        pages[normalizedCurrentUrl] = 0;
    }
    
    try {
        console.log('Crawling:', currentUrl)
        const html = await fetch(currentUrl); 
        if (html.status >= 400) {
            console.error(`HTTP status code: ${html.status}`);
            return pages
        }        
        const contentType = html.headers.get('content-type');
        if (!contentType || !contentType.includes('text/html')) {
            console.error('Content type is not text/html');
            return pages

        }
        const body = await html.text();
        const urlsInCurrentPage = getURLsFromHTML(body, currentUrl);
        for (const url of urlsInCurrentPage) {
                pages = await crawlPage(baseUrl, url, pages);
        }
        return pages

    } catch (error: any) {
        console.log(error)
        console.error('Error fetching page:', error.message);
        return {}
    }
};