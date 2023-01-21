import { useFetchEvent } from 'hooks/fetchEvent';
import { useLocation, useNavigate } from 'react-router-dom';

export const EventDetails = () => {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {event && (
        <div>
          <button onClick={() => navigate(location.state?.from ?? '/')}>
            Go back
          </button>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} />
          <p>{event.classifications[0].genre.name}</p>
        </div>
      )}
    </>
  );
};
