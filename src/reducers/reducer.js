const initialState = {
    data: [
        {
            id: 1,
            name: "Chonchanat",
            score: 12,
        },
        {
            id: 2,
            name: "Pokpong",
            score: 25,
        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            const addData = [...state.data, action.payload];
            return {
                ...state,
                data: addData,
            }
        default:
            break;
    }
    return state;
}

export default reducer;