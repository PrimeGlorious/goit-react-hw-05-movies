import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewMovieByID } from 'api/api';

import {ReviewsList, ReviewsItem, ReviewsTitle, ReviewsText} from './Reviews.styled'

function Reviews() {
  const [movieReview, setMovieReview] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    getReviewMovieByID(movieId)
      .then(res => {
        if (res.length !== 0) {
          setMovieReview(res);
          setStatus('resolved');
        } else {
          throw new Error('We dont have any reviews for this movie.');
        }
      })
      .catch(error => {
        console.log(error.message);
        setStatus('rejected');
      });
  }, [movieId]);
  return (
    <ReviewsList>
      {status === 'resolved' &&
        movieReview.map(({ author, content, id }) => (
          <ReviewsItem key={id}>
            <ReviewsTitle>Author: {author}</ReviewsTitle>
            <ReviewsText>{content}</ReviewsText>
          </ReviewsItem>
        ))}
      {status === 'pending' && (
        <ReviewsText>Loading...</ReviewsText>
      )}
      {status === 'rejected' && (
        <ReviewsText>
          We don't have any review's for this movie.
        </ReviewsText>
      )}
    </ReviewsList>
  );
}

export default Reviews;
