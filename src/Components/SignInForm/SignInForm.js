import React from 'react'
import { connect } from 'react-redux'
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

import { signIn, signInWithGoogle } from '../../state/auth'

class SignInForm extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
    this.props.signInHelper(this.state.email, this.state.password)
  }

  render() {
    return (<div style={{
      border: "1px solid lightgrey",
      width: 440,
      borderRadius: 20,
      padding: 15,
      boxShadow: "0px 0px 10px lightgrey",
          margin: "0 auto",
          marginTop: "6%"
    }}>
      <form onSubmit={this.handleSubmit}>
        <h2>Zaloguj</h2><br/>
        <FormControl
          type="text"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
          value={this.state.email}>
        </FormControl>
        <br/>

        <FormControl
          type="password"
          name="password"
          placeholder="hasło"
          onChange={this.handleChange}
          value={this.state.password}
        >
        </FormControl><br/>

        <Button bsStyle={"warning"}>Zaloguj</Button>
        <Button bsStyle={"primary"} onClick={event => {
          event.preventDefault()
          this.props.signInWithGoogle()
        }}>Google</Button>
      </form></div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signInHelper: (email, password) => dispatch(signIn(email, password)),
  signInWithGoogle: () => dispatch(signInWithGoogle())
})

export default connect(
  null,
  mapDispatchToProps
)(SignInForm)