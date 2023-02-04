import { useParams } from 'react-router-dom';

import Carousel from '../components/Carousel';
import LodgingList from '../data/lodging.json';

function Lodging() {
  const id = useParams();
  const lodgingData = LodgingList.find((lodging) => lodging.id === id.id);
  return (
    <div>
      <Carousel images={lodgingData.pictures} />
    </div>
  );
}

export default Lodging;
