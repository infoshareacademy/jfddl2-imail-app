import React from 'react'
import { Table, Button } from 'react-bootstrap'
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

  handleDeleteFavUser = (event) => {
    event.preventDefault();
    this.setState({
      favourites: this.state.favourites.filter(
          user => user.id !== parseInt(event.target.dataset.userId)
      )
    }, () => {
      localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
    });
  }

        render()
        {
            const favourites = this.state.favourites
            return (
                <div style={{border: "1px solid lightgrey",
                  width: 840,
                  borderRadius: 20,
                  padding: 15,
                  boxShadow: "0px 0px 10px lightgrey"}}>
                    <h2>Ulubione</h2>
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
                                    <th>Akcja</th>
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
                                                <td>
                                                    <Button bsStyle={"danger"}
                                                        data-user-id={id}
                                                        onClick={this.handleDeleteFavUser}
                                                    > Usuń z Ulubionych </Button></td>
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