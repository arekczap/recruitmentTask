import React from 'react'
import './Navigation.scss'

import pageLogo from '../../assets/logo.png'
import fbIcon from '../../assets/fbIcon.png'
import igIcon from '../../assets/igIcon.png'

const navigationMenuItems = [
  {
    title: 'Poznaj przestrzeń',
    url: '#',
    className: 'navigation__link',
  },
  {
    title: 'Oferta',
    url: '#',
    className: 'navigation__link',
  },
  {
    title: 'Lokalizacja',
    url: '#',
    className: 'navigation__link',
  },
  {
    title: 'Własne biuro',
    url: '#',
    className: 'navigation__link',
  },
  {
    title: 'Kontakt',
    url: '#',
    className: 'navigation__link',
  },
]

const Navigation = () => (
  <nav className={'navigation'}>
    <h1 className={'navigation__logo'}>
      <img src={pageLogo}></img>
    </h1>
    <ul className={'navigation__list'}>
      {navigationMenuItems.map(item => (
        <li className={'navigation__listItem'} key={item.title}>
          <a href={item.url} className={item.className}>{item.title}</a>
        </li>
      ))}
      <div className={'navigation__mediaContainer'}>
        <img src={fbIcon} className={'mediaContainer__iconFb'} />
        <img src={igIcon} className={'mediaContainer__iconIg'} />
      </div>
    </ul>
  </nav>


)

export default Navigation
