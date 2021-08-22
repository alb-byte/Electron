export const TOGGLE_FORM_VISIBILITY = 'app/TOGGLE_FORM_VISIBILITY'

const initialState = {
    formVisibility: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FORM_VISIBILITY:
            return { ...state, formVisibility: !state.formVisibility }
        default:
            return state;
    }
}

export const toggleFormVisibility = () => ({
    type: TOGGLE_FORM_VISIBILITY,
})


export default appReducer;