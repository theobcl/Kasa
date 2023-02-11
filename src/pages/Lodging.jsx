import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import LodgingList from '../data/lodging.json';
import Dropdown from '../components/Dropdown';

function Lodging() {
  const id = useParams();
  const lodgingData = LodgingList.find((lodging) => lodging.id === id.id);

  const lodgingEquipment = lodgingData.equipments.map((equipment) => (
    <li key={`-${equipment}`}>{equipment}</li>
  ));

  return (
    <>
      <Slideshow images={lodgingData.pictures} />
      <InfoContainer>
        <TitleContainer>
          <div>
            <LodgingTitle>{lodgingData.title}</LodgingTitle>
            <LodgingAdress>{lodgingData.location}</LodgingAdress>
          </div>
          <div>
            {lodgingData.tags.map((tagName) => (
              <Tag key={`tag-${tagName}`} name={tagName} />
            ))}
          </div>
        </TitleContainer>
        <HostContainer>
          <HostInfos>
            <HostName>{lodgingData.host.name}</HostName>
            <HostImg src={lodgingData.host.picture} alt="host portrait" />
          </HostInfos>
          <div>
            <Rating grade={lodgingData.rating} />
          </div>
        </HostContainer>
      </InfoContainer>
      <DropdownContainer>
        <Dropdown title="Description" description={lodgingData.description} />
        <DropdownSpace> </DropdownSpace>
        <Dropdown title="Équipements" description={lodgingEquipment} />
      </DropdownContainer>
    </>
  );
}

const InfoContainer = styled.div`
  color: #ff6060;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    display: inline;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const LodgingTitle = styled.h1`
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const LodgingAdress = styled.p`
  margin: 0 0 2rem 0;

  @media (max-width: 992px) {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }
`;

const HostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

const HostInfos = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HostImg = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;

  @media (max-width: 992px) {
    height: 2rem;
    width: 2rem;
  }
`;

const HostName = styled.p`
  text-align: end;
  font-size: 1rem;
  width: 5rem;
  margin: 0 1rem 0 0;

  @media (max-width: 992px) {
    width: 3rem;
    font-size: 0.75rem;
  }
`;

const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style-type: none;

  p {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    display: inline;

    p {
      font-size: 0.75rem;
    }
  }
`;

const DropdownSpace = styled.div`
  width: 10rem;

  @media (max-width: 992px) {
    display: none;
  }
`;

export default Lodging;
