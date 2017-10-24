import React from 'react'
import {
    InputGroup,
    FormControl,
    Glyphicon,
    Button
} from 'react-bootstrap'

class ShareLinkForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            addedUsers: JSON.parse(localStorage.getItem('ShareLinkClient')) || []
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
    handleAddUser = (event) => {
        event.preventDefault();
        console.log(this.state.addedUsers);
        let newUser = {
            fullname: this.state.name,
            email: this.state.email
        };
}

    render() {
        return (
            <div>
                <h1>Sprawdź jak działamy</h1>
                <form
                    onSubmit={this.handleSubmit}
                >
                    imię i nazwisko <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameInputChange}
                />
                    adres e-mail <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleEmailInputChange}
                />
                    <button onClick={this.handleAddUser}>
                        Wyślij
                    </button>
                </form>
            </div>
                )
}
}

export default ShareLinkForm
