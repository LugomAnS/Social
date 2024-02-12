import { memo } from "react";
import s from './MessageItem.module.css';

type MessageItemPropsType = {
  text: string,
}

const MessageItem = (props: MessageItemPropsType) => {
  return (
    <div className={s.message}>{props.text}</div>
  )
}

export default memo(MessageItem);
