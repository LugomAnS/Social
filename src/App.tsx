import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import ContentLayout from "./components/ContentLayout/ContentLayout";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StateType, StoreActionType } from "./redux/state";

type AppPropsType = {
  state: StateType;
  dispatch: (value: StoreActionType) => void;
};

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <NavBar />
        <ContentLayout>
          <Route
            path={"/profile"}
            render={() => (
              <Profile
                posts={props.state.postsPage.posts}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path={"/dialogs"}
            render={() => (
              <Dialogs
                dialogs={props.state.dialogPage.dialogs}
                messages={props.state.dialogPage.messages}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path={"/news"} component={News} />
          <Route path={"/music"} component={Music} />
          <Route path={"/settings"} component={Settings} />
        </ContentLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
