import * as dialogs from './actions';

type DialogsType = typeof dialogs;
export type DialogsKeys = keyof DialogsType;

export type DialogsPageActions = {
  [key in DialogsKeys]: ReturnType<DialogsType[key]>
}