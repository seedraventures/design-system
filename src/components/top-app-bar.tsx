export default function TopAppBar() {
  return (
    <header className="bg-white flex justify-between items-center w-full px-6 py-4 sticky top-0 z-50 shadow-sm border-b border-outline-variant">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
        <h1 className="font-display font-bold text-2xl text-on-surface uppercase tracking-wider">
          Brand Identity System
        </h1>
      </div>
      <nav className="hidden md:flex gap-8">
        {['Overview', 'Logo', 'Colors', 'Typography', 'Grid'].map((item, i) => (
          <span
            key={item}
            className={`font-display font-bold text-sm cursor-pointer transition-colors ${
              i === 0
                ? 'text-primary border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {item}
          </span>
        ))}
      </nav>
    </header>
  )
}
