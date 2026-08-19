import { useEffect, useState } from 'react'

type TypewriterSegment = {
  text: string
  color: string
}

type TypewriterColoredProps = {
  segments: TypewriterSegment[]
  speed?: number
}

const TypewriterColored = ({ segments, speed = 40 }: TypewriterColoredProps) => {
  const [typed, setTyped] = useState<TypewriterSegment[]>([])
  const [charIndex, setCharIndex] = useState<number>(0)
  const [segmentIndex, setSegmentIndex] = useState<number>(0)

  useEffect(() => {
    if (segmentIndex >= segments.length) return

    const { text, color } = segments[segmentIndex]

    if (charIndex < text.length) {
      const timer = window.setTimeout(() => {
        setTyped((current) => {
          const nextTyped = [...current]
          const currentSegment = nextTyped[segmentIndex] ?? { text: '', color }
          nextTyped[segmentIndex] = {
            text: currentSegment.text + text.charAt(charIndex),
            color,
          }
          return nextTyped
        })

        setCharIndex((value) => value + 1)
      }, speed)

      return () => window.clearTimeout(timer)
    }

    setSegmentIndex((value) => value + 1)
    setCharIndex(0)
  }, [charIndex, segmentIndex, segments, speed])

  return (
    <p style={{ fontSize: '1rem', color: 'var(--color-text)' }}>
      {typed.map((seg, index) => (
        <span key={`${seg.text}-${index}`} style={{ color: seg.color }}>
          {seg.text}
        </span>
      ))}
      <span className="cursor">|</span>
    </p>
  )
}

export default TypewriterColored
