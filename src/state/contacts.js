import {database} from '../firebase'

const SET_CONTACTS = 'contacts/SET_CONTACTS'

export const init = () => dispatch => {
    database().ref('contacts').on('value', snapshot => {
            let contacts = snapshot.val()
            dispatch(setContacts(contacts))
        }
    )
}

export const addNewContact = (newUserData) => (dispatch, getState) => {
    const nextIndex = getState().contacts.contactsList.length
    database().ref(`contacts/${nextIndex}`).set({
        ...newUserData,
        id: nextIndex
    }).then(()=>{
        alert('Dodano Usera!') // @TODO move alert to component by dispatching an action
    })
}

const setContacts = contacts => ({
    type: SET_CONTACTS,
    contacts: contacts
})

const initialState = {
    contactsList: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS:
            return {
                ...state,
                contactsList: action.contacts
            }
        default:
            return state
    }
}