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

const CHAR_INTERVAL = 20
const RESTART_PAUSE = 4000

// Decorative terminal that "types" a mock optimization script on an endless
// loop: character-by-character, holds the full script for RESTART_PAUSE, then
// clears and types again. Each timer schedules the next one (cleaned up on
// unmount), so the loop can never stall on an empty terminal.
export default function CodeTerminal() {
  const [chars, setChars] = useState(0)

  useEffect(() => {
    const total = CODE_LINES.join('\n').length
    const done = chars >= total
    const timer = setTimeout(
      () => setChars(done ? 0 : chars + 1),
      done ? RESTART_PAUSE : CHAR_INTERVAL,
    )
    return () => clearTimeout(timer)
  }, [chars])

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