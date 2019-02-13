import React, { Component } from 'react';
import logo from './images/hero.jpg';
import button1 from './images/hero1.jpg';
import button2 from './images/vt_fall.jpg';
import button3 from './images/button1.jpg';
import button2Overlay from './images/vt_outline.png';
import './styles/App.scss';
import { Container, Row, Figure } from 'react-bootstrap';
import ZoomButtonGroup from './components/ZoomButtonGroup';
import SandBox from './components/SandBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center">
            <h1 className="d-block mt-3 mt-md-5 text-center">Andrew Henderson</h1>
          </Row>
          <Row className="justify-content-center">
            <code className="d-block mb-3 mb-md-5 text-center">Developer • Dad • Enthusiast</code>
          </Row>
          <Row>
            <Figure className="hero d-block mx-auto">
              <Figure.Image
                src={logo}
              />
              <Figure.Caption
                className="text-center mt-1"
              >
                That's me, on the bottom
              </Figure.Caption>
            </Figure>
          </Row>
          <ZoomButtonGroup
            buttonContent={
              [
                {
                  image: button1,
                  title: "Github",
                  text: "Check out the source code for this site and a bit of what I have been working on lately",
                  button: "Go!",
                  buttonLink: "https://github.com/mrandrewian?tab=repositories",
                  buttonTarget: "_blank"
                }, {
                  image: button2,
                  overlayImage: button2Overlay
                }, {
                  image: button3,
                  title: "LinkedIn",
                  text: "Networking, Yay!",
                  button: "Go!",
                  buttonLink: "https://www.linkedin.com/in/hendersonandrew/",
                  buttonTarget: "_blank"
                }
              ]
            }
          />
          <SandBox/>
        </Container>
      </div>
    );
  }
}

export default App;