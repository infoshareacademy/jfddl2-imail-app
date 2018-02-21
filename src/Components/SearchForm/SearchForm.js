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

import {deleteContact, toggleGroupToUser} from '../../state/contacts'

import {database} from '../../firebase'
import Newsletter from "../Newsletter/Newsletter";

const filters = {
    gender_male: gender => gender.male === 'mężczyzna',
    gender_female: gender => gender.female === 'kobieta'
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
        groups: ''
    }


    searchHandler = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    genderHandler = (value) => {
        this.setState({
            gender: value
        })
    }

    // mapStateToProps = props => (
    //     <div>
    //         <ul>
    //             {
    //                 props.messages && Object.entries(props.messages).reverse().map(
    //                     ([key, value]) => (
    //                         <li key={key}>
    //                             <p>{value.content}</p>
    //                             <p><strong>{value.author}</strong></p>
    //                         </li>
    //                     )
    //                 )
    //             }
    //         </ul>
    //     </div>
    // )


    render() {
        return (
            <div style={{
                border: "1px solid lightgrey",
                borderRadius: 20,
                padding: 15,
                boxShadow: "0px 0px 10px lightgrey"
            }}>
                <h2>Wyszukaj kontakt</h2>
                <br/>
                <form>
                    <InputGroup>
                        <FormControl placeholder="Wpisz kontakt..." onChange={this.searchHandler}
                                     value={this.state.searchInput}/>
                        <InputGroup.Button>
                            <Button bsStyle="primary">
                                <Glyphicon glyph="search"/> Wyszukaj
                            </Button><p style={{width: 160}}></p>
                        </InputGroup.Button>

                        <ButtonToolbar bsStyle="primary">
                            <ToggleButtonGroup onChange={this.genderHandler} type="radio" name="options"
                                               defaultValue={false}>
                                <ToggleButton bsStyle="warning" value={false}>
                                    Wszyscy
                                </ToggleButton>
                                <ToggleButton bsStyle="warning" value={'kobieta'}>Kobiety</ToggleButton>

                                <ToggleButton bsStyle="warning" value={'mężczyzna'}>Mężczyźni</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </InputGroup>
                    <br/>

                </form>
                <br/>

                {
                    this.props.contacts !== null ?
                        <Table striped bordered condensed hover style={{
                            marginTop: 20, color: "black"
                        }}>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Imie i nazwisko</th>
                                <th>Adres e-mail</th>
                                <th>Miasto</th>
                                <th>Płeć</th>
                                <th>Dodaj grupę</th>
                                <th>Szczegóły</th>
                                <th>Usuń</th>
                                <th>Wyślij e-mail</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.entries(this.props.contacts).filter((user) => {
                                    return this.state.gender ? user[1].gender === this.state.gender : true
                                }).filter((user) => {
                                    return user[1].fullname.includes(this.state.searchInput)
                                        || user[1].email.includes(this.state.searchInput)
                                        || user[1].city.includes(this.state.searchInput)
                                }).map((id ,index) => (
                                        <tr key={id}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                {id[1].fullname}
                                            </td>
                                            <td>
                                                {id[1].email}
                                            </td>
                                            <td>
                                                {id[1].city}
                                            </td>
                                            <td>
                                                {id[1].gender}
                                            </td>
                                            <td>
                                                <DropdownButton onSelect={(event) => {
                                                    this.props.toggleGroup(id[0], event)
                                                }} bsStyle="primary" title="Wybierz" id="bg-vertical-dropdown-1">
                                                    {Object.entries(this.props.groups).map((keyValueArr) => {
                                                        let groupId = keyValueArr[0]
                                                        let groupName = keyValueArr[1]
                                                        return <MenuItem
                                                            eventKey={groupId}
                                                        >
                                                            {id[1].groups && id[1].groups.includes(groupId) ? '✓ ' : ''}
                                                            {groupName}
                                                        </MenuItem>
                                                    })}
                                                </DropdownButton>
                                            </td>
                                            <td>
                                                <Button><Link to={'/final-results/' + id[1].id}>Zobacz</Link></Button>
                                            </td>

                                            <td><Button onClick={()=>this.props.deleteContact(id[1].id)} bsStyle="danger"><Glyphicon
                                                glyph="minus-sign"/> Usuń</Button>
                                            </td>

                                            <td>
                                                <Newsletter email={id[1].email}/>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>

                        </Table> :
                        <p>Wczytywanie bazy...</p>
                }

            </div>
        )
    }


}

const mapStateToProps = state => ({
    contacts: state.contacts.contactsList,
    groups: state.groups.groupsList
})

const mapDispatchToProps = dispatch => ({
    toggleGroup: (userId, groupId) => {dispatch(toggleGroupToUser(userId, groupId))},
    deleteContact: (userId) => dispatch(deleteContact(userId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)
