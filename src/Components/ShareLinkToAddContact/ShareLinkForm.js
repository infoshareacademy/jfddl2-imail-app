import React from 'react'
import {
    InputGroup,
    FormControl,
    Glyphicon,
    Button
} from 'react-bootstrap'

import { connect } from 'react-redux'

import {addNewContact} from '../../state/contacts'

const GROUP_ID = '-KxJIMD8FdeRwMqU9EOa'

class ShareLinkForm extends React.Component {

    state = {
        name: '',
        email: ''
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

        let newUserData = {
            avatar: "",
            city: "",
            email: this.state.email,
            fullname: this.state.name,
            gender: "",
            groups: [GROUP_ID],
            id: ''
        };

        this.props.addNewContact(newUserData)
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

const mapDispatchToProps = dispatch => ({
    addNewContact: newUserData => dispatch(addNewContact(newUserData))
})

export default connect(
    null,
    mapDispatchToProps
)(ShareLinkForm)
