// Reusable "heading + bullet list" block used across Services, Integrated
// Services and Solutions.
export default function SectionList({ heading, bullets, children }) {
  return (
    <section className="section-list">
      {heading && <h3>{heading}</h3>}
      <ul>
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {children}
    </section>
  )
}