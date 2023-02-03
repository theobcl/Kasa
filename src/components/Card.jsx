import styled from 'styled-components';

function Card({ id, image, titre }) {
  return (
    <CardStyled id={id} image={image}>
      <span>{titre}</span>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.image});
  height: 21rem;
  width: 21rem;
`;

export default Card;
