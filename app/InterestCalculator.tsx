"use client";
import React, { useState } from 'react';

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState<number>(1000); // Ana Para
  const [rate, setRate] = useState<number>(10); // Faiz Oranı (%)
  const [years, setYears] = useState<number>(5); // Süre (Yıl)

  // Bileşik Faiz Formülü: A = P * (1 + r)^t
  const result = principal * Math.pow((1 + rate / 100), years);

  return (
    <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 shadow-2xl">
      <h3 className="text-xl font-bold mb-6 text-blue-400">Bileşik Faiz Hesaplayıcı</h3>
      
      <div className="grid gap-6">
        {/* Ana Para Girişi */}
        <div>
          <label className="text-slate-400 text-sm block mb-2">Başlangıç Sermayesi (₺)</label>
          <input 
            type="number" 
            value={principal} 
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Faiz Oranı */}
          <div>
            <label className="text-slate-400 text-sm block mb-2">Yıllık Faiz (%)</label>
            <input 
              type="number" 
              value={rate} 
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
            />
          </div>
          {/* Süre */}
          <div>
            <label className="text-slate-400 text-sm block mb-2">Süre (Yıl)</label>
            <input 
              type="number" 
              value={years} 
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Sonuç Ekranı */}
        <div className="mt-4 p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20 text-center">
          <p className="text-slate-400 text-sm mb-1">Toplam Gelecek Değer</p>
          <p className="text-3xl font-bold text-blue-400">
            {result.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺
          </p>
          <p className="text-xs text-slate-500 mt-2 italic">
            * {years} yıl sonunda elde edilecek toplam tutar.
          </p>
        </div>
      </div>
    </div>
  );
}