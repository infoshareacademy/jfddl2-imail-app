import {database} from '../firebase'

const SET_GROUPS = 'groups/SET_GROUPS'

export const init = () => dispatch => {
    database().ref('groups').on('value', snapshot => {
            let groups = snapshot.val()
            dispatch(setGroups(groups))
        }
    )
}

export const addGroup = name => dispatch => {
    database().ref('groups').push(name)
}

const setGroups = groups => ({
    type: SET_GROUPS,
    groups: groups
})

const initialState = {
    groupsList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUPS:
            return {
                ...state,
                groupsList: action.groups
            }
        default:
            return state
    }
}