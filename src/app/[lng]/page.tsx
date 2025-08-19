import Image from "next/image";
import { Carousel, Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";

import { LedTypes } from "../../constant";
import LeekonoSwiper from "@/component/swiper";

import { Cases } from "./case/_constant";
import poster1 from "@/assets/home/poster1.png";
import poster2 from "@/assets/home/poster2.png";
import CaseCard from "../../component/case-cart.tsx";
import Link from "next/link";
import LeekonoStatistic from "@/component/statistic";
import { getTranslation } from "../../i18n";
import { languages } from "../../i18n/settings";
import { Params } from "@/types/common";

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
            <a href="/product">
              {t("viewAll")}
              <RightOutlined />
            </a>
          </Col>
        </Row>
        <LeekonoSwiper
          showPlusButton={false}
          data={LedTypes.map((item) => ({
            type: item,
            src: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/safety__bwp7rsowtjiu_xlarge_2x.jpg",
          }))}
        />
      </section>
      <section
        className={`${prefix}-section ${prefix}-about-us ${prefix}-case`}
      >
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

export default Home;
export async function getStaticPaths() {
  return {
    paths: languages.map((item) => ({
      params: {
        lng: item,
      },
    })),
    fallback: true, // 设置fallback为true时，如果找不到对应的路由，会变成客户端渲染
  };
}
