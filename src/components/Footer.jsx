const Footer = () => (
  <footer id="contact" className="border-t border-slate-200 bg-slate-50">
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Riad Club */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full overflow-hidden border border-amber-200 bg-amber-50 flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="Riad Club logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-slate-900">Riad Club</div>
              <div className="text-xs text-slate-500">Rabat • Depuis 1972</div>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Club sportif historique de Rabat, alliant tradition, excellence et convivialité.
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/riadclubofficiel/"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 grid place-items-center text-white text-lg hover:scale-110 transition-transform"
            >
              📷
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <div className="font-bold text-slate-900">Navigation</div>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li>
              <a href="#accueil" className="hover:text-emerald-700 transition-colors">Accueil</a>
            </li>
            <li>
              <a href="#installations" className="hover:text-emerald-700 transition-colors">Installations</a>
            </li>
            <li>
              <a href="#tarifs" className="hover:text-emerald-700 transition-colors">Tarifs</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <div className="font-bold text-slate-900">Services</div>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li>Tennis</li>
            <li>Padel</li>
            <li>Piscine</li>
            <li>Restaurant</li>
            <li>Événements</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <div className="font-bold text-slate-900">Contact</div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">📍</span>
              <span>Avenue Hassan II, Quartier Agdal, 10090 Rabat, Maroc</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">📞</span>
              <span>+212 5 37 75 05 80</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">✉️</span>
              <span>contact@riadclub.ma</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-400 mt-0.5">🕒</span>
              <span>Lun - Dim : 6h00 - 22h00 • Ouvert 7j/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-200 py-6">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Riad Club Rabat. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;

