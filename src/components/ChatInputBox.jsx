import {
  CameraIcon,
  MicrophoneIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatInputBox = () => {
  return (
    <div className="chat-input">
      <div className="chat-input__container">
        <FaceSmileIcon className="emoji" />
        <input placeholder="message" className="field" />
        <MicrophoneIcon className="mike" />
        <PaperClipIcon className="file" />
        <CameraIcon className="camera" />
      </div>
      <button>
        {/* <PaperAirplaneIcon className="chat-input__icon" /> */}
        <TableCellsIcon className="icon" />
      </button>
    </div>
  );
};

export default ChatInputBox;
