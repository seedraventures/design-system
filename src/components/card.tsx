interface Props {
  title: string
  subtitle?: string
  icon?: string
  children?: React.ReactNode
}

export default function Card({ title, subtitle, icon, children }: Props) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-lg shadow-soft border border-outline-variant h-full">
      <div className="flex justify-between items-start mb-lg">
        <div>
          <h3 className="text-headline-md text-on-surface mb-xs">{title}</h3>
          {subtitle && <p className="text-body-sm text-on-surface-variant">{subtitle}</p>}
        </div>
        {icon && (
          <span className="material-symbols-outlined text-primary">{icon}</span>
        )}
      </div>
      <div className="space-y-base">{children}</div>
    </div>
  )
}
