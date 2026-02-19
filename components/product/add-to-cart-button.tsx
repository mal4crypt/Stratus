"use client"

import { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"
import { Check, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"

interface AddToCartButtonProps {
    product: Product
    className?: string
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
    const { addItem } = useCart()
    const [isAdded, setIsAdded] = useState(false)

    const handleAdd = () => {
        addItem(product)
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    return (
        <Button
            onClick={handleAdd}
            className={cn("w-full h-12 text-base font-semibold transition-all duration-300", isAdded ? "bg-green-600 hover:bg-green-600" : "", className)}
            disabled={isAdded}
        >
            {isAdded ? (
                <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart
                </>
            ) : (
                <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                </>
            )}
        </Button>
    )
}
