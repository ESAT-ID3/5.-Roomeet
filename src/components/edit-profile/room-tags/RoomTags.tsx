import "./RoomTags.css";
import React from 'react';

interface RoomTagsProps {
  text: string;
  count?: number;
}

export const RoomTags:React.FC<RoomTagsProps> = ({ text, count }) => {
  return (
    <div
      className={`room_tag_container`}
      style={{ cursor: "pointer" }}
    >
      <p>{count} {text}</p>
    </div>
  );
};
