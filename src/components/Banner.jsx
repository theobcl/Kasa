import styled from 'styled-components';

function Banner({ image, text }) {
  return (
    <BannerContainer>
      <BannerImg src={image} alt="Bannière" />
      <BannerText>{text}</BannerText>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  height: 14rem;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 1490px) {
    height: 7rem;
  }
`;

const BannerImg = styled.img`
  border-radius: 2rem;
  height: 100%;
  object-fit: cover;
  width: 100%;

  @media (max-width: 1490px) {
    border-radius: 0.5rem;
  }
`;

const BannerText = styled.span`
  color: white;
  font-size: 3rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 1490px) {
    text-align: start;
    font-size: 1.5rem;
    transform: translate(-80%, -50%);
  }
`;

export default Banner;
