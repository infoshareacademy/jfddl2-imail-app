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

import { addGroup } from '../../state/groups'

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
            <div>
                {/*<h1>Grupy</h1>*/}

                <form onSubmit={this.handleSubmit}>
                    <ControlLabel>Wpisz nową nazwę grupy</ControlLabel>
                    <InputGroup>
                        <FormControl
                            type="text"
                            onChange={this.handleGroupInputChange}
                            value={this.state.newGroupName}/>
                        <InputGroup.Button>
                            <Button onClick={this.handleAddGroup}>
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
                        <th style={{width:20}}>Akcja</th>
                    </tr>
                    </thead>


                    <tbody>
                    {Object.values(this.props.groups).map((group, index)=>{
                        return <tr key = {index}>
                            <td>{group}</td>
                            <td><Button onClick={this.handleDeleteGroup}>Usuń grupę</Button></td>
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