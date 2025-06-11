import { PhoneIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon, EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import React from "react";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <ArrowLeftIcon className="chat-header__back" />
      <picture className="chat-header__picture">
        <img
          src="https://th.bing.com/th/id/OIP.gwJZku_6nyHfbOwKTEbayQHaFj?rs=1&pid=ImgDetMain"
          alt="chat-profile-image"
        />
      </picture>
      <div className="chat-header__info">
        <p>School Building</p>
        <small>This is defalut description for User</small>
      </div>
      <VideoCameraIcon className="chat-header__video" />
      <PhoneIcon className="chat-header__phone" />
      <EllipsisVerticalIcon className="chat-header__more" />
    </div>
  );
};

export default ChatHeader;
