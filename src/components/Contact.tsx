"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { ContactInfo } from "@/types/portfolio";

interface ContactProps {
  contact: ContactInfo;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToastNotification("Harap isi semua kolom yang wajib diisi.", "error");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showToastNotification("Pesan berhasil terkirim! Saya akan membalas segera.", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const showToastNotification = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50/70 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 dark:text-indigo-400 light:text-indigo-600">
            // Hubungi Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            {contact.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base">
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email */}
            <div className="glass-card rounded-2xl p-5 flex items-start space-x-4 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 text-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">Email</h4>
                <p className="text-base font-bold text-white dark:text-white light:text-slate-900 mt-0.5">{contact.email}</p>
                <a href={`mailto:${contact.email}`} className="text-xs text-indigo-400 dark:text-indigo-400 light:text-indigo-600 hover:underline mt-1 inline-block">
                  Kirim email langsung &rarr;
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-2xl p-5 flex items-start space-x-4 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 text-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">WhatsApp / Telepon</h4>
                <p className="text-base font-bold text-white dark:text-white light:text-slate-900 mt-0.5">{contact.phone}</p>
                <a
                  href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, "").replace(/^0/, "62")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline mt-1 inline-block"
                >
                  Chat di WhatsApp &rarr;
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card rounded-2xl p-5 flex items-start space-x-4 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 text-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">Lokasi & Jam Aktif</h4>
                <p className="text-base font-bold text-white dark:text-white light:text-slate-900 mt-0.5">{contact.location}</p>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1">{contact.workingHours}</p>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 mb-2">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 mb-2">
                    Subjek / Topik
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Tawaran Proyek / Pertanyaan"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 mb-2">
                    Pesan Anda *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan detail proyek atau ide yang ingin Anda kembangkan bersama..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Mengirim Pesan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 glass-card px-5 py-4 rounded-2xl border border-white/20 shadow-2xl flex items-center space-x-3 animate-in fade-in slide-in-from-bottom duration-300">
          {toast.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-400" />
          )}
          <span className="text-sm font-medium text-white dark:text-white light:text-slate-900">
            {toast.message}
          </span>
        </div>
      )}
    </section>
  );
};
