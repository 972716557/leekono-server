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
import { StaticImageData } from "next/image";

const routes = [
  { path: "/", id: "home" },
  // { path: "/about-us", id: "aboutUs" },
  { path: "/case", id: "case" },
  { path: "/contact", id: "contact" },
  { path: "/product", id: "product" },
];

const ZH_Locale = "zh";
const En_Locale = "en";
const TW_Locale = "zh-TW";

export type LedEnum =
  | "rental"
  | "outdoor"
  | "indoor"
  | "soft"
  | "poster"
  | "crystal"
  | "transparent"
  | "devil"
  | "taxi"
  | "floor";

const LedTypes: LedEnum[] = [
  "rental",
  "outdoor",
  "indoor",
  "soft",
  "poster",
  "crystal",
  "transparent",
  "devil",
  "taxi",
  "floor",
];
const Posters: Record<LedEnum, StaticImageData> = {
  outdoor: outdoorSrc,
  indoor: indoorSrc,
  poster: posterSrc,
  rental: rentalSrc,
  crystal: crystalSrc,
  transparent: transparentSrc,
  soft: softSrc,
  devil: devilSrc,
  taxi: taxiSrc,
  floor: floorSrc,
};

export { routes, TW_Locale, ZH_Locale, En_Locale, LedTypes, Posters };
