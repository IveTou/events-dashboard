// TODO: implement lazy loading
import { Routes, Route } from 'react-router-dom';
import List from '../pages/List';
import Calendar from '../pages/Calendar';
import NotFound from '../pages/NotFound';


export default function CommomRoutes() {
  return (
    <Routes>
      <Route path={'/list'} element={<List />} errorElement={<NotFound />} />
      <Route path={'/calendar'} element={<Calendar />} errorElement={<NotFound />} />
    </Routes>
  )
};

