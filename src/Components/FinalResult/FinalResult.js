import React from 'react'
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap'

import {connect} from 'react-redux'

class FinalResult extends React.Component {
    state = {
        users: [],
        finalUser: null,
        addedUsers: JSON.parse(localStorage.getItem('addedUsers')) || [],
        favourites: JSON.parse(localStorage.getItem('favourites')) || [],

    }
    handleSave = (event) => {
        event.preventDefault()
        this.setState({
            fullname: this.props.finalUser.fullname,
            email: this.props.finalUser.email,
            city: this.props.finalUser.city,
            id: this.props.finalUser.id,
            gender: this.props.finalUser.gender,

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
        const finalUser = Object.entries(this.props.users).filter((user) => {
            console.log( user[1].id, parseInt(this.props.match.params.id), user[1].id === parseInt(this.props.match.params.id))
            return user[1].id === parseInt(this.props.match.params.id)
        })[0]


        const isFavouriteUser = () => {
            let array = Object.entries(this.state.favourites).filter((favUser) => {
                return favUser.id === finalUser[1].id
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
                {finalUser ?
                    <form style={{width: 400}} onSubmit={this.handleSave}>
                        <img src={finalUser[1].avatar}/>

                        <FormGroup controlId={'formControlsText'}>
                            <ControlLabel>{'ID'}</ControlLabel>
                            <FormControl type={'text'} value={finalUser[1].id}/>
                        </FormGroup>

                        <FormGroup controlId={'formControlsText'}>
                            <ControlLabel>{'Imię i Nazwisko'}</ControlLabel>
                            <FormControl type={'text'} value={finalUser[1].fullname}/>
                        </FormGroup>
                        <FormGroup controlId={'formControlsEmail'}>
                            <ControlLabel>{'Email'}</ControlLabel>
                            <FormControl type={'email'} value={finalUser[1].email}/>
                        </FormGroup>
                        <FormGroup controlId={'formControlsCity'}>
                            <ControlLabel>{'Miasto'}</ControlLabel>
                            <FormControl type={'text'} value={finalUser[1].city}/>
                        </FormGroup>
                        <FormGroup controlId={'formControlsGender'}>
                            <ControlLabel>{'Płeć'}</ControlLabel>
                            <FormControl type={'text'} value={finalUser[1].gender}/>
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

const mapStateToProps = (state) => ({
    users: state.contacts.contactsList
})

export default connect(
    mapStateToProps
)(FinalResult)
