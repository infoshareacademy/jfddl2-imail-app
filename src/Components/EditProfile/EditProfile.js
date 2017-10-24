import React from 'react'
import {auth} from '../../firebase'
import UserForm from "./UserForm";


class EditProfile extends React.Component {

  render() {
    const user = auth().currentUser;


    return (
        <div>
          <h2>Mój Profil</h2>
          <UserForm user={user}/>
        </div>
    )
  }
}


export default EditProfile