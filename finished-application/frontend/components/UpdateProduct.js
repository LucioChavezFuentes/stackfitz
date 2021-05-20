
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

import FormUpdateProduct from './FormUpdateProduct';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;



export default function UpdateProduct({ id }) {

  // 1. We need to get the existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  /*console.log(data)

  // 2. We need to get the mutation to update the product
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);
  // 2.5 Create some state for the form inputs:

  const { inputs, handleChange, clearForm, resetForm } = useForm(
    data ? data.Product : {
      name: '',
      description: '',
      price: '',
    }
  );*/
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  // 3. We need the form to handle the updates
  return (
    <FormUpdateProduct id={id} initialData={data.Product} key={id} />
  );
}
