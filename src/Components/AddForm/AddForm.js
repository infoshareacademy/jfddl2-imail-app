import React from 'react'

import {
    Button,
    FormControl,
    FormGroup,
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


    handleAddUser = (event) => {
        event.preventDefault();
        console.log(this.state.addedUsers);
        let newUser = {
            id: Date.now(),
            avatar: "https://llw.azureedge.net/2017-07-04T13.10.30.308Z/images/avatar-default.svg",
            fullname: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            city: this.state.city
        };

        this.setState({
            addedUsers: this.state.addedUsers.concat(newUser),
            name: '',
            email: '',
            gender: '',
            city: ''
        }, () => {
            localStorage.setItem('addedUsers', JSON.stringify(this.state.addedUsers));
        });
    }

    render() {
        return (
            <div style={{
                border: "1px solid lightgrey",
                width: 440,
                borderRadius: 20,
                padding: 15,
                boxShadow: "0px 0px 10px lightgrey"
            }}>
                <h2>Dodaj do listy</h2>
                <br/>

                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <FormControl type="text" placeholder="imie i nazwisko" value={this.state.name}
                                     onChange={this.handleNameInputChange}/>
                    </FormGroup>

                    <FormGroup>
                        <FormControl type="email" placeholder="adres e-mail" value={this.state.email}
                                     onChange={this.handleEmailInputChange}/>
                    </FormGroup>

                    <FormGroup>
                        <FormControl type="text" placeholder="miasto" value={this.state.city}
                                     onChange={this.handleCityInputChange}/>
                    </FormGroup>

                    <FormGroup  controlId="formControlsSelect">
                        <FormControl onChange={this.handleGenderInputChange} componentClass="select" placeholder="wybierz płeć">
                            <option value="">wybierz płeć...</option>
                            <option value={"mężczyzna"}>mężczyzna</option>
                            <option value={"kobieta"}>kobieta</option>
                        </FormControl>
                    </FormGroup>
                    <br/>
                    <Button bsStyle="primary" style={{width: 400}} onClick={this.handleAddUser}>Zapisz
                    </Button>
                </form>

            </div>
        )
    }
}

export default AddForm