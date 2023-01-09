import { useState } from 'react';

export const useForm = ( initialForm ) => {
    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ( { target } ) => {

        const { name,  value } = target;

        setFormState({
            ...formState,
            [ name ]: value  // El [name ] es una propiedad computada de js
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,  // mandamos todas las propiedades del objeto formState desestructurados
        formState,
        onInputChange,
        onResetForm
    };
}
