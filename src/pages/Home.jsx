import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Banner from '../components/Banner';
import BannerImg from '../assets/Banner/home-banner.jpg';
import LodgingList from '../data/logement.json';
import Card from '../components/Card';

function Home() {
  return (
    <>
      <Banner image={BannerImg} text="Chez vous, partout et ailleurs" />
      <CardsContainer>
        {LodgingList.map((lodging) => (
          <NavLink key={lodging.id} to="/">
            <Card
              key={lodging.id}
              id={lodging.id}
              image={lodging.cover}
              titre={lodging.title}
            />
          </NavLink>
        ))}
      </CardsContainer>
    </>
  );
}

const CardsContainer = styled.div`
  background-color: #f7f7f7;
  border-radius: 1.5rem;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default Home;
