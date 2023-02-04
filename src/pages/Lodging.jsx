import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Slideshow from '../components/Slideshow';
import Tag from '../components/Tag';
import LodgingList from '../data/lodging.json';

function Lodging() {
  const id = useParams();
  const lodgingData = LodgingList.find((lodging) => lodging.id === id.id);
  return (
    <>
      <Slideshow images={lodgingData.pictures} />
      <InfoContainer>
        <TitleContainer>
          <h1>{lodgingData.title}</h1>
          <p>{lodgingData.location}</p>
          {lodgingData.tags.map((tagName) => (
            <Tag name={tagName} />
          ))}
        </TitleContainer>
        <div>
          <p>{lodgingData.host.name}</p>
          <img src={lodgingData.host.picture} alt="host portrait" />
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

const TitleContainer = styled.div``;

export default Lodging;
