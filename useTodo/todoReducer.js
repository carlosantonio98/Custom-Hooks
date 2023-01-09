// { type: '[TODO] Remove Todo', payload: id }
// En el payload puede ser que nosotros queramos mandar todo el "todo" lo cual esta perfecta mente permitido, o puede ser que nosotros queramos mandar el id del todo, esto ya depende de nosotros, puede que mandemos todo el "todo" o solo el id del todo, se aconseja que si nosotros decidimos mandar unicamente el id debemos de tratar de que los demas reducers trabajen de la misma manera, es decir, si tenemos algun problema similar apliquemos una solución similar, si en un reducer mandamos un id en todos debe de ser igual.

export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {

        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id != action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        case 'ABC':
            throw new Error('Action.type = ABC no esta implementada');
    
        default:
            return initialState;
    }
}