import type { PageWrapperProps } from './PageWrapper.props';

import s from './PageWrapper.module.scss';

const PageWrapper = (props: PageWrapperProps) => {
  const { title, children } = props;

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
};

export default PageWrapper;
