import "./Swipe.css"
import { UserCard } from "../../components/user-card/UserCard";
import { AppNav } from "../../components/app-nav/AppNav";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";

export const Swipe = () => {

    return (
        <div className="swipe__container">
            <SwipeNavHeader name="settings" color="#202020"/>
            <UserCard name="María" age="23"/>
            <AppNav/>
        </div>
    );
};