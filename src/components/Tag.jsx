import styled from 'styled-components';

function Tag({ name }) {
  return <TagStyled>{name}</TagStyled>;
}

const TagStyled = styled.span`
  background-color: #ff6060;
  border-radius: 0.5rem;
  color: #ffffff;
  display: inline-block;
  font-size: 1rem;
  margin: auto 0.5rem auto 0;
  min-width: 115px;
  padding: 0.3rem 1rem;
  text-align: center;
`;

export default Tag;
