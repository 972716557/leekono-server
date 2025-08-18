import { Col, Row } from "antd";
import Masonry from "react-masonry-css";

import CaseCard from "./card";
import { Cases } from "./constant";

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
