import "./Select.css"

export const Select = ({title, options = []}) => {

    return (
        <div className="select__container">
            <p>{title}</p>
            <div className="select__flex">
                <select placeholder="Selecciona una opción" name="Genero">
                <option value="" disabled selected hidden>Selecciona una opción</option>
                {options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
                </select>
            </div>
        </div>
    );
};