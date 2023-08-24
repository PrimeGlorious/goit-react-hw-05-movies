import { useSearchParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMovieByQuery } from 'api/api';
import { StyledLink, MovieContainer, MovieForm, MovieBtn, MovieInput, MovieList } from './Movies.styled';


function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('idle');
  const [movieResp, setMovieResp] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const fetchMovieByQuery = () => {
      if (movieQuery === '') {
        return;
      }
      setStatus('pending');
      getMovieByQuery(movieQuery)
        .then(res => {
          if (res.length !== 0) {
            setMovieResp(res);
            setStatus('resolved');
          } else {
            setStatus('rejected');
            throw new Error('we dont find any reviews');
          }
        })
        .catch(error => {
          console.log(error.message);
        });
    };
    fetchMovieByQuery();
  }, [searchParams, movieQuery]);

  const onInputValue = evt => {
    setInputValue(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    updateQueryUrl(evt.target.elements.query.value);
    setInputValue('');
  };

  const updateQueryUrl = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <MovieContainer>
      <MovieForm onSubmit={onSubmit}>
        <MovieInput
          autoComplete="true"
          onChange={onInputValue}
          name="query"
          value={inputValue}
        ></MovieInput>
        <MovieBtn type="submit">
          search
        </MovieBtn>
      </MovieForm>
      <MovieList>
        {status === 'resolved' &&
          movieResp.map(({ title, original_title, id }) => (
            <StyledLink
              to={`/movies/${id}`}
              state={{ from: location }}
              key={id}
            >
              <p>{title || original_title}</p>
            </StyledLink>
          ))}
        {status === 'pending' && <p>Loading...</p>}
        {status === 'rejected' && <p>We don't find any movie</p>}
      </MovieList>
    </MovieContainer>
  );
}

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Movies;
