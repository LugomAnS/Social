export type DialogsPageType = {
  dialogs: DialogType[];
  messages: MessageType[];
}

export type DialogType ={
  id: string,
  name: string,
}

export type MessageType = {
  id: string,
  text: string,
}
