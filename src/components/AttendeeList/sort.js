export function sortAttendees(attendees) {
  const f = (a, z) => {
    if (!a.datetime || !z.datetime) return 0

    if (a.datetime > z.datetime) return 1
    else if (a.datetime < z.datetime) return -1

    return 0
  }

  return attendees.slice().sort(f)
}
