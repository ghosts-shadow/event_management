import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
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
      </body>
    </div>
  );
}

export default App;
