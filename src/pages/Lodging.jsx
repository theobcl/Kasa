import { useParams } from 'react-router-dom';

import Slideshow from '../components/Slideshow';
import LodgingList from '../data/lodging.json';

function Lodging() {
  const id = useParams();
  const lodgingData = LodgingList.find((lodging) => lodging.id === id.id);
  return (
    <div>
      <Slideshow images={lodgingData.pictures} />
    </div>
  );
}

export default Lodging;
