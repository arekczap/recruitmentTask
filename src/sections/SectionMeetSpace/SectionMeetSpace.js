import React from 'react'
import './SectionMeetSpace.scss'

import Space from '../../components/Space/Space'

import spacePhotoLarge1 from '../../assets/spacePhotoLarge1.png'
import spacePhotoLarge2 from '../../assets/spacePhotoLarge2.png'
import spacePhotoSmall1 from '../../assets/spacePhotoSmall1.png'
import spacePhotoSmall2 from '../../assets/spacePhotoSmall2.png'

const sectionSpacedata = [
  {
    imageSrc: spacePhotoLarge1,
    headingText: 'Biuro',
    costText: 'od 1000 zł/msc',
    type: 'large',
  },
  {
    imageSrc: spacePhotoLarge2,
    headingText: 'Lorem ipsum',
    costText: 'od 500 zł/msc',
    type: 'large',
  },
  {
    imageSrc: spacePhotoSmall2,
    headingText: 'Biuro \n lorem',
    costText: 'od 100 zł/h',
    type: 'small',
  },
  {
    imageSrc: spacePhotoSmall1,
    headingText: 'Biuro lorem ipsum Lorem',
    costText: 'od 100 zł/h',
    type: 'small',
  },
]

const SectionMeetSpace = () => (
  <div id={'meetSpace'} className={'sectionSpace'}>
    {
      sectionSpacedata.map(({ type, imageSrc, headingText, costText }, index) => (
        <Space
          key={index}
          type={type}
          imageSrc={imageSrc}
          headingText={headingText}
          costText={costText}
        />
      ))
    }
  </div >
)

export default SectionMeetSpace
