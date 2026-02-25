"use client";
import CaseCard from "@/component/case-cart.tsx";
import React from "react";
import Masonry from "react-masonry-css";
import { Cases } from "./_constant";

const prefix = "leekono-case";

const breakpointCols = {
  default: 4,
  1200: 3,
  768: 2,
};

export default function Card() {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={`${prefix}-masonry`}
      columnClassName={`${prefix}-masonry-column`}
    >
      {Cases.map((item) => (
        <div key={item.id} style={{ marginBottom: 16 }}>
          <CaseCard {...item} />
        </div>
      ))}
    </Masonry>
  );
}
