// components/Calendar.js
import React from 'react';

export default function Calendar({ events }) {
  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No upcoming events.</p>
      ) : (
        events.map((event) => (
          <div key={event.id} className="mb-4">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-500">{event.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
