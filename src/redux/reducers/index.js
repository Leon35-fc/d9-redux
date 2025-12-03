const initialState = {
    favourites: {
        content: []
    }
}

const mainReducer = function(currentState = initialState, action) {

    switch (action.type) {
        case 'ADD_TO_FAVOURITE':
        return {
        ...currentState,
        favourites: {
         ...currentState.favourites,
        content: [...currentState.favourites.content, action.payload]
        }}
        //case 'UN_ALTRO_CASE'

        default:
            return currentState
    }
}

export default mainReducer