import { Col, Row } from "antd";
import { LedTypes } from "@/constant";

import Card from "./_card";
import "./index.css";

const prefix = "leekono-product";
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
export default Product;
