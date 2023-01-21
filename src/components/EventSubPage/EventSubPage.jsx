import { NavItem } from 'components/SharedLayot/SharedLayout.styled';
import { useFetchEvent } from 'hooks/fetchEvent';
import { useLocation } from 'react-router-dom';

export const EventSubPage = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <>
      {event && (
        <div>
          <p>{event.name}</p>
          <img src={event.images[0].url} alt={event.name} />
          <NavItem to="details" state={location.state}>
            details
          </NavItem>
        </div>
      )}
    </>
  );
};
