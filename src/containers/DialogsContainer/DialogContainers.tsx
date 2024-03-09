import { memo } from "react"
import Dialogs from "../../components/Dialogs/Dialogs";
import { useDispatch, useSelector } from "react-redux";
import { DialogsPageType } from "../../types/dialog";
import { StoreStateType } from "../../store/store";
import * as dialogsAC from '../../store/dialogs/actions';
import { v1 } from "uuid";

function DialogContainers() {
  const dialogs = useSelector<StoreStateType, DialogsPageType>(state => state.dialogPage)
  const dispatch = useDispatch();

  const callbacks = {
    sendMessage: (value: string) => dispatch(dialogsAC.sendMessageAction(v1(), value)),
  }

  return (
    <Dialogs dialogs={dialogs.dialogs} messages={dialogs.messages} sendMessage={callbacks.sendMessage}/>
  )
}

export default memo(DialogContainers);