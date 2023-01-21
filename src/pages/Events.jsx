import { EventsList } from 'components/EventsList/EventsList';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchEvents } from 'services/API';

export const Events = () => {
  const [events, setEvents] = useState();
  useEffect(() => {
    fetchEvents().then(data => {
      setEvents(data);
    });
  }, []);

  return (
    <>
      <ul>{events && events.length > 0 && <EventsList events={events} />}</ul>
      <Outlet />
    </>
  );
};
