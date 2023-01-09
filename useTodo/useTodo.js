import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer';

// const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    // const [ state, dispatch ] = useReducer( todoReducer, initialState );
    const [ todos, dispatch] = useReducer( todoReducer, [], init );
    // la parte del state usualmente se le coloca el nombre de lo que devuelve en este caso en nuestros todos
    // la parte del dispatch usualmente se llama así cuando solo tenemos un reducer, si nosotros tenemos más de un reducer en el mismo functional component nosotros le podemos poner dispatchTodoAction o dispatchTodo para indicar de que esto es la función que despacha acciones hacia ese reducer en particular, pero si solo tenemos un reducer usualmente le podemos dejar dispatch porque sabe que solo hace referencia a este de aquí
    // inicializamos nuestro estate con los todos que previamente existian en el localstorage para no perderlos
    // el init es la función que inicializa nuestro reducer


    // Hacemos que se dispare un evento secundario cuando los todos cambien
    useEffect(() => {
        // En el localstorage solo vamos a poder grabar strings, si necesitamos guardar objetos u arreglos lo tenemos que convertir primero a string, para que de esa manera el navegador pueda almacenarlo en el localstorage. Cuando nosotros guardamos un objeto como cadena automaticamente el navegador lo serializa para que nosotros podamos leerlo desde el localstorage.
        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    };
}
