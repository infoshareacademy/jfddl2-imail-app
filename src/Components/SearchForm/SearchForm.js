import React from 'react'
import {
    ToggleButtonGroup,
    ToggleButton,
    Table,
    InputGroup,
    FormControl,
    Glyphicon,
    ButtonToolbar,
    Button
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import { database } from '../../firebase'

const filters = {
    gender_male: gender => gender.male === 'Mężczyzna',
    gender_female: gender => gender.female === 'Kobieta'
}

const filterGroups = [
    {
        label: 'Mężczyzna',
        name: 'gender_male'
    },

    {
        label: 'Kobieta',
        name: 'gender_female'
    }
]

class SearchForm extends React.Component {

    state = {
        users: [],
        fetching: false,
        error: null,
        addedUsers: JSON.parse(localStorage.getItem('addedUsers')) || [],
        searchInput: '',
        gender: false
    }

    searchHandler = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    genderHandler = (value) => {
        console.log(value)
        this.setState({
            gender: value
        })
    }

    mapStateToProps = props => (
        <div>
            <ul>
                {
                    props.messages && Object.entries(props.messages).reverse().map(
                        ([key, value]) => (
                            <li key={key}>
                                <p>{value.content}</p>
                                <p><strong>{value.author}</strong></p>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )


    render() {
        return (
            <div>
                <h1>Wyszukaj</h1>
                <form>
                    <InputGroup>
                        <FormControl onChange={this.searchHandler} value={this.state.searchInput}/>
                        <InputGroup.Button>
                            <Button>
                                <Glyphicon glyph="search"/> Wyszukaj
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>

                    <ButtonToolbar>
                        <ToggleButtonGroup onChange={this.genderHandler} type="radio" name="options"
                                           defaultValue={false}>
                            <ToggleButton value={false}>
                                Wszyscy
                            </ToggleButton>
                            <ToggleButton value={'kobieta'}>Kobiety</ToggleButton>

                            <ToggleButton value={'meżczyzna'}>Mężczyźni</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </form>


                {
                    this.props.contacts !== null ?
                        <Table striped bordered condensed hover style={{
                            marginTop: 20
                        }}>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Imie i nazwisko</th>
                                <th>Adres e-mail</th>
                                <th>Miasto</th>
                                <th>Płeć</th>
                                {/*<th>Zdjęcie</th>*/}
                                <th>Szczegóły</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.contacts.filter((user) => {
                                    return this.state.gender ? user.gender === this.state.gender : true
                                }).filter((user) => {
                                    return user.fullname.includes(this.state.searchInput)
                                        || user.email.includes(this.state.searchInput)
                                        || user.city.includes(this.state.searchInput)
                                }).map(
                                    ({id, fullname, city, gender, email, avatar}, index) => (
                                        <tr key={id}>
                                            <td>
                                                {id}
                                            </td>
                                            <td>
                                                {fullname}
                                            </td>
                                            <td>
                                                {email}
                                            </td>
                                            <td>
                                                {city}
                                            </td>
                                            <td>
                                                {gender}
                                            </td>
                                            <td>
                                                <Link to={'/final-results/' + id}>Zobacz</Link>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>

                        </Table> :
                        <p>Ładowanie</p>
                }

            </div>
        )
    }


}

    const mapStateToProps = state => ({
    contacts: state.contacts.contactsList
})

export default connect(
    mapStateToProps
)(SearchForm)
