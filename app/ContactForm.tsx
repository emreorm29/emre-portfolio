"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast'; // Toast eklendi

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Yükleme durumu bildirimi
    const loadingToast = toast.loading('Mesajınız iletiliyor...');

    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
          toast.success('Mesaj başarıyla gönderildi! ✅', { id: loadingToast });
          form.current?.reset();
      }, (error) => {
          console.log('Hata:', error);
          toast.error('Bir hata oluştu, lütfen tekrar deneyin. ❌', { id: loadingToast });
      });
    }
  };

  // app/ContactForm.tsx içeriği
// ... (üstteki importlar aynı kalacak)

  return (
    <div className="w-full bg-slate-900/40 p-6 rounded-2xl border border-slate-800 shadow-xl">
      <Toaster position="top-center" />
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
        <div>
          <label className="text-slate-400 text-sm mb-2 block font-medium">Adınız</label>
          <input 
            type="text" 
            name="user_name" 
            required 
            className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            placeholder="Adınızı giriniz"
          />
        </div>
        <div>
          <label className="text-slate-400 text-sm mb-2 block font-medium">E-posta</label>
          <input 
            type="email" 
            name="user_email" 
            required 
            className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            placeholder="Email adresiniz"
          />
        </div>
        <div>
          <label className="text-slate-400 text-sm mb-2 block font-medium">Mesajınız</label>
          <textarea 
            name="message" 
            required 
            className="w-full p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all h-32 resize-none"
            placeholder="Mesajınızı buraya yazın..."
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20"
        >
          Mesajı Gönder
        </button>
      </form>
    </div>
  );}