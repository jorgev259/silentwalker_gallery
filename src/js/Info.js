
import React from 'react'
import { Col, Row, Container, Button } from 'reactstrap'
import Banner from './Banner'
export default class Info extends React.Component {
  render () {
    return (
      <Container className='flex-fill content' fluid>
        <div className='box'>
          <Row>
            <Col md='1' />

            <div className='d-block mx-auto d-md-none' style={{ marginTop: '25px' }}>
              <Banner />
            </div>

            <Col md='6'>
              <div style={{ color: '#bcb9ba', paddingTop: '45px' }}>
                <div>
                  Hey! SiLeNtWaLkEr here <br />
                  <br />I’m Vasco, a Graphic Designer from Porto, Portugal.
                  <br />I started doing these wallpapers back in the end of 2016. In 2017 I’ve completed the D1 collection (268 walls) and started working on the (huge) D2 collection (432 walls for now).
                  <br />I’m now “only” 100 wallpapers away to end the collection.
                  <br />
                </div>
                <br />
                <div>
                  These are all made in Illustrator / Photoshop, I make vectors for all the illustrations as you can see in the video that won the MOTW thanks to all of you.
                </div>
                <br />
                <Button outline color='primary' className='motw' href='https://www.youtube.com/watch?v=L_lWkV74vlQ'>MOTW</Button>
                <br />
                <br />
                <div>
                  <span>A few notes:</span>
                  <ul style={{ marginTop: '5px' }}>
                    <li>
                    D2 Mobile wallpapers have a dimension of 1440x2560 and Desktop 1920x1080. They are all saved with a resolution of 150 dpi so you can zoom and try to fit it into the dimension you prefer.
                    </li>

                    <li>
                    D1 mobile walls have the same dimension as D2 but Desktop are in 1280x800 (I will put them at least in 1920x1080 as soon as I end the D2 collection.
                    </li>
                  </ul>
                </div>
                <div style={{ color: '#f3eb2b' }}>
                  <div>
                    Guardians were having trouble downloading the wallpapers from the google drive so <a href='https://twitter.com/ChitoWarlock'>@ChitoWarlock</a> helped me build this website to help you view, select or download all of them much more easily.
                  </div>
                  <br />
                  <div>
                    This website is hosted at a server that have costs so if you like to help maintaning this website online I kindly ask you to donate and help me with the costs.
                  </div>
                  <br />
                  <Button color='primary' className='donate' href='https://paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WH26ZAAT9WRYU'>DONATE</Button>
                </div>
              </div>
            </Col>
            <Col md='4' className='image-container d-none d-md-flex'>
              <div style={{
                position: 'fixed',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
              >
                <Banner />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

    )
  }
}
