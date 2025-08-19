"use client";
import Masonry from "react-masonry-css";

import { Cases } from "./_constant";
import CaseCard from "@/component/case-cart.tsx";
import "./_index.css";
const prefix = "leekono-case";

const Case = () => {
  return (
    <div className={prefix}>
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
    </div>
  );
};
export default Case;
