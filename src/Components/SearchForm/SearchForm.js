import React from 'react'
import {ToggleButtonGroup, ToggleButton, Table, InputGroup, FormControl,Glyphicon, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


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

    searchHandler = (event)=>{
        this.setState({
            searchInput: event.target.value
        })
    }

    genderHandler = (value)=>{
        console.log(value)
        this.setState({
            gender: value
        })
    }

    componentDidMount() {
        this.setState({
            fetching: true
        })

        fetch(
            `${process.env.PUBLIC_URL}/database.json` // template string usage
        ).then(
            response => response.json()
        ).then(
            users => this.setState({
                users: users.concat(this.state.addedUsers),
                fetching: false
            })
        ).catch(
            error => this.setState({error, fetching: false})
        )
    }


    render() {
        const {users, error, fetching} = this.state

        const filteredUsers = users.filter((user)=>{
          return this.state.gender ? user.gender === this.state.gender : true
        })

        console.log(filteredUsers)

        return (
            <div>
                <h1>Wyszukaj</h1>
                <form>
                    <InputGroup>
                        {/*<GroupSearchForm*/}
                            {/*searchPhrase={this.state.currentSearchPhrase}*/}
                            {/*handleChange={this.handleSearchPhraseChange }*/}
                        {/*/>*/}
                        <FormControl onChange={this.searchHandler} value={this.state.searchInput}/>
                        <InputGroup.Button>
                            <Button>
                                <Glyphicon glyph="search"/> Wyszukaj
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>

                    <ButtonToolbar>
                        <ToggleButtonGroup onChange={this.genderHandler} type="radio" name="options" defaultValue={false}>
                            <ToggleButton value={false}>
                                Wszyscy
                            </ToggleButton>
                            <ToggleButton value={'kobieta'}>Kobiety</ToggleButton>

                            <ToggleButton value={'meżczyzna'}>Mężczyźni</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </form>


                {
                    users !== null ?
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
                                filteredUsers.filter((user)=>{
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
                        <p>Brak wyników</p>
                }

                {
                    users !== null ?
                        null :
                        <p>Brak wyników</p>
                }

                {
                    fetching === false ?
                        null :
                        <p>Pobieranie bazy...</p>
                }

                {
                    error === null ?
                        null :
                        <p>{error.message}</p>
                }
            </div>
        )
    }


}

export default SearchForm
