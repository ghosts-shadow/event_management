import logo from './logo.svg';
import './App.css';
var slideIndex = 0;
        carousel();

        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > x.length) {slideIndex = 1}
          x[slideIndex-1].style.display = "block";
          setTimeout(carousel, 2000); // Change image every 2 seconds
        }
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body> 
        <h1>CITISCAPES EVENTS</h1>
        <img class="mySlides" src="https://e1.pxfuel.com/desktop-wallpaper/844/928/desktop-wallpaper-ferrari-world-abu-dhabi.jpg"></img>
        <img class="mySlides" src="https://www.citiscapegroup.com/wp-content/uploads/2021/05/shutterstock_191551838-1.jpeg"></img>
        <img class="mySlides" src="img_mountains.jpg"></img>
        <img class="mySlides" src="img_forest.jpg"></img>
        <button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
        <button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
        
      </body>
    </div>
  );
}

export default App;
