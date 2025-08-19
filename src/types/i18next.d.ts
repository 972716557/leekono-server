import "i18next";
import home from "../locales/en/home.json";
import caseEn from "../locales/en/case.json";
import product from "../locales/en/product.json";
import contact from "../locales/en/contact.json";

interface I18nNamespaces {
  home: typeof home;
  case: typeof caseEn;
  product: typeof product;
  contact: typeof contact;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
