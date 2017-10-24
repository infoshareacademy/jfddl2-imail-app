import React from 'react'

class Newsletter extends React.Component {

    state = {
        email: null
    }

    handleEmailButton = (event) => {
        console.log(event)

        const init = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                'to': event.target.value,
                'subject': "Powitanie",
                'text': "Witamy serdecznie w Instant Mail.",
                'from': "Instant Mail"
            }
        };

        const request = new Request('https://api.emaillabs.net.pl/api/new_sendmail', init);

        fetch(request).then(
            response => response.json()
        ).catch(
            error => console.error(error)
        );
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