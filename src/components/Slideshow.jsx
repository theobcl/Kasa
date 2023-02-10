import { useState } from 'react';
import styled from 'styled-components';

import arrowLeft from '../assets/Slideshow/arrow-left.svg';
import arrowRight from '../assets/Slideshow/arrow-right.svg';

function Slideshow({ images }) {
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
    <SlideshowContainer>
      {imageNumber > 1 && (
        <SlideshowArrow className="left" type="button" onClick={previousImage}>
          <img src={arrowLeft} alt="Contenu précedent" />
        </SlideshowArrow>
      )}
      {images.map((image, index) => (
        <SlideshowImg
          key={`-${image.substring(
            image.lastIndexOf('/') + 1,
            image.lastIndexOf('.'),
          )}`}
          className={
            index === currentImage ? 'Slideshow-img actif' : 'carrousel-img'
          }
          src={image}
          alt="Logement"
        />
      ))}
      {imageNumber > 1 && (
        <SlideshowArrow className="right" type="button" onClick={nextImage}>
          <img src={arrowRight} alt="Contenu suivant" />
        </SlideshowArrow>
      )}
      <SlideshowCounter>
        {`${currentImage + 1}/${images.length}`}
      </SlideshowCounter>
    </SlideshowContainer>
  );
}

const SlideshowContainer = styled.div`
  display: block;
  height: 26rem;
  margin: auto auto 2rem auto;
  position: relative;
  width: 100%;

  @media (max-width: 992px) {
    height: 16rem;
    margin: auto auto 1rem auto;
  }
`;

const SlideshowImg = styled.img`
  border-radius: 1rem;
  height: 26rem;
  object-fit: cover;
  display: none;
  width: 100%;

  &.actif {
    display: block;
  }

  @media (max-width: 992px) {
    height: 16rem;
  }
`;

const SlideshowArrow = styled.button`
  position: absolute;
  width: 3rem;
  z-index: 1;
  background: none;
  border: 0;
  padding: 0;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(2px 4px 6px black);
  }

  &.left {
    margin-left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 992px) {
      margin-left: 0.5rem;
      width: 0.5rem;
    }
  }

  &.right {
    margin-right: 1.5rem;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 992px) {
      margin-right: 0.5rem;
      width: 0.5rem;
    }
  }

  @media (max-width: 992px) {
    img {
      height: 1rem;
    }
  }
`;

const SlideshowCounter = styled.p`
  z-index: 1;
  font-size: 1.5rem;
  margin-bottom: 0;
  color: white;
  position: absolute;
  bottom: 0.5rem;
  right: 50%;

  @media (max-width: 992px) {
    display: none;
  }
`;

export default Slideshow;
