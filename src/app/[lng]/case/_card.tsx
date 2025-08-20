"use client";
import CaseCard from "@/component/case-cart.tsx";
import React from "react";
import Masonry from "react-masonry-css";
import { Cases } from "./_constant";

const prefix = "leekono-case";

export default function Card() {
  return (
    <Masonry
      breakpointCols={2}
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
