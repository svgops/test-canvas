import React from "react";
import cx from "classnames";
import useImage from "./useImage";

const Image = ({ src, alt = "" }) => {
  const { loaded } = useImage({ src });
  return <img className={cx("smooth", { loaded })} src={src} alt={alt} />;
};

export default Image;
