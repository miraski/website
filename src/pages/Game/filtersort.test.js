import { describe, it, expect } from 'vitest'
import { filterSortLeaderboard } from './filtersort.js'

describe('filterSortLeaderboard()', () => {
  it('filters unique names', () => {
    const input = [
      { name: 'Emmy', score: 9001 },
      { name: 'Bran', score: 5020 },
      { name: 'Bran', score: 5010 },
      { name: 'Bran', score: 5000 },
      { name: 'Syb', score: 4000 },
      { name: 'Bruseker', score: 42 },
    ]

    const output = [
      { name: 'Emmy', score: 9001 },
      { name: 'Bran', score: 5020 },
      { name: 'Syb', score: 4000 },
      { name: 'Bruseker', score: 42 },
    ]

    expect(filterSortLeaderboard(input)).toEqual(output)
  })

  it('sorts by score field', () => {
    const input = [
      { name: 'Syb', score: 4000 },
      { name: 'Bran', score: 5000 },
      { name: 'Emmy', score: 9001 },
      { name: 'Bruseker', score: 42 },
    ]

    const output = [
      { name: 'Emmy', score: 9001 },
      { name: 'Bran', score: 5000 },
      { name: 'Syb', score: 4000 },
      { name: 'Bruseker', score: 42 },
    ]

    expect(filterSortLeaderboard(input)).toEqual(output)
  })
})
