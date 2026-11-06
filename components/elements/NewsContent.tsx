"use client"

import { FC, useEffect, useRef } from "react"

// iOS Safari shows only the first page of a PDF in an iframe, so render every page with pdf.js instead
const renderPdf = async (iframe: HTMLIFrameElement) => {
  const pdfjs = await import("pdfjs-dist")
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString()

  const container = document.createElement("div")
  container.className = "pdf-pages"
  iframe.replaceWith(container)

  const pdf = await pdfjs.getDocument({ url: iframe.src }).promise
  const ratio = Math.min(window.devicePixelRatio, 2)
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const base = page.getViewport({ scale: 1 })
    const viewport = page.getViewport({
      scale: (container.clientWidth / base.width) * ratio,
    })
    const canvas = document.createElement("canvas")
    canvas.width = viewport.width
    canvas.height = viewport.height
    container.append(canvas)
    await page.render({ canvas, viewport }).promise
  }
}

const NewsContent: FC<{ html: string }> = ({ html }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current
      ?.querySelectorAll<HTMLIFrameElement>("iframe.embed-pdf-viewer")
      .forEach((iframe) => renderPdf(iframe).catch(console.error))
  }, [])

  return (
    <div
      ref={ref}
      className="news-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default NewsContent
