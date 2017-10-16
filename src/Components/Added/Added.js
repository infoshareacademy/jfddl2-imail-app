import React from 'react'
import {Table, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Added extends React.Component {

    state = {
      favourites: JSON.parse(localStorage.getItem('favourites')) || []
    }

    componentDidMount() {
        this.setState({
            fetching: true
        })
    }

        render()
        {
            const favourites = this.state.favourites
            return (
                <div>
                    <h1>Ulubione</h1>
                    {
                      favourites !== null ?
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
                                    <th>Zdjęcie</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                  favourites && favourites.map(
                                        ({ id, fullname, city, gender,email,avatar }, index, allGroups) => (
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
                                                    <img src={avatar}/>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                                </tbody>
                            </Table>
                            : 'Brak danych'
                    }
                </div>
            )
        }
}

export default Added
