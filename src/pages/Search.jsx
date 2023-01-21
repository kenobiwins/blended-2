import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'services/API';

export const Search = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (keyword === null || keyword === '') {
      return;
    }
    fetchEventsByName(keyword).then(setEvents);
  }, [keyword]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.search.value === '') {
      return;
    }
    setSearchParams({ query: form.search.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input name="search" type="text" />
        <button>Search</button>
      </form>
      <ul>
        {events.length > 0 &&
          events.map(event => {
            return (
              <li key={event.id}>
                <Link to={`${event.id}`} state={{ from: location }}>
                  {event.name}
                </Link>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </>
  );
};
