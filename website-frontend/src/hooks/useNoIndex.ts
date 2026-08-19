import { useEffect } from "react"

const ROBOTS = "noindex, nofollow, noarchive, nosnippet, noimageindex"

/**
 * Merkitsee sivun hakukoneille piilotetuksi niin kauan kuin komponentti on
 * näkyvissä. Tuotannossa nginx lähettää saman tiedon X-Robots-Tag-otsakkeessa;
 * tämä on varmistus (ja ainoa suoja dev-palvelimella).
 */
export function useNoIndex(title?: string) {
  useEffect(() => {
    const meta = document.createElement("meta")
    meta.name = "robots"
    meta.content = ROBOTS
    document.head.appendChild(meta)

    const previousTitle = document.title
    if (title) document.title = title

    return () => {
      meta.remove()
      document.title = previousTitle
    }
  }, [title])
}
