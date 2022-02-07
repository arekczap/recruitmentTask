import React, { useState } from 'react'
import './ArrowButton.scss'

const ArrowButton = ({ type, style, direction, moveImage }) => {
  const [canChangeImage, setcanChangeImage] = useState(false)

  const changeImage = (evt) => {
    if (canChangeImage) {
      evt.target.style.display = 'none'
      if (type === 'slider') moveImage(evt)
      setTimeout(() => {
        setcanChangeImage(false)
        evt.target.style.display = 'flex'
      }, 100)
      setcanChangeImage(false)
    }
  }

  return (
    <div className={'arrowButton__container'}>
      <button
        style={{
          transform: `rotate(${direction === 'prev' ? 0 : 180}deg)`,
          ...style,
        }}
        className={'arrowButton__button'}
        onClick={changeImage}
        onMouseOver={() => setcanChangeImage(false)}
      >
        <div
          onTransitionEnd={() => {
            setcanChangeImage(true)
          }}
          className={'arrowButton__image'}
        />
      </button >
    </div>
  )
}

export default ArrowButton
