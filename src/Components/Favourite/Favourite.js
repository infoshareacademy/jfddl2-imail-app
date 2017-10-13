import React from 'react'

class Favourite extends React.Component {

  state = {
    favourites: JSON.parse(localStorage.getItem('favourites')) || [],
    filteredUsers: []
  }

  componentDidMount() {
    fetch(
        `${process.env.PUBLIC_URL}/data/database.json` // template string usage
    ).then(
        response => response.json()
    ).then((users) => {
          let filteredUsers = users.filter((user) => {
            return this.state.favourites.includes(parseInt(user.uid))
          })
          this.setState({
            filteredUsers: filteredUsers
          })
        }
    )
  }

  render() {
    return (
        this.state.filteredUsers.map((user, index) => {
          return <li key={index}>{user.fullname}</li>
        })
    )
  }


}
export default Favourite