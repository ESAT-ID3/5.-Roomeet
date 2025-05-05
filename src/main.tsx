import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import { LoginPage } from './pages/login/LoginPage.tsx';
import { Contact } from './pages/contact/Contact.tsx';
import { FAQ } from './pages/faq/FAQ.tsx';
import { Landing } from './pages/landing/Landing.tsx';
import { NotFound } from './pages/notFound/NotFound.tsx';
import { Premium } from './pages/premium/Premium.tsx';
import { PrivacyPolitics } from './pages/privacyPolitics/PrivacyPolitics.tsx';
import { Profile } from './pages/profile/Profile.tsx';
import { Register } from './pages/register/Register.tsx';
import { SeenProfiles } from './pages/seenProfiles/SeenProfiles.tsx';
import { Swipe } from './pages/swipe/Swipe.tsx';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/landing' element={<Landing/>} />
      <Route path='/notFound' element={<NotFound/>} />
      <Route path='/premium' element={<Premium/>} />
      <Route path='/privacyPolitics' element={<PrivacyPolitics/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/seenProfiles' element={<SeenProfiles/>} />
      <Route path='/swipe' element={<Swipe/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
