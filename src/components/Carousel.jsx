import { useState } from 'react';
import styled from 'styled-components';

import arrowLeft from '../assets/Carousel/arrow-left.svg';
import arrowRight from '../assets/Carousel/arrow-right.svg';

function Carousel({ images }) {
  const [currentImage, changeImg] = useState(0);
  const imageNumber = images.length;

  const previousImage = () => {
    if (currentImage === 0) {
      changeImg(imageNumber - 1);
    } else {
      changeImg(currentImage - 1);
    }
    return changeImg;
  };

  const nextImage = () => {
    if (currentImage === imageNumber - 1) {
      changeImg(0);
    } else {
      changeImg(currentImage + 1);
    }
    return changeImg;
  };

  return (
    <CarouselContainer>
      {imageNumber > 1 && (
        <CarouselArrow className="left" type="button" onClick={previousImage}>
          <img src={arrowLeft} alt="Contenu précedent" />
        </CarouselArrow>
      )}
      {images.map((image, index) => (
        <CarouselImg
          tabIndex={index}
          className={
            index === currentImage ? 'carousel-img actif' : 'carrousel-img'
          }
          src={image}
          alt="Logement"
        />
      ))}
      {imageNumber > 1 && (
        <CarouselArrow className="right" type="button" onClick={nextImage}>
          <img src={arrowRight} alt="Contenu suivant" />
        </CarouselArrow>
      )}
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  display: block;
  height: 26rem;
  margin: auto auto 2rem auto;
  position: relative;
  width: 100%;
`;

const CarouselImg = styled.img`
  border-radius: 1rem;
  height: 26rem;
  object-fit: cover;
  display: none;
  width: 100%;

  &.actif {
    display: block;
  }
`;

const CarouselArrow = styled.button`
  position: absolute;
  width: 3rem;
  z-index: 1;
  background: none;
  border: 0;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(2px 4px 6px black);
  }

  &.left {
    margin-left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &.right {
    margin-right: 1.5rem;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default Carousel;
