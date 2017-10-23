import React from 'react'

import {
  DropdownButton,
  MenuItem,
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
      group: '',
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

    handleGroupInputChange = (event) => {
        this.setState({
            group: event.target.value
        });
    }

  handleAddUser = (event) => {
    event.preventDefault();
    console.log(this.state.addedUsers);
    let newUser = {
      id: Date.now(),
      avatar: "https://llw.azureedge.net/2017-07-04T13.10.30.308Z/images/avatar-default.svg",
      fullname: this.state.name,
      email: this.state.email,
      gender: this.state.gender,
      city: this.state.city,
      group: this.state.group
    };

    this.setState({
      addedUsers: this.state.addedUsers.concat(newUser),
      name: '',
      email: '',
      gender: '',
      city: '',
      group: ''
    }, () => {
      localStorage.setItem('addedUsers', JSON.stringify(this.state.addedUsers));
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
          /><br/>
            <DropdownButton title="Wybierz grupę" id="bg-vertical-dropdown-1">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <br/>
            <Button onClick={this.handleAddUser}>
              Zapisz
            </Button>
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