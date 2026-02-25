"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { languages, fallbackLng } from "@/i18n/settings";

function detectLanguage(): string {
  // 1. 从 cookie 读取
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("i18next="));
  if (cookie) {
    const lng = cookie.split("=")[1];
    if (languages.includes(lng)) return lng;
  }

  // 2. 从浏览器语言检测
  const browserLng = navigator.language;
  if (browserLng.startsWith("zh-TW") || browserLng.startsWith("zh-Hant")) {
    return "zh-TW";
  }
  if (browserLng.startsWith("zh")) {
    return "zh";
  }
  if (languages.includes(browserLng)) {
    return browserLng;
  }

  return fallbackLng;
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const lng = detectLanguage();
    router.replace(`/${lng}`);
  }, [router]);

  return null;
}
