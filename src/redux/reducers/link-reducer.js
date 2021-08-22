export const REQUEST_LINKS = 'links/REQUEST_LINKS'
export const SET_LINKS = 'links/SET_LINKS'
export const CLEAR_LINKS = 'links/CLEAR_LINKS'
export const ADD_LINK = 'links/ADD_LINK'
export const ADD_LINK_SUCCESS = 'links/ADD_LINK_SUCCESS'
export const EDIT_LINK = 'links/EDIT_LINK'
export const EDIT_LINK_SUCCESS = 'links/EDIT_LINK_SUCCESS'
export const REMOVE_LINK = 'links/REMOVE_LINK'
export const REMOVE_LINK_SUCCESS = 'links/REMOVE_LINK_SUCCESS'
export const TRY_EDIT_LINK = "links/TRY_EDIT_LINK"
export const SET_EDITABLE_LINK = "links/SET_EDITABLE_LINK"

export const TOGGLE_IS_FETCHING = 'links/TOGGLE_IS_FETCHING'
export const SET_HAS_MORE_LINKS = 'links/SET_HAS_MORE_LINKS'
export const SET_TERM = 'links/SET_TERM'

const initialState = {
    links: [],
    editableLink: {
        id: null,
        title: null,
        url: null,
    },
    hasMoreLinks: true,
    isFetching: false,
    term: null,
}

const linksReducer = (state = initialState, action) => {
    console.log(state, action)
    switch (action.type) {
        case SET_LINKS:
            return { ...state, links: [...state.links, ...action.links] }
        case CLEAR_LINKS:
            return { ...state, links: [] }
        case SET_EDITABLE_LINK: {
            const { id, title, url } = action;
            return { ...state, editableLink: { id, title, url } }
        }
        case SET_TERM:
            return { ...state, term: action.term }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: !state.isFetching }
        case SET_HAS_MORE_LINKS:
            return { ...state, hasMoreLinks: action.hasMoreLinks }
        case ADD_LINK_SUCCESS: {
            return { ...state, links: [action.link, ...state.links] }
        }
        case EDIT_LINK_SUCCESS: {
            return {
                ...state, links: state.links.map(i => i.id === action.link.id ? action.link : i)
            }
        }
        case REMOVE_LINK_SUCCESS: {
            return {
                ...state, links: state.links.filter(i => i.id !== action.link.id)
            }
        }
        default:
            return state;
    }
}

export const requestLinks = (page, term) => ({
    type: REQUEST_LINKS,
    term, page
})
export const addLink = (title, url) => ({
    type: ADD_LINK,
    title, url
})
export const addLinkSuccess = (link) => ({
    type: ADD_LINK_SUCCESS,
    link
})
export const editLink = (id, title, url) => ({
    type: EDIT_LINK,
    id, title, url
})
export const editLinkSuccess = (link) => ({
    type: EDIT_LINK_SUCCESS,
    link
})
export const setEditableLink = (id, title, url) => ({
    type: SET_EDITABLE_LINK,
    id, title, url
})
export const tryEditLink = (id, title, url) => ({
    type: TRY_EDIT_LINK,
    id, title, url
})
export const removeLink = (id) => ({
    type: REMOVE_LINK,
    id
})
export const removeLinkSuccess = (link) => ({
    type: REMOVE_LINK_SUCCESS,
    link
})
export const setLinks = (links) => ({
    type: SET_LINKS,
    links
})
export const clearLinks = () => ({
    type: CLEAR_LINKS,
})
export const toggleIsFetching = () => ({
    type: TOGGLE_IS_FETCHING
})
export const setHasMoreLinks = (hasMoreLinks) => ({
    type: SET_HAS_MORE_LINKS,
    hasMoreLinks
})
export const setTerm = (term) => ({
    type: SET_TERM,
    term
})
export default linksReducer;