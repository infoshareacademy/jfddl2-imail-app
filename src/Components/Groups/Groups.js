import React from 'react'

import {
    Button,
    Table
} from 'react-bootstrap'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import { addGroup } from '../../state/groups'

import { database } from '../../firebase'

class Groups extends React.Component {

    state = {
        addgroup: ''
    }

    handleGroupInputChange = (event) => {
        this.setState({
            newGroupName: event.target.value
        });
    }

    handleAddGroup = (event) => {
        event.preventDefault();
        this.props.addGroup(this.state.newGroupName)
    }

    render() {

        return (
            <div>
                <h1>Grupy</h1>
                <form
                    onSubmit={this.handleSubmit}
                >
                    Nazwa grupy <input
                    type="text"
                    value={this.state.newGroupName}
                    onChange={this.handleGroupInputChange}
                />
                    <Button onClick={this.handleAddGroup}>
                      Utwórz
                    </Button>
                </form>


                <Table striped bordered condensed hover style={{
                    marginTop: 20
                }}>
                    <thead>
                    <tr>
                        {/*<th>ID</th>*/}
                        <th>Nazwa grupy</th>
                    </tr>
                    </thead>


                    <tbody>
                    {Object.values(this.props.groups).map((group, index)=>{
                        return <tr key = {index}>
                            <td>{group}</td>
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