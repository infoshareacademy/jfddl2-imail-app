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

        if(!this.validateEmail(this.state.email)){
            alert('To nie jest poprawny e-mail!')
            return
        }

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

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        return (
            <div style={{
                border: "1px solid lightgrey",
                width: 440,
                borderRadius: 20,
                padding: 15,
                boxShadow: "0px 0px 10px lightgrey",
                margin: "0 auto",
                marginTop: "6%"
            }}>
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
