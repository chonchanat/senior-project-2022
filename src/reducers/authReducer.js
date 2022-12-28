const initialState = {
    name: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                user: action.payload
            };

        default:
            return state;
    }
}

export default authReducer;