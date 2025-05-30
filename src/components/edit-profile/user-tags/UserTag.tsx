import "./UserTag.css";

interface UserTagProps {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const UserTag:React.FC<UserTagProps> = ({ text, isSelected, onClick }) => {
  return (
    <div
      className={`user_tag_container ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <p>{text}</p>
    </div>
  );
};