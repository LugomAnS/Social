import { DialogsPageActions, DialogsKeys } from "./dialogs/types";
import PostsPageActions, {PostsKeys} from "./posts/types";

export type ActionsTypes = PostsPageActions & DialogsPageActions;

export type ActionsKeys = DialogsKeys | PostsKeys;