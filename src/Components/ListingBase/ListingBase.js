import React from 'react'
import { Table, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class ListingBase extends React.Component {

    state = {
        groups: null,
        fetching: false,
        error: null
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
            groups => this.setState({ groups, fetching: false })
        ).catch(
            error => this.setState({ error, fetching: false })
        )
    }

    render() {
        const { groups, error, fetching } = this.state

        return (
            <div>
                <h1>Baza</h1>
                {
                    groups !== null ?
                        <Table striped bordered condensed hover style={{
                            marginTop: 20
                        }}>
                            <thead>
                            <tr>
                                <th>Lp</th>
                                <th>Imie i nazwisko</th>
                                <th>Adres e-mail</th>
                                <th>Miasto</th>
                                <th>Płeć</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                groups && groups.map(
                                    ({ id, fullname, city, gender,email }, index, allGroups) => (
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
                                                <Link to={'/groups/' + id}>Wyświetl szczególy</Link>
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
                    groups !== null ?
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



export default ListingBase