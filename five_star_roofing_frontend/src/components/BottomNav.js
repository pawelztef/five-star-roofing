import React from 'react'
import Brand from './Brand'
import MainMenu from './MainMenu'
import BurgerButton from './BurgerButton'

class BottomNav extends React.Component {

  componentDidMount() {
    const nav = document.querySelector('.pz-nav__bottom-row')
    const topOfBottomNav = nav.offsetTop
    window.addEventListener('scroll', () => {
      if(window.scrollY >= topOfBottomNav+100) {
        nav.classList.add('pz-nav__fixed')
        document.body.style.paddingTop = (nav.offsetHeight - 10) + "px"
      } else {
        nav.classList.remove('pz-nav__fixed')
        document.body.style.paddingTop = 0
      }
    })
  }

  render(props){
    return(
      <nav className="pz-nav__bottom-row">
          <div className="pz-nav__bottom-row_content">
            <div className="pz-container">
              <MainMenu />
              <BurgerButton click={this.props.mobileMenuToggleHandler} />
            </div>
          </div>
      </nav>
    )
  }  
}

export default BottomNav
