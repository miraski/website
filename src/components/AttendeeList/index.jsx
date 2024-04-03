import './index.css'
import { sortAttendees } from './sort.js'
import Avatar from '../Avatar'

export default function AttendeeList({ attendees }) {
  return (
    <>
      <input
        type="checkbox"
        id="attendee-list-toggle"
        className="attendee-list-toggle"
      />
      <ol className="attendee-list">
        {sortAttendees(attendees).map((attendee) => (
          <li key={attendee.id} className="attendee-list__attendee">
            <Avatar name={attendee.name} shortname={attendee.id} />
            <strong className="attendee-list__name">{attendee.name}</strong>
            <span className="attendee-list__activities">
              {attendee.activities}
            </span>
          </li>
        ))}
      </ol>
      <div className="cta-container">
        <label className="btn btn--secondary" htmlFor="attendee-list-toggle">
          Show me the complete list
        </label>
      </div>
    </>
  )
}
