import React from 'react'

class FinalResult extends React.Component {
  state = {
    users: [],
    saveUsers: JSON.parse(localStorage.getItem('addedUsers')) || [],
    finalUser: null
  }

  componentDidMount() {
    fetch(
        `${process.env.PUBLIC_URL}/database.json` // template string usage
    ).then(
        response => response.json()
    ).then(
        users => {
          users = users.concat(this.state.saveUsers)
          users = users.filter((user) => {
            return user.id == this.props.match.params.id
          })
          this.setState({users: users, finalUser: users[0]})
        }
    )
  }

  render() {
    console.log(this.state.finalUser)


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
              </div>
              : 'Ładowanie'}
        </div>
    )
  }
}

export default FinalResult