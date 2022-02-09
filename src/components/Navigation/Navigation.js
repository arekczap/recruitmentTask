import React, { useState, useEffect } from 'react'
import './Navigation.scss'

import pageLogo from '../../assets/logo.png'
import fbIcon from '../../assets/fbIcon.png'
import igIcon from '../../assets/igIcon.png'

const navigationMenuItems = [
  {
    title: 'Poznaj przestrzeń',
    id: 'about',
    className: 'navigation__navContainer__link',
  },
  {
    title: 'Oferta',
    id: 'meetSpace',
    className: 'navigation__navContainer__link',
  },
  {
    title: 'Lokalizacja',
    id: 'offer',
    className: 'navigation__navContainer__link',
  },
  {
    title: 'Własne biuro',
    id: 'ownOffice',
    className: 'navigation__navContainer__link',
  },
  {
    title: 'Kontakt',
    id: 'footer',
    className: 'navigation__navContainer__link',
  },
]

const Navigation = () => {
  const [hamburger, setHamburger] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  const toggleHamburger = () => {
    setHamburger(prev => !prev)
  }

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    return (() => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    })
  }, [windowWidth])

  function scrollToSection(id) {
    const element = document.getElementById(`${id}`)
    element.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className={'navigation'}>
      <div className={'navigation__navContainer'}>
        <h1 className={'navigation__navContainer__logo'}>
          <img style={{ display: 'block' }} src={pageLogo}></img>
        </h1>
        <div
          style={{ top: `${hamburger ? '0' : '-110%'}` }}
          className={'navigation__navContainer__hamburgerCurtain'}
        />
        <ul
          style={{ top: `${hamburger ? '0' : '-110%'}` }}
          className={'navigation__navContainer__list'}
        >
          {navigationMenuItems.map(item => (
            <li className={'navigation__navContainer__listItem'} key={item.title}>
              <a onClick={() => { scrollToSection(item.id) }} className={item.className}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          position: `${hamburger ? 'fixed' : 'absolute'}`,
          right: `${hamburger ? '7.4rem' : '5rem'}`,
        }}
        className={'navigation__hamburger'}
      >
        <input
          onClick={toggleHamburger} type={'checkbox'} defaultChecked={hamburger}
          className={'navigation__hamburger__toggler'}
        />
        <div className={'navigation__hamburger__content'}><div></div></div>
      </div>
      <div className={'navigation__mediaContainer'}>
        <img src={fbIcon} className={'navigation__mediaContainer__iconFb'} />
        <img src={igIcon} className={'navigation__mediaContainer__iconIg'} />
      </div>
    </nav >


  )
}

export default Navigation
