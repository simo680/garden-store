import type { PageWrapperProps } from "./type";

import s from "./PageWrapper.module.scss";

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default PageWrapper;
