import React from 'react'
import './SectionOwnOffice.scss'

import officeImage1 from '../../assets/officeImage1.png'

const SectionOwnOffice = () => (
  <div id={'ownOffice'} className={'sectionOwnOffice'}>
    <img className={'sectionOwnOffice__image'} src={officeImage1} />
    <span className={'sectionOwnOffice__header'}>{'Lorem ipsum \n vs własne biuro'}</span>

  </div>
)

export default SectionOwnOffice
