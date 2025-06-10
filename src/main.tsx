import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import { LoginPage } from './pages/login/LoginPage.tsx';
import { FAQ } from './pages/faq/FAQ.tsx';
import { Landing } from './pages/landing/Landing.tsx';
import { NotFound } from './pages/notFound/NotFound.tsx';
import { Premium } from './pages/premium/Premium.tsx';
import { PrivacyPolitics } from './pages/privacyPolitics/PrivacyPolitics.tsx';
import { Profile } from './pages/profile/Profile.tsx';
import { Register } from './pages/register/Register.tsx';
import { SeenProfiles } from './pages/seenProfiles/SeenProfiles.tsx';
import { Swipe } from './pages/swipe/Swipe.tsx';
import { Match } from './pages/match/Match.tsx';
import { AuthSlider } from './pages/auth-slider/AuthSlider.tsx';
import { AuthSliderV2 } from './pages/auth-slider-v2/AuthSliderV2.tsx';
import { Settings } from './pages/settings/Settings.tsx';
import { ChatsPage } from './pages/chats/ChatsPage.tsx';
import { ProfilePreview } from './pages/profile-preview/ProfilePreview.tsx';
import { Contact } from './pages/contact/Contact.tsx';
import { RoomProfile } from './pages/room-profile/RoomProfile.tsx';
import { RegisterFlow } from './pages/register-flow/RegisterFlow.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage onSwitch={() => { console.log("Switch"); }}/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/landing' element={<Landing/>} />
      <Route path='/notFound' element={<NotFound/>} />
      <Route path='/premium' element={<Premium/>} />
      <Route path='/privacyPolitics' element={<PrivacyPolitics/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/profile_preview' element={<ProfilePreview/>} />
      <Route path='/room_profile' element={<RoomProfile/>} />
      <Route path='/register' element={<Register onSwitch={() => { console.log("Switch"); }}/>} />
      <Route path='/register_flow' element={<RegisterFlow/>} />
      <Route path='/loginanimation' element={<AuthSlider/>} />
      <Route path='/loginanimation2' element={<AuthSliderV2/>} />
      <Route path='/seenProfiles' element={<SeenProfiles/>} />
      <Route path='/swipe' element={<Swipe/>} />
      <Route path='/match' element={<Match/>} /> {/* Provisional hasta que sepamos que hacer */ }
      <Route path='/settings' element={<Settings/>} />
      <Route path='/chats' element={<ChatsPage/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
