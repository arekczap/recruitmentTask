import React from 'react'
import './Space.scss'

const Space = ({ type, imageSrc, headingText, costText }) => (
  <div
    style={{
      background: `${type === 'large' ?
        `url(${imageSrc})` :
        `url(${imageSrc}) no-repeat center`}`,
    }}
    className={`${type === 'large' ?
      'spaceContainer' :
      'spaceContainerSmall'}`
    }
  >
    <div className={'spaceContainer__mask'} />
    <div className={`${type === 'large' ?
      'spaceContainer__content' :
      'spaceContainerSmall__content'}`
    }>
      <span className={`${type === 'large' ?
        'spaceContainer__content__name' :
        'spaceContainerSmall__content__name'}`
      }>
        {headingText}
      </span>
      <span className={'spaceContainer__content__price'}>
        {costText}
      </span>
    </div>
    <div className={'spaceContainer__arrowContainer'}>
      <div className={'spaceContainer__arrowContainer__arrow'} />
    </div>
  </div >
)

export default Space
