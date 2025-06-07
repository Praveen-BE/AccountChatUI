import React, { Suspense } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import ShimmerChatPage from "./components/ShimmerChatPage";
import ChatPage from "./pages/ChatPage";
import AddNewPage from "./pages/AddNewPage";
import CallPage from "./pages/CallPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div className="appBody">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<ChatPage />} />
            <Route path="/add" element={<AddNewPage />} />
            <Route path="/call" element={<CallPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
