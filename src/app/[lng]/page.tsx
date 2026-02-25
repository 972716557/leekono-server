import Image, { StaticImageData } from "next/image";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

import LeekonoSwiper from "@/component/swiper";
import LeekonoStatistic from "@/component/statistic";
import poster1 from "@/assets/home/poster1.png";
import { Params } from "@/types/common";

import { Cases } from "./case/_constant";
import Card from "./product/_card";
import CaseCard from "../../component/case-cart.tsx";
import { getTranslation } from "../../i18n";
import { LedTypes, WebSiteData } from "../../constant";
import { languages } from "@/i18n/settings";

const prefix = "leekono-home";

const stats = [
  { id: "founded", value: 15, suffix: "" },
  { id: "servingCountries", value: 30, suffix: "+" },
  { id: "partner", value: 1100, suffix: "+" },
  { id: "servingProvinces", value: 31, suffix: "" },
];

const Home = async ({ params }: Params) => {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "home");

  return (
    <div className={`${prefix} pb-safe`}>
      {/* ===== Hero Banner ===== */}
      <section className={`${prefix}-hero mt-3 md:mt-0`}>
        <Image
          alt="Leekono LED"
          src={poster1}
          className={`${prefix}-hero-bg`}
          priority
        />
        <div className={`${prefix}-hero-overlay`} />
        <div className={`${prefix}-hero-content`}>
          <h1 className={`${prefix}-hero-title`}>{t("heroTitle")}</h1>
          <p className={`${prefix}-hero-subtitle`}>{t("heroSubtitle")}</p>
          <Link href="/product" className={`${prefix}-hero-cta`}>
            {t("heroCta")}
            <RightOutlined />
          </Link>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className={`${prefix}-stats`}>
        {stats.map(({ id, value, suffix }) => (
          <div className={`${prefix}-stat`} key={id}>
            <div className={`${prefix}-stat-number`}>
              <LeekonoStatistic value={value} suffix={suffix} />
            </div>
            <div className={`${prefix}-stat-label`}>{t(id)}</div>
          </div>
        ))}
      </section>

      {/* ===== About Us ===== */}
      <section className={`${prefix}-about`}>
        <div className={`${prefix}-about-inner`}>
          <h2 className={`${prefix}-section-title`}>{t("aboutUs")}</h2>
          <h3 className={`${prefix}-about-company`}>{t("companyName")}</h3>
          <p className={`${prefix}-about-desc`}>{t("companyDescription")}</p>
        </div>
      </section>

      {/* ===== Products ===== */}
      <section className={`${prefix}-products`}>
        <div className={`${prefix}-products-inner`}>
          <div className={`${prefix}-section-header`}>
            <h2 className={`${prefix}-section-title`}>{t("product")}</h2>
            <Link href="/product" className={`${prefix}-view-all`}>
              {t("viewAll")}
              <RightOutlined />
            </Link>
          </div>
          {/* Mobile: 2-column grid */}
          <div className={`${prefix}-products-scroll`}>
            {LedTypes.slice(0, 6).map((item) => (
              <Card type={item} key={item} />
            ))}
          </div>
          {/* Desktop: grid */}
          <div className={`${prefix}-products-grid`}>
            <LeekonoSwiper
              showPlusButton={false}
              data={LedTypes.slice(0, 6).map((item) => ({
                type: item,
                src: "" as unknown as StaticImageData,
              }))}
            />
          </div>
        </div>
      </section>

      {/* ===== Cases ===== */}
      <section className={`${prefix}-cases`}>
        <div className={`${prefix}-cases-inner`}>
          <div className={`${prefix}-section-header`}>
            <h2 className={`${prefix}-section-title`}>{t("case")}</h2>
            <Link href="/case" className={`${prefix}-view-all`}>
              {t("viewAll")}
              <RightOutlined />
            </Link>
          </div>
          <div className={`${prefix}-cases-grid`}>
            {Cases.slice(0, 4).map((item) => (
              <CaseCard {...item} fixedImgHeight key={item.id} />
            ))}
          </div>
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

  const metadata = {
    metadataBase: new URL(WebSiteData.url),
    title: t("home"),
    description: t("companyName"),
    icons: "/favicon.ico",
    image: WebSiteData.logo,
  };

  return metadata;
}

export default Home;
