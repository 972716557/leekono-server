import { languages } from "@/i18n/settings";
import { WebSiteData } from "@/constant";

/** lng → Open Graph locale 映射 */
const ogLocaleMap: Record<string, string> = {
  en: "en_US",
  zh: "zh_CN",
  "zh-TW": "zh_TW",
};

/** 根据 lng 获取 OG locale */
export function getOgLocale(lng: string) {
  return ogLocaleMap[lng] || "en_US";
}

/** 生成 hreflang alternates + canonical */
export function getAlternates(lng: string, path: string = "") {
  const langMap: Record<string, string> = {};
  languages.forEach((l) => {
    langMap[l] = `${WebSiteData.url}/${l}${path}`;
  });
  return {
    canonical: `${WebSiteData.url}/${lng}${path}`,
    languages: langMap,
  };
}
