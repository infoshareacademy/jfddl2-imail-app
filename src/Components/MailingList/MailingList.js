import React from 'react'

import {
    Button,
    Grid,
    Row,
    Col,
    FormControl,
    ControlLabel,
    Glyphicon,
    FormGroup


} from 'react-bootstrap'

import {connect} from 'react-redux'

import sendMails from '../../sendMails'

const ALL = 'ALL'

class MailingList extends React.Component {

    state = {
        selectedGroup: ALL,
        message: '',
        sender: ''
    }

    handleGroupInputChange = (event) => {
        this.setState({
            selectedGroup: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSenderChange = (event) => {
        this.setState({
            sender: event.target.value
        })
    }

    handleSendButtonClick = () => {
        const recipients = this.props.contacts.filter((contact)=>{
            if(this.state.selectedGroup === ALL)
                return true
            return contact.groups && contact.groups.includes(this.state.selectedGroup)
        }).map((contact)=>{
            return contact.email
        })

        console.log(recipients)

        if(recipients.length <= 0) {
            alert('No contacts in group')
            return
        }

        sendMails(recipients, "chomamateusz@gmail.com", "zupa")
    }

    render() {

        return (
            <div style={{
                border: "1px solid lightgrey",
                maxWidth: "100%",
                borderRadius: 20,
                padding: 15,
                boxShadow: "0px 0px 10px lightgrey"
            }}>
                <h2>Lista wysyłkowa</h2>
                <br/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                            <ControlLabel>Adres nadawcy</ControlLabel>
                            <FormControl style={{width: 400}}
                                         type="email"
                                         value={this.state.sender}
                                         onChange={this.handleSenderChange}
                                         placeholder="jan@przykladowy.com"
                                // onChange={this.handleGroupInputChange}
                                // value={this.state.newGroupName}
                            />
                        </Col>
                        <Col md={6} mdPull={6}>
                            <ControlLabel>Grupa wysyłkowa</ControlLabel>
                            <FormControl style={{width: 400}}
                                         onChange={this.handleGroupInputChange}
                                         componentClass="select"
                                         placeholder="wybierz grupę">
                                <option value={ALL}>Wszyscy</option>
                                {Object.entries(this.props.groups).map((el, index, array) => <option
                                    value={el[0]}>{el[1]}</option>)}
                            </FormControl></Col>
                    </Row>
                </Grid>
                <br/>
                <FormGroup controlId="formControlsTextarea">
                    <FormControl onChange={this.handleMessageChange} style={{height: 500}} componentClass="textarea"
                                 placeholder="Napisz treść maila..." value={this.state.message}/>
                </FormGroup>

                <Button onClick={this.handleSendButtonClick} style={{width: 100}}
                        bsStyle="primary pull-right">Wyślij</Button>
                <p style={{color: "grey"}}>Pamiętaj aby sprawdzić błędy...</p>

            </div>
        )
    }

}

const mapStateToProps = state => ({
    groups: state.groups.groupsList,
    contacts: state.contacts.contactsList
})

export default connect(mapStateToProps)(MailingList)