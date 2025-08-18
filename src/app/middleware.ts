// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { languages, fallbackLng } from "./i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  console.log("333");
  // if (
  //   request.nextUrl.pathname.startsWith("/_next") ||
  //   request.nextUrl.pathname.includes("/api/") ||
  //   PUBLIC_FILE.test(request.nextUrl.pathname)
  // ) {
  //   return;
  // }

  // const pathname = request.nextUrl.pathname;
  // console.log(pathname, "pathname");

  // const pathnameIsMissingLocale = languages.every(
  //   (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  // );

  // if (pathnameIsMissingLocale) {
  //   const locale = request.cookies.get("NEXT_LOCALE")?.value || fallbackLng;
  //   return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
