import { checkIfAreSameDomain } from "../checkIfAreSameDomain";

describe("checkIfAreSameDomain", () => {
  it("should return true if the domains are the same", () => {
    expect(checkIfAreSameDomain("https://www.google.com", "https://www.google.com")).toBe(true);
  });

  it("should return false if the domains are different", () => {
    expect(checkIfAreSameDomain("https://www.google.com", "https://www.facebook.com")).toBe(false);
  });
});