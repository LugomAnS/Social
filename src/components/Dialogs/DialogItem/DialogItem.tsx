import { memo } from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

type DialogItemPropsType = {
  title: string,
  id: string,
}

const DialogItem = (props : DialogItemPropsType) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={s.dialogActive}>
        {props.title}
      </NavLink>
    </div>
  );
};

export default memo(DialogItem);