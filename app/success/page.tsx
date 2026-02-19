import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-full">
                    <CheckCircle2 className="h-12 w-12" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Order Confirmed</h1>
                    <p className="text-lg text-zinc-500 max-w-md">
                        Thank you for your purchase. Your order has been placed successfully and will be processed shortly.
                    </p>
                </div>

                <div className="bg-zinc-50 border border-zinc-100 rounded-lg p-6 w-full max-w-md">
                    <p className="text-sm font-medium text-zinc-900">Order ID: STR-{(Math.random() * 1000000).toFixed(0)}</p>
                    <p className="text-sm text-zinc-500 mt-1">A confirmation email has been sent to your inbox.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/">
                        <Button size="lg" className="px-8 flex items-center gap-2">
                            Continue Shopping
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="px-8 border-zinc-200">
                        View Order Status
                    </Button>
                </div>
            </div>
        </div>
    )
}
