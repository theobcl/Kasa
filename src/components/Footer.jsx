import styled from 'styled-components';
import logoWhite from '../assets/logo_white.svg';

function Footer() {
  return (
    <FooterContainer>
      <Image src={logoWhite} alt="logo kasa" />
      <Text>© 2020 Kasa. All rights reserved</Text>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 13rem;
  padding: 2rem;
`;

const Image = styled.img`
  height: 4rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0;
`;
export default Footer;
