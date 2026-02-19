"use client"

import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function CheckoutPage() {
    const { cartTotal, clearCart, items } = useCart()
    const router = useRouter()
    const [isProcessing, setIsProcessing] = useState(false)

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        // Simulate API call
        setTimeout(() => {
            clearCart()
            router.push("/success")
        }, 1500)
    }

    if (items.length === 0) {
        router.push("/cart")
        return null
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
                {/* Form */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <Link href="/cart" className="text-muted-foreground hover:text-olive transition-colors">
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                        <h1 className="text-3xl font-bold tracking-tight text-brown">Checkout</h1>
                    </div>

                    <form onSubmit={handleCheckout} className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-lg font-bold text-brown uppercase tracking-wider">Shipping Information</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-olive uppercase tracking-widest">First Name</label>
                                    <Input required placeholder="John" className="bg-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-olive uppercase tracking-widest">Last Name</label>
                                    <Input required placeholder="Doe" className="bg-white" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-olive uppercase tracking-widest">Email Address</label>
                                <Input required type="email" placeholder="john@example.com" className="bg-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-olive uppercase tracking-widest">Shipping Address</label>
                                <Input required placeholder="123 Performance St" className="bg-white" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-lg font-bold text-brown uppercase tracking-wider">Payment Details</h2>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-olive uppercase tracking-widest">Card Number</label>
                                <Input required placeholder="0000 0000 0000 0000" className="bg-white" />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-olive uppercase tracking-widest">Expiry</label>
                                    <Input required placeholder="MM / YY" className="bg-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-olive uppercase tracking-widest">CVC</label>
                                    <Input required placeholder="000" className="bg-white" />
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 text-base bg-olive text-white hover:bg-olive/95"
                            disabled={isProcessing}
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                `Pay ${new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                }).format(cartTotal)}`
                            )}
                        </Button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="hidden lg:block">
                    <div className="bg-white rounded-xl p-8 border border-border shadow-sm">
                        <h2 className="text-lg font-bold text-brown uppercase tracking-wider mb-6">In your cart</h2>
                        <div className="space-y-4 max-h-[400px] overflow-auto pr-2">
                            {items.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <div className="text-muted-foreground font-medium">
                                        <span className="font-bold text-olive">{item.quantity}x</span> {item.name}
                                    </div>
                                    <div className="font-bold text-brown">
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: item.currency,
                                        }).format(item.price * item.quantity)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-border mt-6 pt-6 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span className="font-bold text-brown">
                                    {new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(cartTotal)}
                                </span>
                            </div>
                            <div className="flex justify-between text-lg font-bold pt-2 border-t border-dotted border-border mt-2">
                                <span className="text-brown">Total</span>
                                <span className="text-olive">
                                    {new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(cartTotal)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
