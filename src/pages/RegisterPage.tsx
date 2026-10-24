
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { validateRegistration } from "../lib/validateRegistration";
import type { RegistrationValues } from "../lib/validateRegistration";
import TextField from "../components/ui/TextField";
import Button from "../components/ui/Button";

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;

    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setSubmitted(false);
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  }

  function getError(field: keyof RegistrationValues) {
    return touched[field] || submitAttempted
      ? errors[field]
      : undefined;
  }

  if (submitted) {
    return (
      <section>
        <h2 className="register-title">Create your account</h2>
        <p role="status">
          Thanks, {values.fullName.trim()}. You are registered.
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2 className="register-title">Create your account</h2>
      <p className="register-subtitle">
        Fill in your details to get started.
      </p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          name="fullName"
          label="Full name"
          placeholder="Enter your full name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError("fullName")}
          autoComplete="name"
        />

        <TextField
          name="email"
          label="Email"
          type="email"
          placeholder="name@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError("email")}
          autoComplete="email"
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError("password")}
          autoComplete="new-password"
        />

        <TextField
          name="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="Repeat your password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError("confirmPassword")}
          autoComplete="new-password"
        />

        <div className="field">
          <label className="check">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={getError("acceptTerms") ? true : undefined}
              aria-describedby={
                getError("acceptTerms")
                  ? "acceptTerms-error"
                  : undefined
              }
            />
            I accept the terms and conditions
          </label>

          {getError("acceptTerms") && (
            <p id="acceptTerms-error" className="field-error">
              {getError("acceptTerms")}
            </p>
          )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </section>
  );
}

export default RegisterPage;
