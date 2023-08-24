import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTrendingDay } from 'api/api';
import { StyledLink, HomeContainer, HomeTitle, HomeList } from './Home.styled';


function Home() {
  const [trendingMovie, setTrendingMovie] = useState(null);

  useEffect(() => {
    getTrendingDay()
      .then(res => {
        setTrendingMovie(res);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        {trendingMovie &&
          trendingMovie.map(({ id, title, original_name }) => (
            <StyledLink to={`/movies/${id}`} key={id}>
              {title || original_name}
            </StyledLink>
          ))}
      </HomeList>
    </HomeContainer>
  );
}

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Home;
