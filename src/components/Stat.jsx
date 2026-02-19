const Stat = ({ value, label, icon }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/40 px-4 py-3 backdrop-blur shadow-sm">
    <div className="h-10 w-10 rounded-2xl bg-emerald-600/10 grid place-items-center text-emerald-700 text-xl">
      {icon}
    </div>
    <div>
      <div className="text-lg font-semibold text-slate-900 tracking-tight">{value}</div>
      <div className="mt-0.5 text-xs text-slate-700">{label}</div>
    </div>
  </div>
);

export default Stat;

