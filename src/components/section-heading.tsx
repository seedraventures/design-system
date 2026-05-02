interface Props {
  label: string
  title: string
  description: string
}

export default function SectionHeading({ label, title, description }: Props) {
  return (
    <section className="mb-xl max-w-5xl mx-auto">
      <span className="text-label-lg text-primary uppercase mb-base block">{label}</span>
      <h1 className="text-display-xl text-on-surface mb-md font-display">{title}</h1>
      <div className="h-1 w-24 bg-primary mb-lg" />
      <p className="text-body-lg text-on-surface-variant max-w-2xl">{description}</p>
    </section>
  )
}
