import React from 'react'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import ShareLinkForm from '../ShareLinkToAddContact'

import SignInForm from '../SignInForm'
import SignUpForm from '../SignUpForm'

const LoginForm = () => (
    <div>
        <SignInForm/>
        <SignUpForm/>
    </div>
)

const Auth = props => (
    <div>
        {
            props.user === null ?
                <Router>
                    <div>
                        <Route path={"/landingPage"} component={ShareLinkForm}/>
                        <Route exact={true} path={"/"} component={LoginForm}/>
                    </div>
                </Router>
                :
                props.children
        }
    </div>
)

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(
    mapStateToProps
)(Auth)