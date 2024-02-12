import { memo } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

export type DialogType ={
  id: string,
  name: string,
}

export type MessageType = {
  id: string,
  text: string,
}

function Dialogs() {

  const dialogsData: DialogType[] = [
    {id: "1", name: "Anton"},
    {id: "2", name: "Yulia"},
    {id: "3", name: "Sasha"},
  ]

  const messageData: MessageType[] = [
    { id: "1", text: "Hi"},
    { id: "2", text: "Privet"},
    { id: "3", text: "Goodbye"},
  ]

  return (
    <div className={s.dialogPage}>
      <div className={s.dialogs}>
        {dialogsData.map(item => (
          <DialogItem key={item.id} title={item.name} id={item.id}  />
        ))}
      </div>
      <div className={s.messages}>
          {messageData.map(item => (
            <MessageItem key={item.id} text={item.text} />
          ))}
      </div>
    </div>
  );
}




export default memo(Dialogs);
