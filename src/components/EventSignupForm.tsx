import { useState } from "react";
import type { FormEvent } from "react";
import type { CampusEvent } from "../data/events";
import { validateSignup } from "../lib/validateSignup";
import TextField from "./ui/TextField";
import Button from "./ui/Button";

type EventSignupFormProps = {
  event: CampusEvent;
};

function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    tickets: "1",
  });

  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [message, setMessage] = useState("");

  const errors = validateSignup(values, seatsLeft);

  const handleChange = (field: keyof typeof values, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      return;
    }

    const tickets = Number(values.tickets);

    setSeatsLeft((previous) => previous - tickets);
    setMessage(`Booked: ${tickets} for ${values.fullName.trim()}.`);
    setValues({ fullName: "", email: "", tickets: "1" });
  };

  return (
    <section>
      <h2>Book a seat</h2>
      <p>Seats left: {seatsLeft}</p>

      <form onSubmit={handleSubmit} noValidate>
  <TextField
    label="Full name"
    name="fullName"
    value={values.fullName}
    onChange={(e) => handleChange("fullName", e.target.value)}
    error={errors.fullName}
  />

  <TextField
    label="Email"
    name="email"
    type="email"
    value={values.email}
    onChange={(e) => handleChange("email", e.target.value)}
    error={errors.email}
  />

  <TextField
    label="Tickets"
    name="tickets"
    type="number"
    value={values.tickets}
    onChange={(e) => handleChange("tickets", e.target.value)}
    min={1}
    max={4}
    error={errors.tickets}
  />

  <Button type="submit">Book</Button>
</form>

      {message && <p role="status">{message}</p>}
    </section>
  );
}

export default EventSignupForm;