import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import MainView from './Components/MainView/MainView'
import Added from './Components/Added/Added'
import AddForm from './Components/AddForm/AddForm'
import FinalResult from './Components/FinalResult'
import Login from "./Components/Login/Login";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Grid>
                    <MainView/>
                    <Route path ="/MainView" component ={MainView}/>
                    <Route path ="/Added" component ={Added}/>
                    <Route path ="/AddForm" component ={AddForm}/>
                    <Route path ="/Login" component ={Login}/>
                    <Route path ="/FinalResult" component ={FinalResult}/>
                </Grid>
            </Router>
        )
    }
}

export default App