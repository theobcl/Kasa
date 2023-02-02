import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoRed from '../assets/logo_red.svg';

function Header() {
  return (
    <HeaderContainer>
      <img src={logoRed} alt="logo kasa" />
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

const Links = styled.div`
  text-decoration: none;
  font-size: 1.5rem;
  color: #ff6060;
  margin: 0 1.5rem;
`;

export default Header;
