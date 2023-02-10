import styled from 'styled-components';

function Card({ id, image, titre }) {
  return (
    <CardStyled id={id} image={image}>
      <CardText>{titre}</CardText>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.image});
  background-size: cover;
  min-height: 21rem;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-end;

  @media (max-width: 992px) {
    min-height: 16rem;
    margin-bottom: 2rem;
  }
`;

const CardText = styled.span`
  padding: 1rem;
`;

export default Card;
