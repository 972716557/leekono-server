import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { languages, cookieName } from "./i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default async function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(
      ua
    );
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));

  // Redirect if lng in path is not supported
  const isMatch = languages.some((item) =>
    req.nextUrl.pathname.startsWith(`/${item}`)
  );

  if (!isMobile && !req.nextUrl.pathname?.includes("/warning")) {
    return NextResponse.redirect(new URL(`/${lng}/warning`, req.url));
  }

  if (!isMatch) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") ?? "");
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
