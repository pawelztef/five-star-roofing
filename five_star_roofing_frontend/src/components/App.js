import React from 'react'
import '../assets/sass/main.sass'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup, } from 'react-transition-group'
import NavigationBar from './NavigationBar'
import MobileNav from './MobileNav'
import Footer from './Footer'
import EmptySpace from './EmptySpace'
import ScrollToTop from './ScrollToTop'

import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import GalleryPage from './GalleryPage'
import ContactPage from './ContactPage'


class App extends React.Component {

  state = {
    mobileMenuOpen: false
  }
  mobileMenuToggleHandler = () => {
    this.setState((prevState) => {
      console.log('App.mobileMenuToggleHandler prevState', prevState)
      return { mobileMenuOpen: !prevState.mobileMenuOpen }
    })
  }

  render() {
    return (
      <div className="five-star-roofing-app">
        <div className="pz-responsivnes-indicator"></div>

        <Router>
          <ScrollToTop />
          <div className="pz-body-wrapper">

            <NavigationBar mobileMenuToggleHandler={this.mobileMenuToggleHandler} />

            <MobileNav show={this.state.mobileMenuOpen}
              click={this.mobileMenuToggleHandler} />

            <div className="pz-page-wrapper">

              <Route render={({location}) => (

                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={350}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact path="/">
                        <HomePage />
                      </Route>
                      <Route exact path="/about">
                        <AboutPage />
                      </Route>
                      <Route exact path="/services">
                        <ServicesPage />
                      </Route>
                      <Route exact path="/gallery">
                        <GalleryPage />
                      </Route>
                      <Route exact path="/contact">
                        <ContactPage />
                      </Route>
                    </Switch>

                  </CSSTransition>
                </TransitionGroup>

              )} />

          <Footer />
          </div>

        </div>
      </Router>

    </div>
    )
  }
}

export default App
