import { products } from "@/lib/products"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AddToCartButton } from "@/components/product/add-to-cart-button"
import { Metadata } from "next"

interface ProductPageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { id } = await params
    const product = products.find((p) => p.id === id)

    if (!product) return { title: "Product Not Found" }

    return {
        title: `${product.name} | Stratus`,
        description: product.description,
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params
    const product = products.find((p) => p.id === id)

    if (!product) {
        notFound()
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
                {/* Image Gallery */}
                <div className="overflow-hidden rounded-xl bg-zinc-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={800}
                        height={1000}
                        className="h-full w-full object-cover object-center"
                        priority
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center space-y-8">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-zinc-500">{product.category}</p>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">{product.name}</h1>
                        <p className="text-2xl font-medium text-zinc-900">
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: product.currency,
                            }).format(product.price)}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-sm font-medium text-zinc-900">Description</h2>
                        <p className="text-base text-zinc-600 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="pt-4">
                        <AddToCartButton product={product} />
                    </div>

                    <div className="border-t border-zinc-100 pt-8">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <dt className="font-medium text-zinc-900">Shipping</dt>
                                <dd className="text-zinc-500">Free worldwide shipping on all orders over $500.</dd>
                            </div>
                            <div>
                                <dt className="font-medium text-zinc-900">Returns</dt>
                                <dd className="text-zinc-500">30-day return policy for unused items.</dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
