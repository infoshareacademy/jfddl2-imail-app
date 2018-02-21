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
    const nextIndex = getState().contacts.contactsList.length || 0
    database().ref(`contacts/${nextIndex}`).set({
        ...newUserData,
        id: nextIndex
    }).then(() => {
        alert('Dodano kontakt!') // @TODO move alert to component by dispatching an action
    })
}

export const deleteContact = (userId) => (dispatch, getState) => {
    database().ref(`contacts/${userId}/`).set(null)

}



export const toggleGroupToUser = (userId, groupId) => (dispatch, getState) => {
    let userGroups = getState().contacts.contactsList[userId].groups || []
    if (!userGroups.includes(groupId))
        database().ref(`contacts/${userId}/groups/${userGroups.length}`).set(groupId)
    else
        database().ref(`contacts/${userId}/groups/${userGroups.indexOf(groupId)}`).remove()
}

const setContacts = contacts => ({
    type: SET_CONTACTS,
    contacts: contacts
})

const initialState = {
    contactsList: []
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