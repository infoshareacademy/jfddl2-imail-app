import React from 'react'
import {auth, storage, database} from '../../firebase'
import {
    Button,
    ControlLabel,
    FormControl,
    FormGroup,
    Grid,
    Row,
    Col,
    Checkbox
} from 'react-bootstrap'
import UploadProfilePhoto from "../UploadProfilePhoto/UploadprofilePhoto";


class UserForm extends React.Component {
    state = {
        displayName: this.props.user.displayName,
        email: this.props.user.email,
        password: '',
        photoURL: this.props.user.photoURL,
        displayNip: '',
        displayCompanyName: '',
        displayAddress: '',
        displayNameFV: '',
        onlyRecipe: false
    }

    componentWillMount(){
        let id = this.props.user.uid
        database().ref(`user/${id}`).once('value')
            .then((snapshot)=>{
            this.setState({
                displayNip: snapshot.val().displayNip,
                displayCompanyName: snapshot.val().displayCompanyName,
                displayAddress: snapshot.val().displayAddress,
                displayNameFV: snapshot.val().displayName
            })
            })
    }

    handleSave = (event) => {
        event.preventDefault()

        this.props.user.updateProfile({
            displayName: this.state.displayName,
        }).then(() => {
            console.log('user name updated')
        })

        this.props.user.updateEmail(
            this.state.email
        ).then(() => {
            console.log('user mail updated')
        }).catch((error) => {
            if (error.code === "auth/requires-recent-login") alert('Wymaga niedawnego zalogowania!')
        })

        this.props.user.updatePassword(
            this.state.password
        ).then(() => {
            console.log('user password updated')
        })
    }

    handleSaveFV = (event) => {
        event.preventDefault()

        let id = this.props.user.uid


        database().ref(`user/${id}`).set({
            displayName: this.state.displayNameFV,
            displayNip: this.state.displayNip,
            displayCompanyName: this.state.displayCompanyName,
            displayAddress: this.state.displayAddress
        }).then(() => {
            console.log('user name updated')
        })
    }


    handleNameChange = (event) => {
        this.setState({
            displayName: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleUploadedPhoto = (photoURL) => {
        this.props.user.updateProfile({
            photoURL: photoURL
        }).then(() => {
            this.setState({
                photoURL: photoURL
            })
            console.log('user photo updated', photoURL)
        })
    }

    handleNameChangeFV = (event) => {
        this.setState({
            displayNameFV: event.target.value
        })
    }

    handleNip = (event) => {
        this.setState({
            displayNip: event.target.value
        })
    }

    handleCompanyName = (event) => {
        this.setState({
            displayCompanyName: event.target.value
        })
    }

    handleAddress = (event) => {
        this.setState({
            displayAddress: event.target.value
        })
    }




    render() {
        const user = auth().currentUser;
        return (
            <div>
                <div style={{
                    border: "1px solid lightgrey",
                    borderRadius: 20,
                    padding: 15,
                    boxShadow: "0px 0px 10px lightgrey"
                }}>
                    <h2>Mój Profil</h2>
                    <br/>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6} mdPush={6}>
                                <img className={"center-block"} style={{
                                    maxWidth: 200,
                                    border: "5px solid white",
                                    borderRadius: 20,
                                    boxShadow: "0px 0px 30px lightgrey"
                                }} src={this.state.photoURL}/>
                            </Col>

                            <Col md={6} mdPull={6}>
                                <form onSubmit={this.handleSave}>
                                    <FormGroup controlId={'formControlsText'}>
                                        <ControlLabel>{'Imię i Nazwisko:'}</ControlLabel>

                                        <FormControl type={'text'}
                                                     onChange={this.handleNameChange}
                                                     value={this.state.displayName}/>
                                    </FormGroup>

                                    <FormGroup controlId={'formControlsEmail'}>
                                        <ControlLabel>{'Email:'}</ControlLabel>

                                        <FormControl type={'email'}
                                                     onChange={this.handleEmailChange}
                                                     value={this.state.email}/>
                                    </FormGroup>

                                    <FormGroup controlId={'formControlsPassword'}>
                                        <ControlLabel>{'Hasło:'}</ControlLabel>
                                        <FormControl type={'Password'}
                                                     onChange={this.handlePasswordChange}
                                                     value={this.state.password}/>
                                    </FormGroup>
                                    <div style={{
                                        float: "right"
                                    }}>

                                        <UploadProfilePhoto callback={this.handleUploadedPhoto}/>

                                    </div>
                                    <div>

                                        <Button style={{height: 52}} bsStyle={"primary"} type="submit">
                                            Zapisz zmiany
                                        </Button>

                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Grid>
                    <br/>
                    <br/>
                </div>

                <br/>

                <div style={{
                    border: "1px solid lightgrey",
                    borderRadius: 20,
                    padding: 15,
                    boxShadow: "0px 0px 10px lightgrey"
                }}>

                    <h2>Dane do Faktury Vat</h2>
                    <br/>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={5}>
                                <form onSubmit={this.handleSaveFV}>
                                <FormGroup controlId={'formControlsText'}>
                                    <ControlLabel>{'Imię i Nazwisko:'}</ControlLabel>

                                    <FormControl type={'text'}
                                                 onChange={this.handleNameChangeFV}
                                                 value={this.state.displayNameFV}/>
                                </FormGroup>

                                <FormGroup controlId={'formControlsText'}>
                                    <ControlLabel>{'Nazwa firmy:'}</ControlLabel>

                                    <FormControl type={'text'}
                                                 onChange={this.handleCompanyName}
                                                 value={this.state.displayCompanyName}/>
                                </FormGroup>
                                    <Button bsStyle={"primary"} type="submit">
                                        Zapisz zmiany
                                    </Button>

                                </form>
                            </Col>
                            <Col md={5}>
                                <form onSubmit={this.handleSaveFV}>
                                    <FormGroup controlId={'formControlstText'}>
                                        <ControlLabel>{'NIP:'}</ControlLabel>
                                        <FormControl type={'text'}
                                                     onChange={this.handleNip}
                                                     value={this.state.displayNip}/>
                                    </FormGroup>

                                    <FormGroup controlId={'formControlsText'}>
                                        <ControlLabel>{'Adres:'}</ControlLabel>
                                        <FormControl type={'text'}
                                                     onChange={this.handleAddress}
                                                     value={this.state.displayAddress}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Checkbox onChange={(e) => {
                                            this.setState({onlyRecipe: e.target.checked})
                                        }}>
                                            Chcę Paragon!
                                        </Checkbox>
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>
                    </Grid>

                </div>

            </div>

        )
    }
}


export default UserForm