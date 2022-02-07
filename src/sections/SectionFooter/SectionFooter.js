import './SectionFooter.scss'

import React from 'react'

import footerImage from '../../assets/footerImage.png'
import logo from '../../assets/logo.png'

const SectionFooter = () => {
  console.log('footer')
  return (
    <div className={'sectionFooter'}>
      <div className={'sectionFooter__companyContainer'}>
        <img className={'sectionFooter__companyContainer__imageLogo'} src={logo} />
        <span className={'sectionFooter__companyContainer__adress1'}>ul. Towarowa 5/6</span>
        <span className={'sectionFooter__companyContainer__adress2'}>31-000 Kraków</span>
        <span className={'sectionFooter__companyContainer__phoneNum'}>+48 999 999 999</span>
        <span className={'sectionFooter__companyContainer__emailText'}>email@email.com</span>
        <span className={'sectionFooter__companyContainer__privacy'}>Polityka prywatności</span>
      </div>

      <div className={'sectionFooter__navContainer'}>
        <div className={'sectionFooter__navContainer__col1'}>
          <span className={'sectionFooter__navContainer__text'}>Strona główna</span>
          <span className={'sectionFooter__navContainer__text'}>Poznaj przestrzeń</span>
          <span className={'sectionFooter__navContainer__text'}>Oferta</span>
        </div>
        <div className={'sectionFooter__navContainer__col2'}>
          <span className={'sectionFooter__navContainer__text'}>Lokalizacja</span>
          <span className={'sectionFooter__navContainer__text'}>Własne biuro</span>
          <span className={'sectionFooter__navContainer__text'}>Kontakt</span>
        </div>
      </div>

      <img className={'sectionFooter__image'} src={footerImage} />
    </div>
  )
}

export default SectionFooter
