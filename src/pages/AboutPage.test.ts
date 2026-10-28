import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./AboutPage.tsx", import.meta.url), "utf8");

describe("About page calls to action", () => {
  it("keeps visitors on the marketing website and opens the demo request flow", () => {
    expect(source).not.toContain("Open Beebizy");
    expect(source).not.toContain("OPEN_STUDIO_URL");
    expect(source).not.toContain('studioUrl("/app")');
    expect(source.match(/Book a Free Demo/g)).toHaveLength(2);
    expect(source.match(/href="\/\?sales=1"/g)).toHaveLength(2);
  });
});
