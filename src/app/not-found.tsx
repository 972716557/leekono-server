import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="leekono-404">
      <div className="leekono-404-bg">
        <span>404</span>
      </div>
      <div className="leekono-404-content">
        <h1 className="leekono-404-title">Page not found</h1>
        <p className="leekono-404-desc">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="leekono-404-btn">
          Go Home
        </Link>
      </div>
    </div>
  );
}
