import { Link, useLocation } from 'react-router-dom';
import { ListItem } from './EventList.styled';

export const EventsList = ({ events }) => {
  const location = useLocation();
  return (
    <>
      {events.map(({ id, name }) => {
        return (
          <ListItem key={id}>
            <Link to={`/events/${id}`} state={{ from: location }}>
              {name}
            </Link>
          </ListItem>
        );
      })}
    </>
  );
};
