import { ProductCard } from "@/components/product/product-card"
import { products } from "@/lib/products"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stratus | Performance Commerce Engine",
  description: "Shop the latest high-performance tech and accessories.",
}

interface HomePageProps {
  searchParams: Promise<{ q?: string }>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { q } = await searchParams

  const filteredProducts = q
    ? products.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.category.toLowerCase().includes(q.toLowerCase())
    )
    : products

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          {q ? `Results for "${q}"` : "All Products"}
        </h1>
        <p className="text-zinc-500">
          Precision-engineered essentials for the modern digital workspace.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg font-medium text-zinc-900">No products found</p>
          <p className="text-zinc-500">Try adjusting your search query.</p>
        </div>
      )}
    </div>
  )
}
