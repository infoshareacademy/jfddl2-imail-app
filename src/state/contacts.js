import { database } from '../firebase'

const SET_CONTACTS = 'contacts/SET_CONTACTS'

export const init = () => dispatch => {
    database().ref('contacts').on('value', snapshot => {
            let contacts = snapshot.val()
            dispatch(setContacts(contacts))
        }
    )
}


export const toggleGroupToUser = (userId, groupId) => (dispatch, getState) => {
    let userGroups = getState().contacts.contactsList[userId].groups
    if(!userGroups.includes(groupId))
        database().ref(`contacts/${userId}/groups/${userGroups.length}`).set(groupId)
    else
        database().ref(`contacts/${userId}/groups/${userGroups.indexOf(groupId)}`).remove()
}

const setContacts = contacts => ({
    type: SET_CONTACTS,
    contacts: contacts
})

const initialState = {
    contactsList: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_CONTACTS:
            return {
                ...state,
                contactsList: action.contacts
            }
        default:
            return state
    }
}