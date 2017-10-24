    import React from 'react'
import {
    ToggleButtonGroup,
    DropdownButton,
    MenuItem,
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

import {database} from '../../firebase'

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
        gender: false,
        addGroup: ''
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
            <div style={{
                border: "1px solid lightgrey",
                borderRadius: 20,
                padding: 15,
                boxShadow: "0px 0px 10px lightgrey"
            }}>
                <h2>Wyszukaj</h2>
                <br/>
                <form>
                    <InputGroup>
                        <FormControl placeholder="Wyszukaj pozycję..." onChange={this.searchHandler} value={this.state.searchInput}/>
                        <InputGroup.Button>
                            <Button bsStyle="primary">
                                <Glyphicon glyph="search"/> Wyszukaj
                            </Button><p style={{width:160}}></p>
                        </InputGroup.Button>

                        <ButtonToolbar bsStyle="primary">
                            <ToggleButtonGroup onChange={this.genderHandler} type="radio" name="options"
                                               defaultValue={false}>
                                <ToggleButton bsStyle="warning" value={false}>
                                    Wszyscy
                                </ToggleButton>
                                <ToggleButton bsStyle="warning" value={'kobieta'}>Kobiety</ToggleButton>

                                <ToggleButton bsStyle="warning" value={'meżczyzna'}>Mężczyźni</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </InputGroup>
                    <br/>

                </form>
                <br/>

                {
                    this.props.contacts !== null ?
                        <Table  striped bordered condensed hover style={{
                            marginTop: 20, color: "black"
                        }}>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Imie i nazwisko</th>
                                <th>Adres e-mail</th>
                                <th>Miasto</th>
                                <th>Płeć</th>
                                {/*<th>Zdjęcie</th>*/}
                                <th>Grupa</th>
                                <th>Dodaj grupę</th>
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
                                    ({id, fullname, city, gender, email, avatar, group}, index) => (
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
                                                {group}
                                            </td>
                                            <td>
                                                <DropdownButton bsStyle="primary" title="Dodaj do grupy" id="bg-vertical-dropdown-1">
                                                    <MenuItem eventKey="1">Nazwa grupy 1</MenuItem>
                                                    <MenuItem eventKey="2">Nazwa grupy 2</MenuItem>
                                                </DropdownButton>
                                            </td>
                                            <td>
                                                <Button><Link to={'/final-results/' + id}>Zobacz</Link></Button>
                                            </td>
                                            <td>
                                                <Button><Link to={'/Newsletter/'}>Wyślij e-mail</Link></Button>
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
