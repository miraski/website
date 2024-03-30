'use client'

import Nav from '@/components/Nav'

export default function SignupPage() {
  return (
    <body>
      <Nav />
      <div className="wrapper">
        <article>
          <h1>Sign&nbsp;up</h1>
          <p>Awesome that you’re joining the MiraSki event!</p>

          <form action="registered.html">
            <ol className="form-fields">
              <li className="form-field">
                <label htmlFor="name">Full Name</label>
                <input type="email" id="name" name="name" required />
              </li>
              <li className="form-field">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" required />
              </li>
              <li className="form-field">
                <label htmlFor="phone">
                  Mobile phone <small>(just numbers, no spaces)</small>
                </label>
                <input type="tel" id="phone" name="phone" required />
              </li>
              <li className="form-field">
                <label>I’ll be mostly:</label>
                <ol className="form-fields">
                  <li>
                    <label htmlFor="activity-skiing">
                      <input
                        type="checkbox"
                        id="activity-skiing"
                        name="activity-skiing"
                      />{' '}
                      Skiing
                    </label>
                  </li>
                  <li>
                    <label htmlFor="activity-snowboarding">
                      <input
                        type="checkbox"
                        id="activity-snowboarding"
                        name="activity-snowboarding"
                      />{' '}
                      Snowboarding
                    </label>
                  </li>
                  <li>
                    <label htmlFor="activity-paragliding">
                      <input
                        type="checkbox"
                        id="activity-paragliding"
                        name="activity-paragliding"
                      />{' '}
                      Paragliding
                    </label>
                  </li>
                  <li>
                    <label htmlFor="activity-apres-ski">
                      <input
                        type="checkbox"
                        id="activity-apres-ski"
                        name="activity-apres-ski"
                      />{' '}
                      Après-skiing
                    </label>
                  </li>
                </ol>
              </li>
              <li className="form-field">
                <label htmlFor="date-of-birth">
                  Date of birth <small>(format: 31-12-1970)</small>
                </label>
                <input
                  type="text"
                  id="date-of-birth"
                  name="date-of-birth"
                  required
                />
              </li>
              <li>
                <h3>Price: €500.</h3>
                <p>You will be asked to pay immediately.</p>
              </li>
              <li>
                <label htmlFor="acknowledge-paid">
                  <input
                    id="acknowledge-paid"
                    name="acknowledge-paid"
                    type="checkbox"
                    required
                  />{' '}
                  I understand that my registration is not valid until I have
                  paid.
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
                  I understand that I have no right to a refund (unless the
                  event is cancelled for everybody), since the organisers have
                  an obligation to pay.
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
                  I understand that I will get a 75% refund when the MiraSki
                  2025 event is cancelled due to too little attendees.
                </label>
              </li>
            </ol>
            <button className="btn" type="submit">
              Ich bin dabei
            </button>
          </form>
        </article>
      </div>
    </body>
  )
}
