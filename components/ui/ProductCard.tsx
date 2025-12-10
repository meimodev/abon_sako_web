import Image from 'next/image'

export interface ProductCardProps {
  name: string
  description: string
  imageSrc: string
}

export function ProductCard({ name, description, imageSrc }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-t-4 hover:border-t-primary transition-all duration-200 overflow-hidden group">
      <div className="relative aspect-square flex items-center justify-center bg-gray-50">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* Content with 24px padding and 16px gap - Requirements 4.4 */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="font-heading text-xl font-semibold text-[#1A1A2E]">
          {name}
        </h3>
        <p className="text-[#64748B] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
