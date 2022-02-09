import React from 'react'
import './SectionOffer.scss'

import pic1 from '../../assets/sectionOffer/pic1.png'
import pic2 from '../../assets/sectionOffer/pic2.png'
import pic3 from '../../assets/sectionOffer/pic3.png'
import pic4 from '../../assets/sectionOffer/pic4.png'
import pic5 from '../../assets/sectionOffer/pic5.png'
import pic6 from '../../assets/sectionOffer/pic6.png'
import pic7 from '../../assets/sectionOffer/pic7.png'

const sectionOfferData = [
  {
    imageSrc: pic1,
    text: 'Lorem ipsum',
  },
  {
    imageSrc: pic2,
    text: 'Lorem ipsum \n dolor sit amet conse',
  },
  {
    imageSrc: pic3,
    text: 'Lorem ipsum \n dolor sit amet',
  },
  {
    imageSrc: pic4,
    text: 'Lorem ipsum \n dolor  sit amet',
  },
  {
    imageSrc: pic5,
    text: 'Lorem ipsum dolor sit amet, conse lorem ipsum lorem',
  },
  {
    imageSrc: pic6,
    text: 'Lorem ipsum dolor sit amet, conse lorem ipsum lorem',
  },
  {
    imageSrc: pic7,
    text: 'Lorem ipsum dolor sit amet, conse lorem ipsum',
  },
]

const SectionOffer = () => (
  <div id={'offer'} className={'sectionOffer'}>
    <div className={'sectionOffer__textItemContainer'}>
      <span className={'sectionOffer__textItemContainer__text'}>Lorem ipsum dolor sit amet, conse</span>
    </div>
    {
      sectionOfferData.map((item) => (
        <div key={item.imageSrc} className={'sectionOffer__itemContainer'}>
          <img src={item.imageSrc} className={'sectionOffer__itemContainer__image'} />
          <span className={'sectionOffer__itemContainer__text'}>{item.text}</span>
        </div>

      ))
    }
    <div className={'sectionOffer__buttonContainer'}>
      <span className={'sectionOffer__buttonContainer__text'}>DOWIEDZ SIĘ WIĘCEJ</span>
      <div className={'sectionOffer__buttonContainer__icon'} />
    </div>
  </div >
)

export default SectionOffer
