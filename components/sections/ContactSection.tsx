"use client"

import { ComponentProps, FC } from "react"
import { useForm, ValidationError } from "@formspree/react"

const Input: FC<ComponentProps<"input">> = ({ style, ...props }) => (
  <input
    style={{
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "4px",
      boxSizing: "border-box" as const,
      color: "#333",
      fontSize: ".9rem",
      padding: ".75rem 1rem",
      width: "100%",
      ...style,
    }}
    {...props}
  />
)

const Textarea: FC<ComponentProps<"textarea">> = ({ style, ...props }) => (
  <textarea
    style={{
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "4px",
      boxSizing: "border-box" as const,
      color: "#333",
      fontSize: ".9rem",
      padding: ".75rem 1rem",
      width: "100%",
      ...style,
    }}
    {...props}
  />
)

const ContactSection: FC = () => {
  const [state, handleSubmit] = useForm("xjgawvge")

  return (
    <section id="contact" style={{ backgroundColor: "#f5f5f5" }}>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "640px",
          padding: "5rem 1rem",
        }}
      >
        <h2
          style={{
            color: "#111",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: ".75rem",
          }}
        >
          Contact
        </h2>
        <p
          style={{
            color: "#555",
            fontSize: ".9rem",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          For inquiries about our products and services, please reach out using
          the form below, or email us directly at &nbsp;
          <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
            info@scentif.ai
          </a>
        </p>
        {state.succeeded ? (
          <>
            <h3>Thank you for your inquiry.</h3>
            <p>
              We have received your message and will get back to you as soon as
              possible.
            </p>
          </>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".375rem",
              }}
            >
              <label
                style={{ color: "#555", fontSize: ".85rem" }}
                htmlFor="name"
              >
                Name
              </label>
              <Input type="text" required name="name" id="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".375rem",
              }}
            >
              <label
                style={{ color: "#555", fontSize: ".85rem" }}
                htmlFor="email"
              >
                Email
              </label>
              <Input type="email" name="email" required id="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".375rem",
              }}
            >
              <label
                style={{ color: "#555", fontSize: ".85rem" }}
                htmlFor="company"
              >
                Company
              </label>
              <Input type="text" name="company" id="company" />
              <ValidationError
                prefix="Company"
                field="company"
                errors={state.errors}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".375rem",
              }}
            >
              <label
                style={{ color: "#555", fontSize: ".85rem" }}
                htmlFor="message"
              >
                Message
              </label>
              <Textarea
                name="message"
                required
                rows={5}
                id="message"
                style={{ resize: "vertical" }}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#33b9c5",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                cursor: "pointer",
                fontSize: ".9rem",
                fontWeight: 600,
                minWidth: "160px",
                padding: ".875rem",
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactSection
