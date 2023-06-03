import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';

const SingleShop = () => {
    const [formState, setFormState] = useState({
        itemName: '',
        itemPrice: '',
      });
    
      // Set up our mutation with an option to handle errors
      const [addItem, { error }] = useMutation(ADD_ITEM);
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // On form submit, perform mutation and pass in form data object as arguments
        // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
        try {
          const { data } = addItem({
            variables: { itemName: formState.itemName, itemPrice: formState.itemPrice },
          });
    
          window.location.reload();
        } catch (err) {
          console.error(err);
        }
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'itemName' && value.length <= 280) {
          setFormState({ ...formState, [name]: value });
        } else if (name !== 'itemName') {
          setFormState({ ...formState, [name]: value });
        }
      };

}

export default SingleShop;