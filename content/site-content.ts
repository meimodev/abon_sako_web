import { imagePaths } from '@/lib/image-paths'

export interface NavLink {
  label: string
  href: string
}

export interface ValueProposition {
  id: string
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  id: string
  stepNumber: number
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
}

export interface Competition {
  id: string
  name: string
  achievement: string
  description: string
  imageSrc: string
  imageAlt: string
}

export interface ProductVariant {
  id: string
  name: string
  description: string
  imageSrc: string
}

export const siteContent = {
  metadata: {
    title: 'Abon Ikan SAKO | Cita Rasa Otentik Laut Minahasa',
    description: 'Abon ikan sako segar karya TEFA SMKN 2 Tondano. Oleh-oleh khas Minahasa dengan cita rasa otentik laut.',
    keywords: ['abon ikan', 'minahasa', 'oleh-oleh manado', 'SMKN 2 Tondano', 'makanan sehat', 'ikan sako'],
  },
  navbar: {
    logo: 'ABON IKAN SAKO',
    links: [
      { label: 'Beranda', href: '#beranda' },
      { label: 'Keunggulan', href: '#keunggulan' },
      { label: 'Cerita Kami', href: '#cerita' },
      { label: 'Proses', href: '#proses' },
      { label: 'Produk', href: '#produk' },
    ] as NavLink[],
    ctaText: 'Pesan Sekarang',
    ctaHref: 'https://wa.me/+6285656064293?text=Halo%20Abon%20Sako%21%20%F0%9F%91%8B%20Saya%20baru%20lihat%20websitenya%20dan%20tertarik%20banget%20nih%20%F0%9F%90%9F%F0%9F%98%8B.%20Mau%20tanya%20lebih%20lanjut%tentang%20%E2%9C%A8...',
  },
  hero: {
    headline: 'Cita Rasa Laut Minahasa dalam Setiap Suapan',
    subheadline: 'Nikmati kelezatan Abon Ikan Sako, dibuat dari ikan segar pilihan dengan resep tradisional Minahasa. Kaya protein, rendah lemak, dan tanpa pengawet.',
    imageSrc: imagePaths.hero,
    imageAlt: 'Abon Ikan SAKO - Produk unggulan dari Minahasa',
  },
  valuePropositionsSection: {
    title: 'Kenapa Memilih Abon Ikan SAKO?',
    items: [
      {
        id: 'freshness',
        icon: 'Fish',
        title: 'Kesegaran Terjamin',
        description: 'Dibuat dari ikan sako segar langsung dari nelayan lokal Minahasa.',
      },
      {
        id: 'health',
        icon: 'Heart',
        title: 'Sehat & Bergizi',
        description: 'Kaya protein, rendah lemak, tanpa MSG dan pengawet buatan.',
      },
      {
        id: 'hygiene',
        icon: 'ShieldCheck',
        title: 'Higienis & Aman',
        description: 'Diproduksi dengan standar kebersihan tinggi di Teaching Factory SMKN 2 Tondano.',
      },
      {
        id: 'convenience',
        icon: 'Package',
        title: 'Praktis & Tahan Lama',
        description: 'Kemasan kedap udara menjaga kesegaran hingga 6 bulan.',
      },
    ] as ValueProposition[],
  },
  story: {
    title: 'Kolaborasi Karya Anak Bangsa',
    body: 'Lahir dari inovasi siswa SMKN 2 Tondano bekerja sama dengan nelayan lokal Minahasa. Abon Ikan SAKO adalah bukti nyata bahwa generasi muda Indonesia mampu menciptakan produk berkualitas yang mengangkat kearifan lokal.',
    imageSrc: imagePaths.story,
    imageAlt: 'Siswa SMKN 2 Tondano memproduksi Abon Ikan SAKO',
  },
  makingProcess: {
    title: 'Proses Pembuatan',
    subtitle: 'Dari laut Minahasa ke meja makan Anda, dengan standar higienis Teaching Factory',
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: 'Pemilihan Ikan Segar',
        description: 'Ikan sako segar dipilih langsung dari nelayan lokal Minahasa setiap pagi untuk menjamin kesegaran.',
        imageSrc: imagePaths.process.step1,
        imageAlt: 'Pemilihan ikan sako segar',
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: 'Pembersihan & Persiapan',
        description: 'Ikan dibersihkan dengan teliti dan disiapkan menggunakan standar higienis Teaching Factory.',
        imageSrc: imagePaths.process.step2,
        imageAlt: 'Pembersihan ikan',
      },
    ] as ProcessStep[],
  },
  products: {
    title: 'Pilih Favoritmu',
    items: [
      {
        id: 'original',
        name: 'Original',
        description: 'Rasa gurih alami ikan sako. Favorit keluarga.',
        imageSrc: imagePaths.products.original,
      },
      {
        id: 'pedas',
        name: 'Pedas',
        description: 'Sentuhan rempah pedas Minahasa yang nendang.',
        imageSrc: imagePaths.products.spicy,
      },
    ] as ProductVariant[],
  },
  competitions: {
    title: 'Prestasi & Kompetisi',
    subtitle: 'Abon Ikan SAKO telah diakui di berbagai kompetisi tingkat nasional',
    items: [
      {
        id: 'competition-1',
        name: 'Lomba Inovasi Produk TEFA Nasional',
        achievement: 'Juara 1',
        description: 'Penghargaan untuk inovasi produk Teaching Factory terbaik tingkat nasional.',
        imageSrc: imagePaths.competitions.tefa,
        imageAlt: 'Penghargaan Lomba Inovasi Produk TEFA Nasional',
      },
      {
        id: 'competition-2',
        name: 'Festival Kuliner Nusantara',
        achievement: 'Juara 2',
        description: 'Kompetisi produk kuliner tradisional dengan sentuhan modern.',
        imageSrc: imagePaths.competitions.kuliner,
        imageAlt: 'Penghargaan Festival Kuliner Nusantara',
      },
      
    ] as Competition[],
  },
  culturalBanner: {
    text: 'Oleh-Oleh Wajib dari Minahasa. Bawa pulang kenangan rasa.',
    imageSrc: imagePaths.culturalBanner,
    imageAlt: 'Pemandangan pantai Minahasa',
  },
  footer: {
    locationLabel: 'Lokasi',
    address: 'Teaching Factory SMK Negeri 2 Tondano',
    addressLink: "https://maps.app.goo.gl/ye91169goVWfRgAe7",
    socialLabel: 'Ikuti Kami',
    socialLinks: {
      instagram: 'https://www.instagram.com/abonikansako/',
      facebook: 'https://www.facebook.com/profile.php?id=100095449895602',
    },
    ctaLabel: 'Pesan Sekarang',
    ctaButtonText: 'Hubungi via WhatsApp',
    copyright: `Abon Ikan SAKO`,
  },
} as const
