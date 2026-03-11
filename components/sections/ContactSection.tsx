"use client"

import { FC } from "react"

const ContactSection: FC = () => {
  const inputStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box" as const,
    color: "#333",
    fontSize: ".9rem",
    padding: ".75rem 1rem",
    width: "100%",
  }

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
          the form below, or email us directly at{" "}
          <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
            info@scentif.ai
          </a>
          .
        </p>
        <form
          action="https://formspree.io/f/xjgawvge"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".375rem",
            }}
          >
            <label style={{ color: "#555", fontSize: ".85rem" }} htmlFor="name">
              Name
            </label>
            <input type="text" required id="name" style={inputStyle} />
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
            <input type="email" required id="email" style={inputStyle} />
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
            <input type="text" id="company" style={inputStyle} />
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
            <textarea
              required
              rows={5}
              id="message"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>
          <button
            type="submit"
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
      </div>
    </section>
  )
}

export default ContactSection
