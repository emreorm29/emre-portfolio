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

  return (
    <section className="py-10 bg-slate-900/50 rounded-2xl my-10 px-6 max-w-2xl mx-auto border border-slate-800 shadow-2xl">
      <Toaster position="top-center" reverseOrder={false} /> {/* Bildirimlerin çıkacağı yer */}
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Bana Ulaşın</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        {/* Input alanların aynı kalabilir, sadece alttaki {status} yazısını silebilirsin */}
        <div>
          <label className="text-slate-300 mb-1 block text-sm">Adınız</label>
          <input type="text" name="user_name" required className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none transition-all" />
        </div>
        <div>
          <label className="text-slate-300 mb-1 block text-sm">E-posta</label>
          <input type="email" name="user_email" required className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none transition-all" />
        </div>
        <div>
          <label className="text-slate-300 mb-1 block text-sm">Mesajınız</label>
          <textarea name="message" required className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none transition-all h-32 resize-none" />
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-2 transition-all active:scale-95 shadow-lg">
          Gönder
        </button>
      </form>
    </section>
  );
}