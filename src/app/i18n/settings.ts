// app/i18n/settings.ts
import { fallbackLng, languages } from "./config";

export const getOptions = (lng = fallbackLng, ns = "common") => ({
  // 调试模式
  debug: process.env.NODE_ENV === "development",

  // 支持的语言列表
  supportedLngs: languages,

  // 默认语言
  fallbackLng,

  // 预加载的语言
  preload: languages,

  // 命名空间
  ns,

  // 默认命名空间
  defaultNS: "common",

  // 是否使用 Suspense
  react: { useSuspense: false },

  // 语言检测配置
  detection: {
    order: ["path", "htmlTag", "cookie", "navigator"],
    caches: ["cookie"],
  },

  // 后端配置
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },

  // 插值配置
  interpolation: {
    escapeValue: false,
  },
});
