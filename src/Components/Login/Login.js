import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Button bsSize="large" block >Zaloguj</Button>
                <Button bsSize="large" block >Zarejestruj</Button>
            </div>
        )
    }
}

export default Login