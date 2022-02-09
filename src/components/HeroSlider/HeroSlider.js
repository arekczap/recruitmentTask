import React, { useState, useEffect } from 'react'
import './HeroSlider.scss'

import ArrowButton from '../ArrowButton/ArrowButton'
import SliderStatus from '../SliderStatus/SliderStatus'

//slide duration in ms
const SLIDE_DUTATION = 5000

const HeroSlider = ({ heroImages }) => {
  const [currentIndex, setcurrentIndex] = useState(0)

  const changeSlide = (evt) => {
    const changeType = evt.target.getAttribute('type')
    if (changeType === 'next') {
      setcurrentIndex(prev => prev === heroImages.length - 1 ? 0 : prev + 1)
    } else {
      setcurrentIndex(prev => prev === 0 ? heroImages.length - 1 : prev - 1)
    }
  }

  useEffect(() => {
    let slideTimeout = setTimeout(() => {
      setcurrentIndex((currentIndex + 1) % heroImages.length)
    }, SLIDE_DUTATION)
    return () => clearTimeout(slideTimeout)
  }, [currentIndex])

  return (
    <div
      style={{ backgroundImage: `url(${heroImages[currentIndex].src})` }}
      className={'heroSlider'}
    >
      <div className={'heroSlider__curtain'} />
      <div className={'heroSlider__navigationContainer'}>
        <ArrowButton
          type={'slider'}
          style={{ paddingLeft: '1.8rem' }}
          moveImage={changeSlide}
          arrayLength={heroImages.length}
          direction={'prev'}
        />
        <ArrowButton
          type={'slider'}
          moveImage={changeSlide}
          arrayLength={heroImages.length}
          direction={'next'}
        />
      </div>
      <SliderStatus
        slideDuration={SLIDE_DUTATION}
        currentIndex={currentIndex}
        countImages={heroImages.length}
      />

    </div>
  )
}
export default HeroSlider
