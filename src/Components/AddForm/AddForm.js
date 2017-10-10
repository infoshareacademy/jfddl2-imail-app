import React from 'react'

class AddForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            saveUsers: JSON.parse(localStorage.getItem('addedUsers')) || []
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

    handleAddUser = (event) => {
        event.preventDefault();

        let newUser = {
            id: Date.now(),
            avatar: "http://www.iconsdb.com/icons/preview/dark-gray/businessman-xxl.png",
            fullname: this.state.name,
            email: this.state.email,
            gender: 'Unknown',
            city: 'Unknown'
        };

        this.setState({
            saveUsers: this.state.saveUsers.concat(newUser)
        }, () => {
            localStorage.setItem('addedUsers', JSON.stringify(this.state.saveUsers));
        });
    }

    render() {
        return (
            <div>
                <h1>Dodaj do listy</h1>
                <form
                    onSubmit={this.handleSubmit}
                >
                    imię i nazwisko <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameInputChange}
                />
                    adres e-mail <br/><input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleEmailInputChange}
                />
                    <button onClick={this.handleAddUser}>
                        Zapisz
                    </button>
                </form>

                <ul>
                    {this.state.saveUsers.map((user, index) =>
                        <li key={index}>{user.fullname}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default AddForm