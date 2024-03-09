import { DialogsPageType } from "../../types/dialog";
import { ActionsKeys, ActionsTypes } from "../types";

const inititalState: DialogsPageType = {
  dialogs: [
    { id: "1", name: "Anton" },
    { id: "2", name: "Yulia" },
    { id: "3", name: "Sasha" },
  ],
  messages: [
    { id: "1", text: "Hi" },
    { id: "2", text: "Privet" },
    { id: "3", text: "Goodbye" },
  ],
};

export function dialogReducer<key extends ActionsKeys>(
  state: DialogsPageType = inititalState,
  action: ActionsTypes[key]
): DialogsPageType {
  switch(action.type) {
    case "SEND-MESSAGE":
      return {...state, messages: [...state.messages, {id: action.payload.id, text: action.payload.message}]}
    default:
      return state;
  }

}
