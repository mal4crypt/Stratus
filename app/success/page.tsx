import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
                <div className="bg-olive/10 text-olive p-4 rounded-full">
                    <CheckCircle2 className="h-12 w-12" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight text-brown underline decoration-olive/30 underline-offset-8">Order Confirmed</h1>
                    <p className="text-lg text-muted-foreground max-w-md">
                        Thank you for your purchase. Your order has been placed successfully and will be processed shortly.
                    </p>
                </div>

                <div className="bg-white border border-border rounded-lg p-6 w-full max-w-md shadow-sm">
                    <p className="text-sm font-bold text-olive uppercase tracking-widest">Order ID: STR-{(Math.random() * 1000000).toFixed(0)}</p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">A confirmation email has been sent to your inbox.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/">
                        <Button size="lg" className="px-8 flex items-center gap-2 bg-olive text-white hover:bg-olive/95">
                            Continue Shopping
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="px-8 border-olive/20 text-olive hover:bg-olive/5">
                        View Order Status
                    </Button>
                </div>
            </div>
        </div>
    )
}
