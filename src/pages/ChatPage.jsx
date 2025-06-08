import React from "react";
import SearchBar from "../components/SearchBar";
import ChatList from "../components/ChatList";

const ChatPage = () => {
  return (
    <div className="home-container">
      <SearchBar />
      <ChatList />
    </div>
  );
};

export default ChatPage;
