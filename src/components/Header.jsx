const Header = () => (
  <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-200">
            <img
              src="/logo.jpg"
              alt="Riad Club Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Riad Club</div>
            <div className="text-xs text-slate-500"> • Rabat • </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="text-emerald-700 font-medium" href="#accueil">Accueil</a>
          <a className="hover:text-emerald-700" href="#installations">Installations</a>
          <a className="hover:text-emerald-700" href="#tarifs">Tarifs</a>
          <a className="hover:text-emerald-700" href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;

