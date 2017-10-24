import React from 'react'
import {auth} from '../../firebase'
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

class UserForm extends React.Component {
  state = {
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

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({
      displayName: event.target.value
    })
  }

  render() {
    const user = auth().currentUser;
    return (<div style={{
          border: "1px solid lightgrey",
          width: 440,
          borderRadius: 20,
          padding: 15,
          boxShadow: "0px 0px 10px lightgrey"
        }}><h2>Mój Profil</h2>
          <br/>

          <form style={{width: 400}} onSubmit={this.handleSave}>
            <FormGroup controlId={'formControlsText'}>
              <ControlLabel>{'Imię i Nazwisko:'}</ControlLabel>
              <FormControl type={'text'}
                           onChange={this.handleNameChange}
                           value={this.state.displayName}
                           placeholder={this.state.displayName}/>
            </FormGroup>

            <FormGroup controlId={'formControlsEmail'}>
              <ControlLabel>{'Email:'}</ControlLabel>
              <FormControl type={'email'}
                           // value={this.props.user.email}
                            placeholder={this.state.email}/>
            </FormGroup>

            <FormGroup controlId={'formControlsPassword'}>
              <ControlLabel>{'Hasło:'}</ControlLabel>
              <FormControl type={'Password'} value={this.props.user.password}/>
            </FormGroup>

            <img style={{maxWidth: 100,
              border: "1px solid lightgrey",
              borderRadius: 20
            }} src={this.props.user.photoURL}/>

            <FormGroup controlId={'formControlsAvatar'}>
              <ControlLabel>{'Plik:'}</ControlLabel>
              <FormControl type={'File'} value={user.email}/>
            </FormGroup><br/>
            <Button bsStyle={"warning"} style={{width: 400}} type="submit">
              Zapisz zmiany
            </Button>

          </form>
          <br/>
        </div>
    )
  }
}


export default UserForm