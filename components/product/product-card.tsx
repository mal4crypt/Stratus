"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types"
import { AddToCartButton } from "./add-to-cart-button"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col space-y-3">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={667}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between space-y-1">
                <div>
                    <h3 className="text-sm font-medium text-zinc-900">
                        <Link href={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="text-sm text-zinc-500">{product.category}</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                    <p className="text-sm font-medium text-zinc-900">
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: product.currency,
                        }).format(product.price)}
                    </p>
                    <div className="relative z-10">
                        <AddToCartButton
                            product={product}
                            className="h-8 px-3 text-xs opacity-0 transition-opacity group-hover:opacity-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
