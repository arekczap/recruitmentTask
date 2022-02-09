import React, { useState } from 'react'
import './ContactForm.scss'

const inputData = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Imię i Nazwisko',
    className: 'form__input',
  },
  {
    id: 'phone',
    type: 'text',
    placeholder: 'Telefon',
    className: 'form__input1',
  },
  {
    id: 'email',
    type: 'text',
    placeholder: 'Email',
    className: 'form__input1',
  },
  {
    id: 'lorem',
    type: 'text',
    placeholder: 'Lorem ipsum lorem ipsum',
    className: 'form__input1',
  },
]

const ContactForm = () => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    lorem: '',
    regulations: false,
  })

  const handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value

    setData((prevState) => ({
      ...prevState,
      [target.id]: value,
    }))
  }

  const handleSubmit = (event) => {
    alert('Twoje dane z formularza: ' + JSON.stringify(data, 4))
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={'form'} >
      <div className={'form__container'}>
        <span className={'form__heading1'}>Lorem ipsum</span>
        <span className={'form__heading2'}>Lorem ipsum lorem ipsum</span>
        <p className={'form__p1'}>consectetur adipiscing elit. Ut auctor arcu</p>
        <p className={'form__p2'}>Zostaw kontakt, zadzwonimy do Ciebie</p>
        {inputData.map(({ id, type, placeholder, className }) =>
          <input
            onChange={handleChange}
            id={id}
            key={placeholder}
            type={type}
            placeholder={placeholder}
            className={className}
          />)}
        <div className={'form__checkboxContainer'}>
          <input
            className={'form__checkbox'}
            onChange={handleChange}
            type={'checkbox'}
            id={'regulations'}
            name={'regulations'}
          />
          <label className={'form__checkboxLabel'} htmlFor={'regulations'}>Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...</label>
        </div>
        <button type={'submit'} className={'form__submitButton'}>WYŚLIJ</button>
      </div>
    </form>
  )
}

export default ContactForm
