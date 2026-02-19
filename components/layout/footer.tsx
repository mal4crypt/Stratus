import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-olive/20 bg-olive-dark py-16">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-sm font-medium text-cream/70">
                    &copy; {new Date().getFullYear()} Stratus. Performance Commerce System.
                </p>
                <div className="flex gap-8">
                    <Link href="#" className="text-sm font-bold text-cream/60 hover:text-cream transition-colors">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm font-bold text-cream/60 hover:text-cream transition-colors">
                        Privacy
                    </Link>
                    <Link href="#" className="text-sm font-bold text-cream/60 hover:text-cream transition-colors">
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    )
}
