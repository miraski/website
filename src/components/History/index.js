import '@/components/Scrapbook/index.css'

import AttendeeList from '@/components/AttendeeList'
import HistoryNav from '@/components/HistoryNav'

export default function History({ year, HistoryText, attendees }) {
  return (
    <article>
      <section>
        <h1>{year}</h1>
        <HistoryText />
        <AttendeeList attendees={attendees} />
      </section>
      <HistoryNav active={year} />
    </article>
  )
}
