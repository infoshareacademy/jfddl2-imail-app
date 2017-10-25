import React from 'react'
import {auth, storage} from '../../firebase'
import {
    Button,
    ControlLabel,
    FormControl,
    FormGroup,
    Grid,
    Row,
    Col,
    ButtonGroup
} from 'react-bootstrap'
import UploadProfilePhoto from "../UploadProfilePhoto/UploadprofilePhoto";

class UserForm extends React.Component {
    state = {
        displayName: this.props.user.displayName,
        email: this.props.user.email,
        password: '',
        photoURL: this.props.user.photoURL,
    }

    handleSave = (event) => {
        event.preventDefault()
        // this.setState({
        //     displayName: this.props.user.displayName,
        //     email: this.props.user.email,
        //     password: this.props.user.password,
        //     photoURL: this.props.user.photoURL
        // })
        console.log(this.state)

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

    // handlePhotoChange = (event) => {
    //     this.setState({
    //         photoURL: event.target.value
    //     })
    // }

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

    render() {
        const user = auth().currentUser;
        return (<div style={{
                border: "1px solid lightgrey",
                // width: 440,
                borderRadius: 20,
                padding: 15,
                boxShadow: "0px 0px 10px lightgrey"
            }}><h2>Mój Profil</h2>
                <br/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                            <img className= {"center-block"} style={{
                                maxWidth: 200,
                                border: "5px solid white",
                                borderRadius: 20,
                                boxShadow: "0px 0px 15px lightgrey"
                            }} src={this.state.photoURL}/>


                            {/*<FormGroup controlId={'formControlsAvatar'}>*/}
                            {/*<ControlLabel>{'Plik:'}</ControlLabel>*/}

                            {/*<FormControl type={'File'}*/}
                            {/*onChange={this.handlePhotoChange} />*/}
                            {/*</FormGroup><br/>*/}
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
                                float: "right" }}>

                                <UploadProfilePhoto callback={this.handleUploadedPhoto}/>

                                </div>
                                <div >

                                <Button style={{height: 52}} bsStyle={"primary"} type="submit">
                                    Zapisz zmiany
                                </Button>

                                </div>
                            </form>
                        </Col>
                    </Row>
                </Grid>

                <br/>
            </div>
        )
    }
}


export default UserForm