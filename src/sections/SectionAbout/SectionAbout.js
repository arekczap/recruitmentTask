import React from 'react'
import './SectionAbout.scss'
import ContactForm from '../../components/ContactForm/ContactForm'

import HeroSlider from '../../components/HeroSlider/HeroSlider'
import Navigation from '../../components/Navigation/Navigation'
import useWidth from '../../hooks/useWidth'

import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'

const heroImages = [
  { src: hero1 },
  { src: hero2 },
  { src: hero3 },
]
const SectionAbout = () => {
  const width = useWidth()

  return (
    <div id={'about'} style={{ position: 'relative' }}>
      <HeroSlider heroImages={heroImages} />
      <div className={'sectionAboutWrapper'}>
        <Navigation />
        <div className={'sectionAbout'}>
          <div className={'sectionAbout__content'}>
            <span className={'sectionAbout__content__text1'}>Firma</span>
            <span className={'sectionAbout__content__text2'}>{'Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Ut auctor'} </span>
          </div>
          {
            width > 750 && <ContactForm />
          }
        </div>
      </div>
    </div>
  )
}
export default SectionAbout
