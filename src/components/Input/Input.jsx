import './Input.css'

const Input = (props) => {
  const {
    label,
    type = "text",
    name,
    options = {},
    register,
    className = '',
  } = props;

  return (
    <fieldset className={`container px-5 ${className}`}>
      <input
        type={type}
        id={`${name}-input`}
        placeholder=''
        {...register(name, options)}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
    </fieldset>
  );
};

export default Input;
