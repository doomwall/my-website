import { useCallback, useEffect, useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { characters, questions, scoreAnswers } from "@/data/kirjakerho"
import { useNoIndex } from "@/hooks/useNoIndex"

const STORAGE_KEY = "kirjakerho-answers-v1"

type Stage = "intro" | "quiz" | "result"

function loadAnswers(): (number | null)[] {
  if (typeof window === "undefined") return questions.map(() => null)
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return questions.map(() => null)
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed) || parsed.length !== questions.length) {
      return questions.map(() => null)
    }
    return parsed.map((v: unknown) => (typeof v === "number" ? v : null))
  } catch {
    return questions.map(() => null)
  }
}

function KirjakerhoPage() {
  useNoIndex("Kirjakerho – Kuka olet Sadan vuoden yksinäisyydessä?")

  const [stage, setStage] = useState<Stage>("intro")
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(() => loadAnswers())
  const [copied, setCopied] = useState(false)

  const answeredCount = answers.filter((a) => a !== null).length
  const hasProgress = answeredCount > 0

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
    } catch {
      // localStorage voi olla pois käytöstä — testi toimii silti
    }
  }, [answers])

  const results = useMemo(() => scoreAnswers(answers), [answers])
  const top = results[0]
  const runnersUp = results.slice(1, 4)

  const answer = useCallback(
    (optionIndex: number) => {
      setAnswers((prev) => {
        const next = [...prev]
        next[current] = optionIndex
        return next
      })
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1)
      } else {
        setStage("result")
      }
    },
    [current]
  )

  const back = useCallback(() => {
    if (current > 0) setCurrent((c) => c - 1)
  }, [current])

  const restart = useCallback(() => {
    setAnswers(questions.map(() => null))
    setCurrent(0)
    setCopied(false)
    setStage("intro")
  }, [])

  // Näppäimistöllä: 1–4 valitsee vastauksen, askelpalautin palaa taaksepäin.
  useEffect(() => {
    if (stage !== "quiz") return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        e.preventDefault()
        back()
        return
      }
      const index = Number(e.key) - 1
      if (Number.isInteger(index) && index >= 0 && index < questions[current].options.length) {
        answer(index)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [stage, current, answer, back])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [stage])

  const copyResult = async () => {
    const text =
      `Sadan vuoden yksinäisyys – kirjakerhotesti\n` +
      `Minä olen: ${top.character.name} (${top.character.epithet})\n` +
      `Myös: ${runnersUp.map((r) => `${r.character.name} ${r.percent} %`).join(", ")}\n` +
      `Tee testi: tuomovalkila.dev/kirjakerho`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const progress = stage === "result" ? 100 : (current / questions.length) * 100

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Kirjakerho
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Kuka olet <span className="text-primary">Sadan vuoden yksinäisyydessä</span>?
          </h1>
          <p className="text-muted-foreground mt-1">
            Gabriel García Márquez · {questions.length} kysymystä · noin 3 minuuttia
          </p>
        </div>

        {stage !== "intro" && (
          <div className="flex flex-col gap-2">
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>
                {stage === "result"
                  ? "Valmis"
                  : `Kysymys ${current + 1} / ${questions.length}`}
              </span>
              <span>{Math.round(progress)} %</span>
            </div>
          </div>
        )}

        {stage === "intro" && (
          <Card>
            <CardContent className="flex flex-col gap-5 p-6">
              <p className="leading-relaxed">
                Vastaa rehellisesti — älä sen mukaan, kenen hahmon haluaisit olla. Testi
                laskee vastauksista, kuka Buendían suvun (tai Macondon) hahmoista on
                lähimpänä sinua, ja mitkä kaksi tai kolme muuta kulkevat perässä.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Testissä on {questions.length} kysymystä ja {characters.length} mahdollista
                hahmoa. Ei oikeita vastauksia, ei spoilereita jotka pilaisivat juonen —
                korkeintaan muutama vihje siitä, mihin suku on menossa. Vastaukset jäävät
                vain tähän selaimeen; mitään ei lähetetä mihinkään.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="lg"
                  onClick={() => {
                    if (hasProgress) setAnswers(questions.map(() => null))
                    setCurrent(0)
                    setStage("quiz")
                  }}
                >
                  {hasProgress ? "Aloita alusta" : "Aloita testi"}
                </Button>
                {hasProgress && (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      const firstUnanswered = answers.findIndex((a) => a === null)
                      setCurrent(firstUnanswered === -1 ? questions.length - 1 : firstUnanswered)
                      setStage(firstUnanswered === -1 ? "result" : "quiz")
                    }}
                  >
                    Jatka ({answeredCount}/{questions.length})
                  </Button>
                )}
              </div>
              {hasProgress && (
                <button
                  type="button"
                  onClick={restart}
                  className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground self-start cursor-pointer"
                >
                  Tyhjennä aiemmat vastaukset
                </button>
              )}
            </CardContent>
          </Card>
        )}

        {stage === "quiz" && (
          <div key={current} className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h2 className="text-xl md:text-2xl font-semibold leading-snug">
              {questions[current].question}
            </h2>

            <div className="flex flex-col gap-3">
              {questions[current].options.map((option, i) => {
                const selected = answers[current] === i
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => answer(i)}
                    className={`group w-full text-left rounded-xl ring-1 p-4 flex items-start gap-3 cursor-pointer transition-colors duration-200 ${
                      selected
                        ? "ring-primary bg-primary/10"
                        : "ring-foreground/10 bg-card hover:bg-muted/60"
                    }`}
                  >
                    <span
                      className={`shrink-0 size-6 rounded-md grid place-items-center text-xs font-medium transition-colors ${
                        selected
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/20"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{option.text}</span>
                  </button>
                )
              })}
            </div>

            <div className="flex items-center justify-between pt-2">
              <Button variant="outline" size="sm" onClick={back} disabled={current === 0}>
                Takaisin
              </Button>
              <span className="text-xs text-muted-foreground hidden md:block">
                Vinkki: voit vastata näppäimillä 1–{questions[current].options.length}
              </span>
            </div>
          </div>
        )}

        {stage === "result" && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Card>
              <CardContent className="flex flex-col gap-5 p-6">
                <div className="flex items-center gap-4">
                  <div className="size-16 shrink-0 rounded-full bg-primary/15 text-primary grid place-items-center text-xl font-bold ring-1 ring-primary/30">
                    {top.character.monogram}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Sinä olet
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      {top.character.name}
                    </h2>
                    <p className="text-primary text-sm font-medium">
                      {top.character.epithet}
                    </p>
                  </div>
                </div>

                <p className="leading-relaxed">{top.character.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {top.character.strengths.map((s) => (
                    <Badge key={s} variant="outline">
                      {s}
                    </Badge>
                  ))}
                </div>

                <div className="rounded-xl bg-muted/50 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Yksinäisyytesi
                  </p>
                  <p className="text-sm leading-relaxed">{top.character.shadow}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Sinussa on myös</h3>
              {runnersUp.map((r) => (
                <div key={r.character.id} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="font-medium">
                      {r.character.name}{" "}
                      <span className="text-muted-foreground font-normal text-sm">
                        · {r.character.epithet}
                      </span>
                    </span>
                    <span className="text-sm text-muted-foreground shrink-0">
                      {r.percent} %
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary/60 transition-[width] duration-700 ease-out"
                      style={{ width: `${r.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={copyResult}>
                {copied ? "Kopioitu!" : "Kopioi tulos"}
              </Button>
              <Button variant="outline" onClick={() => { setCurrent(0); setStage("quiz") }}>
                Katso vastaukseni
              </Button>
              <Button variant="outline" onClick={restart}>
                Tee uudestaan
              </Button>
            </div>

            <details className="rounded-xl ring-1 ring-foreground/10 bg-card p-4">
              <summary className="cursor-pointer text-sm font-medium">
                Kaikki {characters.length} hahmoa
              </summary>
              <div className="mt-4 flex flex-col gap-3">
                {results.map((r) => (
                  <div key={r.character.id} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className={r.character.id === top.character.id ? "font-semibold" : ""}>
                      {r.character.name}
                      <span className="text-muted-foreground"> · {r.character.epithet}</span>
                    </span>
                    <span className="text-muted-foreground shrink-0">{r.percent} %</span>
                  </div>
                ))}
              </div>
            </details>
          </div>
        )}

        <p className="text-xs text-muted-foreground pt-4">
          Yksityinen kirjakerhosivu · ei linkitetty muualta sivustolta
        </p>
      </div>
    </div>
  )
}

export default KirjakerhoPage
