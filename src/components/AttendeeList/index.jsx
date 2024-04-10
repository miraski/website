import './index.css'
import { sortAttendees } from './sort.js'
import Avatar from '../Avatar'

export default function AttendeeList(props) {
  const attendees = props.attendees
  const hasToggle =
    typeof props.hasToggle === 'boolean' ? props.hasToggle : false

  return (
    <>
      <input
        type="checkbox"
        id="attendee-list-toggle"
        className="attendee-list-toggle"
        defaultChecked={!hasToggle}
      />
      <ol className="attendee-list">
        {sortAttendees(attendees).map((attendee) => (
          <li key={attendee.name} className="attendee-list__attendee">
            <Avatar name={attendee.name} shortname={attendee.id} />
            <strong className="attendee-list__name">{attendee.name}</strong>
            <span className="attendee-list__activities">
              {attendee.activities}
            </span>
          </li>
        ))}
      </ol>
      {hasToggle && (
        <div className="cta-container">
          <label className="btn btn--secondary" htmlFor="attendee-list-toggle">
            Show me the complete list
          </label>
        </div>
      )}
    </>
  )
}
