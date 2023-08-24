import { lazy } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

Route.propTypes = {
  path: PropTypes.string,
  element: PropTypes.element.isRequired,
};

export { App };
