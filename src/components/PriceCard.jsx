const PriceCard = ({ badge, title, subtitle, rows, accent, onClick }) => (
  <div
    onClick={onClick}
    className={`rounded-2xl border ${
      accent ? "border-emerald-700" : "border-slate-200"
    } bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] cursor-pointer`}
  >
    {badge ? (
      <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 text-xs font-medium">
        ⭐ {badge}
      </div>
    ) : null}
    <div className="mt-3 text-lg font-semibold">{title}</div>
    <div className="mt-1 text-sm text-slate-600">{subtitle}</div>

    <div className="mt-5 space-y-3 text-sm">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between border-b border-slate-100 pb-2">
          <span className="text-slate-600">{r.label}</span>
          <span className="font-semibold text-emerald-800">{r.value}</span>
        </div>
      ))}
    </div>

  </div>
);

export default PriceCard;



