import React from 'react'

import {
    Button,
    Panel,
    FormControl,
    FormGroup,
    Grid,
    Row,
    Col
} from 'react-bootstrap'

import {connect} from 'react-redux'

import {addNewContact} from '../../state/contacts'

// import CSSModules from 'react-css-modules';
// import styles from '../../style.css'

class AddForm extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            gender: '',
            city: ''
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
    handleCityInputChange = (event) => {
        this.setState({
            city: event.target.value
        });
    }
    handleGenderInputChange = (event) => {
        this.setState({
            gender: event.target.value
        });
    }
    handleAddUser = (event) => {
        event.preventDefault();

        if (!this.validateEmail(this.state.email)) {
            alert('To nie jest poprawny e-mail!')
            return
        }

        let newUserData = {
            id: Date.now(),
            avatar: "https://llw.azureedge.net/2017-07-04T13.10.30.308Z/images/avatar-default.svg",
            fullname: this.state.name,
            email: this.state.email,
            gender: this.state.gender,
            city: this.state.city
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
                borderRadius: 20,
                padding: 15,
                boxShadow: "0px 0px 10px lightgrey"
            }}>
                <h2>Dodaj do listy kontaktów</h2>
                <br/>

                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                            <div style={{width: "85%"}}>
                                <Panel style={{color: "grey", fontStyle: "italic"}} header={"Pomoc"}>
                                    Dodaj użytkowników do swojej bazy, bedzięsz mógł ich wykorzystać do stworzenia
                                    swojej bazy mailingowej.
                                    Pamiętaj im więcej tym lepiej...
                                    <br/><br/>
                                </Panel>
                            </div>
                        </Col>
                        <Col md={6} mdPull={6}>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <FormControl type="text" placeholder="imie i nazwisko" value={this.state.name}
                                                 onChange={this.handleNameInputChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <FormControl type="email" placeholder="adres e-mail" value={this.state.email}
                                                 onChange={this.handleEmailInputChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <FormControl type="text" placeholder="miasto" value={this.state.city}
                                                 onChange={this.handleCityInputChange}/>
                                </FormGroup>

                                <FormGroup controlId="formControlsSelect">
                                    <FormControl onChange={this.handleGenderInputChange} componentClass="select"
                                                 placeholder="wybierz płeć">
                                        <option value="">wybierz płeć...</option>
                                        <option value={"mężczyzna"}>mężczyzna</option>
                                        <option value={"kobieta"}>kobieta</option>
                                    </FormControl>
                                </FormGroup>

                                <Button bsStyle="primary" style={{width: 100}} onClick={this.handleAddUser}>Zapisz
                                </Button>
                            </form>
                        </Col>
                    </Row>
                </Grid>


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
)(AddForm)
// export default CSSModules(AddForm, styles);