
import './Input.css'

const Input = (props) => {
  const {
    label,
    type = "text",
    name,
    options = {},
    register,
    className = '',
    error = false,
  } = props;

  return (
    <fieldset className={`container px-5 ${className}`}>
      <input
        type={type}
        id={`${name}-input`}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        placeholder=''
        {...register(name, options)}
      />      <label htmlFor={`${name}-input`}>{label}</label>
    </fieldset>
  );
};

export default Input;
