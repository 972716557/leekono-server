"use client";

import { Statistic, StatisticProps } from "antd";
import CountUp from "react-countup";

const formatter: StatisticProps["formatter"] = (value) => {
  return <CountUp end={value as number} separator="," />;
};
const LeekonoStatistic = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => (
  <Statistic title={null} value={value} suffix={suffix} formatter={formatter} />
);
export default LeekonoStatistic;
