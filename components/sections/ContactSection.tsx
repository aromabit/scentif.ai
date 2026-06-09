"use client"

import { ComponentProps, FC, FormEvent, useState } from "react"
import { Locale, translations } from "lib/translations"

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

const ContactSection: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = translations[locale].contact
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    await fetch("https://api.web3forms.com/submit", {
      body: JSON.stringify({
        access_key: "b5a38538-dc35-4ed2-bfaf-80de70caa8bb",
        ...data,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
    setSubmitting(false)
    setSucceeded(true)
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
          {t.title}
        </h2>
        <p
          style={{
            color: "#555",
            fontSize: ".9rem",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          {t.description}
          <a href="mailto:info@scentif.ai" style={{ color: "#33b9c5" }}>
            info@scentif.ai
          </a>
        </p>
        {succeeded ? (
          <>
            <h3>{t.thankYou}</h3>
            <p>{t.received}</p>
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
                {t.name}
              </label>
              <Input type="text" required name="name" id="name" />
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
                {t.email}
              </label>
              <Input type="email" name="email" required id="email" />
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
                {t.company}
              </label>
              <Input type="text" name="company" id="company" />
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
                {t.message}
              </label>
              <Textarea
                name="message"
                required
                rows={5}
                id="message"
                style={{ resize: "vertical" }}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
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
              {t.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactSection
