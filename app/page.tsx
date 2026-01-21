import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 lg:p-24 selection:bg-blue-500/30">
      {/* Üst Bilgi / Header */}
      <header className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          Hüseyin Emre Orman
        </h1>
        <p className="text-xl text-slate-400 font-medium">
          Yazılım Uzmanı & Aktüer Adayı
        </p>
      </header>

      {/* Sertifikalar Bölümü */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">📜</span>
          <h2 className="text-3xl font-bold">Sertifikalar</h2>
        </div>
        
        <div className="grid gap-8">
          <div>
            <p className="text-lg text-slate-300 mb-4 font-semibold">
              2x ICWW Yazılım Uzmanlığı - Neos Yazılım Akademi
            </p>
            
            {/* Sertifika Görseli + Hover Efekti */}
            <div className="relative group max-w-2xl overflow-hidden rounded-xl border border-slate-800 shadow-2xl transition-all hover:border-blue-500/50">
              <img 
                src="/certificate.png" 
                alt="Neos Yazılım Sertifikası" 
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-sm font-medium text-blue-400">Detaylı Görüntüle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gelecek Hedefim Bölümü */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🎯</span>
          <h2 className="text-3xl font-bold">Gelecek Hedefim</h2>
        </div>
        <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 backdrop-blur-sm">
          <p className="text-lg leading-relaxed text-slate-300">
            Aktüerya alanındaki finansal modelleri modern yazılım teknolojileriyle birleştirerek 
            veriye dayalı, yüksek performanslı çözümler üretmeyi hedefliyorum.
          </p>
        </div>
      </section>

      {/* İletişim Formu Bölümü */}
      <section id="contact" className="max-w-4xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📧</span>
          <h2 className="text-3xl font-bold">Bana Ulaşın</h2>
        </div>
        <ContactForm />
      </section>

      {/* Alt Bilgi / Footer */}
      <footer className="max-w-4xl mx-auto pt-8 border-t border-slate-900 flex flex-wrap gap-6 text-sm font-medium text-slate-500">
        <a href="https://github.com/emreorm29" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/emreeorman/" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        <a href="mailto:emreorman29@gmail.com" className="hover:text-blue-400 transition-colors">E-Posta</a>
      </footer>
    </main>
  );
}