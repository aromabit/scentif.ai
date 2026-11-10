"use client"

import { FC, FormEvent, useState } from "react"
import { Input } from "./ContactSection"
import { Locale, translations } from "lib/translations"

// ScentifAI has no English brochure yet, so both locales get the Japanese one
const items = [
  {
    image: "/uploads/2026/02/scentif-ai.jpg",
    pdf: {
      en: "/uploads/2026/03/ScentifAI_JP_v1.2.pdf",
      ja: "/uploads/2026/03/ScentifAI_JP_v1.2.pdf",
    },
    title: { en: "ScentifAI®", ja: "ScentifAI®" },
  },
  {
    image: "/uploads/2022/08/aromalyzer.jpg",
    pdf: {
      en: "/uploads/2026/03/Aromalyzer_EN_v8.5.pdf",
      ja: "/uploads/2026/03/Aromalyzer_JP_v8.5.pdf",
    },
    title: { en: "Aromalyzer®", ja: "Aromalyzer®" },
  },
  {
    image: "/uploads/2022/08/service_list.jpg",
    pdf: {
      en: "/uploads/2026/03/AnalysisService_EN_v3.5.pdf",
      ja: "/uploads/2026/03/AnalysisService_JP_v3.5.pdf",
    },
    title: {
      en: "Measurement & Analysis Service",
      ja: "受託測定・分析サービス",
    },
  },
  {
    image: "/uploads/2022/08/5c-ssm.jpg",
    pdf: {
      en: "/uploads/2026/03/5CSSM_EN_v.5.8.pdf",
      ja: "/uploads/2026/03/5CSSM_JP_v.5.8.pdf",
    },
    title: { en: "5C-SSM (CMOS)", ja: "5C-SSM (CMOS)" },
  },
  {
    image: "/uploads/2022/12/000.png",
    pdf: {
      en: "/uploads/2026/11/Corporate_Info_EN_v12.7.pdf",
      ja: "/uploads/2026/11/Corporate_Info_JP_v12.7.pdf",
    },
    title: { en: "Company Profile", ja: "会社案内資料" },
  },
]

const Field: FC<{ id: string; label: string; type?: string }> = ({
  id,
  label,
  type = "text",
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: ".375rem" }}>
    <label style={{ color: "#555", fontSize: ".85rem" }} htmlFor={id}>
      {label}
    </label>
    <Input type={type} required name={id} id={id} />
  </div>
)

const DownloadSection: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const t = translations[locale].download
  const [selected, setSelected] = useState<(typeof items)[number]>()
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  const select = (item: (typeof items)[number]) => {
    setSelected(item)
    setSucceeded(false)
    requestAnimationFrame(() =>
      document.getElementById("download-form")?.scrollIntoView({
        behavior: "smooth",
      })
    )
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selected) return
    setSubmitting(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    await fetch("https://api.web3forms.com/submit", {
      body: JSON.stringify({
        access_key: "b5a38538-dc35-4ed2-bfaf-80de70caa8bb",
        document: selected.title[locale],
        subject: `Download: ${selected.title[locale]}`,
        ...data,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
    setSubmitting(false)
    setSucceeded(true)
  }

  return (
    <section
      style={{ margin: "0 auto", maxWidth: "960px", padding: "5rem 1rem" }}
    >
      <h2 style={{ color: "#111", fontSize: "2rem", fontWeight: 700 }}>
        {t.title}
      </h2>
      <ul
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          listStyle: "none",
          margin: "2rem 0 0",
          padding: 0,
        }}
      >
        {items.map((item) => (
          <li key={item.pdf.en}>
            <img
              src={item.image}
              alt=""
              style={{
                aspectRatio: "16 / 10",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <h3 style={{ color: "#111", fontSize: "1.1rem", margin: "1rem 0" }}>
              {item.title[locale]}
            </h3>
            <button
              type="button"
              onClick={() => select(item)}
              style={{
                backgroundColor: "#33b9c5",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                cursor: "pointer",
                fontSize: ".9rem",
                fontWeight: 600,
                padding: ".75rem 1.5rem",
              }}
            >
              {t.button}
            </button>
          </li>
        ))}
      </ul>
      {selected && (
        <div
          id="download-form"
          style={{ margin: "4rem auto 0", maxWidth: "640px" }}
        >
          <h3 style={{ color: "#111", fontSize: "1.5rem", fontWeight: 700 }}>
            {selected.title[locale]}
          </h3>
          {succeeded ? (
            <>
              <p style={{ lineHeight: 1.8, margin: "1rem 0" }}>{t.thankYou}</p>
              <a
                href={selected.pdf[locale]}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#33b9c5", fontWeight: 600 }}
              >
                {t.open} →
              </a>
            </>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "#555", fontSize: ".9rem" }}>{t.lead}</p>
              <Field id="name" label={t.name} />
              <Field id="company" label={t.company} />
              <Field id="phone" label={t.phone} type="tel" />
              <Field id="email" label={t.email} type="email" />
              <p style={{ color: "#555", fontSize: ".85rem", lineHeight: 1.8 }}>
                {t.privacy}
              </p>
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
      )}
    </section>
  )
}

export default DownloadSection
