import { Empty, Table } from "antd";
import { ImageViewer, Swiper, Image } from "antd-mobile";
import { useState } from "react";

import { En_Locale, TW_Locale, ZH_Locale } from "@/constant";

import { Products } from "./constant";

import "./index.less";

const prefix = "leekono-product-detail";

const ProductDetail = () => {
  const [visible, setVisible] = useState(false);

  const detail = Products.find((item) => item.id === id);
  const [src, setSrc] = useState(detail?.images[0]);

  const onClick = (src: string) => {
    setSrc(src);
    setVisible(true);
  };

  return (
    <div className={prefix}>
      {detail ? (
        <>
          <div className={`${prefix}-swiper`}>
            <Swiper
              indicator={(total, current) => (
                <div className={`${prefix}-swiper-indicator`}>
                  {`${current + 1} / ${total}`}
                </div>
              )}
            >
              {Object.values(detail.images).map((item, index) => (
                <Swiper.Item key={index}>
                  <Image
                    src={item}
                    onClick={() => {
                      onClick(item);
                    }}
                  />
                </Swiper.Item>
              ))}
            </Swiper>
            <ImageViewer
              image={src}
              visible={visible}
              onClose={() => {
                setVisible(false);
              }}
            />
          </div>
          <div className={`${prefix}-card`}>
            <h2 className={`${prefix}-title`}>
              {/* <FormattedMessage id={`${detail.id}.title`}></FormattedMessage> */}
            </h2>
            <div className={`${prefix}-content`}>
              {/* {isEN && detail.enDescription}
              {isTW && detail.twDescription}
              {isZH && detail.zhDescription} */}
            </div>
          </div>
          <div className={`${prefix}-card`}>
            <h2 className={`${prefix}-title`}>
              {/* <FormattedMessage id="productDetails"></FormattedMessage> */}
            </h2>
            <Table
              scroll={{ x: "auto" }}
              columns={detail.columns}
              dataSource={detail.data}
              pagination={false}
            />
          </div>
          <div className={`${prefix}-card ${prefix}-advantage`}>
            <h2 className={`${prefix}-title`}>
              {/* <FormattedMessage id="productAdvantage"></FormattedMessage> */}
            </h2>
            {/* {isEN && detail.enAdvantage}
            {isTW && detail.twAdvantage}
            {isZH && detail.zhAdvantage} */}
          </div>
          {/* <Footer /> */}
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
};
export default ProductDetail;
