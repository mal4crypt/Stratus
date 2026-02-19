import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-border bg-cream py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Stratus. Performance Commerce System.
                </p>
                <div className="flex gap-6">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-olive">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-olive">
                        Privacy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-olive">
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    )
}
