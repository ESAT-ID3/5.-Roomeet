import "./Swipe.css"
import { UserCard } from "../../components/user-card/UserCard";
import { AppNav } from "../../components/app-nav/AppNav";
import { SwipeNavHeader } from "../../components/app-superior-nav/swipe/SwipeNavHeader";
import { DeskNav } from "../../components/desktop-nav/DeskNav";
import { Chats } from "../../components/chats-page/Chats";
import { Ads } from "../../components/ads/Ads";
import { useState } from "react";

const users = [
  { name: "Marcos", age: 28, tags: ["Aventurero", "LGTB+","Noctámbulo"], img:"https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Lucas", age: 25, tags: ["Vegano", "Cocinero", "Juegos de mesa", "Videojuegos"], img: "https://img.freepik.com/foto-gratis/retrato-joven-guapo-brazos-cruzados-sosteniendo-auriculares-blancos-alrededor-su-cuello_23-2148096439.jpg?semt=ais_hybrid&w=740" },
  { name: "Lucía", age: 25, tags: ["Madrugadora", "Ejercicio", "Muy ordenada"], img:"https://img.freepik.com/foto-gratis/hermosa-joven-sonriente-pie-posando_171337-11412.jpg?t=st=1750031648~exp=1750035248~hmac=576c5d6ba548f75662e19b9d7e6747d1266eb65d1fadefeb53d80c72ef1b4c7d&w=2000" },
  { name: "Aitana", age: 25, tags: ["Extrovertida", "LGTB+", "Vegetariana"], img:"https://fireflyphotographysg.com/wp-content/uploads/2024/03/5-steps-to-mastering-the-perfect-linkedin-profile-picture.jpg" },
  { name: "Ana", age: 25, tags: [], img:"https://images.unsplash.com/photo-1508002366005-75a695ee2d17?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBibGFjayUyMHdvbWFufGVufDB8fDB8fHww" },
  // puedes añadir más usuarios
];

export const Swipe = () => {

const [visibleUsers, setVisibleUsers] = useState(users);

const handleSwipe = () => {
  setVisibleUsers(prev => prev.slice(1));
};



    return (
     <div className="swipe__screen_container">
        <div className="display_logo">
        <SwipeNavHeader icon1="shield" icon2="gear"/>
        </div>
        <DeskNav/>
        <div className="swipe__chats_container">
        <SwipeNavHeader icon1="shield" icon2="gear"/>
        <Chats/>  
        </div>
        <div className="blur__container">
        </div>
        <div className="swipe_preview__card">
  {visibleUsers.length === 0 ? (
    <div className="no_users">
    <p>No hay más usuarios disponibles 🥲<br></br>
    ¡Vuelve más tarde!</p>
    </div>
  ) : (
    users.map((user, index) => (
      <UserCard
        key={index}
        name={user.name}
        age={user.age}
        tags={user.tags}
        img={user.img}
        onSwipe={handleSwipe}
      />
    ))
  )}
</div>
        <div className="ad">
            <Ads/>
        </div>
        <AppNav/>
        

        
    </div>
    );
};