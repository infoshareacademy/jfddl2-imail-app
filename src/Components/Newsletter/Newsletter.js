import React from 'react'

class Newsletter extends React.Component {

    state = {
        email: null
    }

    handleEmailButton = (event) => {

    }

    render() {
        return (
            <button onClick={this.handleEmailButton}>
                Wyślij e-mail
            </button>
        )
    }
}

export default Newsletter