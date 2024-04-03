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
        A select few Mirabeau veterans are organising a ski event for other
        Mirabeau veterans and this year the event takes place in the ski resort{' '}
        <a href="/#/get-info/location">Sankt Anton</a>, in the west of Austria,
        surrounded by beautiful mountains.
      </p>
      <p>
        We’ll stay at the catered <a href="/#/get-info/chalet">chalet Alber</a>{' '}
        where we’ve been before! Again hosted by Wens Chalets.
      </p>
      <p>The chalet is 600 meters away from the Nassereinbahn.</p>

      <div className="extra-info">
        <section className="extra-info__item">
          <h2>What’s included?</h2>
          <ul>
            <li>4 nights in a luxury chalet</li>
            <li>
              4 days Breakfast
              <br />
              <small>(Sunday, Monday, Tuesday, Wednesday)</small>
            </li>
            <li>
              3 days Dinner
              <br />
              <small>(Saturday, Sunday, Monday, all 3 course meals)</small>
            </li>
            <li>Fresh linnen and towels</li>
            <li>All drinks are included (including beer &amp; wine)</li>
          </ul>
          <p>Travel costs and lunch are not included.</p>
        </section>

        <section className="extra-info__item">
          <h2>Optional:</h2>
          <p>
            We can provide you with a skipass at a 5-10% discount that will give
            you access to over 340 km of ski runs.
          </p>
          <p>
            Skiing and boarding equipment can be rented at destination, prices
            starting at €100 for a 3 days depending on quality of the gear.
            Alternatively, equipment can be rented via the chalet company at a
            discount, we’ll contact you for that.
          </p>
        </section>

        <section className="extra-info__item">
          <h2>Price</h2>
          <p>
            The price will be €530,- for the chalet. The cost of your skipass,{' '}
            rental gear, and drinks/food outside of the chalet will be yours.
          </p>
        </section>

        <section className="extra-info__item">
          <h2>When</h2>
          <p>
            We’ll leave on Friday afternoon 10 January 2025 or early Saturday
            morning 11 January 2025. We’ll head home on the early morning of
            Wednesday 15 January 2025.
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
