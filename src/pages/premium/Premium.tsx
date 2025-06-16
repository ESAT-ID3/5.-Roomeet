
import { UserCard } from "../../components/user-card/UserCard";
import { AppNav } from "../../components/app-nav/AppNav";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import { DeskNav } from "../../components/desktop-nav/DeskNav";
import { Chats } from "../../components/chats-page/Chats";
import { Ads } from "../../components/ads/Ads";

export const Premium = () => {

  return (
    <div className="chats__screen_container">
        
        <DeskNav/>
        <div className="chats__chats_container">
        <SwipeNavHeader icon1="shield" icon2="gear"/>
        <Chats/>  
        </div>
        <div className="blur__container">
        </div>
        <div className="chats_preview__card">
        <UserCard name="María" age={23}/>
        </div>
        <div className="ad">
            <Ads/>
        </div>
        <AppNav/>
        

        
    </div>
  );
};