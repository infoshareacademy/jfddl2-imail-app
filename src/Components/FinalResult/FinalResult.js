import React from 'react'
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

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

  handleSave = (event) => {
    event.preventDefault()
    this.setState({
      fullname: this.props.finalUser.fullname,
      email: this.props.finalUser.email,
      city: this.props.finalUser.city,
      id: this.props.finalUser.id,
      gender: this.props.finalUser.gender
    })
  }

  handleAddFavUser = (event) => {
    event.preventDefault();
    this.setState({
      favourites: this.state.favourites.concat(this.state.finalUser)
    }, () => {
      localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
    });
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

  render() {
    const isFavouriteUser = () => {
      let array = this.state.favourites.filter((favUser) => {
        return favUser.id === this.state.finalUser.id
      })
      return array.length > 0
    }

    return (

        <div style={{
          border: "1px solid lightgrey",
          width: 440,
          borderRadius: 20,
          padding: 15,
          boxShadow: "0px 0px 10px lightgrey"
        }}><h2>Szczegóły Kontaktu</h2><br/>
          {this.state.finalUser ?
              <form style={{width: 400}} onSubmit={this.handleSave}>
                <img src={this.state.finalUser.avatar}/>

                <FormGroup controlId={'formControlsText'}>
                  <ControlLabel>{'ID'}</ControlLabel>
                  <FormControl type={'text'} value={this.state.finalUser.id}/>
                </FormGroup>

                <FormGroup controlId={'formControlsText'}>
                  <ControlLabel>{'Imię i Nazwisko'}</ControlLabel>
                  <FormControl type={'text'} value={this.state.finalUser.fullname}/>
                </FormGroup>
                <FormGroup controlId={'formControlsEmail'}>
                  <ControlLabel>{'Email'}</ControlLabel>
                  <FormControl type={'email'} value={this.state.finalUser.email}/>
                </FormGroup>
                <FormGroup controlId={'formControlsCity'}>
                  <ControlLabel>{'Miasto'}</ControlLabel>
                  <FormControl type={'text'} value={this.state.finalUser.city}/>
                </FormGroup>
                <FormGroup controlId={'formControlsGender'}>
                  <ControlLabel>{'Płeć'}</ControlLabel>
                  <FormControl type={'text'} value={this.state.finalUser.gender}/>
                </FormGroup>

                {isFavouriteUser() ?
                    <Button bsStyle={"danger"} style={{width: 400}} onClick={this.handleDeleteFavUser}> Usuń z
                      Ulubionych </Button> :
                    <Button bsStyle={"primary"} style={{width: 400}} onClick={this.handleAddFavUser}> Dodaj do
                      ulubionych</Button>}


              </form>
              : 'Ładowanie'}

        </div>

    )
  }
}

export default FinalResult
