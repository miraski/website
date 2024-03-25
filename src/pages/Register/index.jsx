import './index.css'

export default function Register() {
  const onSubmit = () => {}

  return (
    <>
      <h1 style={{ textAlign: 'center', font: 'sans-serif' }}>Register</h1>
      <p>All fields are mandatory.</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__row">
          <label htmlFor="code">Invite code</label>
          <input id="code" name="code" type="text" required />
        </div>
        <div className="form__row">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="form__row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="form__row">
          <label htmlFor="phone">
            Mobile phone number <em>(with whatsapp)</em>
          </label>
          <input id="phone" name="phone" type="tel" required />
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
            I understand that I have no right on a refund, since the organisers
            have an obligation to pay.
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
