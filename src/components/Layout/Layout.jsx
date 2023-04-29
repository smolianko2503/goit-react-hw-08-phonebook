import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

import { StyledLink, StyledLinkContainer, Header } from './Layout.styled';
import Loader from 'components/Loader/Loader';
import { GlobalStyle } from 'components/GlobalStyle';

const Layout = () => {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Header>
        <StyledLinkContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </StyledLinkContainer>
      </Header>

      <main>
        <Suspense fallback={<Loader></Loader>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </div>
  );
};

export default Layout;
