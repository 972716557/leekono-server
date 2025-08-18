import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { FormattedMessage, history } from "umi";
import { FC, ReactNode } from "react";
import classNames from "classnames";
import useIsMobile from "@/hooks/useIsMobile";

import rentalSrc from "@/assets/images/rental.png";
import outdoorSrc from "@/assets/images/outdoor.png";
import posterSrc from "@/assets/images/poster.png";
import indoorSrc from "@/assets/images/indoor.png";
import transparentSrc from "@/assets/images/transparent.png";
import crystalSrc from "@/assets/images/crystal.png";
import softSrc from "@/assets/images/soft.png";
import taxiSrc from "@/assets/images/taxi.png";
import floorSrc from "@/assets/images/floor.png";
import devilSrc from "@/assets/images/devil.png";

import "./index.less";

interface CardProps {
  type: string;
}

const imgs = {
  rental: rentalSrc,
  indoor: indoorSrc,
  outdoor: outdoorSrc,
  poster: posterSrc,
  transparent: transparentSrc,
  crystal: crystalSrc,
  taxi: taxiSrc,
  soft: softSrc,
  floor: floorSrc,
  devil: devilSrc,
};

const prefix = "leekono-product-card";
const Card: FC<CardProps> = (props) => {
  const { type = "led" } = props;

  const isMobile = useIsMobile();
  const onClickContactUs = () => {
    history.push("/contact");
  };

  const titleClass = classNames(
    `${prefix}-title`,
    isMobile && `${prefix}-title-mobile`
  );

  const onClickDetail = () => {
    history.push(`/product/detail?id=${type}`);
  };
  return (
    <div className={prefix}>
      <div>
        <img className={`${prefix}-img`} src={imgs[type]} alt="img" />
      </div>
      <div className={titleClass}>
        <FormattedMessage id={`${type}.title`} />
      </div>
      <div className={`${prefix}-footer`}>
        <Button className={`${prefix}-button`} onClick={onClickContactUs}>
          <FormattedMessage id="contact" />
        </Button>
      </div>
      <div className={`${prefix}-detail`} onClick={onClickDetail}>
        <FormattedMessage id="learnMore" /> <RightOutlined />
      </div>
    </div>
  );
};
export default Card;
