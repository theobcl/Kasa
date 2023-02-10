import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import error from '../assets/Error/404.svg';

function Error() {
  return (
    <ErrorContainer>
      <ErrorImg src={error} alt="Erreur 404" />
      <ErrorMessage>
        Oups ! La page que vous&nbsp;demandez n'existe pas.
      </ErrorMessage>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #ff6060;
  margin-bottom: 5rem;

  @media (max-width: 992px) {
    margin: 10rem 0 0;
  }

  a {
    color: #ff6060;
    margin: auto;
  }
`;

const ErrorImg = styled.img`
  margin: 0 auto 3rem;
  width: 37rem;

  @media (max-width: 992px) {
    width: 10rem;
    margin: 0 auto 2rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 2.25rem;
  margin: 0 auto 8rem;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 1.25rem;
    width: 17rem;
  }
`;

export default Error;
