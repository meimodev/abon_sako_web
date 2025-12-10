/**
 * Centralized image path configuration
 * Update image paths here to change them across the entire site
 */

export const imagePaths = {

  hero: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/2.jpg',
  story: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/3.jpeg',
  
  // Making process steps
  process: {
    step1: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/1%20Proses%20Pembuatan%20Abon%20Ikan%20Sako.jpeg',
    step2: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/2%20Kegiatan%20Pendampingan%20Proyek%20Kewirausahaan.JPG',
  },
  
  // Competition awards
  competitions: {
    tefa: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/5%20Festival%20&%20Inovasi%20Kewirausahaan%20Indonesia.jpg',
    kuliner: 'https://ik.imagekit.io/geb6bfhmhx/ikan-sako/landing-page/3%20SMK%20Expo%20dan%20Job%20Fair%202024.jpg',
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
