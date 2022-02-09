import React, { useState } from 'react'
import './SectionGallery.scss'

import ArrowButton from '../../components/ArrowButton/ArrowButton'
import Lightbox from 'react-awesome-lightbox'
import '../../styles/lightboxStyles.css'

import galeryPicture1 from '../../assets/sectionGallery/galeryPicture1.png'
import galeryPicture2 from '../../assets/sectionGallery/galeryPicture2.png'
import galeryPicture3 from '../../assets/sectionGallery/galeryPicture3.png'
import galeryPicture4 from '../../assets/sectionGallery/galeryPicture4.png'

const galeryPicturesData = [galeryPicture1, galeryPicture2, galeryPicture3, galeryPicture4]

const SectionGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [toggleLightBox, setToggleLightbox] = useState(false)

  const openLightBox = (index = 1) => {
    setCurrentIndex(index)
    setToggleLightbox(prev => !prev)
  }

  return (
    <div className={'sectionGallery'}>
      <div className={'sectionGallery__arrowLeftContainer'}>
        <ArrowButton
          type={'gallery'}
          direction={'prev'}
          onClick={() => openLightBox(0)}
        />
      </div>
      <span className={'sectionGallery__sectionTitle'}>Galeria</span>

      {galeryPicturesData.map((picture, index) =>
        <div key={picture} className={`sectionGallery__pictureContainer${index} sectionGallery__pictureContainer`}>
          <img
            className={`sectionGallery__picture${index} sectionGallery__picture`}
            src={picture}
            onClick={() => { openLightBox(index) }}
          />
        </div>)
      }
      <div className={'sectionGallery__arrowRightContainer'}>
        <ArrowButton
          type={'gallery'}
          onClick={() => openLightBox(galeryPicturesData.length - 1)}
        />
      </div>
      {
        toggleLightBox &&
        <Lightbox
          startIndex={currentIndex}
          buttonAlign={'center'}
          allowZoom={false}
          allowRotate={false}
          images={galeryPicturesData}
          onClose={() => { setToggleLightbox(prev => !prev) }}
        />
      }
    </div>
  )
}

export default SectionGallery
