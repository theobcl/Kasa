import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import LodgingList from '../data/lodging.json';

function Lodging() {
  const id = useParams();
  const lodgingData = LodgingList.find((lodging) => lodging.id === id.id);
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
        <div>
          <div>
            <p>{lodgingData.host.name}</p>
            <img src={lodgingData.host.picture} alt="host portrait" />
          </div>
          <Rating grade={lodgingData.rating} />
        </div>
      </InfoContainer>
    </>
  );
}

const InfoContainer = styled.div`
  color: #ff6060;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LodgingTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 0;
`;

const LodgingAdress = styled.p`
  margin-top: 0;
`;

export default Lodging;
