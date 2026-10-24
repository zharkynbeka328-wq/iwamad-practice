import { describe, expect, it } from "vitest";
import { validateSignup } from "./validateSignup";

const valid = {
  fullName: "Aliya Nurlanovna",
  email: "aliya@example.com",
  tickets: "2",
};

describe("validateSignup", () => {
  it("returns no errors for valid values", () => {
    expect(validateSignup(valid, 10)).toEqual({});
  });

  it("rejects zero tickets", () => {
    expect(validateSignup({ ...valid, tickets: "0" }, 10)).toEqual({
      tickets: "Choose 1 to 4 tickets",
    });
  });

  it("rejects more than four tickets", () => {
    expect(validateSignup({ ...valid, tickets: "5" }, 10)).toEqual({
      tickets: "Choose 1 to 4 tickets",
    });
  });

  it("rejects fractional tickets", () => {
    expect(validateSignup({ ...valid, tickets: "1.5" }, 10)).toEqual({
      tickets: "Choose 1 to 4 tickets",
    });
  });

  it("accepts four tickets", () => {
    expect(validateSignup({ ...valid, tickets: "4" }, 10)).toEqual({});
  });

  it("rejects more tickets than seats left", () => {
    expect(validateSignup({ ...valid, tickets: "3" }, 2)).toEqual({
      tickets: "Only 2 seats left",
    });
  });
});