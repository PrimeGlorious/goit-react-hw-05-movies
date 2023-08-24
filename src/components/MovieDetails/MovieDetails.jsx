import {
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getInfoMovieByID } from 'api/api';
import { Suspense, useEffect, useState, useRef } from 'react';
import notFoundImage from '../../images/notFoundImage/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
import { StyledLink, MovieDetailsContainer, MovieDetailsBtn, MovieDetailsCard, MovieDetailsImg, MovieDetailsInfo, MovieDetailsTitle, MovieDetailsSubTitle, MovieDetailsText, MovieDetailsList } from './MovieDetails.styled';



function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const locationRef = useRef(location);

  useEffect(() => {
    setStatus('pending');
    getInfoMovieByID(movieId)
      .then(res => {
        setStatus('resolved');
        setMovieInfo(res);
      })
      .catch(error => {
        console.log(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  const onBackClick = () => {
    navigate(locationRef.current.state?.from ?? '/', { replace: true });
  };

  return (
    <MovieDetailsContainer>
      <MovieDetailsBtn
        type="button"
        onClick={onBackClick}
      >
        Go back
      </MovieDetailsBtn>
      {status === 'resolved' && (
        <>
          {' '}
          <MovieDetailsCard>
            <MovieDetailsImg
              alt={
                movieInfo.title || movieInfo.original_title || 'movie poster'
              }
              src={
                movieInfo.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
                  : `${notFoundImage}`
              }
            />
            <MovieDetailsInfo>
              <MovieDetailsTitle>
                {movieInfo.title || movieInfo.original_title}
              </MovieDetailsTitle>
              <MovieDetailsText>
                {movieInfo.vote_average.toFixed(1)}
              </MovieDetailsText>
              <MovieDetailsSubTitle>Overview</MovieDetailsSubTitle>
              <MovieDetailsText>{movieInfo.overview}</MovieDetailsText>
              <MovieDetailsSubTitle>Genres</MovieDetailsSubTitle>
              <p>
                {movieInfo.genres.length !== 0 &&
                  movieInfo.genres.map(({ name, id }) => (
                    <span key={id}>{name}</span>
                  ))}
              </p>
            </MovieDetailsInfo>
          </MovieDetailsCard>
          <MovieDetailsList>
            <li>
              <StyledLink to={`cast`}>Cast</StyledLink>
            </li>
            <li>
              <StyledLink to={`reviews`}>Reviews</StyledLink>
            </li>
          </MovieDetailsList>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && (
        <p>Sorry, we don't find any info about this movie.</p>
      )}
    </MovieDetailsContainer>
  );
}

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default MovieDetails;
