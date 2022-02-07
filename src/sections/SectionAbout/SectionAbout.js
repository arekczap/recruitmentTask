import React from 'react'
import './SectionAbout.scss'
import ContactForm from '../../components/ContactForm/ContactForm'

import HeroSlider from '../../components/HeroSlider/HeroSlider'
import Navigation from '../../components/Navigation/Navigation'

import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'

const heroImages = [
  { src: hero1 },
  { src: hero2 },
  { src: hero3 },
]
const SectionAbout = () => (
  <section style={{ position: 'relative' }}>
    <Navigation />
    <HeroSlider heroImages={heroImages} />
    <ContactForm />
    <div className={'sectionAbout'}>
      <span className={'sectionAbout__text1'}>Firma</span>
      <p className={'sectionAbout__text2'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor </p>
    </div>
  </section >
)
export default SectionAbout
