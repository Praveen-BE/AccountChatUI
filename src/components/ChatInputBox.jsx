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
import { updateisNewTableActive } from "../reducers/chatSlice";

const ChatInputBox = () => {
  const dispatch = useDispatch();
  const isNewTableActive = useSelector((store) => store.chat.isNewTableActive);
  return (
    <div className="chat-input">
      <div className="chat-input__container">
        <FaceSmileIcon className="emoji" />
        <input placeholder="message" className="field" />
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
