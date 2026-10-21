import { useState } from "react";
import { Cog, Layers, Leaf, Mail, MapPin, Menu, PackageCheck, Phone, ShieldCheck, Ship, X } from "lucide-react";

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
  ["Produk", "#produk"], ["Wawasan", "#wawasan"], ["Tanggung Jawab", "#tanggung-jawab"],
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
  ["Pemeriksaan mutu", "Benang diperiksa sebelum dikemas."],
  ["Pengiriman", "Benang dikemas dan dikirim ke pelanggan."],
];

// ISI: sesuaikan dengan katalog produk resmi
const PRODUCTS = [
  { name: "Benang Filament", text: "Benang menerus untuk kain yang halus dan rata.", color: "#0E7C86", img: '/pr1.jpg' },
  { name: "Benang Khusus", text: "Benang sesuai spesifikasi pesanan pelanggan.", color: "#3B5BA9", img: '/pr4.jpg' },
  { name: "Benang Spun", text: "Benang pintal dari serat pendek untuk kain bertekstur.", color: "#E8734A", img: '/pr5.jpg' },
];

const COMMITMENTS = [
  ["Kepatuhan regulasi", "Kami berkomitmen menjalankan operasional sesuai peraturan lingkungan dan ketenagakerjaan yang berlaku."],
  ["Kenyamanan lingkungan sekitar", "Kami memperhatikan bau dan kebisingan, serta terbuka menerima masukan dari warga sekitar pabrik."],
  ["Keselamatan kerja", "Kami menjaga keselamatan dan kesehatan seluruh karyawan di area produksi."],
];

// Pengetahuan umum industri (bukan daftar produk perusahaan)
const FIBERS = [
  { name: "Polyester", text: "Serat sintetis yang paling banyak dipakai. Kuat, tahan kusut, dan cepat kering. Umum untuk pakaian, seragam, dan kain rumah tangga." },
  { name: "Nylon", text: "Sangat kuat dan elastis, tahan gesekan. Umum untuk pakaian olahraga, kaus kaki, tali, dan tas." },
  { name: "Akrilik", text: "Terasa lembut dan hangat seperti wol. Umum untuk sweter, selimut, dan kain rajut." },
  { name: "Polipropilen", text: "Ringan dan tahan lembap. Umum untuk karpet, kain industri, dan tali." },
];

const FAQS = [
  ["Informasi apa yang perlu saya siapkan untuk meminta penawaran?", "Siapkan jenis benang, ukuran (misalnya denier), jumlah yang dibutuhkan, dan alamat tujuan pengiriman. Semakin lengkap, semakin cepat tim kami menjawab."],
  ["Apa bedanya benang filament dan spun?", "Benang filament dibuat dari serat menerus sehingga halus dan rata. Benang spun dipintal dari serat pendek sehingga permukaannya lebih berbulu dan bertekstur."],
  ["Bisakah saya memesan benang sesuai spesifikasi sendiri?", "Hubungi kami dan sampaikan spesifikasinya. Tim kami akan memberi tahu apakah pesanan tersebut bisa dipenuhi."],
  ["Bagaimana cara menghubungi pabrik?", "Gunakan formulir di bagian Kontak, atau hubungi nomor telepon dan email yang tertera pada halaman ini."],
  ["Di mana lokasi pabrik?", "Pabrik kami berada di Jl. Johar, Desa Plumbon, Kecamatan Plumbon, Kabupaten Cirebon, Jawa Barat. Peta ada di bagian Kontak."],
];

/* ============ Komponen ============ */
const COLORS = ["#0E7C86", "#E8734A", "#3B5BA9", "#C9A227", "#7A5BA6"];

const Strands = () => (
  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    {Array.from({ length: 22 }).map((_, i) => {
      const y = 40 + i * 26;
      const c = COLORS[i % COLORS.length];
      const d = `M-50 ${y} C 280 ${y - 90 + (i % 4) * 25}, 620 ${y + 110 - (i % 3) * 30}, 1250 ${y - 20}`;
      return (
        <g key={i} opacity={0.55}>
          <path d={d} fill="none" stroke={c} strokeWidth="1.5" opacity="0.5" />
          {i % 3 === 0 && <path d={d} fill="none" stroke={c} strokeWidth="3" className="strand" style={{ animationDelay: `${-i}s` }} />}
        </g>
      );
    })}
  </svg>
);

const Section = ({ large=false, id, title, intro, children, dark }) => (
  <section id={id} className={dark ? "bg-ink text-white" : ""}>
    <div className={`mx-auto max-w-6xl px-5 py-16 ${large ? 'md:py-24' : 'md:py-12'}`}>
      <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {intro && <p className={`mt-4 max-w-full leading-relaxed ${dark ? "text-white/70" : "text-ink/70"}`}>{intro}</p>}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="w-[40%] flex items-center gap-x-4">
          <img src="/logo.png" alt="logo" className="w-[8%]" />
          <a href="#" className="w-max font-display text-lg font-bold">{COMPANY.name}</a>
        </div>
        <nav className="hidden gap-6 gap-x-10 text-sm font-medium lg:flex" aria-label="Menu utama">
          {NAV.map(([l, h]) => <a key={h} href={h} className="hover:text-teal">{l}</a>)}
        </nav>
        {/* <a href="#kontak" className="hidden rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white hover:bg-teal-dark lg:block">Hubungi kami</a> */}
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-ink/10 bg-paper px-5 pb-4 lg:hidden" aria-label="Menu seluler">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-ink/5 py-3 font-medium">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative h-[75vh] flex flex-col justify-center overflow-hidden bg-ink text-white">
    <img src="/bg.jpeg" alt="wallpaper" aria-hidden="true" className="absolute inset-0 z-[1] h-full w-full object-cover opacity-40" />
    <Strands />
    <div className="absolute z-[22] inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />

    <div className="relative z-[22] mx-auto w-[84vw] px-5 py-24 md:py-0">
      <p className="mb-4 text-sm text-white/70">Pabrik pemintalan benang sintetis, Plumbon - Cirebon</p>
      <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
        Pemintalan Benang sintetis untuk industri tekstil
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed text-white/75">
        {COMPANY.name} mengimpor bahan baku dan memproduksi benang sintetis dalam skala industri dari pabrik kami di Kabupaten Cirebon, Jawa Barat.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#produk" className="rounded-full bg-white px-6 py-3 font-semibold text-ink hover:bg-white/90">Lihat produk</a>
        <a href="#kontak" className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">Minta penawaran</a>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const send = (e) => {
    e.preventDefault();
    const body = `${f.msg}\n\nDari: ${f.name} (${f.email})`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent("Pertanyaan dari website")}&body=${encodeURIComponent(body)}`;
  };
  const input = "w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-ink focus:border-teal";
  return (
    <div className="grid gap-10 lg:grid-cols-1">
      <div className="space-y-5">
        {[[MapPin, "Alamat pabrik", COMPANY.address], [Phone, "Telepon", COMPANY.phone], [Mail, "Email", COMPANY.email]].map(([I, l, v]) => (
          <div key={l} className="flex gap-4">
            <I className="mt-1 shrink-0 text-teal" size={20} />
            <div><p className="text-sm text-ink/60">{l}</p><p className="font-medium">{v}</p></div>
          </div>
        ))}
        <p className="text-sm text-ink/60">Jam operasional: {COMPANY.hours}</p>
        <iframe title="Lokasi pabrik" loading="lazy" className="h-64 w-full rounded-xl border-0"
          src="https://www.google.com/maps?q=PT+Tantra+Fiber+Industri+Plumbon+Cirebon&output=embed" />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Section id="tentang" title="Tentang perusahaan"
          intro={`PT Tantra Fiber Industri adalah perusahaan manufaktur yang bergerak di bidang pemintalan benang sintetis dan bagian dari Tantra Group. Perusahaan ini berlokasi di Kabupaten Cirebon, Jawa Barat, dan pernah menjadi sorotan publik terkait kapasitas daya listrik serta penertiban operasional oleh pihak berwenang`}>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[["Bidang usaha", "Pemintalan benang sintetis"], ["Badan hukum", "Perseroan Terbatas (PT)"],
              ["Lokasi", "Plumbon, Kab. Cirebon"]].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-ink/20 bg-white p-5">
                <dt className="text-sm text-ink/60">{k}</dt><dd className="mt-1 font-display text-lg font-bold">{v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section large={true} id="kapabilitas" dark title="Yang kami kerjakan">
          <div className="grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map(({ icon: I, title, text }) => (
              <div key={title} className="bg-ink p-7 rounded-lg border border-white/40">
                <I className="mb-4 text-dye" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <br />

        <Section id="produksi" title="Dari serat menjadi benang" intro="Alur produksi secara umum di pabrik pemintalan.">
          <ol className="grid gap-6 md:grid-cols-2">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="relative border-t-4 border-x border-b rounded-lg pb-1 px-3.5 pt-4" style={{ borderColor: COLORS[i] }}>
                <p className="text-sm text-ink/50">Tahap {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="produk" title="Produk benang" intro="Hubungi kami untuk spesifikasi, kuantitas, dan harga.">
          <div className="grid gap-5 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.name} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                <div className="w-full h-40 overflow-hidden">
                  <img src={p.img} alt="foto-product" className="h-full object-cover w-full" />
                </div>
                <div className="p-6"><h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{p.text}</p></div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="wawasan" title="Mengenal benang sintetis"
          intro="Informasi umum untuk membantu Anda memilih benang. Ini penjelasan industri secara umum, bukan daftar produk kami.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {FIBERS.map((f, i) => (
              <div key={f.name} className="rounded-2xl border border-ink/10 bg-white p-6" style={{ borderTop: `4px solid ${COLORS[i]}` }}>
                <h3 className="text-lg font-bold">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <br />

        <Section large={true} id="tanggung-jawab" dark title="Tanggung jawab kepada lingkungan">
          <div className="grid gap-6 md:grid-cols-3">
            {COMMITMENTS.map(([t, d], i) => {
              const I = [ShieldCheck, Leaf, Cog][i];
              return (
                <div key={t} className="rounded-2xl border border-white/15 p-6">
                  <I className="mb-3 text-dye" /><h3 className="text-lg font-bold">{t}</h3>
                  <p className="mt-2 leading-relaxed text-white/70">{d}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="faq" title="Pertanyaan umum">
          <div className="max-w-7xl divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {FAQS.map(([q, a]) => (
              <details key={q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {q}
                  <span className="shrink-0 text-xl text-teal transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink/70">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section id="kontak" title="Hubungi kami" intro="Tulis kebutuhan benang Anda atau sampaikan masukan"><Contact /></Section>
      </main>

      <footer className="bg-ink py-8 text-center text-sm text-white/60">
        <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Seluruh hak dilindungi.</p>
      </footer>
    </>
  );
}