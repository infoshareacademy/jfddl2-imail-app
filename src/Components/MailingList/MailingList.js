import React from 'react'

import {
    Button,
    Form,
    Grid,
    Row,
    Col,
    FormControl,
    MenuItem,
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
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                            <ControlLabel>Adres nadawcy</ControlLabel>
                            <FormControl style={{width: 400}}
                                         type="text"
                                         placeholder="jan@przykladowy.pl"
                                // onChange={this.handleGroupInputChange}
                                // value={this.state.newGroupName}
                            />
                        </Col>
                        <Col md={6} mdPull={6}>
                            <ControlLabel>Grupa wysyłkowa</ControlLabel>
                            <FormControl style={{width: 400}}
                                         onChange={this.handleGenderInputChange}
                                         componentClass="select"
                                         placeholder="wybierz grupę">
                                <option value="">wybierz...</option>
                                <option value={"mężczyzna"}>sdfsfg</option>
                                <option value={"kobieta"}>asdfasdfasdf</option>
                            </FormControl></Col>
                    </Row>
                </Grid>
                <br/>
                <FormGroup controlId="formControlsTextarea">
                    <FormControl style={{height: 500}} componentClass="textarea" placeholder="Napisz treść maila..."/>
                </FormGroup>
                <Button style={{width: 100}} bsStyle="primary">Wyślij</Button>

            </div>
        )
    }

}


export default MailingList