"use client";

import React, { useState } from "react";
import { Sparkles, Moon, Star, Compass, BookOpen, X, ChevronRight, Zap, Shield, Flame, Droplets, Wind, Mountain, ExternalLink } from "lucide-react";

interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  period: string;
  element: "Api (Fire)" | "Bumi (Earth)" | "Udara (Air)" | "Air (Water)";
  elementColor: string;
  rulingPlanet: string;
  constellation: string;
  majorStars: string[];
  article: {
    title: string;
    summary: string;
    philosophicalTraits: string[];
    cosmicWisdom: string;
    modernInsight: string;
  };
}

export const zodiacData: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    symbol: "♈",
    period: "21 Mar – 19 Apr",
    element: "Api (Fire)",
    elementColor: "from-amber-500 to-rose-500 text-rose-400",
    rulingPlanet: "Mars",
    constellation: "Domba Jantan Emas (Ram)",
    majorStars: ["Hamal (α Ari)", "Sheratan (β Ari)", "Mesarthim (γ Ari)"],
    article: {
      title: "Api Pelopor & Manifestasi Kepemimpinan Proaktif",
      summary: "Aries melambangkan percikan awal kosmos, energi keberanian yang tak terbendung, dan daya dorong untuk memulai hal-hal baru tanpa ragu.",
      philosophicalTraits: [
        "Inisiatif Tinggi & Keberanian Mendobrak Batasan",
        "Jiwa Pelopor yang Menyukai Tantangan Kompleks",
        "Ketulusan Aksi Tanpa Kompromi",
        "Daya Juang Pantang Menyerah Menghadapi Hambatan"
      ],
      cosmicWisdom: "Kekuatan sejati bukanlah ketiadaan rasa takut, melainkan tekad membara untuk melangkah maju ketika jalur belum pernah ditempuh orang lain.",
      modernInsight: "Dalam rekayasa teknologi dan kepemimpinan, energi Aries mencerminkan semangat eksplorasi 'Day One'—selalu berani merintis inovasi pertama."
    }
  },
  {
    id: "taurus",
    name: "Taurus",
    symbol: "♉",
    period: "20 Apr – 20 Mei",
    element: "Bumi (Earth)",
    elementColor: "from-emerald-500 to-teal-500 text-emerald-400",
    rulingPlanet: "Venus",
    constellation: "Banteng Angkasa (Bull)",
    majorStars: ["Aldebaran (Mata Merah Taurus)", "Elnath (β Tau)", "Gugus Pleiades (Tujuh Bidadari)"],
    article: {
      title: "Keteguhan Pondasi, Ketelitian & Estetika Abadi",
      summary: "Taurus merepresentasikan stabilitas bumi yang kokoh, ketekunan menciptakan karya berkualitas tinggi, dan apresiasi mendalam terhadap harmoni alam.",
      philosophicalTraits: [
        "Ketekunan Luar Biasa & Konsistensi Jangka Panjang",
        "Pondasi Berpikir Realistis, Terukur & Teruji",
        "Apresiasi Nilai Estetika dan Kualitas Struktur",
        "Loyalitas dan Integritas yang Mengakar Kuat"
      ],
      cosmicWisdom: "Pohon yang paling kokoh bukanlah yang tumbuh paling cepat, melainkan yang akarnya menembus paling dalam ke dasar bumi.",
      modernInsight: "Mencerminkan disiplin sistematis dalam arsitektur software dan pembangunan karakter—membangun hal-hal yang tahan uji oleh waktu."
    }
  },
  {
    id: "gemini",
    name: "Gemini",
    symbol: "♊",
    period: "21 Mei – 20 Jun",
    element: "Udara (Air)",
    elementColor: "from-cyan-400 to-sky-500 text-cyan-300",
    rulingPlanet: "Merkurius",
    constellation: "Dua Bintang Kembar (Twins)",
    majorStars: ["Pollux (Bintang Jingga)", "Castor (Sistem Bintang Enam)", "Alhena (γ Gem)"],
    article: {
      title: "Intelegensia Adaptif, Eksplorasi Ilmu & Konektivitas Ide",
      summary: "Gemini melambangkan rasa ingin tahu intelektual yang tak pernah padam, kelincahan berpikir multidimensi, serta kemampuan menjembatani berbagai bidang ilmu pengetahuan.",
      philosophicalTraits: [
        "Kapasitas Belajar Cepat & Adaptasi Multi-Disiplin",
        "Daya Komunikasi Artikulatif & Argumentasi Nalar Tajam",
        "Pola Pikir Komputasional & Kemampuan Menyerap Data Luas",
        "Daya Cipta Inovatif yang Dinamis"
      ],
      cosmicWisdom: "Pikiran adalah mikrokosmos; semakin banyak kita belajar, semakin luas semesta kemungkinan yang terbuka di hadapan kita.",
      modernInsight: "Sangat selaras dengan dunia AI, LLM Prompting, dan Rekayasa Kode—kemampuan merajut konsep kompleks menjadi solusi yang terstruktur."
    }
  },
  {
    id: "cancer",
    name: "Cancer",
    symbol: "♋",
    period: "21 Jun – 22 Jul",
    element: "Air (Water)",
    elementColor: "from-blue-500 to-indigo-500 text-blue-300",
    rulingPlanet: "Bulan (The Moon)",
    constellation: "Kepiting Langit & Gugus Praesepe",
    majorStars: ["Al Tarf (β Cnc)", "Acubens (α Cnc)", "Gugus Sarang Lebah (M44)"],
    article: {
      title: "Intuisi Tajam, Empati Pelindung & Ketahanan Batin",
      summary: "Cancer membawa kedalaman emosi, kepekaan nurani, serta naluri melindungi sesama yang menjadi fondasi kepemimpinan beretika luhur.",
      philosophicalTraits: [
        "Kecerdasan Emosional (EQ) & Empati Tinggi",
        "Naluri Pelindung Kebenaran dan Ketertiban",
        "Ketahanan Mental di Balik Penampilan Tenang",
        "Kesetiaan Pengabdian terhadap Almamater & Komunitas"
      ],
      cosmicWisdom: "Kekuatan tidak selalu diukur dari suara gemuruh petir, tetapi dari keheningan samudra yang mampu menopang bahtera kehidupan.",
      modernInsight: "Mewakili nilai kepemimpinan yang berakar pada empati dan rasa tanggung jawab sosial—menjaga integritas di tengah kemajuan teknologi."
    }
  },
  {
    id: "leo",
    name: "Leo",
    symbol: "♌",
    period: "23 Jul – 22 Agt",
    element: "Api (Fire)",
    elementColor: "from-amber-400 to-yellow-500 text-amber-300",
    rulingPlanet: "Matahari (The Sun)",
    constellation: "Singa Agung Raja Langit",
    majorStars: ["Regulus (Jantung Singa / Raja Kecil)", "Denebola (Ekor Singa)", "Algieba (Sinar Keemasan)"],
    article: {
      title: "Kharisma Kemegahan, Keberanian Moral & Sinar Keteladanan",
      summary: "Leo memancarkan wibawa alami layaknya sang surya, menginspirasi orang di sekitarnya dengan optimisme, integritas, dan keberanian mengambil tanggung jawab besar.",
      philosophicalTraits: [
        "Wibawa Alami & Karakter Pemimpin Teladan",
        "Kehangatan, Jiwa Besar & Murah Hati",
        "Integritas yang Tidak Tergoyahkan oleh Pujian atau Kritik",
        "Kreativitas Penuh Semangat dan Kepercayaan Diri Sehat"
      ],
      cosmicWisdom: "Jadilah seperti mentari yang memberi cahaya tanpa meminta balasan, menerangi jalan bagi mereka yang mencari arah.",
      modernInsight: "Tercermin dalam peran representasi Duta Intelegensia dan Komandan Pleton CODASKA—memimpin dari barisan terdepan dengan keteladanan."
    }
  },
  {
    id: "virgo",
    name: "Virgo",
    symbol: "♍",
    period: "23 Agt – 22 Sep",
    element: "Bumi (Earth)",
    elementColor: "from-teal-500 to-emerald-600 text-teal-300",
    rulingPlanet: "Merkurius",
    constellation: "Sang Dara Kebijaksanaan & Bulir Gandum",
    majorStars: ["Spica (Bintang Terang Biru Putih)", "Vindemiatrix (ε Vir)", "Porrima (γ Vir)"],
    article: {
      title: "Nalar Analitis, Ketelitian Presisi & Pengabdian Solutif",
      summary: "Virgo merefleksikan kecermatan berpikir, standar kualitas yang ketat, serta dedikasi tanpa pamrih dalam menyempurnakan setiap rincian pekerjaan.",
      philosophicalTraits: [
        "Kemampuan Analisis Kritis & Problem Solving Berjenjang",
        "Standar Presisi Tinggi dan Efisiensi Eksekusi",
        "Dedikasi Pengabdian untuk Peningkatan Kualitas Lingkungan",
        "Sikap Rendah Hati yang Selalu Mengedepankan Karya Nyata"
      ],
      cosmicWisdom: "Keagungan mahakarya bukan hanya tercipta dari visi besar, tetapi dari keharmonisan ribuan detil kecil yang dirawat dengan penuh ketelitian.",
      modernInsight: "Sangat fundamental dalam debugging kode, algoritma machine learning, dan disiplin baris-berbaris LKBB yang menuntut presisi milimeter."
    }
  },
  {
    id: "libra",
    name: "Libra",
    symbol: "♎",
    period: "23 Sep – 22 Okt",
    element: "Udara (Air)",
    elementColor: "from-sky-400 to-indigo-400 text-sky-300",
    rulingPlanet: "Venus",
    constellation: "Neraca Keadilan Kosmis (Scales)",
    majorStars: ["Zubeneschamali (Cakar Utara Hijau Zamrud)", "Zubenelgenubi (Cakar Selatan)", "Brachium (σ Lib)"],
    article: {
      title: "Keseimbangan Harmonis, Diplomasi & Estetika Kebenaran",
      summary: "Libra adalah perwujudan keseimbangan objektif, kemampuan menimbang sudut pandang dari berbagai perspektif, dan komitmen menegakkan keadilan rasional.",
      philosophicalTraits: [
        "Objektivitas Berpikir & Kemampuan Mediasi Konflik",
        "Apresiasi Keseimbangan Visual (UI/UX Design)",
        "Etika Berkelanjutan & Diplomasi Sosial",
        "Kecintaan terhadap Harmoni dan Ketertiban Umum"
      ],
      cosmicWisdom: "Keadilan sejati dicapai bukan dengan meniadakan perbedaan, melainkan dengan menempatkan setiap hal pada proporsi yang selaras.",
      modernInsight: "Penting dalam desain UI/UX harmonis, keharmonisan relasi organisasi kepramukaan, dan ketertiban hukum kamtibmas Saka Bhayangkara."
    }
  },
  {
    id: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    period: "23 Okt – 21 Nov",
    element: "Air (Water)",
    elementColor: "from-rose-600 to-indigo-700 text-rose-300",
    rulingPlanet: "Pluto & Mars",
    constellation: "Kalajengking Raksasa & Jantung Merah",
    majorStars: ["Antares (Jantung Merah Rival Mars)", "Shaula (Sengat Ekor)", "Graffias (β Sco)"],
    article: {
      title: "Daya Transformasi Batin, Fokus Mendalam & Ketahanan Baja",
      summary: "Scorpio melambangkan intensitas kehendak yang mampu menembus batasan terdalam, regenerasi mental dari setiap kegagalan, dan daya konsentrasi yang tak tergoyahkan.",
      philosophicalTraits: [
        "Daya Fokus Ekstrem & Kemampuan Menyelami Masalah Kompleks",
        "Resiliensi Mental: Bangkit Lebih Kuat dari Setiap Tantangan",
        "Ketajaman Analisis yang Mampu Melihat di Balik Hal Permukaan",
        "Prinsip Teguh dan Kesetiaan Mutlak pada Komitmen"
      ],
      cosmicWisdom: "Besi ditempa menjadi pedang berkualitas tinggi bukan di tempat yang sejuk, melainkan di dalam nyala api dan tempaan yang berulang kali.",
      modernInsight: "Mewakili ketahanan mental latihan fisik Paskibra/LKBB dan kemampuan reverse-engineering masalah teknis yang rumit."
    }
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    period: "22 Nov – 21 Des",
    element: "Api (Fire)",
    elementColor: "from-violet-500 to-purple-600 text-violet-300",
    rulingPlanet: "Jupiter (Sang Mahabesar)",
    constellation: "Pemanah Centaurus & Pusat Galaksi Bima Sakti",
    majorStars: ["Kaus Australis (ε Sgr)", "Nunki (σ Sgr)", "Pusat Galaksi Sgr A*"],
    article: {
      title: "Visi Masa Depan, Optimisme Filosofis & Kebebasan Berpikir",
      summary: "Sagittarius membidik anak panah pemikiran ke cakrawala terjauh—mencari makna filosofis kehidupan, mengeksplorasi perbatasan teknologi baru, dan menatap masa depan penuh keyakinan.",
      philosophicalTraits: [
        "Visi Jangka Panjang yang Melampaui Batas Kebiasaan",
        "Rasa Ingin Tahu Filosofis & Nilai Kebijaksanaan Universal",
        "Optimisme Membangun & Daya Inspiratif bagi Sesama",
        "Semangat Kepanduan (Scouting Explorer) Menjelajah Alam Raya"
      ],
      cosmicWisdom: "Arahkan panah tujuanmu ke bintang-bintang terjauh; jikalau engkau luput, engkau tetap akan mendarat di antara gugusan gemerlap angkasa.",
      modernInsight: "Sangat identik dengan etos Pramuka Garuda—pantang putus asa, berwawasan luas, dan senantiasa menjelajah batas pengetahuan baru."
    }
  },
  {
    id: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    period: "22 Des – 19 Jan",
    element: "Bumi (Earth)",
    elementColor: "from-slate-600 to-teal-800 text-teal-300",
    rulingPlanet: "Saturnus (Dewa Waktu & Struktur)",
    constellation: "Kambing Gunung Bertanduk Emas",
    majorStars: ["Deneb Algedi (δ Cap)", "Dabih (β Cap)", "Algedi (α Cap)"],
    article: {
      title: "Disiplin Strategis, Kepemimpinan Berstruktur & Ketangguhan Puncak",
      summary: "Capricorn melambangkan pendakian yang sabar dan gigih menuju puncak tertinggi, disiplin hierarki militeristik yang terencana, dan integritas tanggung jawab tanpa celah.",
      philosophicalTraits: [
        "Perencanaan Strategis Jangka Panjang & Manajemen Waktu",
        "Disiplin Militeristik Presisi & Kepatuhan pada Aturan",
        "Ketahanan Menghadapi Tekanan Berat dengan Sikap Tenang",
        "Fokus pada Hasil Nyata yang Terukur dan Berkelanjutan"
      ],
      cosmicWisdom: "Puncak gunung yang megah tidak pernah ditaklukkan dengan melompat, melainkan dengan langkah kaki yang konsisten meski badai menghadang.",
      modernInsight: "Mencerminkan nilai pembentukan karakter di CODASKA & PBB: presisi komando, hierarki regu, dan ketegasan sikap siap sempurna."
    }
  },
  {
    id: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    period: "20 Jan – 18 Feb",
    element: "Udara (Air)",
    elementColor: "from-cyan-400 to-emerald-400 text-cyan-300",
    rulingPlanet: "Uranus & Saturnus",
    constellation: "Sang Pembawa Air Kebijaksanaan Kosmik",
    majorStars: ["Sadalsuud (Bintang Keberuntungan Tertinggi)", "Sadalmelik (α Aqr)", "Skat (δ Aqr)"],
    article: {
      title: "Inovasi Futuristik, Rekayasa Masa Depan & Kemanusiaan",
      summary: "Aquarius memegang bejana pengetahuan untuk dituangkan bagi kemajuan peradaban. Visioner, berani melawan arus kejumudan, dan melahirkan terobosan teknologi yang membebaskan potensi manusia.",
      philosophicalTraits: [
        "Pikiran Orisinil, Visioner & Berorientasi pada Abad 22",
        "Daya Cipta Rekayasa AI, Digitalisasi & Logika Terbuka",
        "Semangat Kesetaraan dan Kebermanfaatan untuk Masyarakat",
        "Kemandirian Intelektual yang Tidak Takut Tampil Berbeda"
      ],
      cosmicWisdom: "Masa depan bukanlah sesuatu yang kita tunggu, melainkan apa yang kita rancang dan ciptakan hari ini melalui ilmu pengetahuan.",
      modernInsight: "Manifestasi utama dari identitas AI Design Engineer—menggabungkan kecerdasan buatan, seni visual, dan teknologi demi memajukan pendidikan."
    }
  },
  {
    id: "pisces",
    name: "Pisces",
    symbol: "♓",
    period: "19 Feb – 20 Mar",
    element: "Air (Water)",
    elementColor: "from-teal-400 to-blue-500 text-teal-300",
    rulingPlanet: "Neptunus & Jupiter",
    constellation: "Dua Ikan Mistis yang Terhubung Pita Bintang",
    majorStars: ["Alrescha (Ikatan Tali Bintang)", "Fumalsamakah (β Psc)", "Torcular (ο Psc)"],
    article: {
      title: "Imajinasi Tanpa Batas, Harmoni Universal & Kedalaman Jiwa",
      summary: "Pisces adalah muara dari seluruh siklus kosmis—menggabungkan daya imajinasi kreatif yang tak terbatas, kepekaan artistik, dan pemahaman bahwa segala sesuatu di alam semesta saling terhubung.",
      philosophicalTraits: [
        "Daya Imajinasi Visual yang Mendalam (Creative Concept Art)",
        "Kepekaan Rasa & Kemampuan Memahami Hal Implisit",
        "Kapasitas Menggabungkan Logika Sains dengan Keindahan Seni",
        "Jiwa Damai yang Mengalir Mengikuti Arah Kebenaran"
      ],
      cosmicWisdom: "Di dalam setetes air laut terkandung seluruh hakikat samudra luas; demikian pula di dalam sanubari manusia terdapat semesta yang tiada berujung.",
      modernInsight: "Sangat menonjol dalam kreasi generative art, perancangan antarmuka futuristik, dan orkestrasi harmoni audio-visual."
    }
  }
];

export const ZodiacCelestialCompendium: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedZodiac, setSelectedZodiac] = useState<ZodiacSign>(zodiacData[2]); // Default to Gemini (Intelligence & Multi-Discipline)
  const [selectedElementFilter, setSelectedElementFilter] = useState<string>("all");

  const filteredZodiacs = selectedElementFilter === "all"
    ? zodiacData
    : zodiacData.filter(z => z.element.includes(selectedElementFilter));

  const getElementIcon = (elem: string) => {
    if (elem.includes("Api")) return <Flame className="w-3.5 h-3.5 text-amber-400" />;
    if (elem.includes("Bumi")) return <Mountain className="w-3.5 h-3.5 text-emerald-400" />;
    if (elem.includes("Udara")) return <Wind className="w-3.5 h-3.5 text-cyan-400" />;
    return <Droplets className="w-3.5 h-3.5 text-blue-400" />;
  };

  return (
    <>
      {/* Floating Background Celestial Zodiac Trigger Badge */}
      <div className="fixed top-24 right-4 sm:right-6 z-30 pointer-events-auto">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-2 px-3.5 py-2 rounded-full glass-card border border-emerald-500/30 hover:border-emerald-400/60 bg-slate-950/80 hover:bg-slate-900 text-slate-200 hover:text-white text-xs font-mono font-semibold shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 transition-all duration-300 backdrop-blur-md active:scale-95"
          title="Buka Kompendium Konstelasi Zodiak & Filosofi Kosmik"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-400 to-emerald-400 flex items-center justify-center text-slate-950 text-[11px] font-bold shadow-sm">
            ✨
          </div>
          <span className="hidden sm:inline text-[11px] text-emerald-300 group-hover:text-white transition-colors">
            Zodiac Constellations & Lore
          </span>
          <span className="sm:hidden text-[11px] text-emerald-300">
            Zodiac
          </span>
        </button>
      </div>

      {/* Main Celestial Zodiac Compendium Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-cloud-enter overflow-y-auto">
          
          <div className="relative w-full max-w-5xl glass-card rounded-3xl border border-emerald-500/40 shadow-2xl shadow-emerald-950/60 overflow-hidden flex flex-col max-h-[90vh] my-auto bg-slate-950/95">
            
            {/* Header */}
            <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-emerald-500/25 flex items-center justify-between backdrop-blur-md relative z-10">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/30 animate-pulse">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                      // CELESTIAL ZODIAC COMPENDIUM & ASTRO-PHILOSOPHY
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Artikel & Konstelasi 12 Zodiak Kosmik
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-emerald-500/20"
                aria-label="Tutup Kompendium"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Element Filter Bar */}
            <div className="px-4 sm:px-6 py-3 bg-slate-900/60 border-b border-emerald-500/15 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: "all", label: "Semua Konstelasi (12)" },
                { id: "Api", label: "🔥 Unsur Api (Aries, Leo, Sgr)" },
                { id: "Bumi", label: "🌿 Unsur Bumi (Taurus, Virgo, Cap)" },
                { id: "Udara", label: "💨 Unsur Udara (Gemini, Libra, Aqr)" },
                { id: "Air", label: "💧 Unsur Air (Cancer, Sco, Pisces)" },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedElementFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all ${
                    selectedElementFilter === tab.id
                      ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/30"
                      : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Content Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: 12 Zodiac Cards Selector Strip */}
              <div className="lg:col-span-4 space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Pilih Rasi Bintang Zodiak:
                </span>
                {filteredZodiacs.map((sign) => {
                  const isSelected = selectedZodiac.id === sign.id;
                  return (
                    <button
                      key={sign.id}
                      onClick={() => setSelectedZodiac(sign)}
                      className={`w-full p-3.5 rounded-2xl text-left transition-all border flex items-center justify-between group ${
                        isSelected
                          ? "bg-gradient-to-r from-emerald-600/30 via-teal-500/20 to-transparent border-emerald-400 shadow-lg shadow-emerald-500/20"
                          : "bg-slate-900/60 border-white/5 hover:border-emerald-500/30 hover:bg-slate-900/90 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl w-8 h-8 flex items-center justify-center rounded-xl bg-slate-950/80 border border-emerald-500/20">
                          {sign.symbol}
                        </span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                              {sign.name}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-400">
                              {sign.period}
                            </span>
                          </div>
                          <span className="text-[11px] text-emerald-400/90 font-mono flex items-center space-x-1 mt-0.5">
                            {getElementIcon(sign.element)}
                            <span>{sign.element}</span>
                          </span>
                        </div>
                      </div>
                      
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-emerald-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Deep Celestial Zodiac Article View */}
              <div className="lg:col-span-8 space-y-6 bg-slate-900/70 p-5 sm:p-7 rounded-3xl border border-emerald-500/25 shadow-xl">
                
                {/* Article Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-emerald-500/20 gap-3">
                  <div className="flex items-center space-x-3.5">
                    <span className="text-4xl sm:text-5xl p-3 rounded-2xl bg-slate-950/90 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                      {selectedZodiac.symbol}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {selectedZodiac.period}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 border border-white/10">
                          Penguasa: {selectedZodiac.rulingPlanet}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {selectedZodiac.name} <span className="text-sm font-normal text-slate-400 font-mono">({selectedZodiac.constellation})</span>
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 self-start sm:self-auto px-3 py-1.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                    {getElementIcon(selectedZodiac.element)}
                    <span>{selectedZodiac.element}</span>
                  </div>
                </div>

                {/* Article Title & Summary */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-teal-300 leading-snug">
                    {selectedZodiac.article.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {selectedZodiac.article.summary}
                  </p>
                </div>

                {/* Philosophical Traits Grid */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>// Karakteristik Filosofis & Nalar Kepemimpinan</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedZodiac.article.philosophicalTraits.map((trait, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-950/80 border border-emerald-500/20 flex items-start space-x-2 text-xs text-slate-200"
                      >
                        <span className="text-emerald-400 font-bold font-mono">0{idx + 1}.</span>
                        <span className="leading-relaxed">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Major Astronomical Stars of Constellation */}
                <div className="p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/25 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center space-x-1 text-emerald-300 font-bold">
                      <Star className="w-3.5 h-3.5 text-emerald-400" />
                      <span>BINTANG UTAMA KONSTELASI:</span>
                    </span>
                    <span>Astrofisika Modern</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedZodiac.majorStars.map((star, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-teal-300 border border-teal-500/30"
                      >
                        ⭐ {star}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cosmic Wisdom Quote */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border-l-4 border-emerald-400 border-y border-r border-emerald-500/20 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold tracking-widest block">
                    KUTIPAN KEBIJAKSANAAN KOSMIK:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-100 italic leading-relaxed">
                    &ldquo;{selectedZodiac.article.cosmicWisdom}&rdquo;
                  </p>
                </div>

                {/* Modern Insight Link */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300 font-mono">
                  <span>💡 Refleksi Modern: {selectedZodiac.article.modernInsight}</span>
                  <a
                    href={`https://en.wikipedia.org/wiki/${selectedZodiac.name}_(astrology)`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-emerald-400 hover:underline flex-shrink-0"
                  >
                    <span>Pelajari Ensiklopedia (Tab Baru)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};
