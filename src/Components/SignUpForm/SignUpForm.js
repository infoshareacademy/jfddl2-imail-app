import React from 'react'
import { connect } from 'react-redux'

import { signUp } from '../../state/auth'

class SignUpForm extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUpHelper(this.state.email, this.state.password)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />

        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        <button>Sign up</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpHelper: (email, password) => dispatch(signUp(email, password))
})

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm)