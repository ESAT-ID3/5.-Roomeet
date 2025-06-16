
import { NavLink } from "react-router";
import "./AppNav.css";



const routes = ["/swipe", "/chats", "/premiumpage", "/profile_preview"];

export const AppNav = () => {

  const icons = [
    {

        d:"M15 1.25L11.25 11.25L1.25 15L11.25 18.75L15 28.75L18.75 18.75L28.75 15L18.75 11.25L15 1.25Z",
        viewBox: "0 0 30 30"
        
    },
    {
        d: "M20 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V22L6 18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V4C22 2.89 21.1 2 20 2Z",
        viewBox: "0 0 24 24"
        
    },
    {
        d: "M20 2H4V4L9.81 8.36C6.14 9.57 4.14 13.53 5.35 17.2C6.56 20.87 10.5 22.87 14.19 21.66C17.86 20.45 19.86 16.5 18.65 12.82C17.95 10.71 16.3 9.05 14.19 8.36L20 4V2ZM14.94 19.5L12 17.78L9.06 19.5L9.84 16.17L7.25 13.93L10.66 13.64L12 10.5L13.34 13.64L16.75 13.93L14.16 16.17L14.94 19.5Z",
        viewBox: "0 0 24 24"
    },
    {
        d: "M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z",
        viewBox: "0 0 24 24"
    }
    ];

    return (
    <div className="nav">
        {icons.map((icon, index) => (
        <NavLink
            to={routes[index]}
            key={index}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox={icon.viewBox}
                style={{ cursor: "pointer" }}
            >
                <path
                    d={icon.d}
                />
            </svg>
        </NavLink>
        ))}
    </div>
    );
};