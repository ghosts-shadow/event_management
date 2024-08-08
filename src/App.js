import { useState } from 'react';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body> 
        <h1>CITISCAPES EVENTS</h1>
        <Carousel activeIndex={index} onSelect={handleSelect} className='mySlidesborder'>          
          <Carousel.Item interval={2000}>
            <img class="mySlides" src="https://e1.pxfuel.com/desktop-wallpaper/844/928/desktop-wallpaper-ferrari-world-abu-dhabi.jpg"></img>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img class="mySlides" src="https://www.citiscapegroup.com/wp-content/uploads/2021/05/shutterstock_191551838-1.jpeg"></img>
          </Carousel.Item>
        </Carousel>
        <Container>
          <Row xs={2} md={4} lg={6}>
            <Col><img class="hi" src="https://www.citiscapegroup.com/wp-content/uploads/2023/12/SAfety-.jpg"></img></Col>
            <Col>2 of 2</Col>
          </Row>

      </Container>
      </body>
    </div>
  );
}


export default App;
