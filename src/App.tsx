import './App.css'
import {Button} from "./components/button/Button"
import { UserCard } from './components/user-card/UserCard'
import { AppNav } from './components/app-nav/AppNav'
import { SwipeNavHeader } from "./components/app-superior-nav/swipe/SwipeNavHeader"
import { PicturesMatch } from './components/pictures-match/PicturesMatch'
import { ChatMsg } from './components/chat-msg/ChatMsg'
import { StarterPlan } from './components/plans/StarterPlan'
import { PremiumPlan } from './components/plans/PremiumPlan'
import { PersonalDataTag } from './components/edit-profile/personal-data-tag/PersonalDataTag'
import { UserTag } from './components/edit-profile/user-tags/UserTag'
import { ProfilePicture } from './components/edit-profile/profile-picture/ProfilePicture'
import { LandingReview } from './components/landing/landing-review/LandingREview'
import { LandingFeatures } from './components/landing/landing-features/LandingFeatures'
import { NavLink } from 'react-router'
import { Input } from './components/input/input'
import { Icons } from "./components/icons/Icons";
import { Social } from './components/social/social'
import { DeskNa } from './components/desktop-nav/DeskNav'
import { DeskFooter } from './components/footer/DeskFooter'
import { BubbleChat } from './components/bubble-chat/BubbleChat'




function App() {

  return (
    <>

      <BubbleChat hour="true"/>
    </>
  );
}

export default App