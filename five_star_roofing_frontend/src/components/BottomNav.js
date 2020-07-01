import React from 'react'
import Brand from './Brand'
import MainMenu from './MainMenu'
import BurgerButton from './BurgerButton'

class BottomNav extends React.Component {

  componentDidMount() {
    const nav = document.querySelector('.pz-nav__bottom-row')
    const topOfBottomNav = nav.offsetTop
    window.addEventListener('scroll', () => {
      if(window.scrollY >= topOfBottomNav) {
        nav.classList.add('pz-nav__fixed')
        document.body.style.paddingTop = (nav.offsetHeight - 5) + "px"
      } else {
        nav.classList.remove('pz-nav__fixed')
        document.body.style.paddingTop = 0
      }
    })
  }

  render(props){
    return(
      <nav className="pz-row pz-nav__bottom-row">
        <div className="pz-container">
          <div className="pz-nav_bottom-row_content">
            <MainMenu />
            <BurgerButton click={this.props.mobileMenuToggleHandler} />
          </div>
        </div>
      </nav>
    )
  }  
}

export default BottomNav