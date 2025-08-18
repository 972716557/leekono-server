// app/i18n/config.ts
export const languages = ["en", "zh"] as const;
export const fallbackLng = "en";
export type Language = (typeof languages)[number];
export const defaultNS = "common";

export function getOptions(
  lng: Language = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
