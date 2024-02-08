import { crawlPage } from "../crawlPage";

describe("crawlPage", () => {
    it("should print an error message if no url is provided", async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
        await crawlPage('', '', {});
        expect(consoleSpy).toHaveBeenCalledWith('No base url provided');
    });
    it("should print an error message if HTTP status code is > 400", async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
        await crawlPage('https://www.google.com/404', 'https://www.google.com/404', {});
        expect(consoleSpy).toHaveBeenCalledWith('HTTP status code: 404');
    });
    it("should print an error message if content-type is not text/html", async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
        await crawlPage('https://www.google.com/favicon.ico', 'https://www.google.com/favicon.ico', {});
        expect(consoleSpy).toHaveBeenCalledWith('Content type is not text/html');
    })
    it("should return an object with the pages crawled", async () => {
        const pages = await crawlPage('https://www.wagslane.dev/', 'https://www.wagslane.dev/', {});
        expect(pages).toBeInstanceOf(Object);
        expect(Object.keys(pages).length).toBeGreaterThan(0);
    });
})