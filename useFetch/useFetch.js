import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    // Hacemos esto para redibujar el componente
    const [state, setState] = useState({
        data: null,  // data es el producto de la aplicación
        isLoading: true,  // isLoading es para saber cuando estoy cargando o no
        hasError: null  // hasErro para detectar si ocurre algun error
    });
    
    const getFetch = async () => {
        // Si nosotros volvieramos a llamar al getFetch que es para realizar la peticion propiamente
        // Posiblemente queramos poner el isLoading en true

        // Esto sirve para actualizar el isLoading a true, si no lo ponemos así cuando el url del componente se actualice y el useEffect se dispare este mantendra el isLoading en false ya que habra ejecutado una vez, la primera llamada estara bien pero la segunda en donde quedara en false, por eso se resetea el isLoading a true.
        setState({
            ...state,
            isLoading: true
        });

        // Hacemos un try catch para cachar el error
        try {
            const resp = await fetch( url );
            const data = await resp.json();
    
            // Si mando el setState a un objeto tengo que mandar todas las propiedades
            setState({
                data,
                isLoading: false,
                hasError: null
            });

        } catch (error) {
            setState({
                ...setState,
                hasError: error
            });
        }
    }

    useEffect(() => {
        getFetch();
    }, [url]);
    
    // hay que procurar la lectura, hay que especificar todo lo que necesitamos en el return ya que lo todos van hacer para entender tu codigo o buscar algo es ir a leer esta parte, si necesitamos agregar mas propiedades lo podremos hacer sin problemas y al especificar todo desde aquí ya no obligaremos al programador a que valla a la parte de arriba de nuestro codigo a ver que propiedades tiene el ...state, le ahorraremos tiempo.
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
