import { Params } from "@/types/common";
import { getTranslation } from "@/i18n";
import { languages } from "@/i18n/settings";
import { WebSiteData } from "@/constant";
import { getAlternates, getOgLocale } from "../../seo";

const prefix = "leekono-about";

const timelineYears = [
  "2011",
  "2014",
  "2016",
  "2018",
  "2020",
  "2022",
  "2024",
  "2025",
];

const valueKeys = ["quality", "innovation", "service", "global"] as const;

const valueIcons: Record<string, string> = {
  quality: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  innovation: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  service: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  global: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
};

const About = async ({ params }: Params) => {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "about");

  return (
    <div className={prefix}>
      {/* Hero */}
      <section className={`${prefix}-hero`}>
        <h1 className={`${prefix}-hero-title`}>{t("heroTitle")}</h1>
        <p className={`${prefix}-hero-subtitle`}>{t("heroSubtitle")}</p>
      </section>

      {/* Company Introduction */}
      <section className={`${prefix}-intro`}>
        <div className={`${prefix}-intro-inner`}>
          <h2 className={`${prefix}-section-title`}>{t("introTitle")}</h2>
          <p className={`${prefix}-intro-desc`}>{t("introDesc")}</p>
        </div>
      </section>

      {/* Timeline */}
      <section className={`${prefix}-timeline`}>
        <div className={`${prefix}-timeline-inner`}>
          <h2 className={`${prefix}-section-title`}>{t("timelineTitle")}</h2>
          <div className={`${prefix}-timeline-list`}>
            {timelineYears.map((year) => (
              <div key={year} className={`${prefix}-timeline-item`}>
                <div className={`${prefix}-timeline-dot`} />
                <div className={`${prefix}-timeline-content`}>
                  <span className={`${prefix}-timeline-year`}>{year}</span>
                  <p className={`${prefix}-timeline-text`}>
                    {t(`timeline.${year}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${prefix}-values`}>
        <div className={`${prefix}-values-inner`}>
          <h2 className={`${prefix}-section-title`}>{t("valuesTitle")}</h2>
          <div className={`${prefix}-values-grid`}>
            {valueKeys.map((key) => (
              <div key={key} className={`${prefix}-value-card`}>
                <div className={`${prefix}-value-icon`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={valueIcons[key]} />
                  </svg>
                </div>
                <h3 className={`${prefix}-value-title`}>
                  {t(`values.${key}.title`)}
                </h3>
                <p className={`${prefix}-value-desc`}>
                  {t(`values.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory */}
      <section className={`${prefix}-factory`}>
        <div className={`${prefix}-factory-inner`}>
          <h2 className={`${prefix}-section-title`}>{t("factoryTitle")}</h2>
          <p className={`${prefix}-factory-desc`}>{t("factoryDesc")}</p>
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
  const { t } = await getTranslation(lng, "about");

  return {
    title: t("heroTitle"),
    description: t("heroSubtitle"),
    alternates: getAlternates(lng, "/about"),
    openGraph: {
      title: t("heroTitle"),
      description: t("heroSubtitle"),
      url: `/${lng}/about`,
      siteName: WebSiteData.name,
      locale: getOgLocale(lng),
      alternateLocale: WebSiteData.alternateLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t("heroTitle"),
      description: t("heroSubtitle"),
    },
  };
}

export default About;
