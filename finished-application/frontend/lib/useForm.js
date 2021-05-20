import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  //const initialString = JSON.stringify(initial);
  console.log({...initial, buena: 'buenas'});
  const [inputs, setInputs] = useState(initial);

  console.log(inputs);
  // const initialValues = Object.values(initial).join('');
  /*useEffect(() => {
    // This function runs when the things we are watching change
    setInputs((prevInput) => ({ ...prevInput, ...initial }));
  }, [initialString]);
*/
  // {
  //   name: 'wes',
  //   description: 'nice shoes',
  //   price: 1000
  // }

  function handleChange(e) {
    const { value, name, type } = e.target;
    let newValue;

    switch (type) {
      case 'number':
        newValue = parseInt(value);
        break;
      case 'file':
        [newValue] = e.target.files;
        break;
      default:
        newValue = value;
        break;
    }
    /* if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    } */
    setInputs((prevInput) => ({
      // copy the existing state
      ...prevInput,
      [name]: newValue,
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
