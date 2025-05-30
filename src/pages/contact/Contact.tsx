import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Contact.css";
import { Icons } from "../../components/icons/Icons";
import { DeskFooter } from "../../components/deskFooter/DeskFooter";
import { NavLanding } from "../../components/navLanding/nav-superior-landing/NavLanding";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
    notificaciones: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Mensaje enviado (simulado)");
  };

  return (
    <>

    <NavLanding/>

     <div className="contact-container">
      <div className="contact-info">
        <div className="title">
            <h1>¡Contáctanos!</h1>

            <p>
                ¿Tienes dudas, sugerencias o simplemente quieres decir hola?<br />
                Estamos encantados de escucharte. Escríbenos a través del formulario o conéctate con nosotros en redes sociales.
            </p>
        </div>


        <div className="rrss desktop">
             <div className="rrss-columns">

                <div className="rrss-column">

                    <div className="rrss-item">{/* Twitter */}
                        <Icons name= 'block'/>
                        <div className="icon">@RoomeetApp</div>
                    </div>

                    <div className="rrss-item">{/* Facebook */}
                        <Icons name= 'facebook'/>
                        <div className="icon">RoomeetOficial</div>
                    </div>

                    <div className="rrss-item"> {/* YouTube */}
                        <Icons name = 'block'/>
                        <div className="icon">RoomeetOficial</div>
                    </div>
                </div>

                <div className="rrss-column">

                    <div className="rrss-item">{/* Instagram */}
                        <Icons name = 'block'/>
                        <div className="icon">@roomeet_life</div>
                    </div>

                    <div className="rrss-item">{/* Email */}
                        <Icons name = 'email'/>
                        <div className="icon">contacto@roomeet.com</div>
                    </div>

                    <div className="rrss-item">{/* Teléfono */}
                        <Icons name= 'block'/>
                        <div className="icon">+34 612 345 678</div>
                    </div>
                </div>
            </div>
        </div>
      </div>





      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre *</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={formData.nombre}
          onChange={handleChange}
        />

        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="asunto">Asunto *</label>
        <input
          id="asunto"
          name="asunto"
          type="text"
          required
          value={formData.asunto}
          onChange={handleChange}
        />

        <label htmlFor="mensaje">Mensaje *</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          maxLength={800}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí"
        />
        <div className="char-count">{formData.mensaje.length}/800</div>

        <div className="notifications">
          <label htmlFor="notificaciones">¿Te gustaría recibir notificaciones?</label>
          <input
            id="notificaciones"
            name="notificaciones"
            type="checkbox"
            checked={formData.notificaciones}
            onChange={handleChange}
            />

        </div>

        <button type="submit">Enviar mensaje</button>
      </form>

      <div className="rrss mobile">
             <div className="rrss-columns">

                <div className="rrss-column">

                    <div className="rrss-item">{/* Twitter */}
                        <Icons name= 'block'/>
                        <div className="icon">@RoomeetApp</div>
                    </div>

                    <div className="rrss-item">{/* Facebook */}
                        <Icons name= 'block'/>
                        <div className="icon">RoomeetOficial</div>
                    </div>

                    <div className="rrss-item"> {/* YouTube */}
                        <Icons name = 'block'/>
                        <div className="icon">RoomeetOficial</div>
                    </div>
                </div>

                <div className="rrss-column">

                    <div className="rrss-item">{/* Instagram */}
                        <Icons name = 'block'/>
                        <div className="icon">@roomeet_life</div>
                    </div>

                    <div className="rrss-item">{/* Email */}
                        <Icons name = 'email'/>
                        <div className="icon">contacto@roomeet.com</div>
                    </div>

                    <div className="rrss-item">{/* Teléfono */}
                        <Icons name= 'block'/>
                        <div className="icon">+34 612 345 678</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <DeskFooter/>
         </>
   
    
    
  );
};

