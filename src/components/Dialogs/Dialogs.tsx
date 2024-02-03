import { memo } from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

function Dialogs() {
  return (
    <div className={s.dialogPage}>
      <div className={s.dialogs}>
        <DialogItem title="Anton" id="1" />
        <DialogItem title="Yulia" id="2" />
        <DialogItem title="Sasha" id="3" />
      </div>
      <div className={s.messages}>
        <MessageItem text="Hi"/>
        <MessageItem text="Privet"/>
        <MessageItem text="GoodBye"/>
      </div>
    </div>
  );
}

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

type MessageItemPropsType = {
  text: string,
}

const MessageItem = (props: MessageItemPropsType) => {
  return (
    <div className={s.message}>{props.text}</div>
  )
}

export default memo(Dialogs);
