export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-slate-500">
          © {year} Egemen Demir. Alle Rechte vorbehalten.
        </p>
        <p className="text-[13px] text-slate-400">Gießen, Deutschland</p>
      </div>
    </footer>
  );
}
