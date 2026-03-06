"use client"

import { FC, FormEvent, useState } from "react"

const ContactSection: FC = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: "100%",
    padding: ".75rem 1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: ".9rem",
    color: "#333",
    backgroundColor: "#fff",
    boxSizing: "border-box" as const,
  }

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "5rem 1rem",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: ".75rem",
            color: "#111",
          }}
        >
          Contact
        </h2>
        <p
          style={{
            fontSize: ".9rem",
            lineHeight: 1.8,
            color: "#555",
            marginBottom: "2.5rem",
          }}
        >
          For inquiries about our products and services, please reach out using the form below,
          or email us directly at{" "}
          <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
            info@scentif.ai
          </a>
          .
        </p>

        {submitted ? (
          <p style={{ color: "#33b9c5", fontSize: ".95rem" }}>
            Thank you for your message. A member of our team will be in touch shortly.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: ".375rem" }}>
              <label style={{ fontSize: ".85rem", color: "#555" }}>Name</label>
              <input type="text" required style={inputStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: ".375rem" }}>
              <label style={{ fontSize: ".85rem", color: "#555" }}>Email</label>
              <input type="email" required style={inputStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: ".375rem" }}>
              <label style={{ fontSize: ".85rem", color: "#555" }}>Company</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: ".375rem" }}>
              <label style={{ fontSize: ".85rem", color: "#555" }}>Message</label>
              <textarea
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#33b9c5",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: ".875rem",
                fontSize: ".9rem",
                fontWeight: 600,
                cursor: "pointer",
                alignSelf: "flex-start",
                minWidth: "160px",
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
