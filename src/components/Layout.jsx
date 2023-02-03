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
  margin: auto 10%;
  width: 80%;

  @media (max-width: 1490px) {
    margin: auto 5%;
    width: 90%;
  }
`;

export default Layout;
