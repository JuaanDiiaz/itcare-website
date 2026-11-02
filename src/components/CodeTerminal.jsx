import { useEffect, useState } from 'react'

const CODE_LINES = [
  'const cliente = new Negocio();',
  '',
  'await itcare.optimizar(cliente.erp);',
  '// ✓ Migración sin interrupciones',
  '// ✓ SLA 99.9% cumplido',
  '',
  'const resultados = await itcare.medir();',
  'console.log(resultados);',
  '',
  '// { eficiencia: "+40%", costos: "-30%", roi: "+120%" }',
]

const CHAR_INTERVAL = 24
const LINE_PAUSE = 120
const RESTART_PAUSE = 4000

// Decorative terminal that "types" a mock optimization script on a loop.
export default function CodeTerminal() {
  const [chars, setChars] = useState(0)

  useEffect(() => {
    const total = CODE_LINES.join('\n').length
    const timer = setInterval(() => {
      setChars((current) => {
        if (current < total) return current + 1
        clearInterval(timer)
        setTimeout(() => setChars(0), RESTART_PAUSE)
        return current
      })
    }, CHAR_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  // Build the visible output from the typed character count.
  let remaining = chars
  const visibleLines = []
  for (const line of CODE_LINES) {
    if (remaining <= 0) break
    visibleLines.push(line.slice(0, remaining))
    remaining -= line.length + 1 // +1 accounts for the newlines between lines
  }

  return (
    <div className="terminal" aria-hidden="true">
      <div className="terminal-bar">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-title">itcare — proyecto.sh</span>
      </div>
      <pre className="terminal-body">
        {visibleLines.map((line, i) => (
          <code key={i} className={line.startsWith('//') ? 'terminal-comment' : ''}>
            {line}
            {'\n'}
          </code>
        ))}
        <span className="terminal-cursor" />
      </pre>
    </div>
  )
}