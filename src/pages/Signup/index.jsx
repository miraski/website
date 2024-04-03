import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { ref, set } from 'firebase/database'
import { db } from '../../util/firebase'
import { useObjectVal, useListVals } from 'react-firebase-hooks/database'

import { formElementsToFields, getFormErrors } from './validation'

export default function Signup() {
  const { code } = useParams()
  const navigate = useNavigate()

  const [limit] = useObjectVal(ref(db, 'attendeesLimit'))
  const [attendees] = useListVals(ref(db, 'attendees'))
  if (limit && attendees && attendees.length >= limit)
    return (window.location.hash = '/sign-up/full')

  const [formErrors, setFormErrors] = useState([])
  const fieldHasError = (s) => formErrors.includes(s)

  const onSubmit = async (event) => {
    event.preventDefault()

    // Validate all form fields
    const fields = formElementsToFields(event.currentTarget)
    const _formErrors = getFormErrors(fields)
    if (_formErrors.length > 0) {
      setFormErrors(_formErrors)
      scroll(0, 0)
      return false
    }

    // Create order in database
    const orderid = uuid()
    try {
      await set(ref(db, 'orders/' + orderid), fields)
    } catch (err) {
      console.error(err)
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
    activity: 'Pick at least one activity',
    dateOfBirth: 'Date of birth is invalid',
    acknowledgements: 'You must agree with all conditions',
  }

  return (
    <article>
      <h1>Sign&nbsp;up</h1>
      <p>Awesome that you’re joining the MiraSki event!</p>

      {formErrors.length > 0 && (
        <div className="form-field form-field--error">
          <p className="notification notification--error">
            The following errors were found:
          </p>
          <ol className="notification__errorlist">
            {formErrors.map((err) => (
              <li key={err} className="form--error">
                {errorTexts[err]}
              </li>
            ))}
          </ol>
        </div>
      )}

      <form onSubmit={onSubmit}>
        <ol className="form-fields">
          <li
            className={`form-field ${fieldHasError('code') ? 'form-field--error' : ''}`}
          >
            <label htmlFor="code">Your unique invite code</label>
            <input id="code" name="code" type="text" value={code} disabled />
          </li>
          <li
            className={`form-field ${fieldHasError('name') ? 'form-field--error' : ''}`}
          >
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" />
          </li>
          <li
            className={`form-field ${fieldHasError('email') ? 'form-field--error' : ''}`}
          >
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" />
          </li>
          <li
            className={`form-field ${fieldHasError('phone') ? 'form-field--error' : ''}`}
          >
            <label htmlFor="phone">Mobile phone</label>
            <input id="phone" name="phone" type="tel" />
            <p>
              <small>Enter a phone number which has a WhatsApp account</small>
            </p>
          </li>
          <li className="form-field">
            <label>I’ll be mostly:</label>
            <ol className="form-fields">
              <li>
                <label htmlFor="activity-skiing">
                  <input
                    id="activity-skiing"
                    name="activity-skiing"
                    type="checkbox"
                  />{' '}
                  Skiing
                </label>
              </li>
              <li>
                <label htmlFor="activity-snowboarding">
                  <input
                    id="activity-snowboarding"
                    name="activity-snowboarding"
                    type="checkbox"
                  />{' '}
                  Snowboarding
                </label>
              </li>
              <li>
                <label htmlFor="activity-apres-ski">
                  <input
                    id="activity-apres-ski"
                    name="activity-apres-ski"
                    type="checkbox"
                  />{' '}
                  Après-skiing
                </label>
              </li>
            </ol>
            {fieldHasError('activity') ? (
              <p className="notification notification--error">
                Please check at least one box
              </p>
            ) : null}
          </li>
          <li
            className={`form-field ${fieldHasError('dateOfBirth') ? 'form-field--error' : ''}`}
          >
            <label htmlFor="date-of-birth">
              Date of birth <small>(format: 31-12-1970)</small>
            </label>
            <input type="text" id="date-of-birth" name="date-of-birth" />
          </li>
          <li>
            <h3>Price: €530.</h3>
            <p>You will be asked to pay immediately.</p>
          </li>
          <li className="form-field">
            <label>I understand that:</label>
            <ol className="form-fields form-fields--payment">
              <li>
                <label htmlFor="acknowledge-paid">
                  <input
                    id="acknowledge-paid"
                    name="acknowledge-paid"
                    type="checkbox"
                    required
                  />{' '}
                  My registration is not valid until I have paid
                </label>
              </li>
              <li>
                <label htmlFor="acknowledge-norefund">
                  <input
                    id="acknowledge-norefund"
                    name="acknowledge-norefund"
                    type="checkbox"
                    required
                  />{' '}
                  I have no right to a refund, since the organisers have an
                  obligation to pay for chalet reservation
                </label>
              </li>
              <li>
                <label htmlFor="acknowledge-cancellation">
                  <input
                    id="acknowledge-cancellation"
                    name="acknowledge-cancellation"
                    type="checkbox"
                    required
                  />{' '}
                  I might get a partial refund when the entire event is
                  cancelled months before the planned date due to too little
                  attendees
                </label>
              </li>
            </ol>
          </li>
        </ol>
        <button className="btn" type="submit">
          Ich bin dabei
        </button>
      </form>
    </article>
  )
}
