import "./UserTag.css";
import { Icons } from "../../icons/Icons";

export const UserTag = ({ text, isSelected, onClick }) => {
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