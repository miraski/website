export function filterSortLeaderboard(leaderboard) {
  const byScore = (a, z) => {
    if (a.score < z.score) return 1
    else if (a.score > z.score) return -1
    return 0
  }

  // Only keeps first object for a given name
  const uniqueByName = (acc, curr) => {
    if (acc.find((obj) => obj.name === curr.name) === undefined) {
      acc.push(curr)
    }
    return acc
  }

  // First sort, then filter
  return leaderboard.slice().sort(byScore).reduce(uniqueByName, [])
}
