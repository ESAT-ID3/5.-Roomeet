
import './ToogleAnualMensual.css';

type PaymentOption = 'Mensual' | 'Anual';

interface Props {
  selected: PaymentOption;
  setSelected: React.Dispatch<React.SetStateAction<PaymentOption>>;
}

export const ToogleAnualMensual: React.FC<Props> = ({ selected, setSelected }) => {


  return (
    <div className="toggle_wrapper">
      <div className="toggle_container">
        {/* Deslizador */}
        <div
          className={`toggle_slider ${selected === 'Mensual' ? 'left' : 'right'}`}
        ></div>

        {/* Opciones */}
        <button
          className={`toggle_button ${selected === 'Mensual' ? 'active' : ''}`}
          onClick={() => setSelected('Mensual')}
        >
          Mensual
        </button>
        <button
          className={`toggle_button ${selected === 'Anual' ? 'active' : ''}`}
          onClick={() => setSelected('Anual')}
        >
          Anual
        </button>
      </div>
      <p>2 meses gratis con el Plan Anual 🎉</p>
    </div>
  );
};


