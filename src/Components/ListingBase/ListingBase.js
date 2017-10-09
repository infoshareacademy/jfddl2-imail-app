import React from 'react'


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
                        groups.slice(0,15).map(
                        ({ id, avatar, fullname, email, gender, city}, index, allGroups) => (
                            <li key={id}> {++index} {fullname} {email} {gender} {city}<img src={avatar} /></li>
                        )
                        ) :
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

// sdfsdf