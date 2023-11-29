import { useForm } from "react-hook-form";
import { generateId } from "../../../../helpers/helpers.js";
import { toast } from "sonner";

import Input from "../../../Input/Input.jsx";
import Textarea from "../../../Textarea/Textarea.jsx";
import Button from "../../../Button/Button.jsx";
import ToggleSwitch from "../../../ToggleSwitch/ToggleSwitch.jsx";

import "./AdminForm.css";

const AdminForm = (props) => {
  const { setProducts } = props

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);

    const newProduct = { ...data, id: generateId() };
    setProducts(newProduct);

    toast.success('Producto guardado correctamente');
    
    reset()
  };

  return (
    <form className="py-5" onSubmit={onSubmitRHF(handleSubmit)}>
      <h1 className="py-4 text-center">Create Product</h1>
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          pattern: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/i,
        }}
        className="my-4"
        type="url"
        label="Image"
        name="image"
        error={!!errors.image}
      />
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          maxLength: 30,
        }}
        className="my-4"
        label="Name"
        name="name"
        error={!!errors.name}
      />
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          maxLength: 30,
          pattern: /^\$\d{1,},\d{2}$/,
        }}
        className="my-4"
        type="text"
        label="Cost USD"
        name="cost"
        error={!!errors.cost}
      />
      <Textarea
        register={register}
        options={{
          required: true,
          minLength: 5,
          maxLength: 3000,
        }}
        className="my-4"
        label="Ingredients"
        name="ingredients"
        error={!!errors.ingredients}
      />
      <ToggleSwitch
        register={register}
        options={{
          required: false,
        }}
        className='my-4'
        name='available'
        error={!!errors.available}
      />
      <Button />
    </form>
  );
};

export default AdminForm;
