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
import Login from "./Components/Login/Login"
import ListingBase from "./Components/ListingBase/ListingBase"
import SearchForm from "./Components/SearchForm/SearchForm"


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
                    <Route path ="/users/:id" component ={FinalResult}/>
                    <Route path ="/ListingBase" component ={ListingBase}/>
                    <Route path ="/SearchForm" component ={SearchForm}/>
                </Grid>
            </Router>
        )
    }
}
// userDisplay
export default App