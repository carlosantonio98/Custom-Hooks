import { useState } from 'react';

// Este contador sirve para contar los productos en un carrito de compras y es reutilizable ya que podremos usarlo en cualquier lugar donde queramos un contador
export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = ( value = 1 ) => {
        // setCounter( counter + value );
        setCounter( (current) => current + value );
    }

    const decrement = ( value = 1) => {
        if ( counter === 0 ) return;

        setCounter( (current) => current - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}
