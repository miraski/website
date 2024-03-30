import { describe, it, expect } from 'vitest'
import {
  isValidCode,
  isValidName,
  isValidEmail,
  isValidPhone,
  isValidActivity,
  isValidDateOfBirth,
  isValidAcknowledgements,
} from './validation'

describe('isValidCode()', () => {
  it('succeeds on code length === 4', () => {
    expect(isValidCode('abcd')).toBe(true)
  })

  it('fails on code length !== 4', () => {
    expect(isValidCode('')).toBe(false)
    expect(isValidCode('a')).toBe(false)
    expect(isValidCode('ab')).toBe(false)
    expect(isValidCode('abc')).toBe(false)

    expect(isValidCode('abcde')).toBe(false)
    expect(isValidCode('abcdef')).toBe(false)
    expect(isValidCode('abcdefg')).toBe(false)
  })
})

describe('isValidName()', () => {
  it('fails on consecutive spaces', () => {
    expect(isValidName('abc def')).toBe(true)

    expect(isValidName('abc  def')).toBe(false)
  })

  it('fails when length ≤ 5', () => {
    expect(isValidName('')).toBe(false)
    expect(isValidName(' ')).toBe(false)
    expect(isValidName('a')).toBe(false)
    expect(isValidName('ab')).toBe(false)
    expect(isValidName('abc')).toBe(false)
    expect(isValidName('abcd')).toBe(false)
    expect(isValidName('abcde')).toBe(false)
  })
})

describe('isValidEmail()', () => {
  it('accepts RFC 5322 addresses', () => {
    expect(isValidEmail('monkey@example.com')).toBe(true)
    expect(isValidEmail('zebra@subdomain.example.com')).toBe(true)
    expect(isValidEmail('rhino@zoo.co.uk')).toBe(true)
    expect(isValidEmail('foo-bar@gmail.com')).toBe(true)
    expect(isValidEmail('foo_bar@example.name')).toBe(true)
    expect(isValidEmail('foo+bar@example.net')).toBe(true)
    expect(isValidEmail('fo.ob.ar@proton.me')).toBe(true)
    expect(isValidEmail('b32487a@example.org')).toBe(true)
    expect(isValidEmail('あいうえお@example.com')).toBe(true)
  })

  it('fails when malformed', () => {
    expect(isValidEmail('aab.c')).toBe(false)
    expect(isValidEmail('plainaddress')).toBe(false)
    expect(isValidEmail('#@%^%#$@#$@#.com')).toBe(false)
    expect(isValidEmail('@example.com')).toBe(false)
    expect(isValidEmail('Joe Smith <email@example.com>')).toBe(false)
    expect(isValidEmail('email.example.com')).toBe(false)
    expect(isValidEmail('email@example@example.com')).toBe(false)
    expect(isValidEmail('.email@example.com')).toBe(false)
    expect(isValidEmail('email.@example.com')).toBe(false)
    expect(isValidEmail('email..email@example.com')).toBe(false)
    expect(isValidEmail('email@example.com (Joe Smith)')).toBe(false)
    expect(isValidEmail('email@example')).toBe(false)
    expect(isValidEmail('email@111.222.333.44444')).toBe(false)
    expect(isValidEmail('email@example..com')).toBe(false)
    expect(isValidEmail('Abc..123@example.com')).toBe(false)
  })
})

describe('isValidPhone()', () => {
  it('fails when not numeric', () => {})

  it('fails when malformed', () => {
    // only numbers are accepted
    expect(isValidPhone('06012a4567')).toBe(false)
    expect(isValidPhone('06 01234567')).toBe(false)
    expect(isValidPhone('06 012 345 67')).toBe(false)
    expect(isValidPhone('06-01234567')).toBe(false)
    expect(isValidPhone('(0)601234567')).toBe(false)

    // obviously invalid
    expect(isValidPhone('2312322334')).toBe(false)
    expect(isValidPhone('(231) 232-2334')).toBe(false)
    expect(isValidPhone('060123456')).toBe(false)
    expect(isValidPhone('06012345678')).toBe(false)
  })

  it('accepts 06 at the start', () => {
    expect(isValidPhone('0601234567')).toBe(true)
  })

  it('accepts +316 at the start', () => {
    expect(isValidPhone('+31601234567')).toBe(true)
  })

  it('accepts 00316 at the start', () => {
    expect(isValidPhone('0031601234567')).toBe(true)
  })
})

describe('isValidActivity()', () => {
  it('only returns true when at least 1 is true', () => {
    expect(isValidActivity([true, true, true])).toBe(true)
    expect(isValidActivity([false, true, true])).toBe(true)
    expect(isValidActivity([true, false, true])).toBe(true)
    expect(isValidActivity([true, true, false])).toBe(true)

    expect(isValidActivity([false, false, false])).toBe(false)
  })
})

describe('isValidDateOfBirth()', () => {
  it('accepts valid dates', () => {
    expect(isValidDateOfBirth('01-01-1983')).toBe(true)
    expect(isValidDateOfBirth('09-09-1984')).toBe(true)
    expect(isValidDateOfBirth('31-12-1985')).toBe(true)
    expect(isValidDateOfBirth('31-12-2001')).toBe(true)
  })

  it("doesn't accept invalid dates", () => {
    expect(isValidDateOfBirth('01-01-0234')).toBe(false)
    expect(isValidDateOfBirth('12-31-1986')).toBe(false)
  })
})

describe('isValidAcknowledgements()', () => {
  it('only returns true when all 3 are true', () => {
    expect(isValidAcknowledgements([true, true, true])).toBe(true)

    expect(isValidAcknowledgements([false, true, true])).toBe(false)
    expect(isValidAcknowledgements([true, false, true])).toBe(false)
    expect(isValidAcknowledgements([true, false, true])).toBe(false)
    expect(isValidAcknowledgements([true, true, false])).toBe(false)
    expect(isValidAcknowledgements([false, false, false])).toBe(false)
    expect(isValidAcknowledgements([false, false, false])).toBe(false)
  })
})
