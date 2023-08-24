import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import notFoundImage from '../../images/notFoundImage/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
import { getCastMovieByID } from 'api/api';
import { CastList, CastItem, CastText, CastImg } from './Cast.styled';

function Cast() {
  const [movieCast, setMovieCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  useEffect(() => {
    setStatus('pending');
    getCastMovieByID(movieId)
      .then(res => {
        if (res.cast.length !== 0) {
          setMovieCast(res.cast);
          setStatus('resolved');
        } else {
          throw new Error('we dont find any casts ');
        }
      })
      .catch(error => {
        console.log(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <CastList>
      {status === 'resolved' &&
        movieCast.map(({ name, character, profile_path, id }) => (
          <CastItem key={id}>
            <CastImg
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `${notFoundImage}`
              }
              alt={name}
            />
            <CastText>Name: {name}</CastText>
            <CastText>Character: {character}</CastText>
          </CastItem>
        ))}
      {status === 'pending' && <CastText>Loading...</CastText>}
      {status === 'rejected' && <CastText>Sorry, we dont find any casts</CastText>}
    </CastList>
  );
}

export default Cast;
