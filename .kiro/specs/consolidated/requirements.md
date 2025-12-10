# Requirements Document - Abon Ikan SAKO Landing Page

## Introduction

This document consolidates all requirements for the Abon Ikan SAKO landing page - a high-performance, SEO-optimized web application for a premium shredded fish product from Minahasa, North Sulawesi, Indonesia. The product is made by students at SMKN 2 Tondano vocational school in collaboration with local fishermen.

**Target Audience:** Indonesian families, health-conscious consumers, and tourists seeking authentic Minahasa souvenirs (oleh-oleh).

**Core Brand Values:** Authentic (Otentik), Hygienic (Higienis), Modern, Appetizing.

**Language:** Indonesian (Bahasa Indonesia) - `lang="id"`, locale `id_ID`

## Glossary

- **Landing_Page**: The single-page web application promoting Abon Ikan SAKO product
- **Hero_Section**: The prominent top section featuring headline, subheadline, and primary call-to-action
- **Value_Proposition_Grid**: A grid layout displaying product benefits with icons and descriptions
- **Product_Card**: A card component displaying individual product variant information
- **CTA_Button**: Call-to-action button that directs users to WhatsApp ordering
- **Navbar**: The sticky navigation header with logo and navigation links
- **Feature_Block**: A two-column layout section with image and text content
- **Making_Process_Section**: Section displaying the step-by-step production process
- **Process_Step_Card**: A card component displaying a single step in the making process
- **GA4**: Google Analytics 4 for tracking user behavior
- **Design_System**: The collection of design tokens, color palettes, typography scales, and component styles

---

## Requirements

### Requirement 1: Navigation and Header

**User Story:** As a visitor, I want to navigate the landing page easily, so that I can find information about the product and place an order.

#### Acceptance Criteria

1. WHEN the Landing_Page loads THEN the Navbar SHALL display the "SAKO" logo text styled with primary color
2. WHEN a visitor scrolls down the page THEN the Navbar SHALL remain fixed at the top of the viewport
3. WHEN the Navbar renders THEN the system SHALL display navigation links for "Beranda", "Keunggulan", "Cerita Kami", "Proses", and "Produk"
4. WHEN a visitor clicks a navigation link THEN the Landing_Page SHALL smooth-scroll to the corresponding section
5. WHEN the Navbar renders THEN the system SHALL display a "Pesan Sekarang" CTA_Button that links to WhatsApp

### Requirement 2: Hero Section Display

**User Story:** As a visitor, I want an impactful first impression, so that I immediately understand the brand's energy and value.

#### Acceptance Criteria

1. WHEN the Hero_Section loads THEN the system SHALL display a full-width gradient background blending primary and dark colors
2. WHEN the Hero_Section renders THEN the system SHALL display the headline "Cita Rasa Laut Minahasa dalam Setiap Suapan" at 4rem (desktop) or 2.75rem (mobile)
3. WHEN the Hero_Section renders THEN the system SHALL display white text with a subtle text-shadow for depth
4. WHEN the Hero_Section renders THEN the system SHALL display a product image with decorative geometric shape overlay
5. WHEN the hero CTA is rendered THEN the system SHALL use the accent color (gold) for maximum contrast
6. WHEN viewed on mobile THEN the Hero_Section SHALL stack content vertically with headline above image

### Requirement 3: Value Proposition Grid

**User Story:** As a visitor, I want to see the key benefits of the product, so that I can understand why I should choose Abon Ikan SAKO.

#### Acceptance Criteria

1. WHEN the Value_Proposition_Grid renders THEN the system SHALL display the section title "Kenapa Memilih Abon Ikan SAKO?"
2. WHEN the Value_Proposition_Grid renders THEN the system SHALL display four benefit cards: Freshness, Health, Hygiene, and Convenience
3. WHEN a benefit card renders THEN the system SHALL display a Lucide React icon with gradient background, title, and description text
4. WHEN viewed on desktop THEN the Value_Proposition_Grid SHALL arrange cards in a 2x2 or 4-column grid layout
5. WHEN viewed on mobile THEN the Value_Proposition_Grid SHALL stack cards vertically in a single column

### Requirement 4: Our Story Feature Block

**User Story:** As a visitor, I want to learn about the product's origin and creators, so that I can trust the brand and feel connected to its story.

#### Acceptance Criteria

1. WHEN the Feature_Block renders THEN the system SHALL display the title "Kolaborasi Karya Anak Bangsa"
2. WHEN the Feature_Block renders THEN the system SHALL display body text describing the SMKN 2 Tondano collaboration with local fishermen
3. WHEN the Feature_Block renders THEN the system SHALL apply a dark background with inverted text colors
4. WHEN viewed on desktop THEN the Feature_Block SHALL display image on the left and text on the right
5. WHEN viewed on mobile THEN the Feature_Block SHALL stack image above text content

### Requirement 5: Making Process Section

**User Story:** As a visitor, I want to see how Abon Ikan SAKO is made, so that I can appreciate the quality and craftsmanship behind the product.

#### Acceptance Criteria

1. WHEN the Making_Process_Section renders THEN the system SHALL display the section title "Proses Pembuatan"
2. WHEN the Making_Process_Section renders THEN the system SHALL display a subtitle describing the traditional yet hygienic production process
3. WHEN the Making_Process_Section renders THEN the system SHALL display 4 Process_Step_Card components:
   - "Pemilihan Ikan Segar" - Fish selection
   - "Pembersihan & Persiapan" - Cleaning and preparation
   - "Pengolahan & Penyuwiran" - Cooking and shredding
   - "Kontrol Kualitas & Pengemasan" - Quality control and packaging
4. WHEN a Process_Step_Card renders THEN the system SHALL display a step number, title, and description text
5. WHEN viewed on desktop THEN the Making_Process_Section SHALL arrange cards in a horizontal timeline or grid layout
6. WHEN viewed on mobile THEN the Making_Process_Section SHALL stack cards vertically
7. WHEN the Making_Process_Section scrolls into view THEN the system SHALL apply scroll reveal animation

### Requirement 6: Product Variants Display

**User Story:** As a visitor, I want to see available product variants, so that I can choose the flavor that suits my preference.

#### Acceptance Criteria

1. WHEN the product section renders THEN the system SHALL display the section title "Pilih Favoritmu"
2. WHEN the product section renders THEN the system SHALL display Product_Card components for "Original" and "Pedas" variants
3. WHEN a Product_Card renders THEN the system SHALL display product image, variant name, and description
4. WHEN a visitor hovers over a Product_Card THEN the system SHALL lift the card with increased shadow and colored top border accent
5. WHEN the Product_Card renders THEN the system SHALL apply white background, rounded corners, and shadow styling

### Requirement 7: Cultural Banner Section

**User Story:** As a visitor, I want to see the cultural context of the product, so that I can appreciate it as an authentic Minahasa souvenir.

#### Acceptance Criteria

1. WHEN the cultural banner renders THEN the system SHALL display the text "Oleh-Oleh Wajib dari Minahasa. Bawa pulang kenangan rasa."
2. WHEN the cultural banner renders THEN the system SHALL display a full-width background image of Minahasa coastline
3. WHEN the cultural banner renders THEN the system SHALL apply vibrant overlay and appropriate text contrast

### Requirement 8: Footer Section

**User Story:** As a visitor, I want to find contact information and social media links, so that I can connect with the brand or place an order.

#### Acceptance Criteria

1. WHEN the footer renders THEN the system SHALL display the address "Teaching Factory SMKN 2 Tondano"
2. WHEN the footer renders THEN the system SHALL display social media links for Instagram and Facebook
3. WHEN the footer renders THEN the system SHALL display a WhatsApp CTA_Button for ordering
4. WHEN the footer renders THEN the system SHALL display copyright text "© 2024 Abon Ikan SAKO"
5. WHEN the footer renders THEN the system SHALL apply charcoal background with light text

### Requirement 9: SEO and Metadata

**User Story:** As a product owner, I want the landing page to be SEO-optimized, so that potential customers can find the product through search engines.

#### Acceptance Criteria

1. WHEN the Landing_Page loads THEN the system SHALL set the page title to "Abon Ikan SAKO | Cita Rasa Otentik Laut Minahasa"
2. WHEN the Landing_Page loads THEN the system SHALL set the meta description to describe the product's key attributes and origin
3. WHEN the Landing_Page loads THEN the system SHALL include relevant keywords: "abon ikan, minahasa, oleh-oleh manado, SMKN 2 Tondano, makanan sehat, ikan sako"
4. WHEN search engines crawl the page THEN the system SHALL provide Server-Side Rendered (SSR) content for optimal indexing

### Requirement 10: Google Analytics 4 Integration

**User Story:** As a product owner, I want to track user behavior on the landing page, so that I can understand how visitors interact with the content.

#### Acceptance Criteria

1. WHEN the Landing_Page loads THEN the system SHALL initialize GA4 with the configured Measurement_ID from environment variable
2. WHEN the GA4 script loads THEN the system SHALL use Next.js Script component with "afterInteractive" strategy
3. WHEN the environment variable is not set THEN the system SHALL gracefully skip analytics initialization
4. WHEN a visitor clicks any CTA_Button THEN the system SHALL send a CTA_Click_Event to GA4
5. WHEN a visitor scrolls to view a major section THEN the system SHALL send a Section_View_Event to GA4
6. WHEN the WhatsApp CTA is clicked THEN the system SHALL track this as a "generate_lead" conversion event

### Requirement 11: Vibrant Visual Design System

**User Story:** As a visitor, I want to experience a bold and energetic color scheme, so that the brand feels modern, confident, and memorable.

#### Acceptance Criteria

1. WHEN the Design_System is loaded THEN the system SHALL apply primary color: Deep Coral (#E63946)
2. WHEN the Design_System is loaded THEN the system SHALL apply secondary color: Electric Teal (#2EC4B6)
3. WHEN the Design_System is loaded THEN the system SHALL apply accent color: Vibrant Gold (#FFD166)
4. WHEN backgrounds are rendered THEN the system SHALL use warm off-white (#FFFCF9) as base background
5. WHEN dark sections are rendered THEN the system SHALL use rich charcoal (#1A1A2E)
6. WHEN headings are rendered THEN the system SHALL use Poppins font (weights 700-900)
7. WHEN body text is rendered THEN the system SHALL use Inter font at 1.125rem with line-height 1.7

### Requirement 12: Dynamic Button Styles

**User Story:** As a visitor, I want buttons that feel clickable and energetic, so that I am encouraged to take action.

#### Acceptance Criteria

1. WHEN a primary CTA button is rendered THEN the system SHALL display a gradient background with rounded corners (12px)
2. WHEN a user hovers over a primary button THEN the system SHALL scale the button to 1.05x and add a colored shadow
3. WHEN a secondary button is rendered THEN the system SHALL display a transparent background with a 2px solid border
4. WHEN buttons contain text THEN the system SHALL use uppercase letters with letter-spacing and font-weight 600
5. WHEN buttons are rendered THEN the system SHALL have minimum 48px height for touch accessibility

### Requirement 13: Modern Card Components

**User Story:** As a visitor, I want product and feature cards that feel premium and interactive.

#### Acceptance Criteria

1. WHEN a product card is rendered THEN the system SHALL display a white background with subtle shadow
2. WHEN a user hovers over a card THEN the system SHALL lift the card with increased shadow and colored top border accent
3. WHEN feature cards are displayed THEN the system SHALL include an icon with a gradient background circle
4. WHEN card content is rendered THEN the system SHALL maintain 24px internal padding with 16px gap

### Requirement 14: Interactive Micro-animations

**User Story:** As a visitor, I want subtle animations that make the site feel alive.

#### Acceptance Criteria

1. WHEN elements enter the viewport THEN the system SHALL animate them with a fade-up effect over 0.5 seconds
2. WHEN interactive elements are hovered THEN the system SHALL apply a transition duration of 0.2 seconds
3. WHEN the page loads THEN the system SHALL stagger the animation of hero elements by 0.1 seconds each
4. WHEN scroll animations are applied THEN the system SHALL use CSS transforms for performance

### Requirement 15: Responsive Design

**User Story:** As a mobile user, I want the bold design to translate well to smaller screens.

#### Acceptance Criteria

1. WHEN the viewport is below 768px THEN the system SHALL reduce heading sizes by 30% while maintaining visual hierarchy
2. WHEN the viewport is below 768px THEN the system SHALL convert multi-column layouts to single-column stacks
3. WHEN touch devices are detected THEN the system SHALL increase button tap targets to minimum 48px height
4. WHEN sections contain content THEN the system SHALL maintain vertical padding of 80px (desktop) and 48px (mobile)
