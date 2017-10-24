import React from 'react'

class FinalResult extends React.Component {
    state = {
        users: [],
        // saveUsers: JSON.parse(localStorage.getItem('addedUsers')) || [],
        finalUser: [],
        addedUsers: JSON.parse(localStorage.getItem('addedUsers')) || [],
        favourites: JSON.parse(localStorage.getItem('favourites')) || []
    }

    componentDidMount() {
        fetch(
            `${process.env.PUBLIC_URL}/database.json` // template string usage
        ).then(
            response => response.json()
        ).then(
            users => {
                users = users.concat(this.state.addedUsers)
                users = users.filter((user) => {
                    return user.id === parseInt(this.props.match.params.id)
                })
                this.setState({users: users, finalUser: users[0]})
            }
        )
    }

    handleAddFavUser = (event) => {
        event.preventDefault();
        this.setState({
            favourites: this.state.favourites.concat(this.state.finalUser)
        }, () => {
            localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
        });
    }

    handleDeleteFavUser = (event) => {
        event.preventDefault();
        this.setState({
            favourites: this.state.favourites.filter(
                user => user.id !== this.state.finalUser.id
            )
        }, () => {
            localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
        });
    }

    render() {
        const isFavouriteUser = () => {
            let array = this.state.favourites.filter((favUser) => {
                return favUser.id === this.state.finalUser.id
            })
            return array.length > 0
        }

        return (
            <div>
                {this.state.finalUser ? <div>
                        <ul>
                            <img src={this.state.finalUser.avatar}/><br/>
                            <strong>ID: </strong>{this.state.finalUser.id}<br/>
                            <strong>Full Name: </strong>{this.state.finalUser.fullname}<br/>
                            <strong>Email: </strong>{this.state.finalUser.email}<br/>
                            <strong>City: </strong>{this.state.finalUser.city}<br/>
                            <strong>Gender: </strong>{this.state.finalUser.gender}<br/>
                        </ul>
                        {isFavouriteUser() ? <button onClick={this.handleDeleteFavUser}> Usuń z Ulubionych </button> :
                            <button onClick={this.handleAddFavUser}> Dodaj do ulubionych</button>}

                    </div>
                    : 'Ładowanie'}
            </div>
        )
    }
}

export default FinalResult
