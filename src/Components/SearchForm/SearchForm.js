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

    state = {
        activeFilterNames: [],
        currentSearchPhrase: ''
    }

    handleSearchPhraseChange = event => {
        this.setState({
            currentSearchPhrase: event.target.value
        })
    }

    handleToggleFilterClick = event => {
        const filterName = event.target.dataset.filterName
        const { activeFilterNames } = this.state
        const filterNameExists = activeFilterNames.includes(filterName)

        this.setState({
            activeFilterNames:
                activeFilterNames.filter(
                    activeFilterName => {
                        const filterNamePrefix = filterName.split('_')[0]
                        const activeFilterNamePrefix = activeFilterName.split('_')[0]

                        return filterNamePrefix !== activeFilterNamePrefix
                    }
                ).concat(filterNameExists ? [] : [filterName])
        })
    }

    handleResetClick = () => {
        this.setState({
            activeFilterNames: []
        })
    }


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
