import TopAppBar from '@/components/top-app-bar'
import SideNav from '@/components/side-nav'
import SectionHeading from '@/components/section-heading'
import Card from '@/components/card'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <TopAppBar />
      <div className="flex flex-1">
        <SideNav />
        <main className="flex-1 lg:ml-72 p-6 md:p-12">
          <SectionHeading
            label="Mobile Branding Guideline"
            title="Vibrant Modernity"
            description="Defining a visual language that balances high-contrast energy with corporate precision. This system is designed for clarity, impact, and a digital-first presence."
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-7xl mx-auto mt-8">
            <div className="md:col-span-8">
              <Card title="Logo Standards" subtitle="Usage protocols for our primary mark." icon="architecture">
                <div className="aspect-video bg-zinc-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-display text-2xl tracking-widest uppercase">SEEDRA</span>
                </div>
              </Card>
            </div>
            <div className="md:col-span-4">
              <Card title="Color Palette" icon="palette">
                {[
                  { label: 'Primary Purple', hex: '#7C3AED', cls: 'bg-primary-container' },
                  { label: 'Secondary Blue', hex: '#0EA5FF', cls: 'bg-secondary-container' },
                  { label: 'Tertiary Green', hex: '#22C55E', cls: 'bg-tertiary-container' },
                  { label: 'Accent Orange', hex: '#F97316', cls: 'bg-orange-500' },
                  { label: 'Solid Black', hex: '#1B1B1B', cls: 'bg-on-surface' },
                ].map((c) => (
                  <div key={c.hex} className="flex items-center gap-md py-1">
                    <div className={`w-10 h-10 rounded-lg shadow-soft ${c.cls}`} />
                    <div>
                      <p className="text-label-lg uppercase">{c.label}</p>
                      <p className="text-label-md text-on-surface-variant">{c.hex}</p>
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
