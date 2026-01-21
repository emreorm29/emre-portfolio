import ContactForm from './ContactForm';
export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] text-white p-6 md:p-20 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          Hüseyin Emre Orman
        </h1>
        <p className="text-xl text-slate-400">Yazılım Uzmanı & Aktüer Adayı</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Sertifikalar Bölümü */}
        <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>📜</span> Sertifikalar
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
              <p className="font-bold text-blue-400">2x ICWW Yazılım Uzmanlığı</p>
              <p className="text-sm text-slate-400 mb-4">Neos Yazılım Akademi</p>
              {/* Sertifika Görseli - Boyutu sınırlandırıldı */}
              <img 
                src="/sertifika-1.png" 
                alt="Sertifika" 
                className="max-w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Hedefler Bölümü */}
        <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>🎯</span> Gelecek Hedefim
              
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Aktüerya alanındaki finansal modelleri modern yazılım teknolojileriyle birleştirerek 
              veriye dayalı, yüksek performanslı çözümler üretmeyi hedefliyorum.
            </p>
          </div>
          
          {/* İletişim Linkleri */}
          <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-slate-800">
            <a href="https://github.com/emreorm29" target="_blank" className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-all">GitHub</a>
            
            <a href="https://www.linkedin.com/in/emreeorman/" target="_blank" className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 px-4 py-2 rounded-lg transition-all border border-blue-600/30">LinkedIn</a>
            <ContactForm />
            <a href="mailto:emreorman29@gmail.com" className="bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 px-4 py-2 rounded-lg transition-all border border-emerald-600/30 font-bold">E-Posta</a>
          </div>
        </div>
      </div>
    </main>
  );
}
