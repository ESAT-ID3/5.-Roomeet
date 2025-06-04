import "./Checkboxes.css"
import { ItemToCheck } from '../ItemToCheck';

interface CheckboxesProps {
  selected: string | null;  // El valor del checkbox seleccionado
  onChange: (value: string | null) => void;  // Función para cambiar el valor del estado
}

export const Checkboxes: React.FC<CheckboxesProps> = ({ selected, onChange }) => {
  const handleCheckChange = (value: string) => {
    // Cambia el valor de selected o lo deselecciona si ya está marcado
    onChange(selected === value ? null : value);
  };

  return (
    <div className="checkboxes-container">
      <div>
        <ItemToCheck
          label="Sí"
          value="Sí"
          checked={selected === 'Sí'}  // Si es la opción seleccionada
          onChange={handleCheckChange}     // Llama a la función para cambiar el estado
        />
      </div>
      <div>
        <ItemToCheck
          label="No"
          value="No"
          checked={selected === 'No'}  // Si es la opción seleccionada
          onChange={handleCheckChange}     // Llama a la función para cambiar el estado
        />
      </div>
    </div>
  );
};

export default Checkboxes;
