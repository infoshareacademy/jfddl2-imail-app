import React from 'react'

import {
    Button,
    Table,
    FormControl,
    InputGroup,
    ControlLabel,
    Glyphicon

} from 'react-bootstrap'

import {connect} from 'react-redux'

import {addGroup} from '../../state/groups'

class Groups extends React.Component {

    state = {
        addgroup: '',
        newGroupName: ''
    }

    handleGroupInputChange = (event) => {
        this.setState({
            newGroupName: event.target.value
        });
    }

    handleAddGroup = (event) => {
        event.preventDefault();
        this.props.addGroup(this.state.newGroupName);
        this.setState({
            newGroupName: ''
        });

    }


    handleDeleteGroup = (event) => {
        event.preventDefault();
        this.props.deleteGroup(this.state.deleteGroup)

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
                <h2>Grupy</h2>
                <br/>
                <form style={{width: 500}} onSubmit={this.handleSubmit}>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Wpisz nową nazwę grupy..."
                            onChange={this.handleGroupInputChange}
                            value={this.state.newGroupName}/>
                        <InputGroup.Button>
                            <Button bsStyle="primary" onClick={this.handleAddGroup}>
                                <Glyphicon glyph="plus-sign"/> Dodaj
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </form>
                <Table striped bordered condensed hover style={{
                    marginTop: 50
                }}>
                    <thead>
                    <tr>
                        <th>Nazwa grupy</th>
                        <th style={{width: 20}}>Akcja</th>
                    </tr>
                    </thead>


                    <tbody>
                    {Object.values(this.props.groups).map((group, index) => {
                        return <tr key={index}>
                            <td>{group}</td>
                            <td><Button bsStyle="danger" onClick={this.handleDeleteGroup}><Glyphicon glyph="minus-sign"/> Usuń
                                grupę</Button></td>
                        </tr>
                    })}
                    </tbody>
                </Table>

            </div>
        )
    }

}


const mapDispatchToProps = dispatch => ({
    addGroup: name => dispatch(addGroup(name))
})

const mapStateToProps = state => ({
    groups: state.groups.groupsList
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Groups)