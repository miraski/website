export const getFormErrors = (fields) => {
  const errors = []

  if (!isValidCode(fields.code)) errors.push('code')
  if (!isValidName(fields.name)) errors.push('name')
  if (!isValidEmail(fields.email)) errors.push('email')
  if (!isValidPhone(fields.phone)) errors.push('phone')

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
