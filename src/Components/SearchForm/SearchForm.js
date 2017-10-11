import React from 'react'

import {
    InputGroup,
    FormControl,
    Glyphicon,
    Button
} from 'react-bootstrap'

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
    render() {
        return (
            <form>
                <InputGroup>
                    <FormControl
                        onChange={this.props.handleChange}
                        value={this.props.searchPhrase}
                        type="text"
                    />
                    <InputGroup.Button>
                        <Button>
                            <Glyphicon glyph="search"/> Search
                        </Button>
                    </InputGroup.Button>
                </InputGroup>
            </form>
        )
    }
}

export default SearchForm
