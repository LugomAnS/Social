import { DialogType, MessageType } from "../types/dialog";
import { PostType } from "../types/post";
import { v1 } from "uuid";

export type StateType = {
  postsPage: {
    posts: PostType[];
  };
  dialogPage: {
    dialogs: DialogType[];
    messages: MessageType[];
  };
};

export type StoreActionType = {
  type: string;
  payload: {
    [key: string]: string;
  };
};

const postData: PostType[] = [
  { id: "1", post: "My first message", likesCount: 5 },
  { id: "2", post: "This is awesome!", likesCount: 17 },
  { id: "3", post: "Blood for the blood God!!", likesCount: 999 },
];

const dialogsData: DialogType[] = [
  { id: "1", name: "Anton" },
  { id: "2", name: "Yulia" },
  { id: "3", name: "Sasha" },
];

const messagesData: MessageType[] = [
  { id: "1", text: "Hi" },
  { id: "2", text: "Privet" },
  { id: "3", text: "Goodbye" },
];

let store = {
  _state: {
    postsPage: {
      posts: postData,
    },
    dialogPage: {
      dialogs: dialogsData,
      messages: messagesData,
    },
  },
  addPost(message: string) {
    const newMessage: PostType = {
      id: v1(),
      post: message,
      likesCount: 0,
    };
    this._state = {
      ...this.getState(),
      postsPage: {
        ...this.getState().postsPage,
        posts: [...this.getState().postsPage.posts, newMessage],
      },
    };

    this._callSubscriver(this._state);
  },

  sendMessage(message: string) {
    const newMessage: MessageType = {
      id: v1(),
      text: message,
    };
    this._state = {
      ...this.getState(),
      dialogPage: {
        ...this.getState().dialogPage,
        messages: [...this.getState().dialogPage.messages, newMessage],
      }
    };

    this._callSubscriver(this._state);
  },

  _callSubscriver(state: StateType) {
    console.log("state changed");
  },

  subscribe(observer: (state: StateType) => void) {
    this._callSubscriver = observer;
  },
  getState(): StateType {
    return this._state;
  },
  setState(newState: StateType) {
    this._state = newState;
  },

  dispatch(action: StoreActionType) {
    switch (action.type) {
      case "ADD-POST":
        this.addPost(action.payload.message);
        break;
      case "SEND-MESSAGE":
        this.sendMessage(action.payload.message);
        break;
      default:
        break;
    }
  },
};

export default store;
