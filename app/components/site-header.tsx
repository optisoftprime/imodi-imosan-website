export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 pb-6 pt-2 text-slate-200">
      <div>
        <p className="text-lg font-semibold tracking-tight text-slate-100">Imodi Imosan</p>
        <p className="text-sm text-slate-400">Modern website design + development</p>
      </div>
      <nav className="hidden items-center gap-8 sm:flex">
        <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white">
          Features
        </a>
        <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white">
          Contact
        </a>
      </nav>
    </header>
  );
}
