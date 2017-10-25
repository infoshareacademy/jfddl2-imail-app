import React, { Component } from 'react';

import { storage } from '../../firebase'
import { Button,} from 'react-bootstrap'
class UploadProfilePhoto extends Component {

    state = {
        file: null,
        downloadURL: undefined,
        progress: undefined
    }

    handleFileChange = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    }

    handleFileUpload = () => {
        this.setState({
            downloadURL: undefined,
            progress: 1
        })

        let uploadTask = storage.ref(`profile-photo-${Date.now()}`).put(this.state.file);

        uploadTask.on('state_changed', (snapshot) => {
            var progress =
                (snapshot.bytesTransferred /
                    snapshot.totalBytes) * 100;
            this.setState({
                progress
            })

        }, (error) => {

        }, () => {
            this.props.callback(uploadTask.snapshot.downloadURL)
            this.setState({
                downloadURL: uploadTask.snapshot.downloadURL
            })
        });
    }

    render() {
        return <div className="App">
            <input type="file" onChange={this.handleFileChange} />
            <Button bsStyle={"warning"} onClick={this.handleFileUpload}>Upload</Button>
            {/*{this.state.progress ? <progress value={this.state.progress} max="100"></progress> : null}*/}
        </div>
    }
}

export default UploadProfilePhoto;