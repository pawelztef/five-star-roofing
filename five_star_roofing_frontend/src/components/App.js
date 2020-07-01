import React from 'react'
import '../assets/sass/main.sass'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const HomePage = () => <h2>HomePage</h2>
const AboutPage = () => <h2>AboutPage</h2>
const ServicesPage= () => <h2>ServicesPage</h2>
const GalleryPage = () => <h2>GalleryPage</h2>
const ContactPage = () => <h2>ContactPage</h2>


class App extends React.Component {

  render() {
    return (
      <div className="five-star-roofing-app">
        <div className="pz-responsivnes-indicator"></div>
      </div>
    )
  }

}

export default App
