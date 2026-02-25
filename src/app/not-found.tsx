import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="leekono-404">
      <div className="leekono-404-code">404</div>
      <p className="leekono-404-title">页面走丢了</p>
      <p className="leekono-404-desc">
        抱歉，您访问的页面不存在或已被移除
      </p>
      <Link href="/" className="leekono-404-btn">
        返回首页
      </Link>
    </div>
  );
}
