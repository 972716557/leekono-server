import { Col, Row } from "antd";
import { LedTypes } from "@/constant";
import { Metadata } from "next";

import Card from "./_card";
import "./_index.css";
import { languages } from "@/i18n/settings";

const prefix = "leekono-product";
export const metadata: Metadata = {
  title: "Products",
  description: "A leading LED technology company.",
};
const Product = () => {
  return (
    <div className={prefix}>
      <Row gutter={[12, 12]} className={`${prefix}-row`}>
        {LedTypes.map((item, index) => (
          <Col xxl={6} lg={8} sm={12} xs={12} key={index}>
            <Card type={item}></Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export async function generateStaticParams() {
  return languages.map((item) => ({
    lng: item,
  }));
}
export default Product;
