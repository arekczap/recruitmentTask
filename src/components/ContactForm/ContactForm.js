import React from 'react'
import './ContactForm.scss'


const inputData = [
  {
    type: 'text',
    placeholder: 'Imię i Nazwisko',
    className: 'form__input',
  },
  {
    type: 'text',
    placeholder: 'Telefon',
    className: 'form__input1',
  },
  {
    type: 'text',
    placeholder: 'Email',
    className: 'form__input1',
  },
  {
    type: 'text',
    placeholder: 'Lorem ipsum lorem ipsum',
    className: 'form__input1',
  },

]

const ContactForm = () => (
  <form className={'form'} >
    <div className={'form__container'}>
      <span className={'form__heading1'}>Lorem ipsum</span>
      <span className={'form__heading2'}>Lorem ipsum lorem ipsum</span>
      <p className={'form__p1'}>consectetur adipiscing elit. Ut auctor arcu</p>
      <p className={'form__p2'}>Zostaw kontakt, zadzwonimy do Ciebie</p>
      {inputData.map(({ type, placeholder, className }) =>
        <input
          key={placeholder}
          type={type}
          placeholder={placeholder}
          className={className}
        />)}
      <div className={'form__checkboxContainer'}>
        <input className={'form__checkbox'} type={'checkbox'} id={'regulations'} name={'regulations'} />
        <label className={'form__checkboxLabel'} htmlFor={'regulations'}>Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...</label>
      </div>
      <button className={'form__submitButton'}>WYŚLIJ</button>
    </div>
  </form>
)

export default ContactForm
