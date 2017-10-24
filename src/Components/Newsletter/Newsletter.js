import React from 'react'

class Newsletter extends React.Component {

    state = {
        email: null
    }

    handleEmailButton = (event) => {
        const init = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
                "authorization": "Basic YTZlZDk1YTZiZGMzMDRkOGExYzYxZTc4NWE1YzE0MmY5MzU0YmZjNDozNzBhOGMyMzVmNzdkYmUxMmYwNjFmMjAwN2NjNjlhZmM2MDI2ZTM3"
            },
            body: JSON.stringify({
                "to": this.props.email,
                "subject": "Powitanie",
                "text": "Witamy serdecznie w Instant Mail.",
                "from": "Instant Mail"
            })
        };

        console.log(init)

        fetch('https://api.emaillabs.net.pl/api/new_sendmail', init).then(
            response => {
                if (response.ok) {
                    return response.json();
                }
                throw Error('Api response not ok', response
                )
            }
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