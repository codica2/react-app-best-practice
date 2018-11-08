import React from "react";
import cx from "classnames";

const Loader = ({ loading, transparent, style }) => (
  <div
    className={cx(
      loading ? "loading frame-load frame" : "frame loading frame-loading",
      { transparent }
    )}
    style={{ minHeight: "500px", ...style }}
  >
    <div>
      <img src="/images/preloader2.gif" alt="loader" />
    </div>
  </div>
);

export default Loader;
