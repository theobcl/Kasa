import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoRed from '../../assets/Header/logo_red.svg';

function Header() {
  return (
    <HeaderContainer>
      <Img src={logoRed} alt="logo kasa" />
      <Links>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </Links>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 32px;
`;

const Img = styled.img`
  @media (max-width: 1490px) {
    height: 3rem;
  }
`;

const Links = styled.div`
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #ff6060;
    margin: 1rem;

    @media (max-width: 1490px) {
      margin: 0.5rem;
      font-size: 0.725rem;
    }
  }

  a: active {
    border-bottom: 1px #ff6060 solid;
  }
`;

export default Header;
