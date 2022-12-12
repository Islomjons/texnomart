const initialState = {
    email: ""
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN":
            return{
                email: action.data
            }
            default:
                return state
    }
}

export { cartReducer }