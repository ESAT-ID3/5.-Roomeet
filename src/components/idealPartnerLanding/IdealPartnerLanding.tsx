
import React from 'react';
import './IdealPartnerLanding.css';
import { Button } from "../../components/button/Button";

export  const IdealPartnerLanding = () => {
  return (
    <section className="onboarding-container">
      
      <div className='title'>
        <h2>Descubre tu próximo compañero ideal</h2>
        </div>

    <div className='non-title'>
        <div className="onboarding-phones">
    </div>

      <div className="onboarding-text">
        <p>
          Crea tu perfil en cuestión de minutos y comienza a explorar perfiles de compañeros de piso que
          comparten tus intereses y estilo de vida. Con nuestra interfaz intuitiva, encontrar la combinación
          perfecta nunca ha sido tan fácil. ¡Desliza, conecta y empieza una nueva etapa!
        </p>
        <div className="onboarding-card">
          <h3>Haz match con tu futuro hogar</h3>
          <p>
            No es solo una app, es una comunidad. Miles de personas ya están encontrando compañeros afines
            para compartir no solo gastos, sino también buenos momentos.
          </p>
        </div>
        <div className="onboarding-card">
          <h3>Tu nuevo hogar empieza con una buena conexión</h3>
          <p>
            ¿Te gusta la tranquilidad o prefieres planes espontáneos? ¿Eres más de madrugar o de trasnochar?
            Aquí no solo buscas piso, encuentras personas con las que realmente encajas. Personaliza tus
            preferencias, chatea directamente con otros usuarios y descubre compatibilidades reales más allá
            del alquiler.
          </p>
        </div>
        <div className='button'>
            <Button text= 'Comienza ya' color="black"/>
        </div>
        
      </div>
    </div>

    </section>
  );
}
