import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { ref, set } from 'firebase/database'
import { db } from '../../util/firebase'

import './index.css'
import { getFormErrors } from './validation'

export default function Register() {
  const navigate = useNavigate()
  const [formErrors, setFormErrors] = useState([])

  const onSubmit = async (event) => {
    event.preventDefault()

    // Validate all form fields
    const { elements } = event.currentTarget
    const fields = {
      code: elements.code.value,
      name: elements.name.value,
      email: elements.email.value,
      phone: elements.phone.value,
    }
    const _formErrors = getFormErrors(fields)
    if (_formErrors.length > 0) {
      setFormErrors(_formErrors)
      return false
    }

    // Create order in database
    const orderid = uuid()
    try {
      await set(ref(db, 'orders/' + orderid), fields)
    } catch (err) {
      console.log(err)
      navigate('/error/create-order')
      return false
    }

    // Redirect to /pay/order-id to pay
    navigate(`/pay/${orderid}`)
  }

  const errorTexts = {
    code: 'Invite code is invalid',
    name: 'Name is invalid',
    email: 'Email is invalid',
    phone: 'Phone is invalid',
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', font: 'sans-serif' }}>Register</h1>
      <p>All fields are mandatory.</p>

      {formErrors.length > 0 && (
        <div className="form__row">
          <p className="form--error">The following fields have errors:</p>
          <ol>
            {formErrors.map((err) => (
              <li key={err} className="form--error">
                {errorTexts[err]}
              </li>
            ))}
          </ol>
        </div>
      )}

      <form className="form" onSubmit={onSubmit}>
        <div className="form__row">
          <label htmlFor="code">Invite code</label>
          <input id="code" name="code" type="text" required />
        </div>
        <div className="form__row">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="form__row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="form__row">
          <label htmlFor="phone">
            Mobile phone number <em>(just numbers, no spaces)</em>
          </label>
          <input id="phone" name="phone" type="tel" required />
          <p>
            <small>Enter a phone number which has a WhatsApp account</small>
          </p>
        </div>
        <div className="form__row">
          <label htmlFor="acknowledge-paid">
            <input
              id="acknowledge-paid"
              name="acknowledge-paid"
              type="checkbox"
              required
            />
            I understand that my registration is not valid until I have paid.
          </label>
        </div>
        <div className="form__row">
          <label htmlFor="acknowledge-norefund">
            <input
              id="acknowledge-norefund"
              name="acknowledge-norefund"
              type="checkbox"
              required
            />
            I understand that I have no right to a refund (unless the event is
            cancelled for everybody), since the organisers have an obligation to
            pay.
          </label>
        </div>
        <div className="form__row">
          <label htmlFor="acknowledge-cancellation">
            <input
              id="acknowledge-cancellation"
              name="acknowledge-cancellation"
              type="checkbox"
              required
            />
            I understand that I will get a 100% refund when the MiraSki 2025
            event is cancelled.
          </label>
        </div>
        <div>
          <p>Price: €500.</p>
          <p>You will be asked to pay immediately.</p>
        </div>
        <div className="form__row">
          <button type="submit" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
