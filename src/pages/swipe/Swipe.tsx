import "./Swipe.css"
import { UserCard } from "../../components/user-card/UserCard";
import { AppNav } from "../../components/app-nav/AppNav";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import { DeskNav } from "../../components/desktop-nav/DeskNav";
import { ChatsPage } from "../chatsPage/chatsPage";
import { Ads } from "../../components/ads/Ads";

export const Swipe = () => {

    return (
     <div className="swipe__screen_container">
        <div className="display_logo">
        <SwipeNavHeader />
        </div>
        <DeskNav/>
        <ChatsPage/>  
        <div className="blur__container">
        </div>
        <UserCard name="María" age="23"/>
        <div className="ad">
            <Ads/>
        </div>
        <AppNav/>
        

        
    </div>
    );
};