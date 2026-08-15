"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RequestPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Halkan waxaa dhowaan lagu xiri doonaa API-ga CRM Backend-ka
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-12 px-4 max-w-3xl mx-auto w-full">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
          <h1 className="text-3xl font-bold text-brand-black mb-2 text-center">
            Foomka Codsiga Adeegga Safarka
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Fadlan si dhab ah u buuxida foomkan si kooxda Balcad Travel Agency ay kuu caawiyaan.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Waad Mahadsan tahay!</h3>
              <p className="text-gray-700 mb-4">
                Codsigaaga si guul leh ayaa loo diyaariyay. Shaqaalaheenna ayaa goordhow kula soo xiriiri doona.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-brand-gold text-black font-semibold px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
              >
                Dir Codsi Kale
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-brand-gold mb-4 border-b pb-1">1. Xogta Qofka</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Magaca Buuxa *</label>
                    <input required type="text" name="fullName" placeholder="Cali Axmed Cabdi" className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-brand-gold outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Taleefanka (WhatsApp) *</label>
                    <input required type="tel" name="phone" placeholder="+252 61 XXXXXXX" className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-brand-gold outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Email *</label>
                    <input required type="email" name="email" placeholder="example@gmail.com" className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-brand-gold outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Magaalada & Dalka *</label>
                    <input required type="text" name="location" placeholder="Mogadishu, Somalia" className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-brand-gold outline-none" />
                  </div>
                </div>
              </div>

              {/* Travel Information */}
              <div>
                <h2 className="text-xl font-semibold text-brand-gold mb-4 border-b pb-1">2. Xogta Safarka</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Nooca Adeegga *</label>
                    <select required name="serviceType" className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-brand-gold outline-none">
                      <option value="">Dooro adeeg...</option>
                      <option value="Flight Booking">Tigidh Duulimaad (Flight Booking)</option>
                      <option value="Tourist Visa">Fiiso Dalxiis (Tourist Visa)</option>
                      <option value="Business Visa">Fiiso Ganacsi (Business Visa)</option>
                      <option value="Hajj & Umrah">Hajj & Umrah</option>
                      <option value="Hotel Booking">Huteel Reservation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Nambarka Baasaboorka *</label>
                    <input required type="text" name="passportNumber" placeholder="N0000000" className="w-full border p-2.5 rounded-md focus:ring-2 focus:ring-brand-gold outline-none" />
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <h2 className="text-xl font-semibold text-brand-gold mb-4 border-b pb-1">3. Soowada Dukumiintiyada</h2>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Ku dar Sawirka Baasaboorka ama Dukumiintiyada kale</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:bg-brand-black file:text-brand-gold hover:file:bg-brand-gold hover:file:text-black cursor-pointer border rounded-md" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-gold hover:bg-brand-black hover:text-brand-gold text-black font-bold py-3.5 rounded-md transition duration-300 shadow-md"
              >
                {loading ? "Waa la dirayaa..." : "Dir Codsiga"}
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

