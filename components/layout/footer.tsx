import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-zinc-100 bg-white py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} Stratus. Performance Commerce System.
                </p>
                <div className="flex gap-6">
                    <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900">
                        Privacy
                    </Link>
                    <Link href="#" className="text-sm text-zinc-500 hover:text-zinc-900">
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    )
}
