"use client"

import Link from "next/link"
import { Search, ShoppingBag, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useTransition, Suspense } from "react"

function SearchInput() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [isPending, startTransition] = useTransition()
    const [searchValue, setSearchValue] = useState(searchParams.get("q") || "")

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            startTransition(() => {
                const params = new URLSearchParams(searchParams.toString())
                if (searchValue) {
                    params.set("q", searchValue)
                } else {
                    params.delete("q")
                }
                router.push(`/?${params.toString()}`, { scroll: false })
            })
        }, 300)

        return () => clearTimeout(delayDebounceFn)
    }, [searchValue, router, searchParams])

    return (
        <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <Input
                placeholder="Search products..."
                className="w-full bg-zinc-50 pl-9 focus:bg-white border-zinc-100 focus:border-zinc-200"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue && (
                <button
                    onClick={() => setSearchValue("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    )
}

export function Header() {
    const { cartCount } = useCart()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl transition-all">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold tracking-tighter text-zinc-900"
                >
                    STRATUS
                </Link>

                {/* Search Bar - Desktop */}
                <div className="hidden flex-1 items-center justify-center px-8 md:flex">
                    <Suspense fallback={<div className="h-10 w-full max-w-sm rounded-md bg-zinc-50 animate-pulse" />}>
                        <SearchInput />
                    </Suspense>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>

                    <Link href="/cart">
                        <Button variant="outline" size="icon" className="relative border-zinc-200">
                            <ShoppingBag className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-medium text-white transition-all scale-100">
                                    {cartCount}
                                </span>
                            )}
                            <span className="sr-only">Cart</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
