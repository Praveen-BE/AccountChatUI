import React from "react";

const MsgBubble = () => {
  return (
    <div className="chat-element msg-left">
      <picture>
        <img
          src="https://wallpapers.com/images/hd/nami-one-piece-msa237393zrzc76n.jpg"
          alt="group-people"
        />
      </picture>
      <div className="chat-container__bubble bubble-left">
        <div className="chat-container__bubble--details">
          <h3>Nami</h3>
          <p>Hello! This is a chat bubble.</p>
        </div>
        <small>40 m</small>
      </div>
    </div>
  );
};

export default MsgBubble;
