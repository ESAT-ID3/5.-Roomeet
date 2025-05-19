import React from "react";
import { MessageHeader } from "../../components/messageHeader/MessageHeader";
import { SearchBarChats } from "../../components/searchBarChats/SearchBarChats";
import { ChatMsg } from "../../components/chat-msg/ChatMsg";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import "./ChatsPage.css";

export const ChatsPage = () => {
  return (
    <div className="chats-page">
      <SwipeNavHeader/>
      <MessageHeader />
      <SearchBarChats />
      <ChatMsg/>
      <ChatMsg/>
      <ChatMsg/>
    </div>
  );
};

