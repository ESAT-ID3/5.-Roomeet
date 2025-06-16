import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import { LoginPage } from './pages/login/LoginPage.tsx';
import { FAQ } from './pages/faq/FAQ.tsx';
import { Landing } from './pages/landing/Landing.tsx';
import { Premium } from './pages/premium/Premium.tsx';
import { PremiumPage } from './pages/premium-page/PremiumPage.tsx';
import { Swipe } from './pages/swipe/Swipe.tsx';
import { Match } from './pages/match/Match.tsx';
import { AuthSliderV2 } from './pages/auth-slider-v2/AuthSliderV2.tsx';
import { ChatsPage } from './pages/chats/ChatsPage.tsx';
import { ProfilePreview } from './pages/profile-preview/ProfilePreview.tsx';
import { Contact } from './pages/contact/Contact.tsx';
import { RoomProfile } from './pages/room-profile/RoomProfile.tsx';
import { RegisterFlow } from './pages/register-flow/RegisterFlow.tsx';
import { AnotherProfile } from './pages/another-profile/AnotherProfile.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/premium' element={<Premium/>} /> {/* Bug tremendo: Si borro UserCard o cambio esta ruta, UserCard peta toda la web */}
      <Route path='/premiumpage' element={<PremiumPage/>} />
      <Route path='/profile_preview' element={<ProfilePreview/>} />
      <Route path='/room_profile' element={<RoomProfile/>} />
      <Route path='/register_flow' element={<RegisterFlow/>} />
      <Route path='/loginanimation2' element={<AuthSliderV2/>} />
      <Route path='/swipe' element={<Swipe/>} />
      <Route path='/match' element={<Match/>} /> {/* Provisional hasta que sepamos que hacer */ }
      <Route path='/chats' element={<ChatsPage/>} />
      <Route path='/anotherprofile' element={<AnotherProfile/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
