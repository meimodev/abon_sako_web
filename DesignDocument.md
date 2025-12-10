Product Design Document (PDD): Abon Ikan SAKO Landing Page

Version: 1.0
Target Platform: Web (Mobile-First Responsive)
Tech Stack: Next.js 14+ (App Router), Tailwind CSS, Framer Motion, Lucide React
Language: Indonesian

1. Project Overview

Goal: Create a high-performance, SEO-optimized landing page for "Abon Ikan SAKO," a shredded fish product from Minahasa produced by SMKN 2 Tondano.
Core Themes: Authentic (Otentik), Hygienic (Higienis), Modern, Appetizing.
Target Audience: Families, Health-conscious individuals, Tourists (Souvenirs/Oleh-oleh).

2. Technical Specifications

Framework & Libraries

Core: Next.js 14 (App Router) for Server-Side Rendering (SSR) and SEO.

Styling: Tailwind CSS for utility-first styling.

Icons: lucide-react.

Fonts: next/font/google.

Primary (Headings): Playfair Display (Serif) - conveys heritage, elegance, and authenticity.

Secondary (Body): Inter or Lato (Sans-serif) - clean, modern, and readable.

Animation: framer-motion (optional) for subtle scroll reveal effects.

SEO Strategy (Next.js Metadata)

Title: Abon Ikan SAKO | Cita Rasa Otentik Laut Minahasa

Description: Abon ikan sako segar karya TEFA SMKN 2 Tondano. Kaya Omega-3, higienis, dan tanpa pengawet. Oleh-oleh khas Minahasa yang wajib dicoba.

Keywords: abon ikan, minahasa, oleh-oleh manado, SMKN 2 Tondano, makanan sehat, ikan sako.

3. Design System & UI Kit

Color Palette

Primary (Brand): #0F4C81 (Deep Ocean Blue) - Represents the Minahasa sea and trust.

Secondary (Action/Accent): #F97316 (Vibrant Orange) - Represents the appetizing color of the Abon and excitement.

Background (Canvas): #F8FAFC (Slate 50) - Clean, off-white for readability.

Text (Dark): #1E293B (Slate 800) - Soft black for reduced eye strain.

Text (Light): #FFFFFF (White) - For text on dark backgrounds.

Typography

H1 (Hero): Playfair Display, Bold, 3.5rem (Desktop) / 2.5rem (Mobile).

H2 (Section): Playfair Display, SemiBold, 2.25rem.

Body: Inter, Regular, 1rem, leading-relaxed.

Components

Buttons: Rounded-full, Primary (Orange bg, White text), Secondary (Outline Blue).

Cards: White background, shadow-sm, hover:shadow-md, rounded-xl.

4. Page Structure & Content

A. Header / Navbar

Sticky Top.

Logo: Text "SAKO" (Serif, Bold, Blue).

Links: Beranda, Keunggulan, Cerita Kami, Produk.

CTA: Button "Pesan Sekarang" (Links to WhatsApp).

B. Hero Section

Layout: Split Screen (Text Left, Image Right) or Full Background Overlay.

Copy:

Headline: "Cita Rasa Laut Minahasa dalam Setiap Suapan"

Subhead: "Nikmati kelezatan Abon Ikan Sako yang otentik. Diolah dari tangkapan nelayan lokal, kaya nutrisi, dan siap menemani momen makan keluarga Anda."

Visual (AI Prompt):

[Image_Hero]: Professional food photography of a premium glass jar filled with golden-brown shredded fish floss (abon), placed on a rustic white wooden table. In the background, a blurred, sunny view of the deep blue ocean and sky. Bright natural lighting, 8k resolution, appetizing.

C. Value Proposition (Grid)

Section Title: "Kenapa Memilih Abon Ikan SAKO?"

Items (Icon + Title + Desc):

Freshness: (Icon: Fish/Wave) "100% Ikan Segar" - "Langsung dari nelayan lokal Minahasa."

Health: (Icon: Heart/Shield) "Padat Nutrisi" - "Kaya Protein, Omega-3 & Vitamin D."

Hygiene: (Icon: Sparkles) "Higienis & Terjamin" - "Produksi standar TEFA SMKN 2 Tondano."

Convenience: (Icon: Clock) "Praktis" - "Lauk siap saji, tanpa pengawet berbahaya."

D. Our Story (Feature Block)

Layout: Image Left, Text Right.

Background: #E0F2FE (Light Blue Accent).

Copy:

Title: "Kolaborasi Karya Anak Bangsa"

Body: "Lahir dari inovasi siswa SMKN 2 Tondano yang berkolaborasi dengan kearifan nelayan lokal. Kami menghadirkan cita rasa laut Minahasa langsung ke meja makan Anda."

Visual (AI Prompt):

[Image_Story]: A clean, modern commercial kitchen environment. Indonesian vocational students in white chef coats and hats are smiling while processing fresh fish. Stainless steel equipment, hygienic atmosphere, warm lighting, educational and professional vibe.

E. Product Variants

Title: "Pilih Favoritmu"

Cards:

Original:

Desc: "Rasa gurih alami ikan sako. Favorit keluarga."

[Image_Original]: Macro shot of a spoonful of fluffy, golden-brown fish floss. Soft texture visible. Clean white background.

Pedas (Spicy):

Desc: "Sentuhan rempah pedas Minahasa yang nendang."

[Image_Spicy]: Macro shot of reddish-brown fish floss with small visible red chili flakes and a fresh red chili pepper on the side. Bold and appetizing.

F. Cultural / Souvenir Context

Layout: Full-width Banner.

Copy: "Oleh-Oleh Wajib dari Minahasa. Bawa pulang kenangan rasa."

Visual (AI Prompt):

[Image_Landscape]: Cinematic wide shot of the Minahasa coastline in North Sulawesi. Deep blue sea, green hills, traditional wooden boats in the distance. Golden hour sunlight.

G. Footer

Content:

Address: Teaching Factory SMKN 2 Tondano.

Social Media Links (Instagram, Facebook).

WhatsApp CTA.

Copyright: © 2024 Abon Ikan SAKO.

5. Implementation Roadmap (For AI Developer)

Setup: Initialize Next.js project with Tailwind CSS.

Assets: Use placeholder images (via.placeholder.com or similar) initially, using the Alt text defined in the prompts above.

Components: Create Hero.tsx, FeatureGrid.tsx, ProductCard.tsx.

Responsiveness: Ensure padding (px-4, py-12) adapts to mobile (flex-col) vs desktop (grid-cols-2).

Data: Store content strings in a constant file or JSON for easy editing later.