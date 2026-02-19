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
                    <Link href="/" className="text-muted-foreground hover:text-olive transition-colors">
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-brown">Shopping Cart</h1>
                </div>

                <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-6 border-b border-border pb-6 last:border-0"
                            >
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted border border-border/50">
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
                                            <h3 className="font-bold text-brown">
                                                <Link href={`/product/${item.id}`} className="hover:text-olive transition-colors">
                                                    {item.name}
                                                </Link>
                                            </h3>
                                            <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{item.category}</p>
                                        </div>
                                        <p className="font-bold text-olive">
                                            {new Intl.NumberFormat('en-US', {
                                                style: 'currency',
                                                currency: item.currency,
                                            }).format(item.price * item.quantity)}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center border border-border bg-white rounded-md">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 px-2 hover:bg-muted transition-colors text-muted-foreground"
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <span className="px-4 text-sm font-bold text-brown tabular-nums">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 px-2 hover:bg-muted transition-colors text-muted-foreground"
                                            >
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-sm font-medium text-muted-foreground hover:text-red-600 transition-colors flex items-center gap-1"
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
                        <div className="rounded-xl bg-white border border-border p-6 shadow-sm sticky top-24">
                            <h2 className="text-lg font-bold text-brown uppercase tracking-wider">Order Summary</h2>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-bold text-brown">
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        }).format(cartTotal)}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span className="font-medium text-olive">Calculated at next step</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">Tax</span>
                                    <span className="font-medium text-brown">Included</span>
                                </div>
                                <div className="border-t border-border pt-4 flex items-center justify-between">
                                    <span className="font-bold text-brown">Total</span>
                                    <span className="font-bold text-olive text-xl">
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        }).format(cartTotal)}
                                    </span>
                                </div>
                            </div>

                            <Link href="/checkout">
                                <Button className="mt-8 w-full h-12 text-base shadow-lg shadow-olive/10 bg-olive hover:bg-olive/95 text-white">
                                    Proceed to Checkout
                                </Button>
                            </Link>

                            <p className="mt-4 text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                Stratus Engine Protocol
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
