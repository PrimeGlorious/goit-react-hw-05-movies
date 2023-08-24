import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { StyledLink, LayoutHeader, LayoutNav, LayoutList} from './Layout.styled';

function Layout() {
  return (
    <>
      <LayoutHeader>
        <LayoutNav>
          <LayoutList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </LayoutList>
        </LayoutNav>
      </LayoutHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Layout;
