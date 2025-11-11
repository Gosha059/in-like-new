import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center bg-background text-foreground">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-muted-foreground">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent/50"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}