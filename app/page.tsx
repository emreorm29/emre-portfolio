import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 lg:p-24 selection:bg-blue-500/30">
      <div className="max-w-3xl mx-auto">
        
        {/* Başlık */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Hüseyin Emre Orman</h1>
          <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">Yazılım Uzmanı & Aktüer Adayı</p>
        </header>

     {/* Sertifikalar Bölümü */}
<section className="mb-16">
  <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">📜 Sertifikalar</h2>
  
  {/* Kapsayıcı kutu: 'group' sınıfını buraya veriyoruz */}
  <div className="group relative max-w-2xl mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:border-blue-500/50">
    <img 
      src="/sertificate.png" 
      alt="Sertifika" 
      /* 'transition-transform' ve 'duration' mutlaka olmalı. 'group-hover:scale-105' büyüme sağlar. */
      className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
    
    {/* Üzerine gelince çok hafif bir parlama efekti (opsiyonel ama şık durur) */}
    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </div>
  
  <p className="mt-4 text-sm text-slate-500 text-center italic">
    2x ICWW Yazılım Uzmanlığı - Neos Yazılım Akademi
  </p>
</section>

        {/* Hedef */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🎯 Gelecek Hedefim</h2>
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800/50 italic text-slate-300">
            "Aktüerya alanındaki finansal modelleri modern yazılım teknolojileriyle birleştirerek veriye dayalı çözümler üretmeyi hedefliyorum."
          </div>
        </section>

        {/* Form - Başlığı Sadece Burada Tutuyoruz */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">📧 Bana Ulaşın</h2>
          <ContactForm />
        </section>

        {/* Footer Linkleri */}
        <footer className="pt-8 border-t border-slate-900 flex gap-6 text-sm text-slate-500">
          <a href="https://github.com/emreorm29" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/emreeorman/" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="mailto:emreorman29@gmail.com" className="hover:text-blue-400 transition-colors">E-Posta</a>
        </footer>

      </div>
    </main>
  );
}