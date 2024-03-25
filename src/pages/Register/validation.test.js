import { describe, it, expect } from 'vitest'
import {
  isValidCode,
  isValidName,
  isValidEmail,
  isValidPhone,
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
