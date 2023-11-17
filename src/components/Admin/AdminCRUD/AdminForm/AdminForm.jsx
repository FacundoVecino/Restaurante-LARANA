import { useForm } from "react-hook-form";
import Input from "../../../Input/Input";
import './AdminForm.css'
import Textarea from "../../../Textarea/Textarea";
import Button from "../../../Button/Button";

const AdminForm = () => {
  const { register, handleSubmit: onSubmitRHF } = useForm();

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className="py-5" onSubmit={onSubmitRHF(handleSubmit)}>
      <h1 className="py-4 text-center">Create Product</h1>
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          pattern: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/
        }}
        className='my-4'
        type='url'
        label='Image'
        name='image-url'
      />
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          maxLength: 30,
        }}
        className='my-4'
        label='Name'
        name='name'
      />
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          maxLength: 30,
          pattern: /^\$\d{1,},\d{2}$/,
        }}
        className='my-4'
        type='text'
        label='Cost USD'
        name='cost'
      />
      <Textarea
        register={register}
        options={{
          required: true,
          minLength: 5,
          maxLength: 3000,
        }}
        className='my-4'
        label='Ingredients'
        name='ingredients'
      />
      <Button />
    </form>
  );
};

export default AdminForm;
