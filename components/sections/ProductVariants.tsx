import { siteContent } from '@/content/site-content'
import { SectionTitle, ProductCard, ScrollReveal } from '@/components/ui'

export function ProductVariants() {
  const { products } = siteContent

  return (
    <section id="produk" className="py-section-mobile md:py-section-desktop px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal trackSection="produk">
          <SectionTitle className="text-center mb-12">
            {products.title}
          </SectionTitle>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.items.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.15}>
              <ProductCard
                name={product.name}
                description={product.description}
                imageSrc={product.imageSrc}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
