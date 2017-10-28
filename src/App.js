import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import {
    Grid
} from 'react-bootstrap'
import { storage } from './firebase'

import MainView from './Components/MainView/MainView'
import Added from './Components/Added/Added'
import AddForm from './Components/AddForm/AddForm'
import FinalResult from './Components/FinalResult'
import Login from "./Components/Login/Login"
import Groups from "./Components/Groups/Groups"
import SearchForm from "./Components/SearchForm/SearchForm"
import Favourite from "./Components/Favourite/Favourite"
import ShareButton from "./Components/ShareButton/ShareButton"
import EditProfile from "./Components/EditProfile"
import MailingList from "./Components/MailingList"
import GroupList from "./Components/GroupList"


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
                    <Route path ="/final-results/:id" component ={FinalResult}/>
                    <Route path ="/Groups" component ={Groups}/>
                    <Route path ="/SearchForm" component ={SearchForm}/>
                    <Route path ="/Favourite" component ={Favourite}/>
                    <Route path ="/ShareButton" component ={ShareButton}/>
                    <Route path ="/EditProfile" component ={EditProfile}/>
                    <Route path ="/MailingList" component ={MailingList}/>
                    <Route path ="/GroupList/:id" component ={GroupList}/>
                </Grid>
            </Router>
        )
    }
}

export default App