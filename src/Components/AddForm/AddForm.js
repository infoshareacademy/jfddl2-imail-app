import React from 'react'

import {
  InputGroup,
  FormControl,
  Glyphicon,
  Button
} from 'react-bootstrap'


class AddForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      gender: '',
      city: '',
      addedUsers: JSON.parse(localStorage.getItem('addedUsers')) || []
    }
  }

  handleNameInputChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailInputChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handleCityInputChange = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  handleGenderInputChange = (event) => {
    this.setState({
      gender: event.target.value
    });
  }

  render() {
    return (
        <div>
          <h1>Dodaj do listy</h1>
          <form
              onSubmit={this.handleSubmit}
          >
            imię i nazwisko <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameInputChange}
          />
            <br/>
            adres e-mail <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailInputChange}
          /><br/>
            miasto <input
              type="text"
              value={this.state.city}
              onChange={this.handleCityInputChange}
          /><br/>
            mężczyzna <input
              type="radio"
              name="gender"
              value="mężczyzna"
              onChange={this.handleGenderInputChange}
          />
            kobieta <input
              type="radio"
              name="gender"
              value="kobieta"
              onChange={this.handleGenderInputChange}
          />
            <br/>
            <button onClick={this.handleAddUser}>
              Zapisz
            </button>
          </form>

          {/*<ul>*/}
          {/*{this.state.addedUsers.map((user, index) =>*/}
          {/*<li key={index}>{user.fullname}</li>*/}
          {/*)}*/}
          {/*</ul>*/}
        </div>
    )
  }
}

export default AddForm