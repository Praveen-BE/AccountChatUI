import React, { Suspense } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import ShimmerChatPage from "./components/ShimmerChatPage";
import AddNewPage from "./pages/AddNewPage";
import CallPage from "./pages/CallPage";
import ProfilePage from "./pages/ProfilePage";
import { Provider } from "react-redux";
import { store } from "./store";
import ChatPage from "./pages/ChatPage";
import HomeListPage from "./pages/HomeListPage";
import SignupLoginPage from "./pages/SignupLoginPage";
import CreateGroupPage from "./pages/CreateGroupPage";
import LinkedDevicesPage from "./pages/LinkedDevicesPage";
import SettingsPage from "./pages/SettingsPage";
import StarredMessagesPage from "./pages/StarredMessagesPage";
import AddNewContact from "./pages/AddNewContact";
import SearchCardPreviewPage from "./pages/SearchCardPreviewPage";
import useFetchUserData from "./hooks/useFetchUserData";

const App = () => {
  return (
    <div className="appBody">
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<HomeListPage />} />
              <Route path="/new" element={<AddNewPage />} />
              <Route path="/calls" element={<CallPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/toUser" element={<ChatPage />} />
            <Route path="/userPreview" element={<SearchCardPreviewPage />} />
            <Route path="/addContact" element={<AddNewContact />} />
            <Route path="/auth" element={<SignupLoginPage />} />
            <Route path="/creategroup" element={<CreateGroupPage />} />
            <Route path="/adddevice" element={<LinkedDevicesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/starred" element={<StarredMessagesPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
