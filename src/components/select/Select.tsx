import "./Select.css"

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const Select = ({ options, value, onChange }: SelectProps) => {

    return (
        <div className="select__container">
            <div className="select__flex">
                <select 
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    placeholder="Selecciona una opción" name="Genero"
                >
                <option value="" disabled selected hidden>Selecciona una opción</option>
                {options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
                </select>
            </div>
        </div>
    );
};