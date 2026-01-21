import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      {/* İnce bir üst çizgi efekti */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-transparent"></div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Hüseyin Emre Orman
          </h1>
          <p className="text-lg text-blue-400 font-medium tracking-wide uppercase text-sm">
            Yazılım Uzmanı & Aktüer Adayı
          </p>
        </header>

        {/* Sertifikalar */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
            <span>📜</span> Sertifikalar
          </h2>
          <div className="space-y-4">
            <p className="text-slate-400">2x ICWW Yazılım Uzmanlığı - Neos Yazılım Akademi</p>
            <div className="relative group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/20 transition-all hover:border-blue-500/40">
              <img 
                src="/certificate.png" 
                alt="Sertifika" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        {/* Gelecek Hedefim */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
            <span>🎯</span> Gelecek Hedefim
          </h2>
          <p className="text-slate-300 leading-relaxed bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50">
            Aktüerya alanındaki finansal modelleri modern yazılım teknolojileriyle birleştirerek 
            veriye dayalı, yüksek performanslı çözümler üretmeyi hedefliyorum.
          </p>
        </section>

        {/* İletişim Formu */}
        <section id="contact" className="mb-20">
          <h2 className="text-xl font-semibold mb-8 flex items-center gap-2 border-b border-slate-800 pb-2">
            <span>📧</span> Bana Ulaşın
          </h2>
          <div className="bg-gradient-to-b from-slate-900/50 to-transparent p-1 rounded-3xl border border-slate-800/50">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-slate-900 flex justify-center gap-8 text-sm text-slate-500">
          <a href="https://github.com/emreorm29" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/emreeorman/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:emreorman29@gmail.com" className="hover:text-white transition-colors">E-Posta</a>
        </footer>
      </div>
    </main>
  );
}