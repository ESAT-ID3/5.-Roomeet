import React from "react";
import { MessageHeader } from "../../components/messageHeader/MessageHeader";
import { SearchBarChats } from "../../components/searchBarChats/SearchBarChats";
import { ChatMsg } from "../../components/chat-msg/ChatMsg";
import "./ChatsPage.css";

export const ChatsPage = () => {
  return (
    <div className="chats-page">
      <MessageHeader />
      <SearchBarChats />
      <ChatMsg/>
    </div>
  );
};

