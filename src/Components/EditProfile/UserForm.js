import React from 'react'
import {auth} from '../../firebase'
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

class UserForm extends React.Component {
  state= {
    displayName: this.props.user.displayName,
    email: this.props.user.email,
    password: this.props.user.password,
    photoURL: this.props.user.photoURL
  }



  handleSave = (event) => {
    event.preventDefault()
    this.setState({
      displayName: this.props.user.displayName,
      email: this.props.user.email,
      password: this.props.user.password,
      photoURL: this.props.user.photoURL
    })
  }

  render() {
    const user = auth().currentUser;
    return (
        <form style={{width:400}} onSubmit={this.handleSave}>
          <FormGroup controlId={'formControlsText'}>
            <ControlLabel>{'Imię i Nazwisko'}</ControlLabel>
            <FormControl type={'text'} value={this.state.displayName}/>
          </FormGroup>

          <FormGroup controlId={'formControlsEmail'}>
            <ControlLabel>{'Email'}</ControlLabel>
            <FormControl type={'email'} value={this.props.user.email}/>
          </FormGroup>

          <FormGroup controlId={'formControlsPassword'}>
            <ControlLabel>{'Hasło'}</ControlLabel>
            <FormControl type={'Password'} value={this.props.user.password}/>
          </FormGroup>

          <img style={{maxWidth: 100}} src={this.props.user.photoURL}/>

          <FormGroup controlId={'formControlsAvatar'}>
            <ControlLabel>{'Plik'}</ControlLabel>
            <FormControl type={'File'} value={user.email}/>
          </FormGroup><br/>
          <Button style={{width:400}} type="submit">
            Zapisz zmiany
          </Button>

        </form>
    )
  }
}


export default UserForm