import {
  CameraIcon,
  MicrophoneIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import TableTypes from "./TableTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  updateisNewTableActive,
  updateMessageInputValue,
} from "../reducers/chatSlice";
import { useState } from "react";

const ChatInputBox = () => {
  const dispatch = useDispatch();
  const messageInputValue = useSelector(
    (store) => store.chat.messageInputValue
  );
  const isNewTableActive = useSelector((store) => store.chat.isNewTableActive);
  const handleInput = (event) => {
    dispatch(updateMessageInputValue(event.target.innerText.trim()));
  };
  return (
    <div className="chat-input">
      <div className="chat-input__container">
        <FaceSmileIcon className="emoji" />
        {/* <input placeholder="message" className="field" /> */}
        <div
          className="field"
          contentEditable="true"
          suppressContentEditableWarning="true"
          onInput={handleInput}
        >
          {messageInputValue}
        </div>
        <MicrophoneIcon className="mike" />
        <PaperClipIcon className="file" />
        <CameraIcon className="camera" />
      </div>
      {isNewTableActive ? (
        <button>
          <PaperAirplaneIcon className="chat-input__icon" />
        </button>
      ) : (
        <button onClick={() => dispatch(updateisNewTableActive())}>
          <TableCellsIcon className="icon" />
        </button>
      )}
      {isNewTableActive ? <TableTypes /> : ""}
    </div>
  );
};

export default ChatInputBox;
