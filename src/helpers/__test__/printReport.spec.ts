import { printReport } from "../printReport";

describe("printReport", () => {
  it("should print a report", () => {
    const pages = { "/": 10, "/about": 20 };
    const consoleSpy = jest.spyOn(console, "log");
    printReport(pages);
    expect(consoleSpy).toHaveBeenCalledWith("Report:");
    expect(consoleSpy).toHaveBeenCalledWith("Found 10 views in /");
    expect(consoleSpy).toHaveBeenCalledWith("Found 20 views in /about");
  });
  it("should print a message if no pages are found", () => {
    const pages = {};
    const consoleSpy = jest.spyOn(console, "log");
    printReport(pages);
    expect(consoleSpy).toHaveBeenCalledWith("Report:");
    expect(consoleSpy).toHaveBeenCalledWith("No pages found");
  });

});