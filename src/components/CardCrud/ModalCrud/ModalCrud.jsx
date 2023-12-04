// Importaciones
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProductsFn, putProductsFn } from '../../../api/products.js';

// Componentes
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch.jsx';
import Textarea from '../../Textarea/Textarea.jsx';
import Input from '../../Input/Input.jsx';

// Estilos
import './ModalCrud.css';

const ModalCrud = ({ product, closeModal }) => {

  const queryClient = useQueryClient();

  const { register, handleSubmit: onSubmitRHF, formState: { errors }, setValue } = useForm();
  
  useEffect(() => {
    if (product) {
      setValue('name', product.name);
      setValue('image', product.image);
      setValue('cost', product.cost);
      setValue('ingredients', product.ingredients);
      setValue('available', product.available);
    }
  }, [product, setValue]);

  // PUT --------------------------------------

  const { mutate: putProduct } = useMutation({
    mutationFn: putProductsFn,
    onSuccess: () => {
      Swal.close();
      toast.success('Edited product');
      closeModal();

      queryClient.invalidateQueries('products');
    },
    onError: (e) => {
      Swal.close();
      toast.error('An error occurred editing the product');
      console.log(e)
    },
  });

  const handleSubmit = (data) => {
    Swal.showLoading();
    putProduct({...data, id: product.id});
    return closeModal();
  };

  // DELETE ----------------------------------

  const { mutate: deleteProducts } = useMutation({
    mutationFn: deleteProductsFn,
    onSuccess: () => {
      Swal.close();
      toast.success('Removed product');

      queryClient.invalidateQueries('products');
    },
    onError: () => {
      Swal.close();
      toast.error('An error occurred deleting the product');
    },
  });

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Disposal of the product ${product.name} is irreversible `,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Close',
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deleteProducts(product.id);
        closeModal();
      }
    });
  };

  return (
    <article
      className="modal fade"
      id="modalCard"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="card customModal mb-1 mx-3">
            <button
              type="button"
              className="btn-close p-3"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
            <img
              src={product ? product.image : ''}
              className="card-img-top"
              alt={product ? product.name : ''}
            />
            <form className="card-body" onSubmit={onSubmitRHF(handleSubmit)}>
              <Input
                register={register}
                options={{
                  required: true,
                  minLength: 4,
                  pattern:
                    /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/i,
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
                  minLength: 1,
                  maxLength: 30,
                }}
                className="my-4"
                type="number"
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
                className="my-4"
                name="available"
                error={!!errors.available}
              />
              <div className="btn-container container d-flex justify-content-end px-5 mb-3">
                <button type='submit' className="btn-edit mx-3" data-bs-dismiss="modal" aria-label="Close">
                  Edit
                </button>
                <button type='button' className="btn-delete" data-bs-dismiss="modal" aria-label="Close" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ModalCrud;