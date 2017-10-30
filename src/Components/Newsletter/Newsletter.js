import React from 'react'

import {Button} from 'react-bootstrap'

import sendMails from '../../sendMails'

class Newsletter extends React.Component {

    state = {
        email: null
    }

    handleEmailButton = (event) => {
        let subject = prompt('Wpisz temat')
        let message = prompt('Wpisz wiadomość')

        if (message && subject)
            sendMails([this.props.email], "instantmail@imail.com", message, subject)
    }

    render() {
        return (
            <Button bsStyle="success" onClick={this.handleEmailButton}>
                Wyślij e-mail
            </Button>
        )
    }
}


export default Newsletter