import React from 'react'

class Newsletter extends React.Component {

    state = {
        email: null
    }

    handleEmailButton = (event) => {
        fetch("https://tranquil-thicket-80023.herokuapp.com", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "emails": [this.props.email],
                "subject": "Pozdrowienia od instantMail!",
                "message": "Witaj w naszej aplikacji, jak widzisz wszytko działa! Do zobaczenia:D",
                "from": "instantmail@imail.com",
                "fromName": "instantMailApp"
            })
        }).then(response => response.json())
            .then(console.log)
    }
        render()
        {
            return (
                <button onClick={this.handleEmailButton}>
                    Wyślij e-mail
                </button>
            )
        }
    }


export default Newsletter