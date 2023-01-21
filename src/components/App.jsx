import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayot/SharedLayout';
import { Events } from 'pages/Events';
import { EventDetails } from './EventsDetails/EventDetails';
import { EventSubPage } from './EventSubPage/EventSubPage';
import { Search } from 'pages/Search';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<p>hi</p>} />
        <Route path="events" element={<Events />}>
          <Route path=":eventId" element={<EventSubPage />} />
        </Route>
        <Route path="search" element={<Search />}>
          <Route path=":eventId" element={<EventSubPage />} />
        </Route>
      </Route>

      <Route path="/events/:eventId/details" element={<EventDetails />} />
      <Route path="/search/:eventId/details" element={<EventDetails />} />
    </Routes>
  );
};
