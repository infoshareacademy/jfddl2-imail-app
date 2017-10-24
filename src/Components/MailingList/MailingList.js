import React from 'react'

import {
    Button,
    Table,
    FormControl,
    InputGroup,
    ControlLabel,
    Glyphicon,
    FormGroup


} from 'react-bootstrap'


class MailingList extends React.Component {


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
                <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="Napisz treść maila..." />
                </FormGroup>
            </div>
        )
    }

}


export default MailingList