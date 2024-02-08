import { getURLsFromHTML } from "../getURLsFromHTML";

describe("getURLsFromHTML", () => {
  it("should return an empty array if there are no URLs in the HTML", () => {
    const html = "<p>Some text</p>";
    const baseUrl = "https://example.com";
    const result = getURLsFromHTML(html, baseUrl);
    expect(result).toEqual([]);
  });
  it("should return an array of URLs if there are URLs in the HTML", () => {
    const html = `
      <a href="https://example.com/page1">Page 1</a>
      <a href="https://example.com/page2">Page 2</a>
    `;
    const baseUrl = "https://example.com";
    const result = getURLsFromHTML(html, baseUrl);
    expect(result).toEqual(["https://example.com/page1", "https://example.com/page2"]);
  })
  it("should return an array of URLs with the base URL if there are relative URLs in the HTML", () => {
    const html = `
      <a href="/page1">Page 1</a>
      <a href="/page2">Page 2</a>
      <a href="https://example.com/page3">Page 2</a>
    `;
    const baseUrl = "https://example.com";
    const result = getURLsFromHTML(html, baseUrl);
    expect(result).toEqual(["https://example.com/page1", "https://example.com/page2", "https://example.com/page3"]);
  })
  it("should return an array of URLs even if they are nested in other elements", () => {
    const html = `
      <div>
        <a href="/page1">Page 1</a>
      </div>
      <p>
        <a href="/page2">Page 2</a>
      </p>
    `;
    const baseUrl = "https://example.com";
    const result = getURLsFromHTML(html, baseUrl);
    expect(result).toEqual(["https://example.com/page1", "https://example.com/page2"]);
  });
  it("should return an empty array if any error occurs", () => {
    const html = "\\/";
    const baseUrl = "https://example.com";
    const result = getURLsFromHTML(html, baseUrl);
    expect(result).toEqual([]);
  });
});