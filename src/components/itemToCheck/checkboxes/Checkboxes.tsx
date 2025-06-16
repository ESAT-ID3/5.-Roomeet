import "./Checkboxes.css";
import { ItemToCheck } from '../ItemToCheck';

interface CheckboxesProps {
  selected: string | null;  // El valor del checkbox seleccionado
  onChange: (value: string | null) => void;  // Función para cambiar el valor del estado
  option1: string | null;
  option2: string | null;
  register?: boolean
}

export const Checkboxes: React.FC<CheckboxesProps> = ({ selected, onChange, option1 = 'Option 1', option2 = 'Option 2', register }) => {
  
  // Función para manejar el cambio de estado
  const handleCheckChange = (value: string) => {
    // Cambia el valor de selected o lo deselecciona si ya está marcado
    onChange(selected === value ? null : value);
  };

  return (
    <div className={register ? "checkboxes-container column" : "checkboxes-container"}>
      <div>
        {/* Checkbox para option1 */}
        <ItemToCheck
          label={option1 || "Option 1"}  // Si no se pasa option1, usa un valor por defecto
          value={option1 || "option1"}   // Si no se pasa option1, usa un valor por defecto
          checked={selected === (option1 || 'option1')}  // Si es la opción seleccionada
          onChange={handleCheckChange}     // Llama a la función para cambiar el estado
        />
      </div>
      <div>
        {/* Checkbox para option2 */}
        <ItemToCheck
          label={option2 || "Option 2"}  // Si no se pasa option2, usa un valor por defecto
          value={option2 || "option2"}   // Si no se pasa option2, usa un valor por defecto
          checked={selected === (option2 || 'option2')}  // Si es la opción seleccionada
          onChange={handleCheckChange}     // Llama a la función para cambiar el estado
        />
      </div>
    </div>
  );
};

export default Checkboxes;
