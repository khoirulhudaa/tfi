import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Cog, Facebook, Instagram, Youtube, Layers, Leaf, Mail, MapPin, Menu, PackageCheck, Phone, ShieldCheck, Ship, X } from "lucide-react";

/* ============ EDIT KONTEN DI SINI (data "ISI" = placeholder, ganti dengan data resmi) ============ */
const COMPANY = {
  name: "PT Tantra Fiber Industri",
  address: "Jl. Johar, Desa Plumbon, Kecamatan Plumbon, Kabupaten Cirebon, Jawa Barat",
  phone: "+62 000 0000 0000", // ISI
  email: "info@contoh-tantrafiber.co.id", // ISI
  hours: "Senin - Jumat, 08.00 - 16.00 WIB", // ISI
};

const NAV = [
  ["Tentang", "#tentang"], ["Kapabilitas", "#kapabilitas"], ["Produksi", "#produksi"],
  ["Produk", "#produk"], ["Wawasan", "#wawasan"], ["Tanggung Jawab", "#tanggung-jawab"], ["FAQ", "#faq"],
];

const CAPABILITIES = [
  { icon: Ship, title: "Pengadaan bahan baku impor", text: "Kami mengimpor bahan baku serat sintetis untuk menjaga pasokan produksi tetap berjalan." },
  { icon: Cog, title: "Pemintalan skala industri", text: "Bahan baku diolah menjadi benang sintetis di fasilitas pabrik kami di Plumbon, Cirebon." },
  { icon: Layers, title: "Benang untuk industri tekstil", text: "Benang kami dipasok untuk kebutuhan produsen kain dan tekstil." },
  { icon: PackageCheck, title: "Pengemasan dan pengiriman", text: "Produk dikemas dan dikirim sesuai pesanan pelanggan." },
];

const STEPS = [
  ["Bahan baku", "Serat sintetis diterima, diperiksa, dan disimpan."],
  ["Pemintalan", "Serat dipintal menjadi benang pada mesin produksi."],
  ["Pemeriksaan mutu", "Benang diperiksa sesuai standar sebelum dikemas."],
  ["Pengiriman", "Benang dikemas rapih dan dikirim ke pelanggan."],
];

// ISI: sesuaikan dengan katalog produk resmi
const PRODUCTS = [
  { name: "Benang Filament", text: "Benang menerus untuk kain yang halus dan rata.", img: "/pr5.jpg" },
  { name: "Benang Khusus", text: "Benang sesuai spesifikasi pesanan pelanggan.", img: "/pr5.jpg" },
  { name: "Benang Spun", text: "Benang pintal dari serat pendek untuk kain bertekstur.", img: "/pr5.jpg" },
];

const COMMITMENTS = [
  ["Kepatuhan regulasi", "Kami berkomitmen menjalankan operasional sesuai peraturan lingkungan dan ketenagakerjaan yang berlaku."],
  ["Kenyamanan lingkungan sekitar", "Kami memperhatikan bau dan kebisingan, serta terbuka menerima masukan dari warga sekitar pabrik."],
  ["Keselamatan kerja", "Kami menjaga keselamatan dan kesehatan seluruh karyawan di area produksi."],
];

const FAQS = [
  ["Informasi apa yang perlu saya siapkan untuk meminta penawaran?", "Siapkan jenis benang, ukuran (misalnya denier), jumlah yang dibutuhkan, dan alamat tujuan pengiriman. Semakin lengkap, semakin cepat tim kami menjawab."],
  ["Apa bedanya benang filament dan spun?", "Benang filament dibuat dari serat menerus sehingga halus dan rata. Benang spun dipintal dari serat pendek sehingga permukaannya lebih berbulu dan bertekstur."],
  ["Bisakah saya memesan benang sesuai spesifikasi sendiri?", "Hubungi kami dan sampaikan spesifikasinya. Tim kami akan memberi tahu apakah pesanan tersebut bisa dipenuhi."],
  ["Bagaimana cara menghubungi pabrik?", "Gunakan formulir di bagian Kontak, atau hubungi nomor telepon dan email yang tertera pada halaman ini."],
  ["Di mana lokasi pabrik?", "Pabrik kami berada di Jl. Johar, Desa Plumbon, Kecamatan Plumbon, Kabupaten Cirebon, Jawa Barat. Peta ada di bagian Kontak."],
];

const ARTICLES = [
  {
    tag: "Bahan baku", img: "/pr5.jpg", min: 3, title: "Mengenal empat serat sintetis yang paling umum",
    excerpt: "Polyester, nylon, akrilik, dan polipropilen: sifat dan pemakaian umumnya.",
    body: [
      "Serat sintetis dibuat dari bahan kimia, lalu diolah menjadi serat dan dipintal menjadi benang. Berikut empat jenis yang paling sering dipakai di industri tekstil.",
      "Polyester: serat sintetis yang paling banyak dipakai. Kuat, tahan kusut, dan cepat kering. Umum untuk pakaian, seragam, dan kain rumah tangga.",
      "Nylon: sangat kuat dan elastis, tahan gesekan. Umum untuk pakaian olahraga, kaus kaki, tali, dan tas.",
      "Akrilik: terasa lembut dan hangat seperti wol. Umum untuk sweter, selimut, dan kain rajut.",
      "Polipropilen: ringan dan tahan lembap. Umum untuk karpet, kain industri, dan tali.",
    ],
  },
  {
    tag: "Istilah", img: "/pr5.jpg", min: 2, title: "Memahami denier, satuan ukuran benang",
    excerpt: "Angka denier menunjukkan seberapa halus atau tebal sebuah benang.",
    body: [
      "Denier adalah satuan massa benang: berat dalam gram untuk setiap 9.000 meter benang. Semakin kecil angkanya, semakin halus benangnya.",
      "Sebagai gambaran, benang 75 denier lebih halus daripada benang 300 denier. Benang halus biasa dipakai untuk kain tipis, sedangkan benang yang lebih tebal untuk kain yang perlu kuat.",
      "Sebagian pabrik memakai satuan tex, yaitu gram untuk setiap 1.000 meter. Saat meminta penawaran, sebutkan satuan yang Anda pakai agar tidak keliru.",
    ],
  },
  {
    tag: "Pemesanan", img: "/pr5.jpg", min: 2, title: "Menyiapkan permintaan penawaran benang",
    excerpt: "Informasi yang perlu disiapkan supaya penawaran bisa dijawab lebih cepat.",
    body: [
      "Penawaran bisa dijawab lebih cepat jika permintaan Anda lengkap. Siapkan hal-hal berikut sebelum menghubungi kami.",
      "Jenis benang: filament, spun, atau khusus. Bahan serat yang diinginkan, misalnya polyester atau nylon.",
      "Ukuran benang, misalnya denier, serta jumlah yang dibutuhkan dan jadwal pengirimannya.",
      "Alamat tujuan pengiriman. Jika punya spesifikasi atau contoh benang, sertakan juga.",
    ],
  },
];

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 6.7a5.6 5.6 0 0 1-3.4-1.2 5.6 5.6 0 0 1-2-3.2h-3.3v12.9a2.6 2.6 0 1 1-1.9-2.5V9.3a6 6 0 1 0 5.2 5.9V9.1a8.9 8.9 0 0 0 5.4 1.8z" /></svg>
);

// ISI: ganti "#" dengan tautan sosial media resmi
const SOCIAL = [
  [Facebook, "Facebook", "#"], [Youtube, "YouTube", "#"], [XIcon, "X", "#"],
  [Instagram, "Instagram", "#"], [TikTokIcon, "TikTok", "#"],
];

const FOOTER_LINKS = [
  ["Tentang", "#tentang"], ["Produk", "#produk"], ["Wawasan", "#wawasan"],
  ["Tanggung Jawab", "#tanggung-jawab"], ["FAQ", "#faq"], ["Kontak", "#kontak"],
];

/* ============ Komponen ============ */
const COLORS = ["#2563EB", "#E11D48", "#1E40AF", "#FB7185", "#60A5FA"];
const FONT = { fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" };

const Strands = () => (
  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    {Array.from({ length: 14 }).map((_, i) => {
      const y = 40 + i * 42;
      const c = COLORS[i % COLORS.length];
      const d = `M-50 ${y} C 280 ${y - 90 + (i % 4) * 25}, 620 ${y + 110 - (i % 3) * 30}, 1250 ${y - 20}`;
      return (
        <g key={i}>
          <path d={d} fill="none" stroke={c} strokeWidth="0.8" opacity="0.18" />
          {i % 4 === 0 && <path d={d} fill="none" stroke={c} strokeWidth="1.4" opacity="0.45" className="strand" style={{ animationDelay: `${-i}s` }} />}
        </g>
      );
    })}
  </svg>
);

const Section = ({ normal=false, id, title, intro, children, dark = false, soft = false }) => (
  <section id={id} className={`relative -mt-8 rounded-t-[2rem] shadow-[0_-10px_30px_-18px_rgba(15,23,42,0.35)] md:-mt-10 md:rounded-t-[3rem] ${dark ? "bg-blue-950 text-white" : soft ? "bg-blue-50 text-slate-900" : normal ? "bg-blue-50 text-slate-900 shadow-none" : "bg-white text-slate-900"}`}>
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-5 sm:pb-20 sm:pt-14 md:pb-32 md:pt-20">
      <div className="mb-8 max-w-6xl md:mb-10">
        <span className="mb-4 block h-1.5 w-12 rounded-full bg-rose-600" />
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-5xl">{title}</h2>
        {intro && <p className={`mt-4 text-sm md:text-md leading-relaxed sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>{intro}</p>}
      </div>
      {children}
    </div>
  </section>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-blue-950/85 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5">
        <a href="#" className="flex min-w-0 items-center gap-3 font-bold tracking-tight">
          <img src="/logo.png" alt="logo" className="h-8 w-8 object-contain" />
          <span className="truncate text-sm sm:text-sm">{COMPANY.name}</span>
        </a>
        <nav className="hidden items-center gap-1 text-sm font-medium xl:flex" aria-label="Menu utama">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="rounded-full px-4 py-2 text-blue-100 transition hover:bg-white/10 hover:text-white">{l}</a>
          ))}
        </nav>
        <a href="#kontak" className="hidden rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-900/40 transition hover:bg-rose-500 xl:block">Hubungi kami</a>
        <button className="shrink-0 xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 max-h-[80svh] overflow-y-auto bg-blue-950 px-4 pb-4 xl:hidden" aria-label="Menu seluler">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 font-medium">{l}</a>
          ))}
          <a href="#kontak" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-rose-600 py-3 text-center font-semibold">Hubungi kami</a>
        </nav>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-blue-950 text-white">
    <img src="/bg.jpeg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
    <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-[120px]" />
    <div className="absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-rose-600/20 blur-[120px]" />
    <Strands />
    <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-5 sm:py-24">
      <p className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-1.5 text-xs backdrop-blur sm:rounded-full sm:text-sm">
        <span className="h-2 w-2 rounded-full bg-rose-500" /> Pabrik pemintalan benang sintetis, Plumbon - Cirebon
      </p>
      <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-7xl">
        Pemintalan benang sintetis untuk industri tekstil
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-blue-100/80 sm:text-lg">
        {COMPANY.name} mengimpor bahan baku dan memproduksi benang sintetis dalam skala industri dari pabrik kami di Kabupaten Cirebon, Jawa Barat.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#produk" className="rounded-full bg-rose-600 px-7 py-3.5 font-semibold shadow-lg shadow-rose-900/40 transition hover:bg-rose-500">Lihat produk</a>
        <a href="#kontak" className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold backdrop-blur transition hover:bg-white/20">Minta penawaran</a>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const items = [[MapPin, "Alamat pabrik", COMPANY.address], [Phone, "Telepon", COMPANY.phone], [Mail, "Email", COMPANY.email]];
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        {items.map(([I, l, v], i) => (
          <div key={l} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 items-center md:p-5 shadow-sm">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${i === 0 ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"}`}><I size={20} /></span>
            <div className="min-w-0"><p className="text-sm text-slate-500">{l}</p><p className="break-words font-semibold">{v}</p></div>
          </div>
        ))}
      </div>
      <iframe title="Lokasi pabrik" loading="lazy" className="h-72 w-full rounded-3xl border-0 shadow-lg sm:h-80 lg:h-full"
        src="https://www.google.com/maps?q=PT+Tantra+Fiber+Industri+Plumbon+Cirebon&output=embed" />
    </div>
  );
};

const Articles = () => {
  const [a, setA] = useState(null);
  useEffect(() => {
    if (!a) return;
    const onKey = (e) => e.key === "Escape" && setA(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [a]);
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((x, i) => (
          <button key={x.title} onClick={() => setA(x)} className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:shadow-xl">
            <div className={`relative h-40 w-full overflow-hidden bg-gradient-to-br ${i % 2 ? "from-rose-500 to-rose-700" : "from-blue-600 to-blue-900"}`}>
              <img src={x.img} alt={x.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-4 md:p-5">
              <span className="text-xs font-semibold text-rose-600">{x.tag}</span>
              <h3 className="mt-2 font-bold leading-snug">{x.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.excerpt}</p>
              <span className="mt-auto flex items-center gap-1.5 pt-4 text-xs text-slate-500"><Clock size={14} /> {x.min} menit baca</span>
            </div>
          </button>
        ))}
      </div>
      {a && (
        <div role="dialog" aria-modal="true" aria-label={a.title} onClick={() => setA(null)}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/70 backdrop-blur-sm sm:items-center sm:p-6">
          <div onClick={(e) => e.stopPropagation()} className="max-h-[90svh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white p-6 text-slate-900 shadow-2xl sm:rounded-3xl sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">{a.tag}</span>
              <button onClick={() => setA(null)} aria-label="Tutup artikel" className="rounded-full p-1.5 hover:bg-slate-100"><X size={20} /></button>
            </div>
            <img src={a.img} alt={a.title} onError={(e) => { e.currentTarget.style.display = "none"; }}
              className="mt-4 h-44 w-full rounded-2xl object-cover sm:h-64" />
            <h3 className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl">{a.title}</h3>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500"><Clock size={14} /> {a.min} menit baca</p>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
              {a.body.map((t, i) => <p key={i}>{t}</p>)}
            </div>
            <a href="#kontak" onClick={() => setA(null)} className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-600">Tanya kebutuhan benang Anda</a>
          </div>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <div style={FONT} className="overflow-x-clip antialiased">
      <Nav />
      <main>
        <Hero />

        <Section id="tentang" title="Tentang perusahaan"
          intro="PT Tantra Fiber Industri adalah perusahaan manufaktur yang bergerak di bidang pemintalan benang sintetis dan bagian dari Tantra Group. Perusahaan ini berlokasi di Kabupaten Cirebon, Jawa Barat, dan pernah menjadi sorotan publik terkait kapasitas daya listrik serta penertiban operasional oleh pihak berwenang">
          <dl className="grid gap-4 md:grid-cols-3">
            {[["Bidang usaha", "Pemintalan benang sintetis", "from-blue-600 to-blue-800"], ["Badan hukum", "Perseroan Terbatas (PT)", "from-rose-500 to-rose-700"],
              ["Lokasi", "Plumbon, Kab. Cirebon", "from-blue-700 to-blue-950"]].map(([k, v, g]) => (
              <div key={k} className={`rounded-3xl bg-gradient-to-br ${g} p-4 md:p-6 text-white shadow-lg`}>
                <dt className="text-sm text-white/70">{k}</dt><dd className="mt-8 text-xl font-bold">{v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="kapabilitas" soft title="Yang kami kerjakan">
          <div className="grid gap-5 md:grid-cols-2">
            {CAPABILITIES.map(({ icon: I, title, text }, i) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 md:p-8 shadow-sm transition hover:shadow-xl">
                <span className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${i % 3 === 1 ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-600"}`}><I /></span>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="md:text-md text-md mt-2 leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section normal={true} id="produksi" title="Dari serat menjadi benang" intro="Alur produksi secara umum di pabrik pemintalan.">
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border rounded-2xl bg-white md:bg-transparent md:rounded-none border-slate-300/60 md:border-none md:p-0 p-4">
                <span className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ${i % 2 ? "bg-rose-600" : "bg-blue-700"}`}>{i + 1}</span>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-700 to-transparent" />
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm md:text-md leading-relaxed text-slate-600">{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="produk" soft title="Produk benang" intro="Hubungi kami untuk spesifikasi, kuantitas, dan harga.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.name} className="group relative h-80 sm:h-96 overflow-hidden rounded-3xl bg-blue-950 shadow-lg">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-white">
                  <span className="mb-3 block h-1 w-10 rounded-full bg-rose-500" />
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-blue-100/80">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="wawasan" title="Wawasan" intro="Informasi umum seputar benang dan serat sintetis, bukan daftar produk perusahaan.">
          <Articles />
        </Section>

        <Section id="tanggung-jawab" dark title="Tanggung jawab lingkungan">
          <div className="grid gap-5 md:grid-cols-3">
            {COMMITMENTS.map(([t, d], i) => {
              const I = [ShieldCheck, Leaf, Cog][i];
              return (
                <div key={t} className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-7 backdrop-blur">
                  <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${i === 1 ? "bg-rose-600" : "bg-blue-600"}`}><I /></span>
                  <h3 className="text-lg font-bold">{t}</h3>
                  <p className="mt-2 md:text-md text-sm leading-relaxed text-slate-300">{d}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="faq" title="Pertanyaan umum">
          <div className="max-w-7xl space-y-3">
            {FAQS.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-slate-400 bg-white p-4 md:p-5 open:border-blue-300 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {q}
                  <span className="shrink-0 text-2xl text-rose-600 transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section id="kontak" soft title="Hubungi kami" intro="Tulis kebutuhan benang Anda atau sampaikan masukan"><Contact /></Section>
      </main>

      <footer className="relative -mt-8 rounded-t-[2rem] bg-blue-950 text-white md:-mt-10 md:rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-5">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="md:flex items-start gap-4">
              <img src="/logo.png" alt="logo" className="h-14 w-14 shrink-0 rounded-xl bg-white object-contain p-1.5" />
              <div className="min-w-0 md:mt-0 mt-4">
                <p className="font-bold">{COMPANY.name}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-blue-100"><Phone size={14} /> {COMPANY.phone}</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-blue-100/80">
                  Segala permintaan penawaran hanya melalui kontak resmi {COMPANY.name}.{" "}
                  <a href="#kontak" className="font-semibold text-white underline decoration-rose-500 underline-offset-4 hover:text-rose-300">(Klik di sini)</a>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {SOCIAL.map(([I, label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-950 transition hover:bg-rose-600 hover:text-white">
                  <I size={20} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Menu footer" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold md:gap-x-0">
            {FOOTER_LINKS.map(([l, h], i) => (
              <a key={h} href={h} className={`hover:text-rose-300 md:px-5 ${i ? "md:border-l md:border-white/30" : "md:pl-0"}`}>{l}</a>
            ))}
          </nav>

          <div className="mt-8 border-t border-white/20 pt-5 text-center text-xs text-blue-200/70 sm:text-sm">
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Seluruh hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}