'use client'

import { ref } from 'firebase/database'
import { db } from '../../util/firebase'
import { useListVals } from 'react-firebase-hooks/database'

import '../../components/Scrapbook/index.css'
import AttendeeList from '../../components/AttendeeList'

export default function GetInfoPage() {
  const g = ref(db, 'attendees')
  const [attendees, attendeesLoading, attendeesError] = useListVals(g)

  return (
    <article>
      <h1>Get info</h1>
      <p className="introduction">
        Join us for the ultimate skiing &amp; snowboarding event and 4 days of
        skiing, partying, and having real fun!
      </p>
      <p>
        Every year Mirabeau organises a ski event for all employees and this
        year the event takes place in the ski resort{' '}
        <a href="/#/get-info/location">Sankt Anton</a>, in the west of Austria,
        surrounded by beautiful mountains.
      </p>
      <p>
        This year we’ll stay at the catered{' '}
        <a href="/#/get-info/chalet">chalet “Inge”</a> hosted by Wens Chalets.
      </p>

      <div className="extra-info">
        <section className="extra-info__item">
          <h2>What’s included?</h2>
          <ul>
            <li>3 nights in a luxury chalet</li>
            <li>Breakfast, dinner &amp; snacks</li>
            <li>Fresh towels</li>
            <li>All drinks are included (including beer &amp; wine)</li>
          </ul>
          <p>Travel costs and lunch are not included.</p>
        </section>

        <section className="extra-info__item">
          <h2>Optional:</h2>
          <p>
            We can provide you with a skipass that will give you access to over
            340 km of ski runs.
          </p>
          <p>
            Skiing and boarding equipment can be rented at destination, prices
            starting at €69 for a 3 days depending on quality of the gear. You
            can also take ski or snowboard lessons together with some colleagues
            in case your skills are a little rusty.
          </p>
        </section>

        <section className="extra-info__item">
          <h2>Price</h2>
          <p>
            Based on previous editions, the price will be around €250,- The rest
            of your trip is sponsored by Mirabeau. As soon as the exact price is
            available you’ll be informed.
          </p>
        </section>

        <section className="extra-info__item">
          <h2>When</h2>
          <p>
            We’ll leave on Friday afternoon, the 26th of January and we’ll be
            back in the Netherlands on the early morning of Wednesday the 31th
            of January.
          </p>
        </section>
      </div>

      <div className="cta-container">
        <p>
          <a className="btn" href="/#/get-info/location">
            <span className="extra-text extra-text--480">tell me </span>
            about St. Anton
          </a>
        </p>
      </div>

      {!attendeesLoading && !attendeesError && attendees && (
        <>
          <h2 className="alt">So, who’s joining?</h2>
          <AttendeeList attendees={attendees} />
        </>
      )}
    </article>
  )
}
