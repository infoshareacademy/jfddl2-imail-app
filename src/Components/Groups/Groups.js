import React from 'react'

import {
    Button
} from 'react-bootstrap'


class Groups extends React.Component {

    constructor() {
        super();

        this.state = {
            addgroup: ''
            // addedUsers: JSON.parse(localStorage.getItem('addedUsers')) || []
        }
    }

    handleGroupInputChange = (event) => {
        this.setState({
            addgroup: event.target.value
        });
    }

    handleAddGroup = (event) => {
        event.preventDefault();
        console.log(this.state.addgroup);
        let newGroup = {

            group: this.state.group,
        };

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
                    value={this.state.addgroup}
                    onChange={this.handleGroupInputChange}
                />
                    <Button onClick={this.handleAddGroup}>
                      Utwórz
                    </Button>
                </form>

            </div>
        )
    }

}

export default Groups