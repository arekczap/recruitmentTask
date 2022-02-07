import React from 'react'
import './SectionGallery.scss'

import ArrowButton from '../../components/ArrowButton/ArrowButton'

import galeryPicture1 from '../../assets/sectionGallery/galeryPicture1.png'
import galeryPicture2 from '../../assets/sectionGallery/galeryPicture2.png'
import galeryPicture3 from '../../assets/sectionGallery/galeryPicture3.png'
import galeryPicture4 from '../../assets/sectionGallery/galeryPicture4.png'

const galeryPicturesData = [galeryPicture1, galeryPicture2, galeryPicture3, galeryPicture4]

const SectionGallery = () => (
  <div className={'sectionGallery'}>
    <div className={'sectionGallery__arrowLeftContainer'}>
      <ArrowButton type={'gallery'} direction={'prev'} />
    </div>
    <span className={'sectionGallery__sectionTitle'}>Galeria</span>
    {galeryPicturesData.map((picture, index) =>
      <img
        className={`sectionGallery__picture${index} sectionGallery__picture`}
        key={picture} src={picture}
      />)
    }
    <div className={'sectionGallery__arrowRightContainer'}>
      <ArrowButton type={'gallery'} />
    </div>
  </div>
)

export default SectionGallery
