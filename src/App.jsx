import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Navigation from './components/navigation';
import Home from './components/home';
import About from './components/about';
import Trip from './components/trip';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';

// SCSS
import './scss/common.scss';

// Images
import join from './images/slide1.jpg';


// Style
var bgFix = {
  backgroundImage: 'url(' + join + ')',
};

function App() {
  return (
    <Router>  
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/trip" component={Trip} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <div className="join-with-us d-flex align-items-center" style={bgFix}>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center text-center">
              <div className="col-sm-12 col-md-8">
                <h1>Join and Trip With Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ut, doloremque quo molestiae nesciunt officiis veniam, beatae dignissimos!</p>
                <a href="">GET IN TOUCH</a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
