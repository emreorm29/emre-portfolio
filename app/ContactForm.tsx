"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
          setStatus('Mesaj başarıyla gönderildi! ✅');
          form.current?.reset();
      }, (error) => {
          console.log('Hata:', error);
          setStatus('Bir hata oluştu, tekrar deneyin. ❌');
      });
    }
  };

  return (
    <section className="py-10 bg-slate-900 rounded-2xl my-10 px-6 max-w-2xl mx-auto shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Bana Ulaşın</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-slate-300 mb-1 ml-1 text-sm">Adınız</label>
          <input type="text" name="user_name" required className="p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none transition-all" />
        </div>
        
        <div className="flex flex-col">
          <label className="text-slate-300 mb-1 ml-1 text-sm">E-posta Adresiniz</label>
          <input type="email" name="user_email" required className="p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none transition-all" />
        </div>
        
        <div className="flex flex-col">
          <label className="text-slate-300 mb-1 ml-1 text-sm">Mesajınız</label>
          <textarea name="message" required className="p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none transition-all h-32 resize-none" />
        </div>
        
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-2 transition-all active:scale-95 shadow-lg">
          Gönder
        </button>
        
        {status && <p className="text-center font-medium text-blue-400 animate-pulse mt-2">{status}</p>}
      </form>
    </section>
  );
}
