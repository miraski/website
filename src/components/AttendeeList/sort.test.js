import { describe, it, expect } from 'vitest'
import { sortAttendees } from './sort.js'

describe('sortAttendees()', () => {
  it('sorts by datetime field', () => {
    const attendees = [
      { id: 'A', name: '', datetime: 10 },
      { id: 'B', name: '', datetime: 5 },
      { id: 'C', name: '', datetime: 15 },
    ]

    const result = sortAttendees(attendees)

    expect(result).toEqual([
      { id: 'B', name: '', datetime: 5 },
      { id: 'A', name: '', datetime: 10 },
      { id: 'C', name: '', datetime: 15 },
    ])
  })

  it("doesn't fail if datetime field doesn't exist", () => {
    const attendees = [
      { id: 'A', name: '' },
      { id: 'B', name: '' },
      { id: 'C', name: '' },
    ]

    expect(() => sortAttendees(attendees)).not.toThrow()
  })
})
