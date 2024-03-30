export const formElementsToFields = ({ elements }) => {
  return {
    code: elements.code.value,
    name: elements.name.value,
    email: elements.email.value,
    phone: elements.phone.value,
    activity: [
      elements['activity-skiing'].checked,
      elements['activity-snowboarding'].checked,
      elements['activity-apres-ski'].checked,
    ],
    dateOfBirth: elements['date-of-birth'].value,
    acknowledgements: [
      elements['acknowledge-paid'].checked,
      elements['acknowledge-norefund'].checked,
      elements['acknowledge-cancellation'].checked,
    ],
  }
}

export const getFormErrors = (fields) => {
  const errors = []

  ;[
    ['code', isValidCode],
    ['name', isValidName],
    ['email', isValidEmail],
    ['phone', isValidPhone],
    ['activity', isValidActivity],
    ['dateOfBirth', isValidDateOfBirth],
    ['acknowledgements', isValidAcknowledgements],
  ].forEach(([field, fn]) => {
    if (!fn(fields[field])) errors.push(field)
  })

  return errors
}

export const isValidCode = (s) => {
  return s.length === 4
}

export const isValidName = (s) => {
  if (s.length < 6) return false
  return !/\s{2,}/.test(s)
}

const EMAIL_RE =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
export const isValidEmail = (s) => {
  return s.length > 3 && EMAIL_RE.test(s)
}

export const isValidPhone = (s) => {
  if (s.length < 10) return false
  if (s.length > 13) return false

  // 8 digits, with 3 possible prefixes: 06, +316, 00316
  return /^((0031)|(\+31)|0)6\d{8}$/.test(s)
}

export const isValidActivity = (s) => {
  return s[0] === true || s[1] === true || s[2] === true
}

const DATEOFBIRTH_RE = /^[0-3]\d-[01]\d-[12]\d{3}$/
export const isValidDateOfBirth = (s) => DATEOFBIRTH_RE.test(s)

export const isValidAcknowledgements = (s) => {
  return s[0] === true && s[1] === true && s[2] === true
}
