import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'services/API';

export const useFetchEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventById(eventId).then(setEvent);
  }, [eventId]);

  return event;
};
