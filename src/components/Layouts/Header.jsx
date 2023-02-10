import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoRed from '../../assets/Header/logo_red.svg';

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Img src={logoRed} alt="logo kasa" />
      </NavLink>
      <Links>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </Links>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 2rem;

  @media (max-width: 992px) {
    padding: 1rem;
  }
`;

const Img = styled.img`
  @media (max-width: 992px) {
    height: 3rem;
  }
`;

const Links = styled.div`
  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #ff6060;
    margin: 1rem;

    @media (max-width: 992px) {
      margin: 0.5rem;
      font-size: 0.725rem;
    }
  }

  a.active {
    border-bottom: 0.2rem #ff6060 solid;
  }

  a:hover {
    border-bottom: 0.2rem #ff6060 solid;
  }
`;

export default Header;
