import React from "react";
import ChatHeader from "../components/ChatHeader";
import ChatMsgContainer from "../components/ChatMsgContainer";
import ChatInputBox from "../components/ChatInputBox";

const ChatPage = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatMsgContainer />
      <ChatInputBox />
    </div>
  );
};

export default ChatPage;
