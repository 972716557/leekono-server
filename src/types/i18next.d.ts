import "i18next";
import home from "../locales/en/home.json";

interface I18nNamespaces {
  home: typeof home;
  // news: typeof news;
  // common: typeof common;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
