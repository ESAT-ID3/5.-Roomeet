import "./Premium.css"
import { AppNav } from "../../components/app-nav/AppNav";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import { DeskNav } from "../../components/desktop-nav/DeskNav";
import { Button } from "../../components/button/Button";
import { Ads } from "../../components/ads/Ads";
import { PremiumPlan } from "../../components/plans/PremiumPlan";
import { StarterPlan } from "../../components/plans/StarterPlan";
import img from "../../assets/images/premiumGallery.png"

export const PremiumPage = () => {

    return (
     <div className="premium_container">
        <DeskNav/>
        <div className="premium_sidebar_container">
        <SwipeNavHeader icon1="shield" icon2="gear"/>
        <div className="premium__profiles_container">
          <div className="premium__profiles_text_container">
          <p className="premium__profiles_text premium__profiles_title">Perfiles que has visto</p>
          <p className="premium__profiles_text">¿Te gustaría volver a revisar algún perfil que dejaste pasar?</p>
          <div className="premium__profiles_blur__mobile"></div>
          <Button text="Pásate a Premium ya"/>
          </div>
          
          <div className="premium__profiles_blur"></div>
        </div> 
        
        </div>
        <div className="premium_plan">
          <StarterPlan/>
          <PremiumPlan/>

        </div>
        <div className="ad">
            <Ads/>
        </div>
        <AppNav/>
        

        
    </div>
    );
};