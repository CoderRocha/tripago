import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch.js'

// styles
import './TripList.css'

export default function TripList() {
    const [url, setUrl] = useState('http://localhost:3000/trips')
    const { data: trips, isPending, error } = useFetch(url, { type: 'GET' })

    /* const fetchTrips = useCallback(async () => {
      const response = await fetch(url)
      const json = await response.json()
      setTrips(json)
    } , [url])

    useEffect(() => {
      fetchTrips()
    }, [fetchTrips])

    console.log(trips) */
  // another way of doing it, but in a more complex way


  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <div>Loading Trips...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips && trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=Europe')}>
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=NorthAmerica')}>
          North America Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
    </div>
  )
}
