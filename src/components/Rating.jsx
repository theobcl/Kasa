import styled from 'styled-components';

import fullStarImg from '../assets/Rating/full-star.svg';
import emptyStarImg from '../assets/Rating/empty-star.svg';

function Rating({ grade }) {
  const stars = [];
  for (let index = 0; index < 5; index += 1) {
    const fullStar = index < +grade;
    if (fullStar) {
      stars.push(
        <StarImg
          key={index}
          src={fullStarImg}
          alt={`${index + 1}/5 full star`}
        />,
      );
    } else {
      stars.push(
        <StarImg
          key={index}
          src={emptyStarImg}
          alt={`${index + 1}/5 empty star`}
        />,
      );
    }
  }
  return stars;
}

const StarImg = styled.img`
  @media (max-width: 992px) {
    width: 1rem;
`;

export default Rating;
