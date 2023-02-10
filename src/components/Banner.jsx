import styled from 'styled-components';

function Banner({ image, text }) {
  return (
    <BannerContainer image={image}>
      <BannerText>{text}</BannerText>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  height: 14rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.image});
  background-size: cover;
  margin-bottom: 2rem;
  position: relative;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  @media (max-width: 992px) {
    border-radius: 0.5rem;
    height: 7rem;
    justify-content: start;
    background-position: bottom;
  }
`;

const BannerText = styled.span`
  color: white;
  font-size: 3rem;
  z-index: 3;
  padding: 0 1.5rem;

  @media (max-width: 992px) {
    font-size: 1.5rem;
    width: 12rem;
  }
`;

export default Banner;
