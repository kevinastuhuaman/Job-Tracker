import { validateProspect } from "../prospect-helpers";

describe("prospect creation validation", () => {
  test("rejects a blank company name", () => {
    const result = validateProspect({
      companyName: "",
      roleTitle: "Software Engineer",
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Company name is required");
  });

  test("rejects a blank role title", () => {
    const result = validateProspect({
      companyName: "Google",
      roleTitle: "",
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Role title is required");
  });

  test("accepts a prospect with salary field", () => {
    const result = validateProspect({
      companyName: "Google",
      roleTitle: "Product Manager",
      salary: "$150,000",
    });
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test("accepts a prospect without salary field", () => {
    const result = validateProspect({
      companyName: "Meta",
      roleTitle: "Engineer",
    });
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
});
