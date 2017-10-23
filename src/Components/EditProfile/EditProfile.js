import React from 'react'
import { auth } from '../../firebase'


class EditProfile extends React.Component {
  render(){
    return <div>{JSON.stringify(auth().currentUser)}</div>
  }
}


export default EditProfile