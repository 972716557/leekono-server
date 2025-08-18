import { FC } from "react";
import Image from "next/image";
import { Carousel, Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";

import { LedTypes } from "../constant";
import LeekonoSwiper from "@/component/swiper";

import { Cases } from "./case/constant";
import poster1 from "@/assets/home/poster1.png";
import poster2 from "@/assets/home/poster2.png";
import CaseCard from "./case/card";
import Link from "next/link";
import LeekonoStatistic from "@/component/statistic";

interface HomeProps {
  id?: string;
  // 设置展示背景颜色
  theme?: "white" | "black";
}

const prefix = "leekono-home";

const data = [
  { id: "founded", value: 15, suffix: "" },
  { id: "servingCountries", value: 30, suffix: "+" },
  { id: "partner", value: 1100, suffix: "+" },
  { id: "servingProvinces", value: 31, suffix: "" },
];
const Home: FC<HomeProps> = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}-carousel`}>
        <Carousel autoplay>
          <Image alt="img" src={poster1} className={`${prefix}-image`} />
          <Image alt="img" src={poster2} className={`${prefix}-image`} />
        </Carousel>
      </div>

      <section className={`${prefix}-section ${prefix}-about-us`}>
        <h2 className={`${prefix}-title mb12`}>
          关于我们
          {/* <FormattedMessage id="aboutUs"></FormattedMessage> */}
        </h2>
        <h3 className={`${prefix}-company`}>
          公司名称
          {/* <FormattedMessage id="companyName"></FormattedMessage> */}
        </h3>
        <div className={`${prefix}-desc`}>
          公司描述
          {/* <FormattedMessage id="companyDescription"></FormattedMessage> */}
        </div>
      </section>
      <section className={`${prefix}-section ${prefix}-about-us-data`}>
        <Row gutter={[12, 12]}>
          {data.map(({ id, value, suffix }) => (
            <Col span={12} key={id}>
              <LeekonoStatistic value={value} suffix={suffix} />
              <span className={`${prefix}-about-us-dec`}>
                {/* <FormattedMessage id={id}></FormattedMessage> */}
              </span>
            </Col>
          ))}
        </Row>
      </section>
      <section className={`${prefix}-section ${prefix}-about-us`}>
        <Row justify="space-between" align="middle">
          <Col>
            <h2 className={`${prefix}-title`}>
              {/* <FormattedMessage id="product"></FormattedMessage> */}
            </h2>
          </Col>
          <Col>
            <a href="/product">
              {/* <FormattedMessage id="viewAll"></FormattedMessage> */}
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
              <h2 className={`${prefix}-title`}>
                {/* <FormattedMessage id="case"></FormattedMessage> */}
              </h2>
            </Col>
            <Col>
              <Link href="/case">
                {/* <FormattedMessage id="viewAll"></FormattedMessage> */}
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
