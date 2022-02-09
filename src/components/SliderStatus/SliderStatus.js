import React, { useEffect, useState } from 'react'
import './SliderStatus.scss'

import ProgressBar from '../ProgressBar/ProgressBar'

const SliderStatus = ({ slideDuration, currentIndex, countImages }) => {
  const [stateAnimation, setstateAnimation] = useState('')
  var prevCount = usePrevious(currentIndex) || 0

  useEffect(() => {
    if ((currentIndex === 0 && prevCount === 2)) {
      setstateAnimation('next')
    } else if ((currentIndex === 2 && prevCount === 0)) {
      setstateAnimation('prev')
    }
  }, [prevCount, currentIndex])

  return (
    <div className={'sliderStatus__container'}>
      <span
        onAnimationEnd={() => setstateAnimation('')}
        className={`sliderStatus__prevIndex ${stateAnimation === 'prev' ? 'animationPrevIndex' : ''}`}
      >
        {`0${currentIndex + 1}`}
      </span>
      <ProgressBar
        key={currentIndex}
        time={slideDuration}
      />
      <span
        onAnimationEnd={() => setstateAnimation('')}
        className={`sliderStatus__nextIndex ${stateAnimation === 'next' ? 'animationNextIndex' : ''}`}
      >
        {`0${countImages}`}
      </span>
    </div >
  )
}
export default SliderStatus






function usePrevious(data) {
  const ref = React.useRef()
  React.useEffect(() => {
    ref.current = data
  }, [data])
  return ref.current
}