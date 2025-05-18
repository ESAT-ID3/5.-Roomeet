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
import { BubbleChat } from './components/bubble-chat/BubbleChat'
import { HeaderChat } from './components/header-chat/HeaderChat'
import { CarrouselMatches } from './components/carrousel-matches/CarrouselMatches'
import { Select } from './components/select/Select'
import { ChatInput } from './components/chatInput/ChatInput.tsx';
import { Counter } from './components/counter/Counter.tsx'
import { ItemToCheck } from './components/itemToCheck/ItemToCheck.tsx' //No sé si es necesario hacerlo un componente, se podrían cambiar las propiedades de un checkbox normal con CSS
import { MinMaxInput } from './components/minMaxInput/MinMaxInput.tsx'
import { TextToogle } from './components/textToogle/TextToogle.tsx' //No sé si hace falta hacer un componente o si es mejor coger ya un toggle predefinido
import { ToogleAnualMensual } from './components/toogleAnualMensual/ToogleAnualMensual.tsx' //Corregir que al eleginar Anual, el blob se sale
import { DeskFooter } from './components/deskFooter/DeskFooter'
import { NavLanding } from './components/navLanding/nav-superior-landing/NavLanding.tsx'




function App() {

  return (
    <>

      <NavLanding/>
    </>
  );
}

export default App