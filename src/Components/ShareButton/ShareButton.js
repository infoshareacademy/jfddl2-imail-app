import React, {Component} from 'react'
import {
  Row, Col
} from 'react-bootstrap'
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
} = ShareButtons;




const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

class ShareButton extends Component {
  render() {
    const shareUrl = 'http://app.imail.jfddl2.is-academy.pl';
    const title = 'InstantMail App';

    return (
        <div className="Demo__container">

            <Row>
              <Col xs={4}>
                <div className="Demo__some-network">
                  <FacebookShareButton
                      url={shareUrl}
                      quote={title}
                      className="Demo__some-network__share-button">
                    <FacebookIcon
                        size={30}
                        round/>
                  </FacebookShareButton>

                </div>
              </Col>
              <Col xs={4}>
                <div className="Demo__some-network">
                  <TwitterShareButton
                      url={shareUrl}
                      title={title}
                      className="Demo__some-network__share-button">
                    <TwitterIcon
                        size={30}
                        round/>
                  </TwitterShareButton>
                </div>
              </Col>
              <Col xs={4}>
                <div className="Demo__some-network">
                </div>
              </Col>
            </Row>
        </div>
    );
  }
}

export default ShareButton;