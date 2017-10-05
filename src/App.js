import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

// import MainMenu from './MainMenu' -TUTAJ WPISAĆ KOMPONENTY!


class App extends React.Component {
    render() {
        return (
            <Router>
                <Grid>
                    <MainMenu/>
                    <Route path="/tasker" component={Tasker}/>
                    <Route path="/students" component={Students}/>
                    <Route path="/groups" component={Groups}/>
                    <Route
                        path="/counter"
                        render={
                            props =>
                                <Counter {...props}
                                         title="Foo"
                                         delta={10}
                                         startFrom={0}
                                />
                        }/>
                </Grid>
            </Router>
        )
    }
}

export default App