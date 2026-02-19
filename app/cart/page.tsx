"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"

export default function CartPage() {
    const { items, removeItem, updateQuantity, cartTotal } = useCart()

    if (items.length === 0) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Your cart is empty</h1>
                <p className="mt-4 text-zinc-500 text-lg">Looks like you haven&apos;t added anything to your cart yet.</p>
                <div className="mt-10">
                    <Link href="/">
                        <Button size="lg" className="px-12">
                            Start Shopping
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-8">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Shopping Cart</h1>
                </div>

                <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-6 border-b border-zinc-100 pb-6 last:border-0"
                            >
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between self-stretch py-1">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-medium text-zinc-900">
                                                <Link href={`/product/${item.id}`} className="hover:underline">
                                                    {item.name}
                                                </Link>
                                            </h3>
                                            <p className="mt-1 text-sm text-zinc-500">{item.category}</p>
                                        </div>
                                        <p className="font-medium text-zinc-900">
                                            {new Intl.NumberFormat('en-US', {
                                                style: 'currency',
                                                currency: item.currency,
                                            }).format(item.price * item.quantity)}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center border border-zinc-200 rounded-md">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 px-2 hover:bg-zinc-50 transition-colors text-zinc-500"
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <span className="px-4 text-sm font-medium tabular-nums">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 px-2 hover:bg-zinc-50 transition-colors text-zinc-500"
                                            >
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-sm font-medium text-zinc-400 hover:text-red-500 transition-colors flex items-center gap-1"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="rounded-xl bg-zinc-50 p-6 sticky top-24">
                            <h2 className="text-lg font-bold text-zinc-900">Order Summary</h2>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-zinc-500">Subtotal</span>
                                    <span className="font-medium text-zinc-900">
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        }).format(cartTotal)}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-zinc-500">Shipping</span>
                                    <span className="font-medium text-zinc-900">Calculated at next step</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-zinc-500">Tax</span>
                                    <span className="font-medium text-zinc-900">Included</span>
                                </div>
                                <div className="border-t border-zinc-200 pt-4 flex items-center justify-between">
                                    <span className="font-bold text-zinc-900">Total</span>
                                    <span className="font-bold text-zinc-900 text-lg">
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        }).format(cartTotal)}
                                    </span>
                                </div>
                            </div>

                            <Link href="/checkout">
                                <Button className="mt-8 w-full h-12 text-base shadow-lg shadow-zinc-200">
                                    Proceed to Checkout
                                </Button>
                            </Link>

                            <p className="mt-4 text-center text-xs text-zinc-400">
                                Secure checkout powered by Stratus Engine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
