import fullStarImg from '../assets/Rating/full-star.svg';
import emptyStarImg from '../assets/Rating/empty-star.svg';

function Rating({ grade }) {
  const stars = [];
  for (let index = 0; index < 5; index += 1) {
    const fullStar = index < +grade;
    if (fullStar) {
      stars.push(
        <img
          key={index}
          className="etoile"
          src={fullStarImg}
          alt={`${index + 1}/5 full star`}
        />,
      );
    } else {
      stars.push(
        <img
          key={index}
          className="etoile"
          src={emptyStarImg}
          alt={`${index + 1}/5 empty star`}
        />,
      );
    }
  }
  return stars;
}

export default Rating;
