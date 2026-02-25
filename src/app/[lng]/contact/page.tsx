import { Params } from "@/types/common";
import "./index.css";
import { getTranslation } from "@/i18n";
import { languages } from "@/i18n/settings";
import { WebSiteData } from "@/constant";
import { getAlternates, getOgLocale } from "../../seo";

const prefix = "leekono-contact";

const Contact = async ({ params }: Params) => {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "contact");

  return (
    <div className={prefix}>
      {/* Hero */}
      <section className={`${prefix}-hero`}>
        <h1 className={`${prefix}-hero-title`}>{t("heroTitle")}</h1>
        <p className={`${prefix}-hero-subtitle`}>{t("heroSubtitle")}</p>
      </section>

      {/* Contact cards */}
      <section className={`${prefix}-cards`}>
        {/* Address */}
        <div className={`${prefix}-card`}>
          <div className={`${prefix}-card-icon`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className={`${prefix}-card-label`}>{t("addressLabel")}</h3>
          <p className={`${prefix}-card-value`}>{t("address")}</p>
        </div>

        {/* Phone */}
        <div className={`${prefix}-card`}>
          <div className={`${prefix}-card-icon`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
          </div>
          <h3 className={`${prefix}-card-label`}>{t("phoneLabel")}</h3>
          <p className={`${prefix}-card-value`}>{t("phone")}</p>
        </div>

        {/* Email */}
        <div className={`${prefix}-card`}>
          <div className={`${prefix}-card-icon`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h3 className={`${prefix}-card-label`}>{t("emailLabel")}</h3>
          <a href={`mailto:${t("email")}`} className={`${prefix}-card-link`}>
            {t("email")}
          </a>
        </div>
      </section>
    </div>
  );
};

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}

export async function generateMetadata({ params }: Params) {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "common");

  return {
    title: t("contact"),
    description: t("companyName"),
    alternates: getAlternates(lng, "/contact"),
    openGraph: {
      title: t("contact"),
      description: t("companyName"),
      url: `/${lng}/contact`,
      siteName: WebSiteData.name,
      locale: getOgLocale(lng),
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t("contact"),
      description: t("companyName"),
    },
  };
}

export default Contact;
