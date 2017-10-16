import React from 'react'

class FinalResult extends React.Component {
  state = {
    users: [],
    // saveUsers: JSON.parse(localStorage.getItem('addedUsers')) || [],
    finalUser: [],
    addedUsers: JSON.parse(localStorage.getItem('addedUsers')) || []
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
            return user.id == this.props.match.params.id
          })
          this.setState({users: users, finalUser: users[0]})
        }
    )
  }

  handleAddFavUser = (event) => {
    event.preventDefault();
    this.setState({
        addedUsers: this.state.addedUsers.concat(this.state.finalUser)
    }, () => {
      localStorage.setItem('addedUsers', JSON.stringify(this.state.addedUsers));
    });
  }

  handleDeleteFavUser = (event) => {
    event.preventDefault();
    this.setState({
      addedUsers: this.state.addedUsers.filter(
          user => user.id !== this.state.finalUser.id
      )
    }, () => {
      localStorage.setItem('addedUsers', JSON.stringify(this.state.addedUsers));
    });
  }

  render() {
    const isFavouriteUser = () => {
      let array = this.state.addedUsers.filter((favUser)=>{
        return favUser.id === this.state.finalUser.id
      })
      return array.length > 0
    }

    return (
        <div>
          {this.state.finalUser ? <div>
                <ul>
                  <li><img src={this.state.finalUser.avatar}/></li><br/>
                  <li>{this.state.finalUser.id}</li>
                  <li>{this.state.finalUser.fullname}</li>
                  <li>{this.state.finalUser.email}</li>
                  <li>{this.state.finalUser.city}</li>
                  <li>{this.state.finalUser.gender}</li>
                </ul>
            {isFavouriteUser() ? <button onClick={this.handleDeleteFavUser}> Usuń </button> : <button onClick={this.handleAddFavUser}> Dodaj </button>}

              </div>
              : 'Ładowanie'}
        </div>
    )
  }
}

export default FinalResult
