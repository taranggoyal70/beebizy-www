import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./LandingPage.tsx", import.meta.url), "utf8");

describe("homepage automation features", () => {
  it("explains the connected event workflow instead of listing isolated tools", () => {
    expect(source).toContain("The busywork runs itself.");
    expect(source).toContain("One connected workflow");
    expect(source).toContain("Automated where it should be. Editable where it matters.");

    for (const step of ["Plan", "Invite", "Coordinate", "Welcome", "Report"]) {
      expect(source).toContain(`label: "${step}"`);
    }
  });

  it("covers the event operations Beebizy currently provides", () => {
    for (const feature of [
      "Guided event launch",
      "Invitations, RSVPs, and QR codes",
      "Check-in and badge printing",
      "Run of show and team updates",
      "Vendors, payments, and floor plans",
      "Tickets, fundraising, and reports",
    ]) {
      expect(source).toContain(feature);
    }
  });

  it("replaces the legacy feature section without breaking its anchor", () => {
    expect(source).toContain('document.getElementById("features")');
    expect(source).toContain('featureHost.id = "features"');
    expect(source).toContain('featureRoot.render(<AutomationFeatureSection />)');
  });

  it("uses the yellow, black, and white Beebizy palette for the automation flow", () => {
    expect(source).toContain('border border-primary/45 bg-primary/10');
    expect(source).toContain('bg-white/80');
    expect(source).toContain('text-gray-950');
    expect(source).not.toContain('rgba(120,78,0');
  });

  it("positions the homepage for universities, schools, and nonprofits", () => {
    expect(source).toContain("Universities & Colleges");
    expect(source).toContain(">Schools<");
    expect(source).toContain(">Nonprofits<");
    expect(source.toLowerCase()).not.toContain("enterprise");
  });
});
