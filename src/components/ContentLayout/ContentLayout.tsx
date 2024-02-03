import { memo } from "react";
import s from './ContentLayout.module.css';

type ContentLayoutPropsType = {
  children?: React.ReactNode;
}

function ContentLayout({children} : ContentLayoutPropsType) {
  return (
    <div className={s.content}>
      {children}
    </div>
  )
}

export default memo(ContentLayout);