import './App.css'
import {Button} from "./components/yellow-button/Button"
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



function App() {

  return (
    <>
      <LandingFeatures/>
    </>
  );
}

export default App