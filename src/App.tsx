import './App.css'
import {Button} from "./components/yellow-button/Button"
import { UserCard } from './components/user-card/UserCard'
import { AppNav } from './components/app-nav/AppNav'
import { SwipeNavHeader } from "./components/app-superior-nav/swipe/SwipeNavHeader"
import { PicturesMatch } from './components/pictures-match/PicturesMatch'
import { ChatMsg } from './components/chat-msg/ChatMsg'
import { StarterPlan } from './components/plans/StarterPlan'
import { PremiumPlan } from './components/plans/PremiumPlan'



function App() {

  return (
    <>
      <StarterPlan/>
      <PremiumPlan/>
    </>
  );
}

export default App