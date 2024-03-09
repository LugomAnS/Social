import { ChangeEvent, memo, useState } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { DialogType, MessageType } from "../../types/dialog";

type DialogPropsType = {
  dialogs: DialogType[];
  messages: MessageType[];
  sendMessage: (value: string) => void;
};

function Dialogs(props: DialogPropsType) {
  const [text, setText] = useState("");

  const callbacks = {
    onSend: () => {
      if (text.trim()) {
        props.sendMessage(text);
        setText("");
      }
    },
    onTextChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
      setText(e.currentTarget.value),
  };

  return (
    <div className={s.dialogPage}>
      <div className={s.dialogs}>
        {props.dialogs.map((item) => (
          <DialogItem key={item.id} title={item.name} id={item.id} />
        ))}
      </div>
      <div className={s.messages}>
        {props.messages.map((item) => (
          <MessageItem key={item.id} text={item.text} />
        ))}
        <div>
          <div>
            <textarea
              placeholder="Введите сообщение..."
              rows={3}
              value={text}
              onChange={callbacks.onTextChange}
            ></textarea>
          </div>
          <div>
            <button onClick={callbacks.onSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Dialogs);
