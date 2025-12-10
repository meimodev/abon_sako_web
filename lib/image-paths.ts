/**
 * Centralized image path configuration
 * Update image paths here to change them across the entire site
 */

export const imagePaths = {

  hero: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/2.jpg?updatedAt=1764768395592',
  story: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/3_new.jpg',
  
  // Making process steps
  process: {
    step1: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/1%20Proses%20Pembuatan%20Abon%20Ikan%20Sako.jpeg?updatedAt=1764768394603',
    step2: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/2%20Kegiatan%20Pendampingan%20Proyek%20Kewirausahaan.JPG?updatedAt=1764768397996',
    step3: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    step4: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&q=80',
  },
  
  // Competition awards
  competitions: {
    tefa: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/5%20Festival%20&%20Inovasi%20Kewirausahaan%20Indonesia.jpg',
    kuliner: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/3%20SMK%20Expo%20dan%20Job%20Fair%202024.jpg',
    expo: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
  },
  
  // Cultural banner background
  culturalBanner: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  
  // Product images
  products: {
    original: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/original.jpg',
    spicy: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/spicy.jpg',
  },
  
  // Test images (used in tests)
  test: {
    product: '/images/test-product.jpg',
    image: '/images/test-image.jpg',
  },
} as const

// Type helper for image paths
export type ImagePath = typeof imagePaths
