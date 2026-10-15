
import { describe, it, expect } from "vitest";
import { validateRegistration } from "./validateRegistration";
import type { RegistrationValues } from "./validateRegistration";

const valid: RegistrationValues = {
  fullName: "Aliya Nurlanovna",
  email: "aliya@example.com",
  password: "almaty2026",
  confirmPassword: "almaty2026",
  acceptTerms: true,
};

describe("validateRegistration", () => {
  it("returns no errors for valid values", () => {
    expect(validateRegistration(valid)).toEqual({});
  });

  it("requires a full name", () => {
    expect(
      validateRegistration({ ...valid, fullName: "   " }).fullName,
    ).toBe("Enter your full name");
  });

  it("checks email format", () => {
    expect(
      validateRegistration({ ...valid, email: "aliya@example" }).email,
    ).toBe("Enter a valid email, like name@example.com");
  });

  it("accepts a password with eight characters and a number", () => {
    expect(
      validateRegistration({
        ...valid,
        password: "almaty26",
        confirmPassword: "almaty26",
      }),
    ).toEqual({});
  });

  it("checks password length", () => {
    expect(
      validateRegistration({
        ...valid,
        password: "almaty2",
        confirmPassword: "almaty2",
      }).password,
    ).toBe("Use at least 8 characters");
  });

  it("requires a number in the password", () => {
    expect(
      validateRegistration({
        ...valid,
        password: "almatycity",
        confirmPassword: "almatycity",
      }).password,
    ).toBe("Include at least one number");
  });

  it("checks that passwords match", () => {
    expect(
      validateRegistration({
        ...valid,
        confirmPassword: "almaty2027",
      }).confirmPassword,
    ).toBe("Passwords do not match");
  });

  it("requires accepting the terms", () => {
    expect(
      validateRegistration({ ...valid, acceptTerms: false }).acceptTerms,
    ).toBe("Accept the terms to continue");
  });
});
