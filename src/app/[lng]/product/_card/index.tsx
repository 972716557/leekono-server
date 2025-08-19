"use client";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

import { FC } from "react";
import classNames from "classnames";
import Image from "next/image";

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

import "./index.css";
import { useTranslation } from "react-i18next";

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
  const history = useRouter();
  const { t } = useTranslation();
  const { type = "led" } = props;

  const onClickContactUs = () => {
    history.push("/contact");
  };

  const titleClass = classNames(`${prefix}-title`, `${prefix}-title-mobile`);

  const onClickDetail = () => {
    history.push(`/product/${type}`);
  };
  return (
    <div className={prefix}>
      <div>
        <Image alt="img" className={`${prefix}-img`} src={imgs[type]} />
      </div>
      <div className={titleClass}>{t(`${type}.title`)}</div>
      <div className={`${prefix}-footer`}>
        <Button className={`${prefix}-button`} onClick={onClickContactUs}>
          {t("contact")}
        </Button>
      </div>
      <div className={`${prefix}-detail`} onClick={onClickDetail}>
        {t("learnMore")}
        <RightOutlined />
      </div>
    </div>
  );
};
export default Card;
