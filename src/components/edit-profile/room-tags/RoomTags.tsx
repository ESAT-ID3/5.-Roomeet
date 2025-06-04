import "./RoomTags.css";

interface RoomTagsProps {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const RoomTags:React.FC<RoomTagsProps> = ({ text, isSelected, onClick }) => {
  return (
    <div
      className={`room_tag_container`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <p>{text}</p>
    </div>
  );
};