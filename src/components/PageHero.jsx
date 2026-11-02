export default function PageHero({ title, subtitle }) {
  return (
    <div className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  )
}