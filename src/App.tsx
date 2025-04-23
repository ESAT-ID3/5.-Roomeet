import './App.css'
import {Button} from "./components/yellow-button/Button"
import { UserCard } from './components/user-card/UserCard'
import { AppNav } from './components/app-nav/AppNav'
import { SwipeNavHeader } from "./components/app-superior-nav/swipe/SwipeNavHeader"
import { PicturesMatch } from './components/pictures-match/PicturesMatch'



function App() {

  return (
    <div className='main-container'>
    <PicturesMatch/>
    </div>
  )
}

export default App