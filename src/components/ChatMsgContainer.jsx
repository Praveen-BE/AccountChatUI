import React from "react";
import MsgBubble from "./MsgBubble";

const ChatMsgContainer = () => {
  return (
    <div className="chat-container">
      <MsgBubble />
      <MsgBubble />
    </div>
  );
};

export default ChatMsgContainer;
