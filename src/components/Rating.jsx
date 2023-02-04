import fullStarImg from '../assets/Rating/full-star.svg';
import emptyStarImg from '../assets/Rating/empty-star.svg';

function Rating({ grade }) {
  const stars = [];
  let fullStar = true;
  for (let index = 0; index < 5; index += 1) {
    if (index === parseInt(grade, 10)) {
      fullStar = false;
    }
    if (fullStar === true) {
      stars.push(
        <img
          key={index}
          className="etoile"
          src={fullStarImg}
          alt={`${grade}/5`}
        />,
      );
    } else {
      stars.push(
        <img
          key={index}
          className="etoile"
          src={emptyStarImg}
          alt={`${grade}/5`}
        />,
      );
    }
  }
  return stars;
}

export default Rating;
