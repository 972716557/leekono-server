import Image, { StaticImageData } from "next/image";
import { Carousel, Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

import LeekonoSwiper from "@/component/swiper";
import poster1 from "@/assets/home/poster1.png";
import poster2 from "@/assets/home/poster2.png";
import { Params } from "@/types/common";
import LeekonoStatistic from "@/component/statistic";

import { Cases } from "./case/_constant";
import CaseCard from "../../component/case-cart.tsx";
import { getTranslation } from "../../i18n";
import { LedTypes } from "../../constant";
import { languages } from "@/i18n/settings";

const prefix = "leekono-home";

const data = [
  { id: "founded", value: 15, suffix: "" },
  { id: "servingCountries", value: 30, suffix: "+" },
  { id: "partner", value: 1100, suffix: "+" },
  { id: "servingProvinces", value: 31, suffix: "" },
];
const Home = async ({ params }: Params) => {
  const { lng } = await params;
  const { t } = await getTranslation(lng, "home");

  return (
    <div className={prefix}>
      <div className={`${prefix}-carousel`}>
        <Carousel autoplay>
          <Image alt="img" src={poster1} className={`${prefix}-image`} />
          <Image alt="img" src={poster2} className={`${prefix}-image`} />
        </Carousel>
      </div>

      <section className={`${prefix}-section ${prefix}-about-us`}>
        <h2 className={`${prefix}-title mb12`}>{t("aboutUs")}</h2>
        <h3 className={`${prefix}-company`}>{t("companyName")}</h3>
        <div className={`${prefix}-desc`}>{t("companyDescription")}</div>
      </section>
      <section className={`${prefix}-section ${prefix}-about-us-data`}>
        <Row gutter={[12, 12]}>
          {data.map(({ id, value, suffix }) => (
            <Col span={12} key={id}>
              <LeekonoStatistic value={value} suffix={suffix} />
              <span className={`${prefix}-about-us-dec`}>{t(id)}</span>
            </Col>
          ))}
        </Row>
      </section>
      <section className={`${prefix}-section ${prefix}-about-us`}>
        <Row justify="space-between" align="middle">
          <Col>
            <h2 className={`${prefix}-title`}>{t("product")}</h2>
          </Col>
          <Col>
            <Link href="/product">
              {t("viewAll")}
              <RightOutlined />
            </Link>
          </Col>
        </Row>
        <LeekonoSwiper
          showPlusButton={false}
          data={LedTypes.map((item) => ({
            type: item,
            src: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/safety__bwp7rsowtjiu_xlarge_2x.jpg" as unknown as StaticImageData,
          }))}
        />
      </section>
      <section className="mt-[20px] p-[12px] bg-[#f2f3f5]">
        <div className="mb20">
          <Row justify="space-between" align="middle">
            <Col>
              <h2 className={`${prefix}-title`}>{t("case")}</h2>
            </Col>
            <Col>
              <Link href="/case">
                {t("viewAll")}
                <RightOutlined />
              </Link>
            </Col>
          </Row>
        </div>
        <Row gutter={[12, 12]}>
          {Cases.slice(0, 4).map((item) => (
            <Col span={12} key={item.id}>
              <CaseCard {...item} fixedImgHeight />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}
export default Home;
