import styled from 'styled-components';

import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
}

const MainContainer = styled.main`
  margin: 2rem auto;
  width: 80%;
  min-height: 70vh;

  @media (max-width: 992px) {
    margin: 1rem auto;
    width: 90%;
  }
`;

export default Layout;
